import React, { useState } from "react";
import Content from "./page";
// AXIOS
import axios from "axios";
import { BASE_URL, headers } from "../../config/api";

const Catalog = () => {
  // STATE
  const [err, setErr] = useState(false);
  const [message, setMessage] = useState(false);
  const [state, setState] = useState({
    mayorAccount: "",
    mayorAccountName: "",
    subAccount: "",
    subAccountName: "",
    debitColones: "",
    creditColones: "",
    debitDollars: "",
    creditDollars: "",
    exchangeRate: "",
    orderReport: "",
  });

  const resetForm = () => {
    setState({
      mayorAccount: "",
      mayorAccountName: "",
      subAccount: "",
      subAccountName: "",
      debitColones: "",
      creditColones: "",
      debitDollars: "",
      creditDollars: "",
      exchangeRate: "",
      orderReport: "",
    });

    setTimeout(() => {
      setMessage(false);
    }, 1500);
  };

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    // ENVIAR FORMULARIO
    try {
      const URL = `${BASE_URL}/catalog`;
      const { data } = await axios.post(URL, state, { headers });
      const { errors } = data;
      if (errors?.length > 0) return setErr("Completa todos los campos");
      setMessage(data?.message);
      resetForm();
    } catch ({ message }) {
      console.log(message);
    }
  };

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setState({
      ...state,
      [name]: value,
    });
    setErr(false);
  };

  return (
    <Content
      state={state}
      handleSubmit={handleSubmit}
      handleChange={handleChange}
      err={err}
      message={message}
    />
  );
};

export default Catalog;
