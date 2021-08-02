import React, { useState, useRef } from "react";
import Content from "./page";
import moment from "moment";
import { axiosPreInstance } from "../../config/api";
import { useProject } from "../../hooks/useProject";
import { useSupplier } from "../../hooks/useSupplier";
import { useCatalog } from "../../hooks/useCatalog";

const Expense = () => {
    const token = localStorage.getItem("token");
    const axiosInstance = axiosPreInstance(token);
    const refOrderFile = useRef();
    // ALERT
    const [err, setErr] = useState(false);
    const [message, setMessage] = useState(false);
    const [loading, setLoading] = useState(false);
    // DATA
    const { projectsFound } = useProject();
    const { suppliersFound } = useSupplier();
    const { accountsFound } = useCatalog();
    // STATE
    const [fileSelected, setFileSelected] = useState(false);
    const [createDate, setCreateDate] = useState(new Date());
    const [state, setState] = useState({
        project: "",
        supplier: "",
        orderId: "",
        description: "",
        expenseCatalog: "",
        totalExpense: "",
    });

    const handleCreateChange = (date) => setCreateDate(date);

    const handleChange = ({ target }) => {
        const { name, value } = target;
        setState({ ...state, [name]: value });
        setErr(false);
        setMessage(false);
    };

    const uploadFile = async () => {
        const file = refOrderFile.current.files[0];
        const formData = new FormData();
        formData.append("orderFile", file);

        const URL = "/expense/file";
        const { data } = await axiosInstance.post(URL, formData);
        const { hash } = data;

        return hash;
    };

    const resetForm = () => {
        setState({
            project: "",
            supplier: "",
            orderId: "",
            description: "",
            totalExpense: "",
        });
        setCreateDate(new Date());

        setTimeout(() => {
            setMessage(false);
            setFileSelected(false);
        }, 1500);
    };

    const handleSubmit = async (ev) => {
        ev.preventDefault();
        // ENVIAR FORMULARIO
        try {
            setLoading(true);
            const info = {
                ...state,
                expenseDate: moment(createDate).unix(),
                orderFile: fileSelected
                    ? await uploadFile()
                    : "No se ha subido un archivo",
            };
            const { data } = await axiosInstance.post("expense", info);
            setLoading(false);
            const { errors } = data;
            if (errors?.length > 0)
                return setErr("Debes completar todos los campos");
            setMessage("Gasto creado con éxito");
            resetForm();
        } catch ({ message }) {
            console.log(message);
            setLoading(false);
        }
    };

    return (
        <Content
            state={state}
            loading={loading}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            // DATA
            projects={projectsFound}
            suppliers={suppliersFound}
            accounts={accountsFound}
            err={err}
            message={message}
            refOrderFile={refOrderFile}
            fileSelected={fileSelected}
            setFileSelected={setFileSelected}
            // DATE
            createDate={createDate}
            handleCreateChange={handleCreateChange}
        />
    );
};

export default Expense;
