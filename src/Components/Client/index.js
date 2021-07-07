import React, { useState } from "react";
import Content from "./page";

const Client = () => {
  const [state, setState] = useState({
    businessName: "",
    typeOfId: "",
    idNumber: null,
    firstName: "",
    lastName: "",
    description: "",
  });

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setState({ ...state, [name]: value });
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
    // ENVIAR FORMULARIO
  };

  return (
    <Content
      state={state}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
    />
  );
};

export default Client;
