import axios from "axios";

export default class Axios {

    public static makeRequest = axios.create({
        baseURL: process.env.BACKEND_URL,
        withCredentials: true,
    });
} 