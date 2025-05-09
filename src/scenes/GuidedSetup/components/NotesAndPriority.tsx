import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import { Styles } from "../styles";
import { Stack, TextField } from "@mui/material";
import { commentVisibility } from "../../../apiConsts";
import CommentVisibilitySelector from "../../../components/CommentVisibilitySelector";
import PrioritySelect from "../../sharedTaskComponents/PrioritySelect";
import * as models from "../../../models";

type NotesAndPriorityProps = {
    onChange: (value: string) => void;
    priority: models.Priority | null;
    handleVisibilityChange: (value: models.CommentVisibility) => void;
    onChangePriority: (value: models.Priority | null) => void;
};

export const NotesAndPriority: React.FC<NotesAndPriorityProps> = ({
    onChange,
    priority,
    handleVisibilityChange,
    onChangePriority,
}) => {
    const { classes } = Styles();
    const [visibility, setVisibility] = useState(commentVisibility.everyone);
    return (
        <Stack direction="column" spacing={2} className={classes.block}>
            <Stack>
                <Typography variant="h6" gutterBottom>
                    {"Who should the notes be visible to?"}
                </Typography>
                <CommentVisibilitySelector
                    value={visibility}
                    onChange={(value) => {
                        setVisibility(value);
                        handleVisibilityChange(value);
                    }}
                />
                <TextField
                    id="notes"
                    placeholder={
                        visibility === commentVisibility.everyone
                            ? "Write a comment that will be visible to anyone..."
                            : "Write a comment only you can see..."
                    }
                    fullWidth
                    multiline
                    onChange={(e) => onChange(e.target.value)}
                    margin="normal"
                />
            </Stack>
            <Stack>
                <Typography variant="h6">What is the priority?</Typography>
                <PrioritySelect
                    priority={priority}
                    onSelect={onChangePriority}
                />
            </Stack>
        </Stack>
    );
};
