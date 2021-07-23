import React from "react";
import { useStyles } from "./styles";
// COMPONENTS
import SubmitButton from "../SubmitButton/index";
import ErrorAlert from "../ErrorAlert/index";
// MATERIAL UI
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { CssBaseline, Avatar } from "@material-ui/core";
import { Typography, TextField, Container } from "@material-ui/core";
// =========================================================================

const Content = ({ state, handleSubmit, handleOnChange, loading, err }) => {
  const classes = useStyles();
  const { username, password } = state;

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Iniciar Sesión
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <TextField
            required
            fullWidth
            autoFocus
            margin="normal"
            variant="outlined"
            label="Usuario"
            id="username"
            name="username"
            value={username}
            onChange={handleOnChange}
            autoComplete="username"
          />
          <TextField
            required
            fullWidth
            type="password"
            margin="normal"
            variant="outlined"
            label="Contraseña"
            id="password"
            name="password"
            value={password}
            onChange={handleOnChange}
            autoComplete="current-password"
          />
          <SubmitButton loading={loading} text="Inicia Sesión" />
        </form>
        <ErrorAlert err={err} />
      </div>
    </Container>
  );
};
export default Content;
