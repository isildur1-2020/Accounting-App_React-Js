import React from "react";
import "./styles.css";
// MATERIAL UI
import {
  InputLabel,
  Select,
  MenuItem,
  FormHelperText,
  Button,
  CircularProgress,
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
// COMPONENTS
import Menu from "../Menu/index";
import Table from "./Table/index";
// ====================================================================

const Content = ({
  title,
  option,
  handleChange,
  selectedRows,
  handleSelectedRows,
  handleDelete,
  loading,
}) => {
  return (
    <>
      <Menu title={title} />
      <div className="Edit">
        <div className="Edit__container">
          <div className="Edit__container-select">
            <InputLabel id="option-label">Escoge una opción</InputLabel>
            <Select
              fullWidth
              labelId="option-label"
              name="option"
              value={option}
              onChange={handleChange}
            >
              <MenuItem value="">
                <em>Seleccionar</em>
              </MenuItem>
              <MenuItem value="project">Proyectos</MenuItem>
              <MenuItem value="client">Clientes</MenuItem>
              <MenuItem value="supplier">Proveedores</MenuItem>
              <MenuItem value="expense">Gastos</MenuItem>
            </Select>
            <FormHelperText>Seleccione una entidad</FormHelperText>
          </div>
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
          option={option}
          selectedRows={selectedRows}
          handleSelectedRows={handleSelectedRows}
          loading={loading}
        />
      </div>
    </>
  );
};
export default Content;
