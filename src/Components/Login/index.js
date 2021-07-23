import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Content from "./page";
// REDUX
import { useDispatch, useSelector } from "react-redux";
import { authAction } from "../../redux/actions/authAction";
// AXIOS
import axios from "axios";
import { token, headers, BASE_URL } from "../../config/api";

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

  //=========================================================================
  /* ENVIAR FORMULARIO */
  const auth = async () => {
    const URL = `${BASE_URL}/login`;
    try {
      setLoading(true);
      const { data } = await axios.post(URL, state);
      const { authenticated, message, token } = data;
      setLoading(false);
      if (!authenticated) return setErr(message);
      // AUTENTICADO
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
    auth();
  };

  //=========================================================================
  /* VERIFICAR SI ESTÁ AUTENTICADO */
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const isAuth = async () => {
    try {
      if (!isAuthenticated) {
        if (localStorage.getItem('token')) {
          console.log(localStorage.getItem('token'))
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
    console.log(token)
    isAuth();
  }, [isAuthenticated]);

  return (
    <Content
      err={err}
      state={state}
      loading={loading}
      handleSubmit={handleSubmit}
      handleOnChange={handleOnChange}
    />
  );
};
export default SignIn;
