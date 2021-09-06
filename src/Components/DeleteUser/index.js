import React, { useState } from "react";
import Content from "./page";
import { axiosPreInstance } from "../../config/api";

const DeleteUser = () => {
    const token = localStorage.getItem("token");
    const axiosInstance = axiosPreInstance(token);
    // STATE
    const [err, setErr] = useState(false);
    const [message, setMessage] = useState(false);
    const [loading, setLoading] = useState(false);
    const [state, setState] = useState({
        username: "",
        secret: "",
    });

    const resetForm = () => {
        setState({
            username: "",
            secret: "",
        });

        setTimeout(() => {
            setMessage(false);
        }, 1500);
    };

    const handleSubmit = async (ev) => {
        ev.preventDefault();
        // ENVIAR FORMULARIO
        try {
            setLoading(true);
            const { data } = await axiosInstance.delete(
                `/user/${state?.username}/${state?.secret}`
            );
            setLoading(false);
            const { invalid } = data;
            if (invalid) return setErr("Verificación inválida");
            setMessage(data?.message);
        } catch (err) {
            console.log(err?.message);
            setErr(err?.message);
            setLoading(false);
        } finally {
            resetForm();
        }
    };

    const handleChange = ({ target }) => {
        const { name, value } = target;
        setState({
            ...state,
            [name]: value,
        });
        setErr(false);
    };

    return (
        <Content
            err={err}
            state={state}
            loading={loading}
            message={message}
            handleSubmit={handleSubmit}
            handleChange={handleChange}
        />
    );
};

export default DeleteUser;
