import React from "react";
import Table from "./Table";
import Menu from "../Menu/index";
import DeleteIcon from "@material-ui/icons/Delete";
import { Button, CircularProgress } from "@material-ui/core";

const Content = ({
    title,
    loading,
    selectedRows,
    handleDelete,
    handleSelectedRows,
}) => {
    return (
        <>
            <Menu title={title} />
            <div className="Edit">
                <div className="Edit__container">
                    {loading ? (
                        <CircularProgress />
                    ) : (
                        <Button
                            className="Edit__button-delete"
                            variant="contained"
                            color="secondary"
                            onClick={handleDelete}
                        >
                            <DeleteIcon />
                        </Button>
                    )}
                </div>
                <Table
                    loading={loading}
                    selectedRows={selectedRows}
                    handleSelectedRows={handleSelectedRows}
                />
            </div>
        </>
    );
};
export default Content;
