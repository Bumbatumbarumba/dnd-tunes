import { Accordion, AccordionSummary, AccordionDetails, TextField, FormControlLabel, Checkbox, Button } from "@mui/material";
import React, { useState } from "react";
import { TagForm, TagList } from "..";
import { DownCaret, UpCaret } from "../../definitions";

/**
 * @returns component that makes up the tags drawer to add new tags and view existing ones
 */
export const TagContainer = () => {
    return (
        <>
            <Accordion disableGutters={true}>
                <AccordionSummary expandIcon={<DownCaret />}>
                    Tags
                </AccordionSummary >
                <AccordionDetails>
                    <TagForm />
                    {/* <TagList /> */}
                </AccordionDetails>
            </Accordion>
        </>
    );
};