import Content from "./page";
import React, { useState } from "react";
import { axiosPreInstance } from "../../config/api";

const SchemeReport = () => {
    const token = localStorage.getItem("token");
    const axiosInstance = axiosPreInstance(token);
    // STATE
    const [loading, setLoading] = useState(false);
    const [selectedRows, setSelectedRows] = useState([]);

    const handleSelectedRows = ({ selectionModel }) =>
        setSelectedRows(selectionModel);

    const handleDelete = async () => {
        const promises = [];
        selectedRows.forEach((el) => {
            const promise = axiosInstance.delete(`/client/${el}`);
            promises.push(promise);
        });

        try {
            setLoading(true);
            await Promise.all(promises);
        } catch (err) {
            console.log(err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <Content
            loading={loading}
            title="Consultar Clientes"
            selectedRows={selectedRows}
            handleSelectedRows={handleSelectedRows}
            handleDelete={handleDelete}
        />
    );
};

export default SchemeReport;
