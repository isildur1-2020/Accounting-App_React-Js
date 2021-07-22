import React from "react";
// COMPONENTS
import Menu from "../Menu/index";
import SubmitButton from "../SubmitButton/index";
// MATERIAL UI
import MuiAlert from "@material-ui/lab/Alert";
import { CssBaseline } from "@material-ui/core";
import { Container, FormControl, TextField, Button } from "@material-ui/core";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
//======================================================================

const accountStyle = {
  width: "48%",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
};

const Content = ({
  err,
  state,
  loading,
  message,
  handleSubmit,
  handleChange,
  handleChangeAccount,
  handleDeleteAccount,
}) => {
  const {
    mayorAccount,
    mayorAccountName,
    subAccount,
    subAccountName,
    debitColones,
    creditColones,
    debitDollars,
    creditDollars,
    exchangeRate,
    orderReport,
  } = state;

  return (
    <>
      <Menu title="Crear Cuenta" />
      <Container component="main" maxWidth="md">
        <CssBaseline />
        <div className="Expense-container">
          <form onSubmit={handleSubmit}>
            <div
              className="horizontal-separate"
              style={{ alignItems: "flex-end" }}
            >
              <FormControl style={accountStyle}>
                <TextField
                  required
                  fullWidth
                  name="mayorAccount"
                  label="Cuenta mayor"
                  variant="outlined"
                  value={mayorAccount}
                  onChange={handleChangeAccount}
                />
                <Button onClick={() => handleDeleteAccount("mayorAccount")}>
                  <DeleteOutlineIcon />
                </Button>
              </FormControl>
              <FormControl style={{ width: "48%" }}>
                <TextField
                  required
                  name="mayorAccountName"
                  label="Nombre cuenta mayor"
                  variant="outlined"
                  value={mayorAccountName}
                  onChange={handleChange}
                />
              </FormControl>
            </div>
            {/* ========================================================================= */}

            <div
              className="horizontal-separate"
              style={{ marginTop: "20px", alignItems: "flex-end" }}
            >
              <FormControl style={accountStyle}>
                <TextField
                  required
                  fullWidth
                  name="subAccount"
                  label="Sub cuenta"
                  variant="outlined"
                  value={subAccount}
                  onChange={handleChangeAccount}
                />
                <Button onClick={() => handleDeleteAccount("subAccount")}>
                  <DeleteOutlineIcon />
                </Button>
              </FormControl>
              <FormControl style={{ width: "48%" }}>
                <TextField
                  required
                  name="subAccountName"
                  label="Nombre sub cuenta"
                  variant="outlined"
                  value={subAccountName}
                  onChange={handleChange}
                />
              </FormControl>
            </div>
            {/* ========================================================================= */}

            <div
              className="horizontal-separate"
              style={{ marginTop: "20px", alignItems: "flex-end" }}
            >
              <div className="horizontal-separate" style={{ width: "48%" }}>
                <FormControl style={{ width: "48%" }}>
                  <TextField
                    required
                    type="number"
                    name="debitColones"
                    label="Débito Colones"
                    variant="outlined"
                    value={debitColones}
                    onChange={handleChange}
                  />
                </FormControl>
                <FormControl style={{ width: "48%" }}>
                  <TextField
                    required
                    type="number"
                    name="creditColones"
                    label="Crédito Colones"
                    variant="outlined"
                    value={creditColones}
                    onChange={handleChange}
                  />
                </FormControl>
              </div>
              <div className="horizontal-separate" style={{ width: "48%" }}>
                <FormControl style={{ width: "48%" }}>
                  <TextField
                    required
                    type="number"
                    name="debitDollars"
                    label="Débito Dólares"
                    variant="outlined"
                    value={debitDollars}
                    onChange={handleChange}
                  />
                </FormControl>
                <FormControl style={{ width: "48%" }}>
                  <TextField
                    required
                    type="number"
                    name="creditDollars"
                    label="Crédito Dólares"
                    variant="outlined"
                    value={creditDollars}
                    onChange={handleChange}
                  />
                </FormControl>
              </div>
            </div>
            {/* ========================================================================= */}

            <div
              className="horizontal-separate"
              style={{ marginTop: "20px", alignItems: "flex-end" }}
            >
              <FormControl style={{ width: "28%" }}>
                <TextField
                  required
                  type="number"
                  name="exchangeRate"
                  label="Tasa de cambio"
                  variant="outlined"
                  value={exchangeRate}
                  onChange={handleChange}
                />
              </FormControl>
              <FormControl style={{ width: "68%" }}>
                <TextField
                  required
                  type="number"
                  name="orderReport"
                  label="Orden Reporte"
                  variant="outlined"
                  value={orderReport}
                  onChange={handleChange}
                />
              </FormControl>
            </div>
            {/* ========================================================================= */}

            <SubmitButton loading={loading} text="Crear Cuenta" />
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
