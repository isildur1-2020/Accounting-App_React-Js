import { useState, useEffect } from "react";
import { axiosPreInstance } from "../config/api";

export const useEarning = (loading) => {
    const token = localStorage.getItem("token");
    const axiosInstance = axiosPreInstance(token);
    // STATE
    const [state, setState] = useState({
        loading: true,
        earningsFound: [],
    });

    const getAllEarnings = async () => {
        try {
            const { data } = await axiosInstance.get("/earning");
            const { earningsFound } = data;

            if (earningsFound)
                setState({
                    ...state,
                    earningsFound,
                });
        } catch ({ message }) {
            console.log(message);
        }
    };

    useEffect(() => {
        getAllEarnings();
    }, [loading]);

    return state;
};
