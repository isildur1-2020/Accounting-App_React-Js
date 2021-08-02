import { useState, useEffect } from "react";
import { axiosPreInstance } from "../config/api";

export const useExpense = (loading) => {
    const token = localStorage.getItem("token");
    const axiosInstance = axiosPreInstance(token);
    // STATE
    const [state, setState] = useState({
        loading: true,
        expensesFound: [],
    });

    const getAllExpenses = async () => {
        try {
            const { data } = await axiosInstance.get("/expense");
            const { expensesFound } = data;

            if (expensesFound)
                setState({
                    loading: true,
                    expensesFound,
                });
        } catch ({ message }) {
            console.log(message);
        }
    };

    useEffect(() => {
        getAllExpenses();
    }, [loading]);

    return state;
};
