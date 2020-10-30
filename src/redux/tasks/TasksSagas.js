import {
    debounce,
    call,
    put,
    delay,
    take,
    fork,
    takeEvery,
    takeLatest,
    select,
} from 'redux-saga/effects'
import {
    restoreTaskRequest,
    updateTaskRejectedTimeRequest,
    updateTaskCancelledTimeRequest,
    updateTaskDropoffTimeRequest,
    updateTaskPickupTimeRequest,
    UPDATE_TASK_PICKUP_ADDRESS_FROM_SAVED_REQUEST,
    UPDATE_TASK_DROPOFF_ADDRESS_FROM_SAVED_REQUEST,
    getTaskNotFound,
    ADD_TASK_RELAY_REQUEST,
    addTaskRelaySuccess,
    addTaskRelayFailure
} from "./TasksActions"
import {
    ADD_TASK_REQUEST,
    addTaskSuccess,
    UPDATE_TASK_REQUEST,
    updateTaskSuccess,
    RESTORE_TASK_REQUEST,
    restoreTaskSuccess,
    DELETE_TASK_REQUEST,
    deleteTaskSuccess,
    GET_TASKS_REQUEST,
    getAllTasksSuccess,
    GET_MY_TASKS_REQUEST,
    getAllMyTasksSuccess,
    GET_TASK_REQUEST,
    getTaskSuccess,
    updateTaskRequesterContactSuccess,
    updateTaskPickupAddressSuccess,
    updateTaskDropoffAddressSuccess,
    updateTaskPickupTimeSuccess,
    updateTaskDropoffTimeSuccess,
    updateTaskAssignedRiderSuccess,
    updateTaskPrioritySuccess,
    updateTaskCancelledTimeSuccess,
    updateTaskRejectedTimeSuccess,
    getAllTasksNotFound,
    getAllTasksFailure,
    getAllMyTasksNotFound,
    getAllMyTasksFailure,
    updateTaskPatchSuccess,

    UPDATE_TASK_REQUESTER_CONTACT_REQUEST,
    UPDATE_TASK_DROPOFF_ADDRESS_REQUEST,
    UPDATE_TASK_PICKUP_ADDRESS_REQUEST,
    UPDATE_TASK_PICKUP_TIME_REQUEST,
    UPDATE_TASK_DROPOFF_TIME_REQUEST,
    UPDATE_TASK_CANCELLED_TIME_REQUEST,
    UPDATE_TASK_REJECTED_TIME_REQUEST,
    UPDATE_TASK_PRIORITY_REQUEST,


    UPDATE_TASK_PATCH_REQUEST,
    REFRESH_TASKS_REQUEST,
    REFRESH_MY_TASKS_REQUEST,
    UPDATE_TASK_PATCH_FROM_SERVER,
    addTaskFailure,
    deleteTaskFailure,
    restoreTaskFailure,
    updateTaskFailure,
    updateTaskRequesterContactFailure,
    updateTaskPickupAddressFailure,
    updateTaskDropoffAddressFailure,
    updateTaskPickupTimeFailure,
    updateTaskDropoffTimeFailure,
    updateTaskAssignedRiderFailure,
    updateTaskPriorityFailure,
    updateTaskPatchFailure,
    updateTaskCancelledTimeFailure,
    updateTaskRejectedTimeFailure,
    getTaskFailure
} from "./TasksActions"
import {updateTaskPatchRequest as updateTaskPatchAction} from "./TasksActions"


import {getApiControl, getWhoami} from "../Api"
import {subscribeToUUID, unsubscribeFromUUID} from "../sockets/SocketActions";
import React from "react";
import {displayInfoNotification} from "../notifications/NotificationsActions";
import {findExistingTask, findExistingTaskParent} from "../../utilities";
import {addTaskAssignedCoordinatorRequest} from "../taskAssignees/TaskAssigneesActions";

function* postNewTask(action) {
    try {
        const api = yield select(getApiControl);
        const result = yield call([api, api.tasks.createTask], action.data);
        const task = {...action.data, "uuid": result.uuid, parent_id: result.parent_id};
        yield put(addTaskAssignedCoordinatorRequest({taskUUID: task.uuid, payload: {task_uuid: task.uuid, user_uuid: result.author_uuid}}))
        const t0 = performance.now();
        yield put(addTaskSuccess(task));
        console.log(performance.now() - t0)
        yield put(subscribeToUUID(task.uuid))
    } catch (error) {
        yield put(addTaskFailure(error))
    }
}

export function* watchPostNewTask() {
    yield takeEvery(ADD_TASK_REQUEST, postNewTask)
}

