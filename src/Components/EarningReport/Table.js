import React, { useEffect, useState } from "react";
import { DataGrid } from "@material-ui/data-grid";
import moment from "moment";
// COLUMNS
import { earningColumn } from "./column";
// HOOKS
import { useProject } from "../../hooks/useProject";
import { useCatalog } from "../../hooks/useCatalog";
import { useEarning } from "../../hooks/useEarning";

const Table = ({ selectedRows, handleSelectedRows, loading }) => {
    // STATE
    const { projectsFound } = useProject(loading);
    const { accountsFound } = useCatalog(loading);
    const { earningsFound } = useEarning(loading);

    const [newEarnings, setNewEarnings] = useState([]);
    const [projectReduce, setProjectReduce] = useState({});
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
        // CREAMOS LA INFORMACIÓN DE INGRESOS CON INFORMACIÓN COMPLETA
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
            {newEarnings.concat.length > 0 ? (
                <DataGrid
                    pageSize={5}
                    checkboxSelection
                    disableSelectionOnClick
                    rows={newEarnings ?? []}
                    columns={earningColumn ?? []}
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
