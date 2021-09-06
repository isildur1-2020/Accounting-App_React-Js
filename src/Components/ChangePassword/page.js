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
    const { password, newPassword } = state;
    return (
        <>
            <Menu title="Cambiar Contraseña" />
            <Container component="main" maxWidth="sm">
                <CssBaseline />
                <div className="Expense-container">
                    <form onSubmit={handleSubmit}>
                        <FormControl fullWidth>
                            <TextField
                                required
                                autoFocus
                                type="password"
                                name="password"
                                label="Contraseña"
                                variant="outlined"
                                value={password}
                                onChange={handleChange}
                            />
                        </FormControl>
                        {/* ========================================================================= */}

                        <FormControl fullWidth style={{ marginTop: "20px" }}>
                            <TextField
                                required
                                type="password"
                                name="newPassword"
                                label="Nueva Contraseña"
                                variant="outlined"
                                value={newPassword}
                                onChange={handleChange}
                            />
                        </FormControl>
                        <SubmitButton
                            loading={loading}
                            text="Cambiar Contraseña"
                        />
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
