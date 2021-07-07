import React from "react";
import "./styles.css";
// COMPONENTS
import Menu from "../Menu/index";
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
const Content = ({ state, handleChange, handleSubmit }) => {
  const {
    businessName,
    typeOfId,
    idNumber,
    firstName,
    lastName,
    description,
    phone,
  } = state;
  return (
    <>
      <Menu title="Crear Cliente" />
      <Container component="main" maxWidth="sm">
        <CssBaseline />
        <div className="Expense-container">
          <form noValidate onSubmit={handleSubmit}>
            <FormControl fullWidth>
              <TextField
                name="businessName"
                label="Nombre del negocio"
                variant="outlined"
                value={businessName}
                onChange={handleChange}
              />
            </FormControl>
            {/* ========================================================================= */}

            <div className="horizontal-separate" style={{ margin: "20px 0" }}>
              <FormControl style={{ width: "48%" }}>
                <InputLabel id="id-label">Tipo de identificación</InputLabel>
                <Select
                  fullWidth
                  labelId="id-label"
                  name="typeOfId"
                  value={typeOfId}
                  onChange={handleChange}
                >
                  <MenuItem value="">
                    <em>Seleccionar</em>
                  </MenuItem>
                  <MenuItem value={1}>One</MenuItem>
                  <MenuItem value={2}>Two</MenuItem>
                  <MenuItem value={3}>Three</MenuItem>
                </Select>
                <FormHelperText>Seleccione un tipo</FormHelperText>
              </FormControl>

              <FormControl style={{ width: "48%" }}>
                <TextField
                  type="number"
                  name="idNumber"
                  label="Número de identificación"
                  variant="outlined"
                  value={idNumber}
                  onChange={handleChange}
                />
              </FormControl>
            </div>
            {/* ========================================================================= */}
            <FormControl fullWidth>
              <div className="horizontal-separate" style={{ margin: "15px 0" }}>
                <TextField
                  name="firstName"
                  label="Nombres"
                  variant="outlined"
                  style={{ width: "48%" }}
                  value={firstName}
                  onChange={handleChange}
                />
                <TextField
                  name="lastName"
                  label="Apellidos"
                  variant="outlined"
                  style={{ width: "48%" }}
                  value={lastName}
                  onChange={handleChange}
                />
              </div>
            </FormControl>
            {/* ========================================================================= */}
            <FormControl fullWidth>
              <div className="horizontal-separate" style={{ margin: "15px 0" }}>
                <TextField
                  type="number"
                  name="phone"
                  label="Teléfono"
                  variant="outlined"
                  style={{ width: "29%" }}
                  value={phone}
                  onChange={handleChange}
                />
                <TextField
                  name="description"
                  label="Observaciones"
                  variant="outlined"
                  style={{ width: "69%" }}
                  value={description}
                  onChange={handleChange}
                />
              </div>
            </FormControl>
            {/* ========================================================================= */}
            <div className="Expense__button">
              <Button variant="contained" color="primary" fullWidth>
                Crear Cliente
              </Button>
            </div>
          </form>
        </div>
      </Container>
    </>
  );
};

export default Content;
