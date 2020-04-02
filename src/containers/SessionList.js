import React, {useEffect} from 'react';
import '../App.css';
import 'typeface-roboto'
import {StyledCard} from '../css/common';
import {AddCircleButton} from '../components/Buttons';
import CardContent from '@material-ui/core/CardContent';
import Grid from "@material-ui/core/Grid";
import {Link} from "react-router-dom";
import Moment from "react-moment";
import {addSession, getAllSessions} from "../redux/sessions/Actions";
import {useDispatch, useSelector} from "react-redux"
import {encodeUUID} from "../utilities";
import {createLoadingSelector, createPostingSelector} from "../redux/selectors";

import CardsGridSkeleton from "../loadingComponents/CardsGridSkeleton";
import {setMenuIndex} from "../redux/Actions";
import CardItem from "../components/CardItem";

function SessionCard(props) {
    return (
        <div key={props.session.uuid}>
            <StyledCard style={{height: "100px"}}>
                <CardContent>
                    <Grid containerspacing={1} direction={"column"}>
                        <CardItem label={"Started"}><Moment format={"llll"}>{props.session.timestamp}</Moment></CardItem>
                        <CardItem label={"Tasks"}>{props.session.task_count ? props.session.task_count : "0"}</CardItem>
                    </Grid>
                </CardContent>
            </StyledCard>
        </div>
    )
}

function SessionList(props) {
    const dispatch = useDispatch();
    const loadingSelector = createLoadingSelector(["GET_SESSIONS"]);
    const isFetching = useSelector(state => loadingSelector(state));
    const postingSelector = createPostingSelector(["ADD_SESSION"]);
    const isPosting = useSelector(state => postingSelector(state));
    const sessions = useSelector(state => state.sessions);
    const whoami = useSelector(state => state.whoami);

    function updateSessionsList() {
        if (props.user_uuid || whoami.uuid)
            dispatch(getAllSessions(props.user_uuid ? props.user_uuid : whoami.uuid))
    }

    useEffect(updateSessionsList, [whoami]);
    useEffect(() => {
        dispatch(setMenuIndex(2))
    }, []);


    let emptySession = {
        user_uuid: whoami.uuid,
        timestamp: new Date().toISOString(),
    };
    const circleAdd =
        <AddCircleButton disabled={isPosting} onClick={
            () => {
                let date = new Date();
                let newSession = {...emptySession};
                newSession.user_uuid = whoami.uuid;
                newSession.timestamp = date.toISOString();
                dispatch(addSession(newSession));

            }
        }/>;

    if (isFetching) {
        return (
            <CardsGridSkeleton/>
        )
    } else {
        return (
            <Grid container spacing={1} direction={"row"} justify={"flex-start"} alignItems={"center"}>
                <Grid item>
                    {circleAdd}
                </Grid>
                <Grid item>
                    <Grid container
                          spacing={3}
                          direction={"row"}
                          justify={"flex-start"}
                          alignItems={"center"}
                    >
                        {sessions.map((session) => (
                            <Grid item key={session.uuid}>
                                <Link to={"/session/" + encodeUUID(session.uuid)} style={{textDecoration: 'none'}}>
                                    <SessionCard session={session}/>
                                </Link>
                            </Grid>
                        ))
                        }
                    </Grid>
                </Grid>
            </Grid>
        )
    }
}

export default SessionList;
