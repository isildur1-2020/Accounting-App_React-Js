import React, { useState } from "react";
import Content from "./page";
// AXIOS
import axios from "axios";
import { BASE_URL } from "../../config/api";

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
    lastName: "",
    phone: "",
    description: "",
  });
  // ==========================================================

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
      const URL = `${BASE_URL}/supplier`;
      const { data } = await axios.post(URL, state, { headers });
      const { errors } = data;
      if (errors?.length > 0) return setErr("Debes completar todos los campos");
      setMessage("Proveedor creado con éxito");
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
