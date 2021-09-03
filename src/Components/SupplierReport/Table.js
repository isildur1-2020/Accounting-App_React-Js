import React from "react";
import { supplierColumn } from "./column";
import { DataGrid } from "@material-ui/data-grid";
import { useSupplier } from "../../hooks/useSupplier";

const Table = ({ selectedRows, handleSelectedRows, loading }) => {
    const { suppliersFound } = useSupplier(loading);

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
                />
            )}
        </div>
    );
};

export default Table;
