import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext, MusicList, SearchBar } from "../../components";


export const MyPage = () => {
    const { currentUser } = useContext(AuthContext);

    if (!currentUser) {
        return <Navigate replace to="/" />;
    }

    return (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <SearchBar />
            <MusicList />
        </div>
    );
};