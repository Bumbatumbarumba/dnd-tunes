import { List } from "@mui/material";
import React, { useState } from "react";
import { MusicListItem, SearchBar } from "..";
import { MusicSource, Song } from "../../definitions";


export const MusicList = () => {
    // ACTUALLY, probably wanna put into redux
    //      --> PROBABLY WANT TO PUT 97% OF STUFF INTO REDUX, then locally in useState for searching n' shit
    // MOVE THIS TO PARENT AND THEN PASS IT INTO PROP AS WELL INSTEAD
    const [searchQuery, setSearchQuery] = useState("");
    const [songList, setSongList] = useState<Song[]>([{
        docId: "whatever",
        isPublic: false,
        songName: "Skyrim - Music & Ambience - Day",
        source: MusicSource.youtube,
        tags: ["Nature", "Calm", "Day time", "Ambient", "Orchestra"],
        url: "https://www.youtube.com/watch?v=hBkcwy-iWt8&list=PLA1CaQYSUvS7kviwp22PuaCvScam6iEUt",
        userId: "AFvtENcpQ4UM8NImTOTeF9byTeE2"
    }, {
        docId: "whatever",
        isPublic: false,
        songName: "Skyrim - Music & Ambience - Day",
        source: MusicSource.youtube,
        tags: ["Nature", "Calm", "Day time", "Ambient", "Orchestra"],
        url: "https://www.youtube.com/watch?v=hBkcwy-iWt8&list=PLA1CaQYSUvS7kviwp22PuaCvScam6iEUt",
        userId: "AFvtENcpQ4UM8NImTOTeF9byTeE2"
    }, {
        docId: "whatever",
        isPublic: false,
        songName: "Skyrim - Music & Ambience - Day",
        source: MusicSource.youtube,
        tags: ["Nature", "Calm", "Day time", "Ambient", "Orchestra"],
        url: "https://www.youtube.com/watch?v=hBkcwy-iWt8&list=PLA1CaQYSUvS7kviwp22PuaCvScam6iEUt",
        userId: "AFvtENcpQ4UM8NImTOTeF9byTeE2"
    }, {
        docId: "whatever",
        isPublic: false,
        songName: "Skyrim - Music & Ambience - Day",
        source: MusicSource.youtube,
        tags: ["Nature", "Calm", "Day time", "Ambient", "Orchestra"],
        url: "https://www.youtube.com/watch?v=hBkcwy-iWt8&list=PLA1CaQYSUvS7kviwp22PuaCvScam6iEUt",
        userId: "AFvtENcpQ4UM8NImTOTeF9byTeE2"
    }, {
        docId: "whatever",
        isPublic: false,
        songName: "Skyrim - Music & Ambience - Day",
        source: MusicSource.youtube,
        tags: ["Nature", "Calm", "Day time", "Ambient", "Orchestra"],
        url: "https://www.youtube.com/watch?v=hBkcwy-iWt8&list=PLA1CaQYSUvS7kviwp22PuaCvScam6iEUt",
        userId: "AFvtENcpQ4UM8NImTOTeF9byTeE2"
    }, {
        docId: "whatever",
        isPublic: false,
        songName: "Skyrim - Music & Ambience - Day",
        source: MusicSource.youtube,
        tags: ["Nature", "Calm", "Day time", "Ambient", "Orchestra"],
        url: "https://www.youtube.com/watch?v=hBkcwy-iWt8&list=PLA1CaQYSUvS7kviwp22PuaCvScam6iEUt",
        userId: "AFvtENcpQ4UM8NImTOTeF9byTeE2"
    }, {
        docId: "whatever",
        isPublic: false,
        songName: "Skyrim - Music & Ambience - Day",
        source: MusicSource.youtube,
        tags: ["Nature", "Calm", "Day time", "Ambient", "Orchestra"],
        url: "https://www.youtube.com/watch?v=hBkcwy-iWt8&list=PLA1CaQYSUvS7kviwp22PuaCvScam6iEUt",
        userId: "AFvtENcpQ4UM8NImTOTeF9byTeE2"
    }, {
        docId: "whatever",
        isPublic: false,
        songName: "Skyrim - Music & Ambience - Day",
        source: MusicSource.youtube,
        tags: ["Nature", "Calm", "Day time", "Ambient", "Orchestra"],
        url: "https://www.youtube.com/watch?v=hBkcwy-iWt8&list=PLA1CaQYSUvS7kviwp22PuaCvScam6iEUt",
        userId: "AFvtENcpQ4UM8NImTOTeF9byTeE2"
    }, {
        docId: "whatever",
        isPublic: false,
        songName: "Skyrim - Music & Ambience - Day",
        source: MusicSource.youtube,
        tags: ["Nature", "Calm", "Day time", "Ambient", "Orchestra"],
        url: "https://www.youtube.com/watch?v=hBkcwy-iWt8&list=PLA1CaQYSUvS7kviwp22PuaCvScam6iEUt",
        userId: "AFvtENcpQ4UM8NImTOTeF9byTeE2"
    }, {
        docId: "whatever",
        isPublic: false,
        songName: "Skyrim - Music & Ambience - Day",
        source: MusicSource.youtube,
        tags: ["Nature", "Calm", "Day time", "Ambient", "Orchestra"],
        url: "https://www.youtube.com/watch?v=hBkcwy-iWt8&list=PLA1CaQYSUvS7kviwp22PuaCvScam6iEUt",
        userId: "AFvtENcpQ4UM8NImTOTeF9byTeE2"
    }, {
        docId: "whatever",
        isPublic: false,
        songName: "Skyrim - Music & Ambience - Day",
        source: MusicSource.youtube,
        tags: ["Nature", "Calm", "Day time", "Ambient", "Orchestra"],
        url: "https://www.youtube.com/watch?v=hBkcwy-iWt8&list=PLA1CaQYSUvS7kviwp22PuaCvScam6iEUt",
        userId: "AFvtENcpQ4UM8NImTOTeF9byTeE2"
    }, {
        docId: "whatever",
        isPublic: false,
        songName: "Skyrim - Music & Ambience - Day",
        source: MusicSource.youtube,
        tags: ["Nature", "Calm", "Day time", "Ambient", "Orchestra"],
        url: "https://www.youtube.com/watch?v=hBkcwy-iWt8&list=PLA1CaQYSUvS7kviwp22PuaCvScam6iEUt",
        userId: "AFvtENcpQ4UM8NImTOTeF9byTeE2"
    }, {
        docId: "whatever",
        isPublic: false,
        songName: "Skyrim - Music & Ambience - Day",
        source: MusicSource.youtube,
        tags: ["Nature", "Calm", "Day time", "Ambient", "Orchestra"],
        url: "https://www.youtube.com/watch?v=hBkcwy-iWt8&list=PLA1CaQYSUvS7kviwp22PuaCvScam6iEUt",
        userId: "AFvtENcpQ4UM8NImTOTeF9byTeE2"
    }, {
        docId: "whatever",
        isPublic: false,
        songName: "Skyrim - Music & Ambience - Day",
        source: MusicSource.youtube,
        tags: ["Nature", "Calm", "Day time", "Ambient", "Orchestra"],
        url: "https://www.youtube.com/watch?v=hBkcwy-iWt8&list=PLA1CaQYSUvS7kviwp22PuaCvScam6iEUt",
        userId: "AFvtENcpQ4UM8NImTOTeF9byTeE2"
    },]);

    return (
        <List sx={{
            width: '100%',
            maxWidth: 360,
        }}>
            {songList.map((song, index) => <MusicListItem key={index} song={song} />)}
        </List>
    );
};