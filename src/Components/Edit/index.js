import React, { useState } from "react";
import { useEffect } from "react";
import Content from "./page";
// AXIOS
import axios from "axios";
import { BASE_URL, headers } from "../../config/api";

const titles = {
  project: "Editar proyectos",
  client: "Editar clientes",
  supplier: "Editar proveedores",
  expense: "Editar gastos",
};

const Edit = () => {
  const [loading, setLoading] = useState(false);
  const [option, setOption] = useState("");
  const [selectedRows, setSelectedRows] = useState([]);

  const handleChange = (ev) => setOption(ev.target.value);

  const handleSelectedRows = ({ selectionModel }) =>
    setSelectedRows(selectionModel);

  const handleDelete = async () => {
    const URL = `${BASE_URL}/${option}`;
    const promises = [];
    selectedRows.forEach((el) => {
      const promise = axios.delete(`${URL}/${el}`, { headers });
      promises.push(promise);
    });

    try {
      setLoading(true);
      await Promise.all(promises);
      setLoading(false);
    } catch ({ message }) {
      console.log(message);
    }
  };

  useEffect(() => {
    setSelectedRows([]);
  }, [option]);

  return (
    <Content
      title={titles[option]}
      option={option}
      handleChange={handleChange}
      selectedRows={selectedRows}
      handleSelectedRows={handleSelectedRows}
      handleDelete={handleDelete}
      loading={loading}
    />
  );
};

export default Edit;
