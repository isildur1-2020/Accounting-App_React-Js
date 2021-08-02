import { useState, useEffect } from "react";
import { axiosPreInstance } from "../config/api";

export const useClient = (loading) => {
    const token = localStorage.getItem("token");
    const axiosInstance = axiosPreInstance(token);
    // STATE
    const [state, setState] = useState({
        loading: true,
        clientsFound: [],
    });

    const getAllClients = async () => {
        try {
            const { data } = await axiosInstance.get("/client");
            const { clientsFound } = data;

            if (clientsFound)
                setState({
                    ...state,
                    clientsFound,
                });
        } catch ({ message }) {
            console.log(message);
        }
    };

    useEffect(() => {
        getAllClients();
    }, [loading]);

    return state;
};