function* postNewTaskRelay(action) {
    try {
        const api = yield select(getApiControl);
        const whoami = yield select(getWhoami);
        const result = yield call([api, api.tasks.createTask], {...action.data});
        const task = {...action.data, author_uuid: whoami.uuid, "uuid": result.uuid};
        yield put(addTaskAssignedCoordinatorRequest({taskUUID: task.uuid, payload: {task_uuid: task.uuid, user_uuid: task.author_uuid}}))
        yield put(addTaskRelaySuccess(task));
        yield put(subscribeToUUID(task.uuid))
    } catch (error) {
        yield put(addTaskRelayFailure(error))
    }
}

export function* watchPostNewTaskRelay() {
    yield takeEvery(ADD_TASK_RELAY_REQUEST, postNewTaskRelay)
}


function* deleteTask(action) {
    try {
        const restoreAction = () => restoreTaskRequest(action.data);
        const api = yield select(getApiControl);
        yield call([api, api.tasks.deleteTask], action.data);
        yield put(deleteTaskSuccess(action.data))
        yield put(unsubscribeFromUUID(action.data))
        yield put(displayInfoNotification("Task deleted", restoreAction))
    } catch (error) {
        yield put(deleteTaskFailure(error))
    }
}

export function* watchDeleteTask() {
    yield takeEvery(DELETE_TASK_REQUEST, deleteTask)
}

function* restoreTask(action) {
    try {
        const api = yield select(getApiControl);
        yield call([api, api.tasks.restoreTask], action.data);
        const result = yield call([api, api.tasks.getTask], action.data);
        yield put(restoreTaskSuccess(result))
        yield put(subscribeToUUID(result.uuid))
    } catch (error) {
        yield put(restoreTaskFailure(error))
    }
}

export function* watchRestoreTask() {
    yield takeEvery(RESTORE_TASK_REQUEST, restoreTask)
}

function* updateTask(action) {
    try {
        const api = yield select(getApiControl);
        yield call([api, api.tasks.updateTask], action.data.taskUUID, action.data.payload);
        yield put(updateTaskSuccess(action.data))
    } catch (error) {
        yield put(updateTaskFailure(error))
    }
}

function* updateTaskRequesterContact(action) {
    try {
        const api = yield select(getApiControl);
        yield call([api, api.tasks.updateTask], action.data.taskUUID, action.data.payload);
        yield put(updateTaskRequesterContactSuccess(action.data))
    } catch (error) {
        yield put(updateTaskRequesterContactFailure(error))
    }
}

function* updateTaskPickupAddress(action) {
    try {
        const api = yield select(getApiControl);
        yield call([api, api.tasks.updateTask], action.data.taskUUID, action.data.payload);
        yield put(updateTaskPickupAddressSuccess(action.data))
    } catch (error) {
        yield put(updateTaskPickupAddressFailure(error))
    }
}

function* updateTaskPickupAddressFromSaved(action) {
    try {
        const api = yield select(getApiControl);
        const presetDetails = yield call([api, api.locations.getLocation], action.data.payload);
        const pickup_address = presetDetails.address;
        yield call([api, api.tasks.updateTask], action.data.taskUUID, { pickup_address });
        yield put(updateTaskPickupAddressSuccess({taskUUID: action.data.taskUUID, payload: {pickup_address}}))
    } catch (error) {
        yield put(updateTaskPickupAddressFailure(error))
    }
}

function* updateTaskDropoffAddress(action) {
    try {
        const api = yield select(getApiControl);
        yield call([api, api.tasks.updateTask], action.data.taskUUID, action.data.payload);
        yield put(updateTaskDropoffAddressSuccess(action.data))
    } catch (error) {
        yield put(updateTaskDropoffAddressFailure(error))
    }
}

function* updateTaskDropoffAddressFromSaved(action) {
    try {
        const api = yield select(getApiControl);
        const presetDetails = yield call([api, api.locations.getLocation], action.data.payload);
        const dropoff_address = presetDetails.address;
        yield call([api, api.tasks.updateTask], action.data.taskUUID, { dropoff_address });
        yield put(updateTaskDropoffAddressSuccess({taskUUID: action.data.taskUUID, payload: {dropoff_address}}))
    } catch (error) {
        yield put(updateTaskDropoffAddressFailure(error))
    }
}

function* updateTaskPickupTime(action) {
    try {
        const currentTasks = yield select((state) => state.tasks.tasks);
        const task = yield findExistingTask(currentTasks, action.data.taskUUID)
        const currentValue = task ? task.time_picked_up : null;
        const restoreAction = () => updateTaskPickupTimeRequest({
            taskUUID: action.data.taskUUID,
            payload: {time_picked_up: null}
        });
        const api = yield select(getApiControl);
        yield call([api, api.tasks.updateTask], action.data.taskUUID, action.data.payload);
        yield put(updateTaskPickupTimeSuccess(action.data))
        if (currentValue === null)
            // only notify if marking rejected for the first time
            yield put(displayInfoNotification("Task marked picked up", restoreAction))
    } catch (error) {
        yield put(updateTaskPickupTimeFailure(error))
    }
}

