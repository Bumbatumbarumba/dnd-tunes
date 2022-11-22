import React, { useState } from "react";
import { MusicListItem, SearchBar } from "..";


export const MusicList = () => {
    // ACTUALLY, probably wanna put into redux
    //      --> PROBABLY WANT TO PUT 97% OF STUFF INTO REDUX, then locally in useState for searching n' shit
    // MOVE THIS TO PARENT AND THEN PASS IT INTO PROP AS WELL INSTEAD
    const [searchQuery, setSearchQuery] = useState("");
    const [songList, setSongList] = useState([{
        isPublic: false,
        songName: "Skyrim - Music & Ambience - Day",
        url: "https://www.youtube.com/watch?v=hBkcwy-iWt8&list=PLA1CaQYSUvS7kviwp22PuaCvScam6iEUt",
        tags: [{
            tagName: "Nature"
        },
        {
            tagName: "Calm"
        }]
    }]);

    return (
        <>
            {songList.map((song, index) => <MusicListItem key={index} songInfo={{ song }} />)}
        </>
    );
};