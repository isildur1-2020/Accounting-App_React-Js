import React from "react";
import { useClient } from "../../hooks/useClient";
import {
    DataGrid,
    GridToolbarContainer,
    GridToolbarExport,
} from "@mui/x-data-grid";
import { clientColumn } from "./column";

const Table = ({ selectedRows, handleSelectedRows, loading }) => {
    const { clientsFound } = useClient(loading);

    function CustomToolbar() {
        return (
            <GridToolbarContainer>
                <GridToolbarExport />
            </GridToolbarContainer>
        );
    }

    return (
        <div style={{ height: 430, width: "100%" }}>
            {clientsFound?.length > 0 && (
                <DataGrid
                    pageSize={5}
                    checkboxSelection
                    disableSelectionOnClick
                    rows={clientsFound ?? []}
                    columns={clientColumn}
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