function* updateTaskDropoffTime(action) {
    try {
        const currentTasks = yield select((state) => state.tasks.tasks);
        const task = yield findExistingTask(currentTasks, action.data.taskUUID)
        const currentValue = task ? task.time_dropped_off : null;
        const restoreAction = () => updateTaskDropoffTimeRequest({
            taskUUID: action.data.taskUUID,
            payload: {time_dropped_off: null}
        });
        const api = yield select(getApiControl);
        yield call([api, api.tasks.updateTask], action.data.taskUUID, action.data.payload);
        yield put(updateTaskDropoffTimeSuccess(action.data))
        if (currentValue === null)
            // only notify if marking rejected for the first time
            yield put(displayInfoNotification("Task marked dropped off", restoreAction))
    } catch (error) {
        yield put(updateTaskDropoffTimeFailure(error))
    }
}

function* updateTaskPriority(action) {
    try {
        const api = yield select(getApiControl);
        yield call([api, api.tasks.updateTask], action.data.taskUUID, action.data.payload);
        yield put(updateTaskPrioritySuccess(action.data))
    } catch (error) {
        yield put(updateTaskPriorityFailure(error))
    }
}

function* updateTaskPatch(action) {
    try {
        const api = yield select(getApiControl);
        yield call([api, api.tasks.updateTask], action.data.taskUUID, action.data.payload);
        yield put(updateTaskPatchSuccess(action.data))
    } catch (error) {
        yield put(updateTaskPatchFailure(error))
    }
}

function* updateTaskPatchFromServer(action) {
    try {
        const api = yield select(getApiControl);
        const result = yield call([api, api.tasks.getTaskAssignedRiders], action.data.taskUUID);
        const lastResult = result.slice(-1)[0]
        const payload = lastResult ? {patch: lastResult.patch, patch_id: lastResult.patch_id} : {
            patch: "",
            patch_id: null
        };
        yield put(updateTaskPatchAction({taskUUID: action.data.taskUUID, payload}))
    } catch (error) {
        yield put(updateTaskPatchFailure(error))
    }
}

function* updateTaskCancelledTime(action) {
    try {
        // get the current task rejected_time value to make sure it isn't already marked
        const currentTasks = yield select((state) => state.tasks.tasks);
        const task = yield findExistingTask(currentTasks, action.data.taskUUID)
        const currentValue = task ? task.time_cancelled : null;
        const restoreAction = () => updateTaskCancelledTimeRequest({
            taskUUID: action.data.taskUUID,
            payload: {time_cancelled: null}
        });
        const api = yield select(getApiControl);
        yield call([api, api.tasks.updateTask], action.data.taskUUID, action.data.payload);
        yield put(updateTaskCancelledTimeSuccess(action.data))
        if (currentValue === null)
            // only notify if marking rejected for the first time
            yield put(displayInfoNotification("Task marked cancelled", restoreAction))
    } catch (error) {
        yield put(updateTaskCancelledTimeFailure(error))
    }
}

function* updateTaskRejectedTime(action) {
    try {
        // get the current task rejected_time value to make sure it isn't already marked
        const currentTasks = yield select((state) => state.tasks.tasks);
        const task = yield findExistingTask(currentTasks, action.data.taskUUID)
        const currentValue = task ? task.time_rejected : null;
        const restoreAction = () => updateTaskRejectedTimeRequest({
            taskUUID: action.data.taskUUID,
            payload: {time_rejected: null}
        });
        const api = yield select(getApiControl);
        yield call([api, api.tasks.updateTask], action.data.taskUUID, action.data.payload);
        yield put(updateTaskRejectedTimeSuccess(action.data))
        if (currentValue === null)
            // only notify if marking rejected for the first time
            yield put(displayInfoNotification("Task marked rejected", restoreAction))
    } catch (error) {
        yield put(updateTaskRejectedTimeFailure(error))
    }
}

export function* watchUpdateTask() {
    yield takeEvery(UPDATE_TASK_REQUEST, updateTask)
}

export function* watchUpdateTaskRequesterContact() {
    yield debounce(500, UPDATE_TASK_REQUESTER_CONTACT_REQUEST, updateTaskRequesterContact)
}

export function* watchUpdateTaskPickupAddress() {
    yield debounce(500, UPDATE_TASK_PICKUP_ADDRESS_REQUEST, updateTaskPickupAddress)
}

export function* watchUpdateTaskPickupAddressFromSaved() {
    yield takeEvery(UPDATE_TASK_PICKUP_ADDRESS_FROM_SAVED_REQUEST, updateTaskPickupAddressFromSaved)
}

export function* watchUpdateTaskDropoffAddress() {
    yield debounce(500, UPDATE_TASK_DROPOFF_ADDRESS_REQUEST, updateTaskDropoffAddress)
}

