import React, { useState, useEffect, useRef } from "react";
import Content from "./page";
import moment from "moment";
// AXIOS
import axios from "axios";
import { BASE_URL } from "../../config/api";

const Expense = () => {
  const refOrderFile = useRef();

  const token = window.localStorage.getItem("token");
  const headers = {
    "authorization-bearer": token,
  };
  // ALERT
  const [err, setErr] = useState(false);
  const [message, setMessage] = useState(false);
  // DATA
  const [projects, setProjects] = useState([]);
  const [suppliers, setSuppliers] = useState([]);
  // STATE
  const [fileSelected, setFileSelected] = useState(false);
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
    setErr(false);
    setMessage(false);
  };

  const uploadFile = async () => {
    const file = refOrderFile.current.files[0];
    const type = file.type.split("/")[1];
    const formData = new FormData();
    formData.append("orderFile", file);

    const URL = `${BASE_URL}/expense/file`;
    const { data } = await axios.post(URL, formData, { headers });
    const { hash } = data;

    return `${hash}.${type}`;
  };

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    // ENVIAR FORMULARIO
    try {
      const info = {
        ...state,
        expenseDate: moment(createDate).unix(),
        orderFile: fileSelected
          ? await uploadFile()
          : "No se ha subido un archivo",
      };
      const URL = `${BASE_URL}/expense`;
      const { data } = await axios.post(URL, info, { headers });
      const { errors } = data;
      if (errors?.length > 0) return setErr("Debes completar todos los campos");
      setMessage("Gasto creado con éxito");
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
      refOrderFile={refOrderFile}
      fileSelected={fileSelected}
      setFileSelected={setFileSelected}
      // DATE
      createDate={createDate}
      handleCreateChange={handleCreateChange}
    />
  );
};

export default Expense;
