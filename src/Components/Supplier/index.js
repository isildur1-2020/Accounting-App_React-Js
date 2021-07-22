import React, { useState } from "react";
import Content from "./page";
// AXIOS
import axios from "axios";
import { BASE_URL, headers } from "../../config/api";

const Client = () => {
  // ALERT
  const [err, setErr] = useState(false);
  const [message, setMessage] = useState(false);
  const [loading, setLoading] = useState(false);
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

  const resetForm = () => {
    setState({
      businessName: "",
      typeOfId: "",
      numberId: "",
      firstName: "",
      lastName: "",
      phone: "",
      description: "",
    });

    setTimeout(() => {
      setMessage(false);
    }, 1500);
  };

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    // VERIFICAR LOADING
    if (loading) return;
    // ENVIAR FORMULARIO
    try {
      const URL = `${BASE_URL}/supplier`;
      setLoading(true);
      const { data } = await axios.post(URL, state, { headers });
      setLoading(false);
      const { errors } = data;
      if (errors?.length > 0) return setErr("Debes completar todos los campos");
      setMessage("Proveedor creado con éxito");
      resetForm();
    } catch ({ message }) {
      console.log(message);
      setLoading(false);
    }
  };

  return (
    <Content
      err={err}
      state={state}
      loading={loading}
      message={message}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
    />
  );
};

export default Client;
