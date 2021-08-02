import React from "react";
import "./styles.css";
// COMPONENTS
import Menu from "../Menu/index";
import Schedule from "../Schedule/index";
import SubmitButton from "../SubmitButton/index";
import { money, formatValue } from "../Money/index";
// MATERIAL UI
import MuiAlert from "@material-ui/lab/Alert";
import { CssBaseline, FormControl } from "@material-ui/core";
import { TextField, FormHelperText } from "@material-ui/core";
import { InputLabel, Select, MenuItem, Container } from "@material-ui/core";
//======================================================================

const Content = ({
    err,
    state,
    loading,
    clients,
    message,
    handleChange,
    handleSubmit,
    // DATES
    createProject,
    handleCreateChange,

    initDate,
    handleInitChange,

    endDate,
    handleEndChange,
}) => {
    const { projectName, client, budget, exchangeRate } = state;
    return (
        <>
            <Menu title="Crear Proyecto" />
            <Container component="main" maxWidth="sm">
                <CssBaseline />
                <div className="Scheme-container">
                    <form onSubmit={handleSubmit}>
                        <div
                            className="horizontal-separate"
                            style={{ alignItems: "flex-end" }}
                        >
                            <FormControl style={{ width: "48%" }}>
                                <TextField
                                    required
                                    autoFocus
                                    name="projectName"
                                    label="Nombre del proyecto"
                                    variant="outlined"
                                    value={projectName}
                                    onChange={handleChange}
                                />
                            </FormControl>
                            <FormControl style={{ width: "48%" }}>
                                <InputLabel id="client-label">
                                    Cliente
                                </InputLabel>
                                <Select
                                    required
                                    labelId="client-label"
                                    name="client"
                                    value={client}
                                    onChange={handleChange}
                                >
                                    <MenuItem value="">
                                        <em>Seleccionar</em>
                                    </MenuItem>
                                    {clients?.length &&
                                        clients.map(
                                            ({
                                                id,
                                                firstName,
                                                lastName,
                                                numberId,
                                            }) => (
                                                <MenuItem
                                                    key={id}
                                                    value={id}
                                                >{`${firstName} ${lastName} - ${numberId}`}</MenuItem>
                                            )
                                        )}
                                </Select>
                                <FormHelperText>
                                    Seleccione un cliente
                                </FormHelperText>
                            </FormControl>
                        </div>
                        {/* =============================================================================== */}

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
                                required
                                type="number"
                                name="budget"
                                label={`Presupuesto General (Colones) ${formatValue(
                                    budget
                                )}`}
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
                                    required
                                    fullWidth
                                    type="number"
                                    name="exchangeRate"
                                    variant="outlined"
                                    label={`Tasa de cambio ${formatValue(
                                        exchangeRate
                                    )}`}
                                    style={{ marginRight: "30px" }}
                                    value={exchangeRate}
                                    onChange={handleChange}
                                />
                                <TextField
                                    fullWidth
                                    type="number"
                                    name="dollars"
                                    label={`Dólares ${money(
                                        budget * exchangeRate
                                    )}`}
                                    variant="outlined"
                                    value={(budget / exchangeRate).toFixed(2)}
                                />
                            </div>
                        </FormControl>
                        <SubmitButton loading={loading} text="Crear Proyecto" />
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
