import moment from "moment";
import { expenseColumn } from "./column";
import { DataGrid } from "@material-ui/data-grid";
import React, { useEffect, useState } from "react";
import { useProject } from "../../hooks/useProject";
import { useExpense } from "../../hooks/useExpense";
import { useCatalog } from "../../hooks/useCatalog";
import { useSupplier } from "../../hooks/useSupplier";

const Table = ({ selectedRows, handleSelectedRows, loading }) => {
    // STATE
    const { projectsFound } = useProject(loading);
    const { suppliersFound } = useSupplier(loading);
    const { expensesFound } = useExpense(loading);
    const { accountsFound } = useCatalog(loading);

    const [newExpenses, setNewExpenses] = useState([]);

    const [projectReduce, setProjectReduce] = useState({});
    const [supplierReduce, setSupplierReduce] = useState({});
    const [catalogReduce, setCatalogReduce] = useState({});

    const unixToDate = (unixTime) => moment.unix(unixTime).format("DD-MM-YYYY");

    //========================================================================
    useEffect(() => {
        // INDEXAMOS LOS PROYECTOS POR EL ID
        const indexedProjects = projectsFound.reduce(
            (acc, el) => ({
                ...acc,
                [el.id]: el,
            }),
            {}
        );

        setProjectReduce(indexedProjects);
    }, [projectsFound]);
    //========================================================================
    useEffect(() => {
        // INDEXAMOS LOS PROVEEDORES POR EL ID
        const indexedSuppliers = suppliersFound.reduce(
            (acc, el) => ({
                ...acc,
                [el.id]: el,
            }),
            {}
        );

        setSupplierReduce(indexedSuppliers);
    }, [suppliersFound]);
    //========================================================================
    useEffect(() => {
        // INDEXAMOS LAS CUENTAS POR EL ID
        const indexedCatalog = accountsFound.reduce(
            (acc, el) => ({
                ...acc,
                [el.id]: el,
            }),
            {}
        );

        setCatalogReduce(indexedCatalog);
    }, [accountsFound]);

    //========================================================================
    useEffect(() => {
        // CREAMOS LOS NUEVOS GASTOS CON INFORMACIÓN COMPLETA
        const newExpenses = expensesFound.map((el) => ({
            ...el,
            project: projectReduce[el.project]?.projectName,
            supplier: supplierReduce[el.supplier]?.businessName,
            expenseDate: moment.unix(el.expenseDate).format("DD-MM-YYYY"),
            expenseCatalog: catalogReduce[el.expenseCatalog]?.accountName,
        }));

        setNewExpenses(newExpenses);
    }, [expensesFound, projectReduce, supplierReduce, catalogReduce]);

    return (
        <div style={{ height: 400, width: "100%" }}>
            {newExpenses?.length > 0 ? (
                <DataGrid
                    rows={newExpenses ?? []}
                    columns={expenseColumn ?? []}
                    pageSize={5}
                    checkboxSelection
                    disableSelectionOnClick
                    // SELECTED ROWS
                    selectionModel={selectedRows}
                    onSelectionModelChange={handleSelectedRows}
                />
            ) : (
                <h2>No hay información para mostrar...</h2>
            )}
        </div>
    );
};

export default Table;
