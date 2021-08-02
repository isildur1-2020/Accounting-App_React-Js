import { useState, useEffect } from "react";
import { axiosPreInstance } from "../config/api";

export const useCatalog = (loading) => {
    const token = localStorage.getItem("token");
    const axiosInstance = axiosPreInstance(token);
    // STATE
    const [state, setState] = useState({
        loading: true,
        accountsFound: [],
    });

    const getAllAccounts = async () => {
        try {
            const { data } = await axiosInstance.get("/catalog");
            const { accountsFound } = data;

            if (accountsFound)
                setState({
                    ...state,
                    accountsFound,
                });
        } catch ({ message }) {
            console.log(message);
        }
    };

    useEffect(() => {
        getAllAccounts();
    }, [loading]);

    return state;
};
