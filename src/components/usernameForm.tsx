import React, { useContext, useEffect, useState } from "react";
import { Accordion, AccordionDetails, AccordionSummary, Button, TextField } from "@mui/material";
import { FirestoreService, isNullOrEmpty, SessionStorageService } from "../services";
import { AuthContext } from "./auth";
import { BlackCircleCheck, DownCaret, GreenCircleCheck, RedCross } from "../definitions";

export const UsernameForm = () => {
    const { currentUser } = useContext(AuthContext);
    const [username, setUsername] = useState(SessionStorageService.getUserName() || "");
    const [usernameStatus, setUsernameStatus] = useState(0); // -1 == fail, 0 == neutral, 1 == success
    const [isExpandedUsername, setIsExpandedUsername] = useState(false);

    useEffect(() => {
        const getUsername = async () => {
            if (isNullOrEmpty(SessionStorageService.getUserName() && !isNullOrEmpty(currentUser))) {
                const result = await FirestoreService.getUsername(currentUser.uid);
                if (result.success) {
                    const { username } = result.data!;
                    setUsername(username);
                    SessionStorageService.saveUserName(username);
                }
            }
        };

        getUsername();
    }, [currentUser, username]);

    const setOrUpdateUsername = async () => {
        const result = await FirestoreService.setUsername(currentUser.uid, username);
        setUsernameStatus(result.success ? 1 : -1);
    };

    return (
        <Accordion disableGutters={true}>
            <AccordionSummary expandIcon={<DownCaret />}>
                Username
            </AccordionSummary >
            <AccordionDetails>
                <TextField id="outlined-basic"
                    label="Username"
                    placeholder={username || ""}
                    variant="filled"
                    onChange={(event) => { setUsername(event.target.value); setUsernameStatus(0); }}
                    inputProps={{ maxLength: 20 }} />
                <Button variant="contained" onClick={setOrUpdateUsername}>Update</Button>
                {usernameStatus === 0 ? <BlackCircleCheck /> : usernameStatus === 1 ? <GreenCircleCheck /> : <RedCross />}
            </AccordionDetails>
        </Accordion>
    );
};