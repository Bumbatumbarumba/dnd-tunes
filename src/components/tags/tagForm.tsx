import React, { useState } from "react";
import { Button, TextField, Box } from "@mui/material";

export const TagForm = () => {
    const [tagName, setTagName] = useState("");

    return (
        <Box
            component="form"
            sx={{
                "backgroundColor": "white"
            }}
            noValidate
            autoComplete="off"
        >
            <TextField id="outlined-basic" label="Tag name" variant="filled" onChange={(event) => setTagName(event.target.value)} />
            <Button variant="contained" disabled={!tagName}>Add</Button>
        </Box>
    );
};