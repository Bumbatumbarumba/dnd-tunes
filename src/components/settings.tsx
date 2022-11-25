/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useContext, useState } from "react";
import { Accordion, AccordionSummary, AccordionDetails, IconButton, Drawer, Button, ButtonProps, styled } from "@mui/material";
import { AuthContext, CustomButton, MusicForm, TagContainer, UsernameForm } from ".";
import { DownCaret, Hamburger, RightCaret } from "../definitions";
import { auth } from "../services";
import { purple } from "@mui/material/colors";

export const Settings = () => {
    const { currentUser } = useContext(AuthContext);
    const [drawerState, setDrawerState] = useState(false);

    const toggleDrawer =
        (open: boolean) =>
            (event: React.KeyboardEvent | React.MouseEvent) => {
                if (
                    event.type === 'keydown' &&
                    ((event as React.KeyboardEvent).key === 'Tab' ||
                        (event as React.KeyboardEvent).key === 'Shift')
                ) {
                    return;
                }

                setDrawerState(open);
            };

    const DrawerHeader = styled('div')(({ theme }) => ({
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
    }));

    return (
        <>
            <IconButton onClick={toggleDrawer(true)}><Hamburger /></IconButton>
            <Drawer
                anchor="right"
                open={drawerState}
                onClose={toggleDrawer(false)}
                variant="persistent"
                PaperProps={{
                    sx: {
                        width: "30%",
                        backgroundColor: "#313131",
                    }
                }}
            >
                <div style={{ margin: "1em", display: "flex", flexDirection: "column" }}>
                    <DrawerHeader>
                        <div onClick={toggleDrawer(false)}><RightCaret /></div>
                        <CustomButton buttonText="Sign out" onClickFunction={() => { if (window.confirm("Are you sure you want to sign out?")) { auth.signOut(); } }} />
                    </DrawerHeader>
                    <div style={{ marginTop: "1em" }}>
                        <UsernameForm />
                        <TagContainer />
                        <MusicForm />
                    </div>
                </div>
            </Drawer>
        </>
    );
};