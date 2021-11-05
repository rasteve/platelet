import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import React from "react";
import Tooltip from "@mui/material/Tooltip";

export function EditModeToggleButton(props) {
    return props.value ? (
        <Tooltip title={props.tooltipEdit || "Cancel"}>
            <IconButton
                color="secondary"
                aria-controls="simple-menu"
                aria-haspopup="true"
                onClick={() => props.onChange(false)}
            >
                <EditIcon />
            </IconButton>
        </Tooltip>
    ) : (
        <Tooltip title={props.tooltipDefault || "Edit"}>
            <IconButton
                className={props.className}
                aria-controls="simple-menu"
                aria-haspopup="true"
                onClick={() => props.onChange(true)}
            >
                <EditIcon />
            </IconButton>
        </Tooltip>
    );
}
