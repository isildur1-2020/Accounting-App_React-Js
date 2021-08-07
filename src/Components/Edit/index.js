import React, { useState } from "react";
import { useEffect } from "react";
import Content from "./page";
import { axiosPreInstance } from "../../config/api";

const titles = {
    project: "Editar proyectos",
    client: "Editar clientes",
    supplier: "Editar proveedores",
    expense: "Editar gastos",
    catalog: "Editar Cuentas",
    earning: "Editar ingresos",
};

const Edit = () => {
    const token = localStorage.getItem("token");
    const axiosInstance = axiosPreInstance(token);

    const [loading, setLoading] = useState(false);
    const [option, setOption] = useState("");
    const [selectedRows, setSelectedRows] = useState([]);

    const handleChange = ({ target }) => setOption(target.value);

    const handleSelectedRows = ({ selectionModel }) =>
        setSelectedRows(selectionModel);

    const handleDelete = async () => {
        const promises = [];
        selectedRows.forEach((el) => {
            const promise = axiosInstance.delete(`/${option}/${el}`);
            promises.push(promise);
        });

        try {
            setLoading(true);
            await Promise.all(promises);
            setLoading(false);
        } catch ({ message }) {
            console.log(message);
            setLoading(false);
        }
    };

    useEffect(() => {
        setSelectedRows([]);
    }, [option]);

    return (
        <Content
            title={titles[option]}
            option={option}
            handleChange={handleChange}
            selectedRows={selectedRows}
            handleSelectedRows={handleSelectedRows}
            handleDelete={handleDelete}
            loading={loading}
        />
    );
};

export default Edit;
