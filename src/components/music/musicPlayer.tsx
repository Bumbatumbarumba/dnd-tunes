import React, { useState } from "react";
import ReactPlayer from 'react-player';
import { IconButton, Stack } from "@mui/material";
import Slider from '@mui/material/Slider';
import { MusicSource, PlayIcon, PauseIcon } from "../../definitions";
export interface MusicPlayerProps {
    url: string;
    source: MusicSource;
    stopOnUnmount?: boolean;
}


export const MusicPlayer = (props: MusicPlayerProps) => {
    const { url, source, stopOnUnmount } = props;
    const [isPlaying, setIsPlaying] = useState(false);//change to true eventually
    const [hasDuration, setHasDuration] = useState(false);
    const [duration, setDuration] = useState(100);
    const [position, setPosition] = useState(0);

    return (
        <div style={{ marginBottom: "1em", border: "solid", borderColor: "#c84b31", borderRadius: "1em" }}>
            <Stack direction={"row"} spacing={1} alignItems="center">
                <ReactPlayer onProgress={(event) => setPosition(Math.ceil(event.playedSeconds))}
                    onDuration={(event) => {
                        setHasDuration(true);
                        setDuration(event as number);
                    }}
                    onEnded={() => setIsPlaying(false)}
                    url={url}
                    playing={isPlaying}
                    stopOnUnmount={false}
                    controls={true}
                    width={0}
                    height={0} />
                <IconButton onClick={() => setIsPlaying(!isPlaying)}>
                    {!isPlaying ? <PlayIcon /> : <PauseIcon />}
                </IconButton>
                <Slider size="small"
                    disabled={true}
                    value={position}
                    min={0}
                    step={1}
                    max={duration}
                    onChange={(_, value) => setPosition(value as number)} />
            </Stack>
        </div>
    );
};