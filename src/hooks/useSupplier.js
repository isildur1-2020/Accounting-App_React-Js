import { useState, useEffect } from "react";
import { axiosPreInstance } from "../config/api";

export const useSupplier = (loading) => {
    const token = localStorage.getItem("token");
    const axiosInstance = axiosPreInstance(token);
    // STATE
    const [state, setState] = useState({
        loading: true,
        suppliersFound: [],
    });

    const getAllSuppliers = async () => {
        try {
            const { data } = await axiosInstance.get("/supplier");
            const { suppliersFound } = data;

            if (suppliersFound)
                setState({
                    loading: true,
                    suppliersFound,
                });
        } catch ({ message }) {
            console.log(message);
        }
    };

    useEffect(() => {
        getAllSuppliers();
    }, [loading]);

    return state;
};
