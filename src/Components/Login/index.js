import React, { useState } from "react";
import Content from "./page";
import { useHistory } from "react-router-dom";
// AXIOS
import axios from "axios";
import { BASE_URL } from "../../config/api";
// REDUX
import { useDispatch } from "react-redux";
import { authAction } from "../../redux/actions/authAction";

const SignIn = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [err, setErr] = useState(false);
  const [loading, setLoading] = useState(false);
  const [state, setState] = useState({
    username: "",
    password: "",
  });

  const handleOnChange = ({ target }) => {
    const { name, value } = target;
    setState({ ...state, [name]: value });
    setErr(false);
  };

  const auth = async () => {
    const URL = `${BASE_URL}/login`;
    try {
      setLoading(true);
      const { data } = await axios.post(URL, state);
      const { authenticated, message, token } = data;
      setLoading(false);
      if (!authenticated) return setErr(message);
      dispatch(authAction());
      window.localStorage.setItem("token", token);
      history.push("/scheme");
    } catch ({ message }) {
      console.log(message);
      setLoading(false);
    }
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
    // ENVIAR FORMULARIO
    auth();
  };

  return (
    <Content
      state={state}
      handleSubmit={handleSubmit}
      handleOnChange={handleOnChange}
      loading={loading}
      err={err}
    />
  );
};
export default SignIn;
