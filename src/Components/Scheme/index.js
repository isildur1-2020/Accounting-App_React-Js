import React, { useState } from "react";
import { useSelector } from "react-redux";
import Content from "./page";
import moment from "moment";
import { axiosPreInstance } from "../../config/api";
import { useClient } from "../../hooks/useClient";
import { getUser } from "../../utils/getUser";

const Scheme = () => {
    const token = localStorage.getItem("token");
    const axiosInstance = axiosPreInstance(token);
    const modifierUser = getUser(token);

    const { exchangeRate } = useSelector(({ exchangeRate }) => exchangeRate);
    // ALERT
    const [err, setErr] = useState(false);
    const [message, setMessage] = useState(false);
    const [loading, setLoading] = useState(false);
    // DATA
    const { clientsFound } = useClient();
    // STATE
    const [createProject, setCreateDate] = useState(new Date());
    const [initDate, setInitDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [state, setState] = useState({
        projectName: "",
        client: "",
        budget: "",
        modifierUser,
    });

    // =============================================================
    const handleCreateChange = (date) => setCreateDate(date);
    const handleInitChange = (date) => setInitDate(date);
    const handleEndChange = (date) => setEndDate(date);

    const handleChange = ({ target }) => {
        const { name, value } = target;
        setState({ ...state, [name]: value });
        setErr(false);
        setMessage(false);
    };

    const resetForm = () => {
        const newDate = new Date();
        setState({
            projectName: "",
            client: "",
            budget: "",
        });
        setCreateDate(newDate);
        setInitDate(newDate);
        setEndDate(newDate);

        setTimeout(() => {
            setMessage(false);
        }, 1500);
    };

    const handleSubmit = async (ev) => {
        ev.preventDefault();
        // ENVIAR FORMULARIO
        const { budget } = state;
        const body = {
            ...state,
            dollars: exchangeRate * budget,
            createProject: moment(createProject).unix(),
            initDate: moment(initDate).unix(),
            endDate: moment(endDate).unix(),
        };
        // POST
        try {
            setLoading(true);
            const { data } = await axiosInstance.post("/project", body);
            setLoading(false);
            const { errors } = data;
            if (errors?.length > 0)
                return setErr("Debes completar todos los campos");
            setMessage("Proyecto creado con éxito");
            resetForm();
        } catch ({ message }) {
            console.log(message);
            setLoading(false);
        }
    };

    // RENDER
    return (
        <Content
            err={err}
            state={state}
            clients={clientsFound}
            message={message}
            loading={loading}
            exchangeRate={exchangeRate}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            // DATES
            createProject={createProject}
            handleCreateChange={handleCreateChange}
            initDate={initDate}
            handleInitChange={handleInitChange}
            endDate={endDate}
            handleEndChange={handleEndChange}
        />
    );
};

export default Scheme;
