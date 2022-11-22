/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { auth, signInWithGoogle } from "../services";
import { AuthContext } from "./auth";

export const NavBar = () => {
    const { currentUser } = useContext(AuthContext);

    const showLoginButton = () => {
        return currentUser
            ? <>
                <Link to="/mypage">My Page</Link>
                <button onClick={() => { if (window.confirm("Are you sure you want to sign out?")) { auth.signOut(); } }}>sign out</button>
                <img style={{ width: "2em", height: "2em" }} src={currentUser.photoURL} alt="user's google account photo" />
            </>
            : <button onClick={signInWithGoogle}>sign in</button>;
    };
    return (
        <>
            <h1>DnD Tunes</h1>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <div>
                {showLoginButton()}
            </div>
        </>
    );
};