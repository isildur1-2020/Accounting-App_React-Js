import React, { useState } from "react";
import Content from "./page";

const titles = {
  project: "Editar proyectos",
  client: "Editar clientes",
  supplier: "Editar proveedores",
  expense: "Editar gastos",
};

const pathDelete = {
  project: "/project",
  client: "/client",
  supplier: "/supplier",
  expense: "/expense",
};

const Edit = () => {
  const [option, setOption] = useState("");
  const [selectedRows, setSelectedRows] = useState([]);

  const handleChange = (ev) => setOption(ev.target.value);

  const handleSelectedRows = ({ selectionModel }) =>
    setSelectedRows(selectionModel);

  return (
    <Content
      title={titles[option]}
      option={option}
      handleChange={handleChange}
      selectedRows={selectedRows}
      handleSelectedRows={handleSelectedRows}
    />
  );
};

export default Edit;
