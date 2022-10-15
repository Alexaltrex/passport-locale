import React from "react";
import style from "./HomePage.module.scss"
//import {Button} from "@mui/material";
import {authApi} from "../../api/auth.api";

export const HomePage = () => {
    const onClick = async () => {
        await authApi.data();
    }

    return (
        <div className={style.homePage}>
            <h1>Passport.js - passport local</h1>
            <p className={style.step}>
                {
                    `Реализация аутентификации на основе сессий с помощью Passport.js (стратегия 'passport-local')`
                }
            </p>
            {/*<Button onClick={onClick}>*/}
            {/*    Data*/}
            {/*</Button>*/}
        </div>
    )
}
