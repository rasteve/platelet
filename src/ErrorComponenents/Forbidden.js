import React from "react";
import {PaddedPaper} from "../css/common";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

export default function Forbidden(props) {
    return (
        <PaddedPaper>
            <Grid container spacing={1} direction={"column"} alignItems={"center"} justify={"center"}>
                <Grid item>
                    <Typography style={{fontSize: "20px"}}>
                        You don't have permission to view this page.
                    </Typography>
                </Grid>
                <Grid item>
                    {props.children}
                </Grid>
            </Grid>
        </PaddedPaper>
    )
}
