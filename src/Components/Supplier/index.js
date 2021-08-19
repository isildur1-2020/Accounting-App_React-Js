import React, { useState } from "react";
import Content from "./page";
import { axiosPreInstance } from "../../config/api";
import { getUser } from "../../utils/getUser";

const Client = () => {
    const token = localStorage.getItem("token");
    const axiosInstance = axiosPreInstance(token);
    const modifierUser = getUser(token);
    // ALERT
    const [err, setErr] = useState(false);
    const [message, setMessage] = useState(false);
    const [loading, setLoading] = useState(false);
    // STATE
    const [state, setState] = useState({
        businessName: "",
        typeOfId: "",
        numberId: "",
        firstName: "",
        lastName: "",
        phone: "",
        description: "",
        modifierUser,
    });
    // ==========================================================

    const handleChange = ({ target }) => {
        const { name, value } = target;
        setState({ ...state, [name]: value });
        setErr(false);
        setMessage(false);
    };

    const resetForm = () => {
        setState({
            businessName: "",
            typeOfId: "",
            numberId: "",
            firstName: "",
            lastName: "",
            phone: "",
            description: "",
            modifierUser,
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
            const { data } = await axiosInstance.post("/supplier", state);
            setLoading(false);
            const { errors } = data;
            if (errors?.length > 0)
                return setErr("Debes completar todos los campos");
            setMessage("Proveedor creado con éxito");
            resetForm();
        } catch ({ message }) {
            console.log(message);
            setLoading(false);
        }
    };

    return (
        <Content
            err={err}
            state={state}
            loading={loading}
            message={message}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
        />
    );
};

export default Client;
