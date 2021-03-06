import React, { useEffect, useState } from "react";
import { DataGrid } from "@material-ui/data-grid";
import moment from "moment";
// COLUMNS
import {
    projectColumn,
    clientColumn,
    supplierColumn,
    expenseColumn,
    catalogColumn,
    earningColumn,
} from "./column";
// HOOKS
import { useProject } from "../../../hooks/useProject";
import { useClient } from "../../../hooks/useClient";
import { useSupplier } from "../../../hooks/useSupplier";
import { useExpense } from "../../../hooks/useExpense";
import { useCatalog } from "../../../hooks/useCatalog";
import { useEarning } from "../../../hooks/useEarning";

const Table = ({ option, selectedRows, handleSelectedRows, loading }) => {
    // STATE
    const [newProjects, setNewProjects] = useState([]);
    const [newExpenses, setNewExpenses] = useState([]);
    const [newEarnings, setNewEarnings] = useState([]);

    const [projectReduce, setProjectReduce] = useState({});
    const [clientReduce, setClientReduce] = useState({});
    const [supplierReduce, setSupplierReduce] = useState({});
    const [catalogReduce, setCatalogReduce] = useState({});

    const { projectsFound } = useProject(loading);
    const { clientsFound } = useClient(loading);
    const { suppliersFound } = useSupplier(loading);
    const { expensesFound } = useExpense(loading);
    const { accountsFound } = useCatalog(loading);
    const { earningsFound } = useEarning(loading);

    const data = {
        // MODIFICADO (PROJECTS)
        project: newProjects,
        client: clientsFound,
        supplier: suppliersFound,
        // MODIFICADO (EXPENSES)
        expense: newExpenses,
        catalog: accountsFound,
        earning: newEarnings,
    };

    const columns = {
        project: projectColumn,
        client: clientColumn,
        supplier: supplierColumn,
        expense: expenseColumn,
        catalog: catalogColumn,
        earning: earningColumn,
    };

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

        // CREAMOS LOS NUEVOS PROYECTOS CON INFORMACI??N COMPLETA
        const newProjects = projectsFound.map((el) => ({
            ...el,
            client: `${clientReduce[el.client]?.firstName} ${
                clientReduce[el.client]?.lastName
            }`,
            createProject: unixToDate(el.createProject),
            initDate: unixToDate(el.initDate),
            endDate: unixToDate(el.endDate),
        }));

        setNewProjects(newProjects);
    }, [projectsFound, clientReduce]);
    //========================================================================

    useEffect(() => {
        // INDEXAMOS LOS CLIENTES POR EL ID
        const indexedClients = clientsFound.reduce(
            (acc, el) => ({
                ...acc,
                [el.id]: el,
            }),
            {}
        );

        setClientReduce(indexedClients);
    }, [clientsFound]);
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
        // INDEXAMOS LOS GASTOS POR EL ID
        // const indexedExpenses = expensesFound.reduce(
        //   (acc, el) => ({
        //     ...acc,
        //     [el.id]: el,
        //   }),
        //   {}
        // );

        // CREAMOS LOS NUEVOS GASTOS CON INFORMACI??N COMPLETA
        const newExpenses = expensesFound.map((el) => ({
            ...el,
            project: projectReduce[el.project]?.projectName,
            supplier: supplierReduce[el.supplier]?.businessName,
            expenseDate: moment.unix(el.expenseDate).format("DD-MM-YYYY"),
            expenseCatalog: catalogReduce[el.expenseCatalog]?.accountName,
        }));

        setNewExpenses(newExpenses);
    }, [expensesFound, projectReduce, supplierReduce, catalogReduce]);

    //========================================================================

    useEffect(() => {
        // CREAMOS LA INFORMACI??N DE INGRESOS CON INFORMACI??N COMPLETA
        const newEarnings = earningsFound.map((el) => ({
            ...el,
            date: unixToDate(el.date),
            project: projectReduce[el.project]?.projectName,
            catalog: catalogReduce[el.catalog]?.accountName,
        }));

        setNewEarnings(newEarnings);
    }, [earningsFound, projectReduce, catalogReduce]);

    return (
        <div style={{ height: 400, width: "100%" }}>
            {option && (
                <DataGrid
                    rows={data[option] ?? []}
                    columns={columns[option] ?? []}
                    pageSize={5}
                    checkboxSelection
                    disableSelectionOnClick
                    // SELECTED ROWS
                    selectionModel={selectedRows}
                    onSelectionModelChange={handleSelectedRows}
                />
            )}
        </div>
    );
};

export default Table;
