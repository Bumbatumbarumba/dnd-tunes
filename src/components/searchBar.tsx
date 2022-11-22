import React from "react";
import { Paper, InputBase, IconButton } from "@mui/material";
import { SearchIcon } from "../definitions";

export const SearchBar = () => {
    return (
        <>
            <Paper
                component="form"
                sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
            >
                <InputBase
                    sx={{ ml: 1, flex: 1 }}
                    placeholder="Search song list"
                    inputProps={{ 'aria-label': 'search song list' }}
                />
                <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                    <SearchIcon />
                </IconButton>
            </Paper>
        </>
    );
};