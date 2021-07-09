import React from "react";
import "./styles.css";
// COMPONENTS
import Menu from "../Menu/index";
import Schedule from "../Schedule/index";
// MATERIAL UI
import {
  Container,
  CssBaseline,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField,
  Button,
  FormHelperText,
} from "@material-ui/core";
import MuiAlert from "@material-ui/lab/Alert";

//======================================================================
const Content = ({
  state,
  handleChange,
  handleSubmit,
  projects,
  suppliers,
  err,
  message,
  // DATE
  createDate,
  handleCreateChange,
}) => {
  const { project, supplier, orderId, description, totalExpense } = state;
  return (
    <>
      <Menu title="Crear Gasto" />
      <Container component="main" maxWidth="sm">
        <CssBaseline />
        <div className="Expense-container">
          <form noValidate onSubmit={handleSubmit}>
            <div className="horizontal-separate">
              <FormControl style={{ width: "48%" }}>
                <InputLabel id="project-label">Proyecto</InputLabel>
                <Select
                  fullWidth
                  labelId="project-label"
                  name="project"
                  value={project}
                  onChange={handleChange}
                >
                  <MenuItem value="">
                    <em>Seleccionar</em>
                  </MenuItem>
                  {projects &&
                    projects.map(({ id }) => (
                      <MenuItem key={id} value={id}>
                        {id}
                      </MenuItem>
                    ))}
                </Select>
                <FormHelperText>Seleccione un proyecto</FormHelperText>
              </FormControl>
              <FormControl style={{ width: "48%" }}>
                <InputLabel id="supplier-label">Proveedor</InputLabel>
                <Select
                  fullWidth
                  labelId="supplier-label"
                  name="supplier"
                  value={supplier}
                  onChange={handleChange}
                >
                  <MenuItem value="">
                    <em>Seleccionar</em>
                  </MenuItem>
                  {suppliers &&
                    suppliers.map(({ id, businessName, numberId }) => (
                      <MenuItem
                        key={id}
                        value={id}
                      >{`${businessName} - ${numberId}`}</MenuItem>
                    ))}
                </Select>
                <FormHelperText>Seleccione un proveedor</FormHelperText>
              </FormControl>
            </div>
            {/* ========================================================================= */}
            <FormControl fullWidth>
              <div className="horizontal-separate" style={{ margin: "20px 0" }}>
                <TextField
                  type="number"
                  name="orderId"
                  label="Número de factura"
                  variant="outlined"
                  style={{ width: "48%", marginTop: "20px" }}
                  value={orderId}
                  onChange={handleChange}
                />
                <Schedule
                  label="Fecha del gasto"
                  selectedDate={createDate}
                  handleDateChange={handleCreateChange}
                />
              </div>
            </FormControl>
            {/* ========================================================================= */}
            <FormControl fullWidth>
              <TextField
                name="description"
                label="Tipo de trabajo (descripción)"
                variant="outlined"
                style={{ marginTop: "25px" }}
                value={description}
                onChange={handleChange}
              />
            </FormControl>
            {/* ========================================================================= */}
            <FormControl fullWidth>
              <div
                className="horizontal-separate"
                style={{
                  marginTop: "20px",
                }}
              >
                <TextField
                  type="number"
                  name="totalExpense"
                  label="Valor Total"
                  variant="outlined"
                  fullWidth
                  value={totalExpense}
                  onChange={handleChange}
                  style={{ width: "48%" }}
                />
                <Button
                  variant="contained"
                  component="label"
                  style={{ width: "48%" }}
                >
                  Sube la factura
                  <input type="file" hidden />
                </Button>
              </div>
            </FormControl>

            <div className="Expense__button">
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
              >
                Crear Gasto
              </Button>
            </div>
          </form>
          <div style={{ marginTop: "20px" }}>
            {message && (
              <MuiAlert elevation={6} variant="filled" severity="success">
                {message}
              </MuiAlert>
            )}
            {err && (
              <MuiAlert elevation={6} variant="filled" severity="error">
                {err}
              </MuiAlert>
            )}
          </div>
        </div>
      </Container>
    </>
  );
};
export default Content;
