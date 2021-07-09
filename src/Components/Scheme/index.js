import React, { useEffect, useState } from "react";
import Content from "./page";
import moment from "moment";
// AXIOS
import { BASE_URL } from "../../config/api";
import axios from "axios";

const Scheme = () => {
  const token = window.localStorage.getItem("token");
  const headers = {
    "authorization-bearer": token,
  };
  // ALERT
  const [err, setErr] = useState(false);
  const [message, setMessage] = useState(false);
  // DATA
  const [clients, setClients] = useState([]);
  // STATE
  const [createProject, setCreateDate] = useState(new Date());
  const [initDate, setInitDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [state, setState] = useState({
    projectName: '',
    client: "",
    budget: "",
    exchangeRate: "",
  });

  // =============================================================
  const handleCreateChange = (date) => setCreateDate(date);
  const handleInitChange = (date) => setInitDate(date);
  const handleEndChange = (date) => setEndDate(date);

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setState({ ...state, [name]: value });
    setErr(false);
    setMessage(false);
  };
  const handleSubmit = async (ev) => {
    ev.preventDefault();
    // ENVIAR FORMULARIO
    const { exchangeRate, budget } = state;
    const body = {
      ...state,
      dollars: exchangeRate * budget,
      createProject: moment(createProject).unix(),
      initDate: moment(initDate).unix(),
      endDate: moment(endDate).unix(),
    };
    // POST
    try {
      const URL = `${BASE_URL}/project`;
      const { data } = await axios.post(URL, body, { headers });
      const { errors } = data;
      if (errors?.length > 0) return setErr("Debes completar todos los campos");
      setMessage("Proyecto creado con éxito");
    } catch ({ message }) {
      console.log(message);
    }
  };

  const getAllClients = async () => {
    try {
      const URL = `${BASE_URL}/client`;
      const { data } = await axios.get(URL, { headers });
      const { clientsFound } = data;
      setClients(clientsFound);
    } catch ({ message }) {
      console.log(message);
    }
  };

  useEffect(() => {
    getAllClients();
  }, []);

  // RENDER
  return (
    <Content
      clients={clients}
      state={state}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      err={err}
      message={message}
      // DATES
      createProject={createProject}
      handleCreateChange={handleCreateChange}
      initDate={initDate}
      handleInitChange={handleInitChange}
      endDate={endDate}
      handleEndChange={handleEndChange}
    />
  );
};

export default Scheme;
