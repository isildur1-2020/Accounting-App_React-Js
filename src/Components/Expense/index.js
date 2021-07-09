import React, { useState, useEffect } from "react";
import Content from "./page";
import moment from "moment";
// AXIOS
import axios from "axios";
import { BASE_URL } from "../../config/api";

const Expense = () => {
  // AXIOS
  const token = window.localStorage.getItem("token");
  const headers = {
    "authorization-bearer": token,
  };
  // STATE
  const [err, setErr] = useState(false);
  const [message, setMessage] = useState(false);
  const [projects, setProjects] = useState([]);
  const [suppliers, setSuppliers] = useState([]);
  const [createDate, setCreateDate] = useState(new Date());
  const [state, setState] = useState({
    project: "",
    supplier: "",
    orderId: "",
    description: "",
    totalExpense: "",
  });

  const handleCreateChange = (date) => setCreateDate(date);
  const handleChange = ({ target }) => {
    const { name, value } = target;
    setState({ ...state, [name]: value });
    setMessage(false);
    setErr(false);
  };

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    // ENVIAR FORMULARIO
    const info = {
      ...state,
      expenseDate: moment(createDate).unix(),
      orderFile: "holaquehace",
    };
    try {
      const URL = `${BASE_URL}/expense`;
      const { data } = await axios.post(URL, info, { headers });
      const { errors, message } = data;
      if (errors) return setErr("Debes completar los campos");
      setMessage(message);
    } catch ({ message }) {
      console.log(message);
    }
  };

  const getAllProjects = async () => {
    try {
      const URL = `${BASE_URL}/project`;
      const { data } = await axios.get(URL, { headers });
      setProjects(data.projectsFound);
    } catch ({ message }) {
      console.log(message);
    }
  };

  const getAllSuppliers = async () => {
    try {
      const URL = `${BASE_URL}/supplier`;
      const { data } = await axios.get(URL, { headers });
      setSuppliers(data.suppliersFound);
    } catch ({ message }) {
      console.log(message);
    }
  };

  useEffect(() => {
    getAllProjects();
    getAllSuppliers();
  }, []);

  return (
    <Content
      state={state}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      projects={projects}
      suppliers={suppliers}
      err={err}
      message={message}
      // DATE
      createDate={createDate}
      handleCreateChange={handleCreateChange}
    />
  );
};

export default Expense;
