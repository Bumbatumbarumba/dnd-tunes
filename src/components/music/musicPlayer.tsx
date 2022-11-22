import React from "react";
import Drawer from '@mui/material/Drawer';

type Anchor = 'left' | 'right';

export const MusicPlayer = () => {
    const [state, setState] = React.useState({
        left: false,
        right: false,
    });

    const toggleDrawer =
        (anchor: Anchor, open: boolean) =>
            (event: React.KeyboardEvent | React.MouseEvent) => {
                if (
                    event.type === 'keydown' &&
                    ((event as React.KeyboardEvent).key === 'Tab' ||
                        (event as React.KeyboardEvent).key === 'Shift')
                ) {
                    return;
                }

                setState({ ...state, [anchor]: open });
            };


    return (
        <>
            <button onClick={toggleDrawer("right", true)}>Open drawer</button>
            <Drawer
                anchor="right"
                open={state["right"]}
                onClose={toggleDrawer("right", false)}
                variant="persistent"
                PaperProps={{
                    sx: {
                        height: "10em",
                        "background-color": "#052da6",
                        "margin-top": "2em"
                    }
                }}
            >
                <div style={{ margin: "1em" }}>
                    <span onClick={toggleDrawer("right", false)}>X</span>
                    <h1>test</h1>
                </div>
            </Drawer>
        </>
    );
};