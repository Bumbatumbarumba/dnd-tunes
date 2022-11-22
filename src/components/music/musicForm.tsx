import { Accordion, AccordionDetails, AccordionSummary, Button, Checkbox, FormControlLabel, TextField } from "@mui/material";
import React, { useState } from "react";
import { DownCaret, UpCaret } from "../../definitions";


export const MusicForm = () => {
    // get tagList from db with user context and useEffect
    // ACTUALLY, probably wanna put tagList into redux
    //      --> PROBABLY WANT TO PUT 97% OF STUFF INTO REDUX, then locally in useState for searching n' shit
    const [tagList, setTagList] = useState([{ id: "123", tagName: "tag1", isSelected: false }, { id: "456", tagName: "tag2", isSelected: false }]);
    const [isExpanded, setIsExpanded] = useState(false);

    const handleCheckChange = (index: number) => (event: React.ChangeEvent<HTMLInputElement>) => {
        const updatedList = [...tagList];
        let targetItem = { ...updatedList[index] };
        updatedList[index] = { ...targetItem, isSelected: !targetItem.isSelected };
        setTagList(updatedList);
    };

    return (
        <>
            <Accordion onClick={() => setIsExpanded(!isExpanded)}>
                <AccordionSummary >
                    Add song
                    {!isExpanded
                        ? <DownCaret />
                        : <UpCaret />
                    }
                </AccordionSummary >
                <AccordionDetails>
                    <TextField id="outlined-basic" label="Song name" variant="outlined" />
                    <TextField id="outlined-basic" label="URL" variant="outlined" />
                    {tagList.map((tag, index) => {
                        return <FormControlLabel key={tag.id}
                            control={
                                <Checkbox name={tag.id} onChange={handleCheckChange(index)} />
                            }
                            label={tag.tagName}
                        />;
                    })}
                    <Button variant="contained">Add</Button>
                </AccordionDetails>
            </Accordion>
            <hr />
        </>
    );
};