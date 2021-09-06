import React from "react";
import { useCatalog } from "../../hooks/useCatalog";
import {
    DataGrid,
    GridToolbarContainer,
    GridToolbarExport,
} from "@mui/x-data-grid";
import { catalogColumn } from "./column";

const Table = ({ selectedRows, handleSelectedRows, loading }) => {
    const { accountsFound } = useCatalog(loading);

    function CustomToolbar() {
        return (
            <GridToolbarContainer>
                <GridToolbarExport />
            </GridToolbarContainer>
        );
    }

    return (
        <div style={{ height: 430, width: "100%" }}>
            {accountsFound?.length > 0 ? (
                <DataGrid
                    pageSize={5}
                    checkboxSelection
                    disableSelectionOnClick
                    rows={accountsFound ?? []}
                    columns={catalogColumn}
                    // SELECTED ROWS
                    selectionModel={selectedRows}
                    onSelectionModelChange={handleSelectedRows}
                    components={{
                        Toolbar: CustomToolbar,
                    }}
                />
            ) : (
                <h2>No hay información para mostrar</h2>
            )}
        </div>
    );
};

export default Table;
