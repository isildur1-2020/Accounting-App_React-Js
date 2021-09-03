import React from "react";
import { useClient } from "../../hooks/useClient";
import { DataGrid } from "@material-ui/data-grid";
import { clientColumn } from "./column";

const Table = ({ selectedRows, handleSelectedRows, loading }) => {
    const { clientsFound } = useClient(loading);

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
                />
            )}
        </div>
    );
};

export default Table;
