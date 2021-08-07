import React, { useState } from "react";
import { useSelector } from "react-redux";
import moment from "moment";
import { useProject } from "../../hooks/useProject";
import { useCatalog } from "../../hooks/useCatalog";
import { axiosPreInstance } from "../../config/api";
import { getUser } from "../../utils/getUser";
import Content from "./page";

const Earning = () => {
    const token = localStorage.getItem("token");
    const axiosInstance = axiosPreInstance(token);
    const modifierUser = getUser(token);

    const { exchangeRate } = useSelector(({ exchangeRate }) => exchangeRate);
    const { projectsFound } = useProject();
    const { accountsFound } = useCatalog();
    // STATE
    const [err, setErr] = useState(false);
    const [message, setMessage] = useState(false);
    const [loading, setLoading] = useState(false);
    const [selectedDate, setSelectedDate] = useState();
    const [state, setState] = useState({
        project: "",
        typeOfAdvance: "",
        colonesValue: "",
        catalog: "",
        voucher: "",
        paymentMethod: "",
        comment: "",
    });

    const handleChange = ({ target }) => {
        const { name, value } = target;
        setState({
            ...state,
            [name]: value,
        });
        setErr(false);
        setMessage(false);
    };

    const resetForm = () => {
        setState({
            project: "",
            typeOfAdvance: "",
            colonesValue: "",
            catalog: "",
            voucher: "",
            paymentMethod: "",
            comment: "",
        });
        setSelectedDate(new Date());

        setTimeout(() => {
            setMessage(false);
        }, 1500);
    };

    const handleDateChange = (date) => setSelectedDate(date);

    const handleSubmit = async (ev) => {
        ev.preventDefault();
        const { colonesValue } = state;
        const body = {
            ...state,
            date: moment(selectedDate).unix(),
            dollarsValue: exchangeRate * colonesValue,
            modifierUser,
        };
        // SEND
        try {
            setLoading(true);
            const { data } = await axiosInstance.post("/earning", body);
            setLoading(false);
            const { errors } = data;
            if (errors?.length > 0)
                return setErr("Debes completar todos los campos");
            setMessage("Ingreso creado con éxito");
            resetForm();
        } catch ({ message }) {
            console.log(message);
            setErr(message);
            setLoading(false);
        }
    };

    return (
        <Content
            err={err}
            state={state}
            message={message}
            loading={loading}
            exchangeRate={exchangeRate}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            selectedDate={selectedDate}
            projectsFound={projectsFound}
            accountsFound={accountsFound}
            handleDateChange={handleDateChange}
        />
    );
};

export default Earning;
