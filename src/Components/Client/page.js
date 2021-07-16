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
import MuiAlert from "@material-ui/lab/Alert";

//======================================================================
const Content = ({ state, handleChange, handleSubmit, message, err }) => {
  const {
    businessName,
    typeOfId,
    numberId,
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
        <div className="Client-container">
          <form onSubmit={handleSubmit}>
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

            <div
              className="horizontal-separate"
              style={{ margin: "20px 0", alignItems: "flex-end" }}
            >
              <FormControl style={{ width: "48%" }}>
                <InputLabel id="id-label">Tipo de identificación</InputLabel>
                <Select
                  fullWidth
                  required
                  labelId="id-label"
                  name="typeOfId"
                  value={typeOfId}
                  onChange={handleChange}
                >
                  <MenuItem value="">
                    <em>Seleccionar</em>
                  </MenuItem>
                  <MenuItem value="cedula">Cédula</MenuItem>
                  <MenuItem value="pasaporte">Pasaporte</MenuItem>
                  <MenuItem value="cedula juridica">Cédula Jurídica</MenuItem>
                </Select>
                <FormHelperText>Seleccione un tipo</FormHelperText>
              </FormControl>

              <FormControl style={{ width: "48%" }}>
                <TextField
                  type="number"
                  required
                  name="numberId"
                  label="Número de identificación"
                  variant="outlined"
                  value={numberId}
                  onChange={handleChange}
                />
              </FormControl>
            </div>
            {/* ========================================================================= */}
            <FormControl fullWidth>
              <div className="horizontal-separate" style={{ margin: "15px 0" }}>
                <TextField
                  required
                  name="firstName"
                  label="Nombres"
                  variant="outlined"
                  style={{ width: "48%" }}
                  value={firstName}
                  onChange={handleChange}
                />
                <TextField
                  required
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
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
              >
                Crear Cliente
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
