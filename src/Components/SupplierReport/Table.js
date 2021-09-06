import React from "react";
import { supplierColumn } from "./column";
import {
    DataGrid,
    GridToolbarContainer,
    GridToolbarExport,
} from "@mui/x-data-grid";
import { useSupplier } from "../../hooks/useSupplier";

const Table = ({ selectedRows, handleSelectedRows, loading }) => {
    const { suppliersFound } = useSupplier(loading);

    function CustomToolbar() {
        return (
            <GridToolbarContainer>
                <GridToolbarExport />
            </GridToolbarContainer>
        );
    }

    return (
        <div style={{ height: 430, width: "100%" }}>
            {suppliersFound?.length > 0 && (
                <DataGrid
                    pageSize={5}
                    checkboxSelection
                    disableSelectionOnClick
                    rows={suppliersFound ?? []}
                    columns={supplierColumn}
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
