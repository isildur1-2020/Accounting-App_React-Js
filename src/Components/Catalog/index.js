import React, { useState } from "react";
import Content from "./page";
import { axiosPreInstance } from "../../config/api";
import { getUser } from "../../utils/getUser";
import { useSelector } from "react-redux";

const Catalog = () => {
    const token = localStorage.getItem("token");
    const axiosInstance = axiosPreInstance(token);
    const modifierUser = getUser(token);

    const { exchangeRate } = useSelector(({ exchangeRate }) => exchangeRate);
    // STATE
    const [err, setErr] = useState(false);
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState(false);
    const [state, setState] = useState({
        mayorAccount: "",
        mayorAccountName: "",
        subAccount: "",
        subAccountName: "",
        debitColones: 0,
        creditColones: 0,
        exchangeRate,
        orderReport: "",
        modifierUser,
    });

    const resetForm = () => {
        setState({
            mayorAccount: "",
            mayorAccountName: "",
            subAccount: "",
            subAccountName: "",
            debitColones: 0,
            creditColones: 0,
            orderReport: "",
        });

        setTimeout(() => {
            setMessage(false);
        }, 1500);
    };

    const handleChange = ({ target }) => {
        const { name, value } = target;
        setState({
            ...state,
            [name]: value,
        });
        setErr(false);
    };

    const handleSubmit = async (ev) => {
        ev.preventDefault();
        // ENVIAR FORMULARIO
        try {
            setLoading(true);
            const { debitColones, creditColones } = state;
            const body = {
                ...state,
                debitDollars: debitColones / exchangeRate,
                creditDollars: creditColones / exchangeRate,
            };
            const { data } = await axiosInstance.post("/catalog", body);
            setLoading(false);
            const { errors } = data;
            if (errors?.length > 0) return setErr("Completa todos los campos");
            setMessage(data?.message);
            resetForm();
        } catch ({ message }) {
            console.log(message);
            setLoading(false);
        }
    };

    const handleDeleteAccount = (name) => setState({ ...state, [name]: "" });

    const handleChangeAccount = ({ target }) => {
        const { name, value } = target;
        let account = [...value];
        const cardinal = account.length;

        if (cardinal > 9) return;
        else if (cardinal === 4 || cardinal === 7) {
            const lastPos = account.length - 1;
            const aux = account[lastPos];
            account[lastPos] = "-";
            account.push(aux);
        }

        let newString = "";
        for (let i = 0; i < account.length; i++) newString += account[i];

        setState({
            ...state,
            [name]: newString,
        });
    };

    return (
        <Content
            err={err}
            state={state}
            loading={loading}
            message={message}
            exchangeRate={exchangeRate}
            handleSubmit={handleSubmit}
            handleChange={handleChange}
            handleChangeAccount={handleChangeAccount}
            handleDeleteAccount={handleDeleteAccount}
        />
    );
};

export default Catalog;
