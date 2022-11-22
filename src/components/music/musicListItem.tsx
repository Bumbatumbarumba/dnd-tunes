import { IconButton } from "@mui/material";
import React from "react";
import { PlayIcon } from "../../definitions";

export const MusicListItem = (props: { songInfo: { [key: string]: any; }; }) => {
    return (
        <div>
            <h3>song title</h3>
            <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                <PlayIcon />
            </IconButton>
            <p>list tags here somehow</p>
        </div>
    );
};