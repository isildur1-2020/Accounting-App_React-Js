import axios from "axios";

export const BASE_URL = "https://accounting-app2.herokuapp.com/api";
export const URL_IMAGES = "https://accounting-app2.herokuapp.com/images";
export let token = window.localStorage.getItem("token");
export let headers = {
    "authorization-bearer": window.localStorage.getItem("token"),
};

export const axiosPreInstance = (token) =>
    axios.create({
        baseURL: "https://accounting-app2.herokuapp.com/api",
        headers: { "authorization-bearer": token },
    });
