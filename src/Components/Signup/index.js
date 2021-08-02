import React, { useState } from "react";
import Content from "./page";
import { axiosPreInstance } from "../../config/api";

const Signup = () => {
    const token = localStorage.getItem("token");
    const axiosInstance = axiosPreInstance(token);
    // STATE
    const [err, setErr] = useState(false);
    const [message, setMessage] = useState(false);
    const [loading, setLoading] = useState(false);
    const [state, setState] = useState({
        username: "",
        password: "",
        secret: "",
    });

    const resetForm = () => {
        setState({
            username: "",
            password: "",
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
            const { data } = await axiosInstance.post("/user", state);
            setLoading(false);
            const { invalid, errors } = data;
            if (invalid) return setErr("Verificación inválida");
            else if (errors?.length > 0)
                return setErr("Completa todos los campos");
            setMessage(data?.message);
            resetForm();
        } catch ({ message }) {
            console.log(message);
            setLoading(false);
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
            message={message}
            handleSubmit={handleSubmit}
            handleChange={handleChange}
        />
    );
};

export default Signup;
