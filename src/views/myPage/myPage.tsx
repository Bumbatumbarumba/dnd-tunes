import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext, MusicForm, MusicList, SearchBar } from "../../components";


export const MyPage = () => {
    const { currentUser } = useContext(AuthContext);

    if (!currentUser) {
        return <Navigate replace to="/" />;
    }

    return (
        <>
            <h3>My Page</h3>
            <MusicForm />
            <SearchBar />
            <MusicList />
        </>
    );
};