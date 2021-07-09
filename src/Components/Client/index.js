import React, { useState } from "react";
import Content from "./page";
// AXIOS
import { BASE_URL } from "../../config/api";
import axios from "axios";

const Client = () => {
  const token = window.localStorage.getItem("token");
  const headers = {
    "authorization-bearer": token,
  };
  // ALERT
  const [err, setErr] = useState(false);
  const [message, setMessage] = useState(false);
  // STATE
  const [state, setState] = useState({
    businessName: "",
    typeOfId: "",
    numberId: "",
    firstName: "",
    phone: "",
    lastName: "",
    description: "",
  });
  // ==============================================================

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setState({ ...state, [name]: value });
    setErr(false);
    setMessage(false);
  };

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    // ENVIAR FORMULARIO
    try {
      const URL = `${BASE_URL}/client`;
      const { data } = await axios.post(URL, state, { headers });
      const { errors } = data;
      if (errors?.length > 0) return setErr("Completa todos los campos");
      setMessage("Cliente creado con éxito");
      // ESTA AUTORIZADO
    } catch ({ message }) {
      console.log(message);
    }
  };

  return (
    <Content
      state={state}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      err={err}
      message={message}
    />
  );
};

export default Client;
