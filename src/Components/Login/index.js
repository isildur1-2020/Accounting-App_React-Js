import React, { useState } from "react";
import Content from "./page";
import { useHistory } from "react-router-dom";
// AXIOS
import axios from "axios";
import { token, headers, BASE_URL } from "../../config/api";
// REDUX
import { useDispatch, useSelector } from "react-redux";
import { authAction } from "../../redux/actions/authAction";
import { useEffect } from "react";

const SignIn = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  // STATE
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
    try {
      setLoading(true);
      const URL = `${BASE_URL}/login`;
      const { data } = await axios.post(URL, state);
      const { authenticated, message, token } = data;
      setLoading(false);
      if (!authenticated) return setErr(message);

      window.localStorage.setItem("token", token);
      dispatch(authAction());
      history.push("/home");
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

  //===================================================================
  /*VERIFICAR SI ESTÁ AUTENTICADO*/
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const isAuth = async () => {
    try {
      if (!isAuthenticated) {
        if (token) {
          const URL = `${BASE_URL}/auth`;
          const { data } = await axios.post(URL, null, { headers });
          if (data.isAllowed) dispatch(authAction());
        }
      }
    } catch ({ message }) {
      console.log(message);
    }
  };

  useEffect(() => {
    isAuth();
  }, [isAuthenticated]);

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
