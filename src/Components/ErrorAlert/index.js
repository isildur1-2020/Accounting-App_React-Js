import React from "react";
import MuiAlert from "@material-ui/lab/Alert";

const styleErrorAlert = {
  marginTop: "20px",
};

const ErrorAlert = ({ err }) => {
  return (
    <div style={styleErrorAlert}>
      {err && (
        <MuiAlert elevation={6} variant="filled" severity="error">
          {err}
        </MuiAlert>
      )}
    </div>
  );
};

export default ErrorAlert;
