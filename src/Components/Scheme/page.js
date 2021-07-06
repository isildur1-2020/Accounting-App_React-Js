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

//======================================================================
const page = ({
  state,
  handleChange,
  handleSubmit,
  // DATES
  createDate,
  handleCreateChange,

  initDate,
  handleInitChange,

  endDate,
  handleEndChange,
}) => {
  const { client, budget } = state;
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
                id="client"
                value={client}
                onChange={handleChange}
              >
                <MenuItem value="">
                  <em>Seleccionar</em>
                </MenuItem>
                <MenuItem value={1}>One</MenuItem>
                <MenuItem value={2}>Two</MenuItem>
                <MenuItem value={3}>Three</MenuItem>
              </Select>
              <FormHelperText>Seleccione un cliente</FormHelperText>
            </FormControl>

            <FormControl>
              <div style={{ display: "flex", margin: "10px 0" }}>
                <Schedule
                  label="Creación"
                  selectedDate={createDate}
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
                label="Presupuesto General"
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
                  name="colones"
                  label="Colones"
                  variant="outlined"
                  style={{ marginRight: "30px" }}
                  fullWidth
                  value={budget*1}
                  onChange={handleChange}
                />
                <TextField
                  type="number"
                  name="dollars"
                  label="Dólares"
                  variant="outlined"
                  fullWidth
                  value={budget * 0.0016}
                  onChange={handleChange}
                />
              </div>
            </FormControl>

            <div className="Scheme__button">
              <Button variant="contained" color="primary" fullWidth>
                Crear Proyecto
              </Button>
            </div>
          </form>
        </div>
      </Container>
    </>
  );
};
export default page;
