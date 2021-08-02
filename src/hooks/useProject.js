import { useState, useEffect } from "react";
import { axiosPreInstance } from "../config/api";

export const useProject = (loading) => {
    const token = localStorage.getItem("token");
    const axiosInstance = axiosPreInstance(token);
    // STATE
    const [state, setState] = useState({
        loading: true,
        projectsFound: [],
    });

    const getProjects = async () => {
        try {
            const { data } = await axiosInstance.get("/project");
            const { projectsFound } = data;

            if (projectsFound) setState({ ...state, projectsFound });
        } catch ({ message }) {
            console.log(message);
        }
    };

    useEffect(() => {
        getProjects();
    }, [loading]);

    return state;
};
