import React, { useState } from "react";
import Content from "./page";
// AXIOS
import { BASE_URL } from "../../config/api";
import axios from "axios";

const Client = () => {
  const [errors, setErrors] = useState(false);
  const [message, setMessage] = useState(false);
  const [state, setState] = useState({
    businessName: "",
    typeOfId: "",
    numberId: "",
    firstName: "",
    phone: "",
    lastName: "",
    description: "",
  });

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setState({ ...state, [name]: value });
    setErrors(false)
  };

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    // ENVIAR FORMULARIO
    try {
      const token = window.localStorage.getItem("token");
      const headers = {
        "authorization-bearer": token,
      };
      const URL = `${BASE_URL}/client`;
      const { data } = await axios.post(URL, state, { headers });
      const { errors } = data;
      if (errors) return setErrors(errors);
      // ESTA AUTORIZADO
      const { isAllowed, message } = data;
      if (isAllowed)
        return setErrors([
          {
            msg: message,
          },
        ]);
      setMessage(message);
    } catch ({ message }) {
      console.log(message);
    }
  };

  return (
    <Content
      state={state}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      errors={errors}
      message={message}
    />
  );
};

export default Client;
