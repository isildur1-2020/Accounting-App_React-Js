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
const page = ({
  clients,
  state,
  handleChange,
  handleSubmit,
  err,
  message,
  // DATES
  createProject,
  handleCreateChange,

  initDate,
  handleInitChange,

  endDate,
  handleEndChange,
}) => {
  const { client, budget, exchangeRate } = state;
  return (
    <>
      <Menu title="Crear Proyecto" />
      <Container component="main" maxWidth="sm">
        <CssBaseline />
        <div className="Scheme-container">
          <form noValidate onSubmit={handleSubmit}>
            <FormControl fullWidth>
              <InputLabel id="client-label">Cliente</InputLabel>
              <Select
                labelId="client-label"
                name="client"
                value={client}
                onChange={handleChange}
              >
                <MenuItem value="">
                  <em>Seleccionar</em>
                </MenuItem>
                {clients?.length &&
                  clients.map(({ id, firstName, lastName }) => (
                    <MenuItem
                      key={id}
                      value={id}
                    >{`${firstName} ${lastName}`}</MenuItem>
                  ))}
              </Select>
              <FormHelperText>Seleccione un cliente</FormHelperText>
            </FormControl>

            <FormControl>
              <div style={{ display: "flex", margin: "10px 0" }}>
                <Schedule
                  label="Creación"
                  selectedDate={createProject}
                  handleDateChange={handleCreateChange}
                />
                <Schedule
                  label="Inicio"
                  selectedDate={initDate}
                  handleDateChange={handleInitChange}
                />
                <Schedule
                  label="Fin"
                  selectedDate={endDate}
                  handleDateChange={handleEndChange}
                />
              </div>
            </FormControl>

            <FormControl fullWidth>
              <TextField
                type="number"
                name="budget"
                label="Presupuesto General (Colones)"
                variant="outlined"
                style={{ marginTop: "20px" }}
                value={budget}
                onChange={handleChange}
              />
            </FormControl>

            <FormControl fullWidth>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginTop: "20px",
                }}
              >
                <TextField
                  type="number"
                  name="exchangeRate"
                  label="Tasa de cambio"
                  variant="outlined"
                  style={{ marginRight: "30px" }}
                  fullWidth
                  value={exchangeRate}
                  onChange={handleChange}
                />
                <TextField
                  type="number"
                  name="dollars"
                  label="Dólares"
                  variant="outlined"
                  fullWidth
                  value={budget * exchangeRate}
                />
              </div>
            </FormControl>

            <div className="Scheme__button">
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
              >
                Crear Proyecto
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
export default page;
