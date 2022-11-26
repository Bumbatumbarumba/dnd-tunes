import { Accordion, AccordionDetails, AccordionSummary, Button, Checkbox, FormControlLabel, TextField } from "@mui/material";
import React, { useState } from "react";
import { DownCaret, UpCaret } from "../../definitions";
import { isNullOrEmpty } from "../../services";
import { CustomButton } from "../customButton";


export const MusicForm = () => {
    const [songName, setSongName] = useState("");
    const [songUrl, setSongUrl] = useState("");
    // get tagList from db with user context and useEffect
    // ACTUALLY, probably wanna put tagList into redux
    //      --> PROBABLY WANT TO PUT 97% OF STUFF INTO REDUX, then locally in useState for searching n' shit
    const [tagList, setTagList] = useState([{ id: "123", tagName: "tag1", isSelected: false }, { id: "456", tagName: "tag2", isSelected: false }]);

    const handleCheckChange = (index: number) => (event: React.ChangeEvent<HTMLInputElement>) => {
        const updatedList = [...tagList];
        let targetItem = { ...updatedList[index] };
        updatedList[index] = { ...targetItem, isSelected: !targetItem.isSelected };
        setTagList(updatedList);
    };

    return (
        <>
            <Accordion disableGutters={true}>
                <AccordionSummary expandIcon={<DownCaret />}>
                    Add song
                </AccordionSummary >
                <AccordionDetails>
                    <div style={{ display: "flex", flexDirection: "column" }}>
                        <TextField id="outlined-basic" label="Song name" variant="outlined" onChange={(event) => setSongName(event.target.value)} />
                        <TextField style={{ marginTop: "1em" }} id="outlined-basic" label="URL" variant="outlined" onChange={(event) => setSongUrl(event.target.value)} />
                        <div>
                            {tagList.map((tag, index) => {
                                return <FormControlLabel key={tag.id}
                                    control={
                                        <Checkbox name={tag.id} onChange={handleCheckChange(index)} />
                                    }
                                    label={tag.tagName}
                                />;
                            })}
                        </div>
                        <Button variant="contained" disabled={isNullOrEmpty(songName && songUrl)}>Add</Button>
                        {/* <CustomButton buttonText="Add" onClickFunction={() => { }} buttonIsDisabled={isNullOrEmpty(songName && songUrl)} /> */}
                    </div>
                </AccordionDetails>
            </Accordion>
        </>
    );
};