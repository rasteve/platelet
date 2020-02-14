import React from 'react';
import 'typeface-roboto'
import Home from '../containers/Home'
import '../index.css';
import SessionsList from '../containers/SessionList';
import UserProfile from '../containers/UserProfile'
import {BrowserRouter as Router, Route, Switch, useLocation, useHistory, useParams} from "react-router-dom";
import SessionDetail from "../containers/SessionDetail";
import UsersTasks from "../containers/UsersTasks";
import TaskModal from "./TaskModal";
import VehicleList from "../containers/VehiclesList";
import VehicleDetail from "../containers/VehicleDetail";

export default function Main(_props) {
    let location = useLocation();

    let background = location.state && location.state.background;
    return (
        <main>
            <Switch location={background || location}>
                >
                <Route exact path='/' component={Home}/>
                <Route path='/sessions'
                       render={(props) => <SessionsList {...props} apiControl={_props.apiControl}/>}
                />
                <Route path='/profile'
                       render={(props) => <UserProfile {...props} apiControl={_props.apiControl}/>}
                />
                <Route path='/vehicles'
                       render={(props) => <VehicleList {...props} apiControl={_props.apiControl}/>}
                />
                <Route path='/vehicle/:vehicle_id'
                       render={(props) => <VehicleDetail {...props} apiControl={_props.apiControl}/>}
                />
                <Route path='/mytasks'
                       render={(props) => <UsersTasks {...props} apiControl={_props.apiControl}/>}
                />
                <Route path='/session/:session_uuid'
                       render={(props) => <SessionDetail {...props} apiControl={_props.apiControl}/>}
                />
                <Route path="/session/:session_id/task/:task_id"
                       render={(props) => <TaskModal {...props} modal={true} apiControl={_props.apiControl}/>}
                   />

            </Switch>
            {background && <Route path="/session/:session_id/task/:task_id"
                                  render={(props) => <TaskModal {...props} modal={true} fullscreen={location.state.fullscreen} view={location.state.view} apiControl={_props.apiControl}/>}
            />}
        </main>
    )
}
