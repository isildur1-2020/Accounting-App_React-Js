import React from "react";
// COMPONENTS
import Menu from "../Menu/index";
import Schedule from "../Schedule/index";
import SubmitButton from "../SubmitButton/index";
import { formatValue } from "../Money/index";
// MATERIAL UI
import MuiAlert from "@material-ui/lab/Alert";
import { CssBaseline, FormControl } from "@material-ui/core";
import { TextField, FormHelperText } from "@material-ui/core";
import { InputLabel, Select, MenuItem, Container } from "@material-ui/core";
//======================================================================

const horizontalSeparate = {
    marginBottom: "20px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-end",
};

const Content = ({
    err,
    state,
    message,
    loading,
    exchangeRate,
    selectedDate,
    handleChange,
    handleSubmit,
    projectsFound,
    accountsFound,
    handleDateChange,
}) => {
    const {
        project,
        typeOfAdvance,
        colonesValue,
        catalog,
        voucher,
        paymentMethod,
        comment,
    } = state;
    return (
        <>
            <Menu title="Crear Ingreso" />
            <Container component="main" maxWidth="md">
                <CssBaseline />
                <div className="Scheme-container">
                    <form onSubmit={handleSubmit}>
                        <div style={horizontalSeparate}>
                            <FormControl style={{ width: "48%" }}>
                                <InputLabel id="project-label">
                                    Proyecto
                                </InputLabel>
                                <Select
                                    required
                                    labelId="project-label"
                                    name="project"
                                    value={project}
                                    onChange={handleChange}
                                >
                                    <MenuItem value="">
                                        <em>Seleccionar</em>
                                    </MenuItem>
                                    {projectsFound &&
                                        projectsFound.map(
                                            ({ id, projectName }) => (
                                                <MenuItem key={id} value={id}>
                                                    {projectName}
                                                </MenuItem>
                                            )
                                        )}
                                </Select>
                                <FormHelperText>
                                    Seleccione un proyecto
                                </FormHelperText>
                            </FormControl>
                            <FormControl style={{ width: "48%" }}>
                                <Schedule
                                    label="Fecha de creación"
                                    selectedDate={selectedDate}
                                    handleDateChange={handleDateChange}
                                />
                            </FormControl>
                        </div>
                        {/* =============================================================================== */}
                        <div style={horizontalSeparate}>
                            <FormControl style={{ width: "48%" }}>
                                <InputLabel id="typeOfAdvance-label">
                                    Tipo de adelanto
                                </InputLabel>
                                <Select
                                    required
                                    labelId="typeOfAdvance-label"
                                    name="typeOfAdvance"
                                    value={typeOfAdvance}
                                    onChange={handleChange}
                                >
                                    <MenuItem value="">
                                        <em>Seleccionar</em>
                                    </MenuItem>
                                    <MenuItem value="Anticipo">
                                        <em>Anticipo</em>
                                    </MenuItem>
                                    <MenuItem value="Avance">
                                        <em>Avance</em>
                                    </MenuItem>
                                    <MenuItem value="Cancelación">
                                        <em>Cancelación</em>
                                    </MenuItem>
                                    <MenuItem value="Otro">
                                        <em>Otro</em>
                                    </MenuItem>
                                </Select>
                                <FormHelperText>
                                    Seleccione un tipo de adelanto
                                </FormHelperText>
                            </FormControl>
                            <FormControl style={{ width: "22%" }}>
                                <TextField
                                    required
                                    type="number"
                                    name="colonesValue"
                                    label={`Monto adelanto ${formatValue(
                                        colonesValue
                                    )}`}
                                    variant="outlined"
                                    value={colonesValue}
                                    onChange={handleChange}
                                />
                            </FormControl>
                            <FormControl style={{ width: "22%" }}>
                                <TextField
                                    required
                                    name="dollarsValue"
                                    label={`Dólares ${formatValue(
                                        exchangeRate * colonesValue
                                    )}`}
                                    variant="outlined"
                                    value={(
                                        exchangeRate * colonesValue
                                    ).toFixed(2)}
                                />
                            </FormControl>
                        </div>
                        {/* =============================================================================== */}
                        <div style={horizontalSeparate}>
                            <FormControl style={{ width: "48%" }}>
                                <InputLabel id="catalog-label">
                                    Catálogo
                                </InputLabel>
                                <Select
                                    required
                                    labelId="catalog-label"
                                    name="catalog"
                                    value={catalog}
                                    onChange={handleChange}
                                >
                                    <MenuItem value="">
                                        <em>Seleccionar</em>
                                    </MenuItem>
                                    {accountsFound &&
                                        accountsFound.map(
                                            ({ id, subAccountName }) => (
                                                <MenuItem key={id} value={id}>
                                                    {subAccountName}
                                                </MenuItem>
                                            )
                                        )}
                                </Select>
                                <FormHelperText>
                                    Seleccione una cuenta
                                </FormHelperText>
                            </FormControl>

                            <FormControl style={{ width: "22%" }}>
                                <TextField
                                    name="voucher"
                                    label="# Comprobante"
                                    variant="outlined"
                                    value={voucher}
                                    onChange={handleChange}
                                />
                            </FormControl>

                            <FormControl style={{ width: "22%" }}>
                                <InputLabel id="paymentMethod-label">
                                    Método de pago
                                </InputLabel>
                                <Select
                                    required
                                    labelId="paymentMethod-label"
                                    name="paymentMethod"
                                    value={paymentMethod}
                                    onChange={handleChange}
                                >
                                    <MenuItem value="">
                                        <em>Seleccionar</em>
                                    </MenuItem>
                                    <MenuItem value="Contado">
                                        <em>Contado</em>
                                    </MenuItem>
                                    <MenuItem value="Crédito">
                                        <em>Crédito</em>
                                    </MenuItem>
                                </Select>
                                <FormHelperText>
                                    Seleccione un método de pago
                                </FormHelperText>
                            </FormControl>
                        </div>
                        {/* =============================================================================== */}
                        <FormControl fullWidth>
                            <TextField
                                name="comment"
                                label="Comentario"
                                variant="outlined"
                                value={comment}
                                onChange={handleChange}
                            />
                        </FormControl>
                        <SubmitButton loading={loading} text="Crear Ingreso" />
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
