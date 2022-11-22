import { User } from "@firebase/auth";
import React, { useEffect, useState } from "react";
import { UserData } from "../definitions";
import { auth } from "../services";

export const AuthContext = React.createContext<any | null>(null);

export const AuthProvider = ({ children }: any) => {
    const [currentUser, setCurrentUser] = useState<UserData | null>(null);
    const [pending, setPending] = useState(true);

    useEffect(() => {
        auth.onAuthStateChanged((user: User | null) => {
            let userData: UserData | null = null;
            if (user) {
                userData = {
                    photoURL: user.photoURL ? user.photoURL : "",
                    uid: user.uid,
                };
                // 1. check if username is in session storage
                // 2. get username from firebase db
                // 3. save it in session storage
            }
            setCurrentUser(userData);
            setPending(false);
        });
    }, []);

    if (pending) {
        return <>Loading...</>;
    }

    return (
        <AuthContext.Provider
            value={{
                currentUser
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};
