import React, { useState } from "react";
import Content from "./page";
// AXIOS
import { BASE_URL, headers } from "../../config/api";
import axios from "axios";

const Signup = () => {
  // STATE
  const [err, setErr] = useState(false);
  const [message, setMessage] = useState(false);
  const [loading, setLoading] = useState(false);
  const [state, setState] = useState({
    username: "",
    password: "",
    secret: "",
  });

  const resetForm = () => {
    setState({
      username: "",
      password: "",
      secret: "",
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
      setLoading(true);
      const URL = `${BASE_URL}/user`;
      const { data } = await axios.post(URL, state, { headers });
      setLoading(false);
      const { invalid, errors } = data;
      if (invalid) return setErr("Verificación inválida");
      else if (errors?.length > 0) return setErr("Completa todos los campos");
      setMessage(data?.message);
      resetForm();
    } catch ({ message }) {
      console.log(message);
      setLoading(false);
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
      err={err}
      state={state}
      message={message}
      handleSubmit={handleSubmit}
      handleChange={handleChange}
    />
  );
};

export default Signup;
