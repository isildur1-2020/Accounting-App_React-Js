import moment from "moment";
import { projectColumn } from "./column";
import {
    DataGrid,
    GridToolbarContainer,
    GridToolbarExport,
} from "@mui/x-data-grid";
import React, { useEffect, useState } from "react";
// HOOKS
import { useProject } from "../../hooks/useProject";
import { useClient } from "../../hooks/useClient";

const Table = ({ selectedRows, handleSelectedRows, loading }) => {
    const { clientsFound } = useClient(loading);
    const { projectsFound } = useProject(loading);
    // STATE
    const [newProjects, setNewProjects] = useState([]);
    const [projectReduce, setProjectReduce] = useState({});
    const [clientReduce, setClientReduce] = useState({});

    const unixToDate = (unixTime) => moment.unix(unixTime).format("DD-MM-YYYY");

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
        // INDEXAMOS LOS PROYECTOS POR EL ID
        const indexedProjects = projectsFound.reduce(
            (acc, el) => ({
                ...acc,
                [el.id]: el,
            }),
            {}
        );

        setProjectReduce(indexedProjects);

        // CREAMOS LOS NUEVOS PROYECTOS CON INFORMACIÓN COMPLETA
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

    function CustomToolbar() {
        return (
            <GridToolbarContainer>
                <GridToolbarExport />
            </GridToolbarContainer>
        );
    }

    return (
        <div style={{ height: 430, width: "100%" }}>
            {newProjects?.length > 0 && (
                <DataGrid
                    pageSize={5}
                    checkboxSelection
                    disableSelectionOnClick
                    rows={newProjects ?? []}
                    columns={projectColumn}
                    // SELECTED ROWS
                    selectionModel={selectedRows}
                    onSelectionModelChange={handleSelectedRows}
                    components={{
                        Toolbar: CustomToolbar,
                    }}
                />
            )}
        </div>
    );
};

export default Table;
