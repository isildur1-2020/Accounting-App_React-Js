import React from "react";
// COMPONENTS
import Menu from "../Menu/index";
import SubmitButton from "../SubmitButton/index";
// MATERIAL UI
import MuiAlert from "@material-ui/lab/Alert";
import { CssBaseline } from "@material-ui/core";
import { Container, FormControl, TextField } from "@material-ui/core";
//======================================================================

const Content = ({
    err,
    state,
    loading,
    message,
    handleSubmit,
    handleChange,
}) => {
    const { username, password, secret } = state;
    return (
        <>
            <Menu title="Crear Usuario" />
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
                                    required
                                    autoFocus
                                    name="username"
                                    label="Nombre de usuario"
                                    variant="outlined"
                                    value={username}
                                    onChange={handleChange}
                                />
                            </FormControl>
                            <FormControl style={{ width: "48%" }}>
                                <TextField
                                    required
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
                                required
                                type="password"
                                name="secret"
                                label="Verificación"
                                variant="outlined"
                                value={secret}
                                onChange={handleChange}
                            />
                        </FormControl>
                        <SubmitButton loading={loading} text="Crear Usuario" />
                    </form>
                    <div style={{ marginTop: "20px" }}>
                        {message && (
                            <MuiAlert
                                elevation={6}
                                variant="filled"
                                severity="success"
                            >
                                {message}
                            </MuiAlert>
                        )}
                        {err && (
                            <MuiAlert
                                elevation={6}
                                variant="filled"
                                severity="error"
                            >
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
