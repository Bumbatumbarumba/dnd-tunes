import React from "react";
import { Avatar, IconButton, ListItem, ListItemAvatar, ListItemText, makeStyles, Stack, Typography } from "@mui/material";
import Divider from '@mui/material/Divider';
import { TagList } from "..";
import { Compass, PlayIcon, Song } from "../../definitions";

export interface MusicListItemProps {
    song: Song;
}

export const MusicListItem = (props: MusicListItemProps) => {
    const { song } = props;

    return (
        <div>
            <Stack direction={"column"} >
                <ListItem alignItems="flex-start">
                    <div style={{ display: "flex", flexDirection: "row" }}>
                        <IconButton>
                            <PlayIcon />
                        </IconButton>
                        <ListItemText
                            primary={<Typography
                                component="span"
                                color="#ecdbba">
                                {song.songName}
                            </Typography>}
                        />
                        <IconButton onClick={() => window?.open(song.url, '_blank')?.focus()}>
                            <Compass />
                        </IconButton>
                    </div>
                </ListItem>
                <TagList tagList={song.tags} />
                <Divider variant="fullWidth" component="li" sx={{ bgcolor: "#ecdbba" }} />
            </Stack>
        </div>
    );
};