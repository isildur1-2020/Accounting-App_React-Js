import React from "react";
import PropTypes from "prop-types";
import "./styles.css";
// MATERIAL UI
import { Button } from "@material-ui/core";
import CircularProgress from "@material-ui/core/CircularProgress";

const SubmitButton = ({ loading, text }) => {
  return (
    <div className="SubmitButton">
      {!loading ? (
        <Button fullWidth type="submit" color="primary" variant="contained">
          {text}
        </Button>
      ) : (
        <CircularProgress />
      )}
    </div>
  );
};

SubmitButton.propTypes = {
  loading: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
};

export default SubmitButton;