export function* watchUpdateTaskDropoffAddressFromSaved() {
    yield takeEvery(UPDATE_TASK_DROPOFF_ADDRESS_FROM_SAVED_REQUEST, updateTaskDropoffAddressFromSaved)
}

export function* watchUpdateTaskPickupTime() {
    yield debounce(300, UPDATE_TASK_PICKUP_TIME_REQUEST, updateTaskPickupTime)
}

export function* watchUpdateTaskDropoffTime() {
    yield debounce(300, UPDATE_TASK_DROPOFF_TIME_REQUEST, updateTaskDropoffTime)
}

export function* watchUpdateTaskPriority() {
    yield debounce(500, UPDATE_TASK_PRIORITY_REQUEST, updateTaskPriority)
}

export function* watchUpdateTaskPatch() {
    yield debounce(300, UPDATE_TASK_PATCH_REQUEST, updateTaskPatch)
}

export function* watchUpdateTaskPatchFromServer() {
    yield debounce(300, UPDATE_TASK_PATCH_FROM_SERVER, updateTaskPatchFromServer)
}

export function* watchUpdateTaskCancelledTime() {
    yield debounce(300, UPDATE_TASK_CANCELLED_TIME_REQUEST, updateTaskCancelledTime)
}

export function* watchUpdateTaskRejectedTime() {
    yield debounce(300, UPDATE_TASK_REJECTED_TIME_REQUEST, updateTaskRejectedTime)
}

function* getTask(action) {
    try {
        const currentTasks = yield select((state) => state.tasks.tasks);
        let task = findExistingTask(currentTasks, action.data)
        if (task) {
            // if it's already in the list of tasks, no need to get it
            yield put(getTaskSuccess(task))
        } else {
            // not in the list so call the api
            const api = yield select(getApiControl);
            const result = yield call([api, api.tasks.getTask], action.data);
            yield put(getTaskSuccess(result))
        }
    } catch (error) {
        if (error.name === "HttpError") {
            if (error.response.status === 404) {
                yield put(getTaskNotFound(error))
            }
        }
        yield put(getTaskFailure(error))
    }
}

export function* watchGetTask() {
    yield takeLatest(GET_TASK_REQUEST, getTask)
}

function* getTasks(action) {
    try {
        const api = yield select(getApiControl);
        // get all the different tasks for different status and combine them
        const tasksNew = yield call([api, api.tasks.getTasks], action.data, 0, action.role, "new");
        const tasksActive = yield call([api, api.tasks.getTasks], action.data, 0, action.role, "active");
        const tasksPickedUp = yield call([api, api.tasks.getTasks], action.data, 0, action.role, "picked_up");
        const tasksDelivered = yield call([api, api.tasks.getTasks], action.data, action.page, action.role, "delivered");
        const tasksCancelled = yield call([api, api.tasks.getTasks], action.data, action.page, action.role, "cancelled");
        const tasksRejected = yield call([api, api.tasks.getTasks], action.data, action.page, action.role, "rejected");
        yield put(getAllTasksSuccess({tasksNew, tasksActive, tasksPickedUp, tasksDelivered, tasksCancelled, tasksRejected}))
    } catch (error) {
        throw error;
        if (error.name === "HttpError") {
            if (error.response.status === 404) {
                yield put(getAllTasksNotFound(error))
            }
        }
        yield put(getAllTasksFailure(error))
    }
}

export function* watchGetTasks() {
    yield takeLatest(GET_TASKS_REQUEST, getTasks)
}

function* refreshTasks(action) {
    try {
        const api = yield select(getApiControl);
        let result = yield call([api, api.tasks.getTasks], action.data);
        yield put(getAllTasksSuccess(result))
    } catch (error) {
        if (error.name === "HttpError") {
            if (error.response.status === 404) {
                yield put(getAllTasksNotFound(error))
            }
        }
        yield put(getAllTasksFailure(error))
    }
}

export function* watchRefreshTasks() {
    yield takeLatest(REFRESH_TASKS_REQUEST, refreshTasks)
}

function* getMyTasks() {
    try {
        const api = yield select(getApiControl);
        const whoami = yield call([api, api.users.whoami]);
        const result = yield call([api, api.users.getAssignedTasks], whoami.uuid);
        yield put(getAllMyTasksSuccess(result))
    } catch (error) {
        if (error.name === "HttpError") {
            if (error.response.status === 404) {
                yield put(getAllMyTasksNotFound(error))
            }
        }
        yield put(getAllMyTasksFailure(error))
    }
}

export function* watchGetMyTasks() {
    yield takeLatest(GET_MY_TASKS_REQUEST, getMyTasks)
}

export function* watchRefreshMyTasks() {
    yield takeLatest(REFRESH_MY_TASKS_REQUEST, getMyTasks)
}
