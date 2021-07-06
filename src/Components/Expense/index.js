import React, { useState } from "react";
import Content from "./page";

const Expense = () => {
  const [createDate, setCreateDate] = useState(new Date());
  const [state, setState] = useState({
    project: "",
    supplier: "",
    orderNumber: null,
    description: "",
    totalExpense: null,
  });

  const handleCreateChange = (date) => setCreateDate(date);
  const handleChange = ({ target }) => {
    const { name, value } = target;
    setState({ ...state, [name]: value });
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
    // ENVIAR FORMULARIO
  };

  return (
    <Content
      state={state}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      // DATE
      createDate={createDate}
      handleCreateChange={handleCreateChange}
    />
  );
};

export default Expense;
