import {IRegistrationValue, LoginValueType, UserInfoType} from "../types/types";
import {instance} from "./api";

export const authApi = {
    // registration
    registration: async (user: IRegistrationValue) => {
        const response = await instance.post("auth/registration", user);
        return response.data
    },
    // login
    login: async (user: LoginValueType) => {
        const response = await instance.post("auth/login", user);
        return response.data
    },
    data: async () => {
        const response = await instance.get("auth/data");
        return response.data
    },
    // logout
    logout: async () => {
        const response = await instance.get("auth/logout");
        return response.data
    },
    //
    // // counter
    // counter: async () => {
    //     const response = await instance.get("auth/counter");
    //     return response.data
    // },
    // user info
    userInfo: async () => {
        const response = await instance.get<UserInfoType>("auth/userInfo");
        return response.data
    }
}
