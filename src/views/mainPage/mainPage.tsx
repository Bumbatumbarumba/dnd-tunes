import React from "react";
import { MusicList, SearchBar } from "../../components";

export const MainPage = () => {
    return (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <SearchBar />
            <MusicList />
        </div>
    );
};