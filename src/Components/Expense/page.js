import React from "react";
import "./styles.css";
// COMPONENTS
import Menu from "../Menu/index";
import Schedule from "../Schedule/index";
import SubmitButton from "../SubmitButton/index";
// MATERIAL UI
import MuiAlert from "@material-ui/lab/Alert";
import { InputLabel, Select, MenuItem } from "@material-ui/core";
import { TextField, Button, FormHelperText } from "@material-ui/core";
import { Container, CssBaseline, FormControl } from "@material-ui/core";
//======================================================================

const Content = ({
    err,
    state,
    loading,
    message,
    accounts,
    projects,
    suppliers,
    handleChange,
    handleSubmit,
    refOrderFile,
    fileSelected,
    setFileSelected,
    // DATE
    createDate,
    handleCreateChange,
}) => {
    const {
        project,
        supplier,
        orderId,
        description,
        expenseCatalog,
        totalExpense,
        typeOfPayment,
    } = state;
    return (
        <>
            <Menu title="Crear Gasto" />
            <Container component="main" maxWidth="sm">
                <CssBaseline />
                <div className="Expense-container">
                    <form onSubmit={handleSubmit} encType="multipart/form-data">
                        <div className="horizontal-separate">
                            <FormControl style={{ width: "48%" }}>
                                <InputLabel id="project-label">
                                    Proyecto
                                </InputLabel>
                                <Select
                                    required
                                    autoFocus
                                    labelId="project-label"
                                    name="project"
                                    value={project}
                                    onChange={handleChange}
                                >
                                    <MenuItem value="">
                                        <em>Seleccionar</em>
                                    </MenuItem>
                                    {projects &&
                                        projects.map(({ id, projectName }) => (
                                            <MenuItem key={id} value={id}>
                                                {projectName}
                                            </MenuItem>
                                        ))}
                                </Select>
                                <FormHelperText>
                                    Seleccione un proyecto
                                </FormHelperText>
                            </FormControl>

                            <FormControl style={{ width: "48%" }}>
                                <InputLabel id="supplier-label">
                                    Proveedor
                                </InputLabel>
                                <Select
                                    required
                                    labelId="supplier-label"
                                    name="supplier"
                                    value={supplier}
                                    onChange={handleChange}
                                >
                                    <MenuItem value="">
                                        <em>Seleccionar</em>
                                    </MenuItem>
                                    {suppliers &&
                                        suppliers.map(
                                            ({
                                                id,
                                                businessName,
                                                numberId,
                                            }) => (
                                                <MenuItem
                                                    key={id}
                                                    value={id}
                                                >{`${businessName} - ${numberId}`}</MenuItem>
                                            )
                                        )}
                                </Select>
                                <FormHelperText>
                                    Seleccione un proveedor
                                </FormHelperText>
                            </FormControl>
                        </div>
                        {/* ========================================================================= */}
                        <FormControl fullWidth>
                            <div
                                className="horizontal-separate"
                                style={{
                                    margin: "15px 0",
                                    alignItems: "flex-end",
                                }}
                            >
                                <TextField
                                    required
                                    type="number"
                                    name="orderId"
                                    label="N??mero de factura"
                                    variant="outlined"
                                    style={{ width: "48%", marginTop: "20px" }}
                                    value={orderId}
                                    onChange={handleChange}
                                />
                                <Schedule
                                    label="Fecha del gasto"
                                    selectedDate={createDate}
                                    handleDateChange={handleCreateChange}
                                />
                            </div>
                        </FormControl>
                        {/* ========================================================================= */}
                        <div
                            className="horizontal-separate"
                            style={{ alignItems: "flex-end" }}
                        >
                            <FormControl style={{ width: "48%" }}>
                                <InputLabel id="typeOfPayment-label">
                                    M??todo de pago
                                </InputLabel>
                                <Select
                                    required
                                    labelId="typeOfPayment-label"
                                    name="typeOfPayment"
                                    value={typeOfPayment}
                                    onChange={handleChange}
                                >
                                    <MenuItem value="">
                                        <em>Seleccionar</em>
                                    </MenuItem>
                                    <MenuItem value="Contado">
                                        <em>Contado</em>
                                    </MenuItem>
                                    <MenuItem value="Cr??dito">
                                        <em>Cr??dito</em>
                                    </MenuItem>
                                </Select>
                                <FormHelperText>
                                    Seleccione un m??todo de pago
                                </FormHelperText>
                            </FormControl>
                            <FormControl style={{ width: "48%" }}>
                                <InputLabel id="expense-label">
                                    Cat??logo de gastos
                                </InputLabel>
                                <Select
                                    required
                                    labelId="expense-label"
                                    name="expenseCatalog"
                                    onChange={handleChange}
                                    value={expenseCatalog}
                                >
                                    <MenuItem value="">
                                        <em>Seleccionar</em>
                                    </MenuItem>
                                    {accounts &&
                                        accounts.map(({ id, accountName }) => (
                                            <MenuItem key={id} value={id}>
                                                {accountName}
                                            </MenuItem>
                                        ))}
                                </Select>
                                <FormHelperText>
                                    Seleccione un gasto
                                </FormHelperText>
                            </FormControl>
                        </div>
                        {/* ========================================================================= */}
                        <FormControl fullWidth>
                            <div
                                className="horizontal-separate"
                                style={{
                                    marginTop: "20px",
                                }}
                            >
                                <TextField
                                    required
                                    type="number"
                                    name="totalExpense"
                                    label="Valor Total"
                                    variant="outlined"
                                    fullWidth
                                    value={totalExpense}
                                    onChange={handleChange}
                                    style={{ width: "48%" }}
                                />
                                <Button
                                    color={fileSelected ? "primary" : "default"}
                                    variant="contained"
                                    component="label"
                                    style={{ width: "48%" }}
                                >
                                    {fileSelected
                                        ? fileSelected
                                        : "Sube la factura"}
                                    <input
                                        hidden
                                        type="file"
                                        name="orderFile"
                                        ref={refOrderFile}
                                        onChange={(ev) =>
                                            setFileSelected(
                                                ev.target.files[0].name
                                            )
                                        }
                                    />
                                </Button>
                            </div>
                        </FormControl>
                        {/* ========================================================================= */}
                        <FormControl fullWidth>
                            <TextField
                                name="description"
                                label="Tipo de trabajo (descripci??n)"
                                variant="outlined"
                                style={{ marginTop: "25px" }}
                                value={description}
                                onChange={handleChange}
                            />
                        </FormControl>

                        <SubmitButton loading={loading} text="Crear Gasto" />
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
