import React from "react";
import { Route } from "react-router-dom";
import { MyPage } from "../views";

export const PrivateRoute = () => {


    return (
        <Route path='/myPage' element={<MyPage />} />
    );
};