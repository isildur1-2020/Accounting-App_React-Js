import React from "react";
import "./styles.css";
// COMPONENTS
import Menu from "../Menu/index";
// MATERIAL UI
import {
  Container,
  CssBaseline,
  FormControl,
  TextField,
  Button,
} from "@material-ui/core";
import MuiAlert from "@material-ui/lab/Alert";

//======================================================================

const Content = ({ state, handleSubmit, handleChange, err, message }) => {
  const { username, password, secret } = state;

  return (
    <>
      <Menu title="Crear Cuenta" />
      <Container component="main" maxWidth="sm">
        <CssBaseline />
        <div className="Expense-container">
          <form onSubmit={handleSubmit}>
            <div
              className="horizontal-separate"
              style={{ alignItems: "flex-end" }}
            >
              <FormControl style={{ width: "48%" }}>
                <TextField
                  //   required
                  name="username"
                  label="Nombre de usuario"
                  variant="outlined"
                  value={username}
                  onChange={handleChange}
                />
              </FormControl>
              <FormControl style={{ width: "48%" }}>
                <TextField
                  //   required
                  type="password"
                  name="password"
                  label="Contraseña"
                  variant="outlined"
                  value={password}
                  onChange={handleChange}
                />
              </FormControl>
            </div>
            {/* ========================================================================= */}

            <FormControl fullWidth style={{ marginTop: "20px" }}>
              <TextField
                //   required
                type="password"
                name="secret"
                label="Verificación"
                variant="outlined"
                value={secret}
                onChange={handleChange}
              />
            </FormControl>
            {/* ========================================================================= */}

            <div className="Expense__button">
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
              >
                Crear Usuario
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
