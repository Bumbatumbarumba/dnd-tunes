/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CustomButton, Settings, UsernameForm } from ".";
import { auth, signInWithGoogle } from "../services";
import { AuthContext } from "./auth";

export const NavBar = () => {
    const { currentUser } = useContext(AuthContext);
    const [selectedPage, setSelectedPage] = useState(window.location.pathname === "/" ? "/home" : window.location.pathname);

    const showLoginButton = () => {
        return currentUser
            ? <>
                <Link to="/mypage"
                    onClick={() => setSelectedPage("/mypage")}
                    style={{ margin: "5px", textDecoration: selectedPage === "/mypage" ? "underline" : "" }}>
                    My Page
                </Link>
                <Settings />
            </>
            : <CustomButton buttonText="Sign in" onClickFunction={signInWithGoogle} style={{ margin: "5px" }} />;

    };
    return (
        <>
            <div style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                <h1 style={{ margin: "1em" }}>DnD Tunes</h1>
                <div style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "flex-end", margin: "1em", fontSize: "0.8em" }}>
                    <Link to="/"
                        onClick={() => setSelectedPage("/home")}
                        style={{ margin: "5px", textDecoration: selectedPage === "/home" ? "underline" : "" }}>
                        Home
                    </Link>
                    <Link to="/about"
                        onClick={() => setSelectedPage("/about")}
                        style={{ margin: "5px", textDecoration: selectedPage === "/about" ? "underline" : "" }}>
                        About
                    </Link>
                    {showLoginButton()}
                </div>
            </div>
            <hr style={{ width: "80%" }} />
        </>
    );
};