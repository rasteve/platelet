import React, {useEffect, useRef, useState} from 'react';
import '../../App.css';
import 'typeface-roboto'
import {Paper} from "@material-ui/core";
import {
    addTaskRequest,
    clearCurrentTask,
    getAllTasksRequest,
    updateTaskAssignedRiderFromSocket,
    updateTaskFromSocket,
    updateTaskRemoveAssignedRiderFromSocket,
} from '../../redux/tasks/TasksActions'
import {
    setCommentsObjectUUID,
    setViewMode,
    setNewTaskAddedView,
} from "../../redux/Actions";
import TasksGrid from "./components/TasksGrid";
import {
    decodeUUID,
    getLocalStorageViewMode,
    getTabIdentifier
} from "../../utilities";
import {useDispatch, useSelector} from "react-redux"
import {createLoadingSelector, createNotFoundSelector, createPostingSelector} from "../../redux/selectors";
import TasksGridSkeleton from "./components/TasksGridSkeleton";
import {Typography} from "@material-ui/core";
import StatsSkeleton from "./components/StatsSkeleton";
import {DashboardDetailTabs, TabPanel} from "./components/DashboardDetailTabs";
import {
    subscribeToUUID,
    subscribeToUUIDs,
    unsubscribeFromUUID,
    unsubscribeFromUUIDs
} from "../../redux/sockets/SocketActions";
import {concatTasks, getTaskUUIDs} from "./utilities";

function GetViewTitle(props) {
    switch (props.type) {
        case "kanban":
            return <Typography>Kanban</Typography>;
        case "table":
            return <Typography>Table</Typography>;
        case "stats":
            return <Typography>Statistics</Typography>;
        default:
            return <Typography></Typography>;

    }
}

function Dashboard(props) {
    const loadingSelector = createLoadingSelector(['GET_TASKS', "GET_SESSION"]);
    const dispatch = useDispatch();
    const isFetching = useSelector(state => loadingSelector(state));
    const isPostingNewTaskSelector = createPostingSelector(["ADD_TASK"]);
    const isPostingNewTask = useSelector(state => isPostingNewTaskSelector(state));
    const tasks = useSelector(state => state.tasks.tasks);
    const users = useSelector(state => state.users.users);
    const mobileView = useSelector(state => state.mobileView);
    const firstUpdateNewTask = useRef(true);
    const firstTaskSubscribeCompleted = useRef(false);
    const whoami = useSelector(state => state.whoami.user);
    const socketSubscription = useSelector(state => state.subscription);
    const [postPermission, setPostPermission] = useState(true);
    const [viewMode, setViewMode] = useState(0);

    function componentDidMount() {
        dispatch(clearCurrentTask());
        return function cleanup() {
            const taskUUIDs = getTaskUUIDs(tasks);
            dispatch(unsubscribeFromUUIDs(taskUUIDs));
        }
    }

    useEffect(componentDidMount, []);

    function getTasks() {
        if (whoami.uuid)
            dispatch(getAllTasksRequest(whoami.uuid, "", "coordinator"));
    }

    useEffect(getTasks, [whoami])

    useEffect(() => {
        if (Object.keys(socketSubscription).length === 0 && socketSubscription.constructor === Object) {
            console.log("ignore")
        } else {
            if (socketSubscription.tab_id != null && getTabIdentifier() !== socketSubscription.tab_id) {
                switch (socketSubscription.type) {
                    case "update":
                        dispatch(updateTaskFromSocket({
                            taskUUID: socketSubscription.object_uuid,
                            payload: socketSubscription.data
                        }))
                        break;
                    case "assign_user":
                        const user_uuid = socketSubscription.data.user_uuid
                        const assignedUser = users.find(u => user_uuid === u.uuid)
                        if (assignedUser) {
                            const rider = assignedUser
                            dispatch(updateTaskAssignedRiderFromSocket({
                                taskUUID: socketSubscription.object_uuid,
                                payload: {rider, user_uuid}
                            }))
                        }
                        break;
                    case "remove_assigned_user":
                        const user_uuid_remove = socketSubscription.data.user_uuid
                        dispatch(updateTaskRemoveAssignedRiderFromSocket({
                            taskUUID: socketSubscription.object_uuid,
                            payload: {user_uuid: user_uuid_remove}
                        }))
                        break;

                    default:
                        break;
                }
                console.log(socketSubscription.data)
            } else
                console.log("this came from us")
        }

    }, [socketSubscription])

    function subscribeTasks() {
        const taskUUIDs = getTaskUUIDs(tasks);
        if (taskUUIDs.length !== 0 && !firstTaskSubscribeCompleted.current) {
            firstTaskSubscribeCompleted.current = true;
            dispatch(subscribeToUUIDs(taskUUIDs))
        }
    }

    useEffect(subscribeTasks, [tasks])

    const emptyTask = {
        time_of_call: new Date().toISOString(),
        time_created: new Date().toISOString(),
        requester_contact: {
            name: "",
            telephone_number: ""
        },
        assigned_riders: [],
        assigned_coordinators: [],
        time_picked_up: null,
        time_dropped_off: null,
        time_rejected: null,
        time_cancelled: null
    };

    const addEmptyTask = () => {
        dispatch(addTaskRequest(emptyTask))
    }

    function onAddNewTask() {
        return
        // We don't want it to run the first time
        if (firstUpdateNewTask.current)
            firstUpdateNewTask.current = false;
        else if (!isPostingNewTask)
            dispatch(setNewTaskAddedView(true))
    }

    useEffect(onAddNewTask, [isPostingNewTask])

    if (isFetching || viewMode === null) {
        return viewMode === "stats" || props.statsView ? <StatsSkeleton/> : <TasksGridSkeleton count={4}/>
        // TODO: do the redirect to task thing here
        //} else if (newTaskAddedView()) {
        //    return <Redirect to={`/task/${encodeUUID("")}`}/>
    } else {
        return (
            <Paper maxHeight={"100%"} maxWidth={"100%"}>
                <DashboardDetailTabs value={viewMode} onChange={(event, newValue) => setViewMode(newValue)}>
                    <TabPanel value={0} index={0}>
                        <TasksGrid tasks={tasks}
                                   fullScreenModal={mobileView}
                                   onAddTaskClick={addEmptyTask}
                                   modalView={"edit"}
                                   hideAddButton={!postPermission}
                                   excludeColumnList={viewMode === 1 ? ["tasksNew", "tasksActive", "tasksPickedUp"] : ["tasksDelivered", "tasksCancelled", "tasksRejected"] }
                        />
                    </TabPanel>
                </DashboardDetailTabs>
            </Paper>
        )
    }
}

export default Dashboard;
