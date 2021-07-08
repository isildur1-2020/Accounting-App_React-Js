import React, { useState } from "react";
import Content from "./page";

const Scheme = () => {
  const [state, setState] = useState({
    client: "",
    budget: "",
    colones: "",
    dollars: "",
  });
  const [createDate, setCreateDate] = useState(new Date());
  const [initDate, setInitDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const handleCreateChange = (date) => setCreateDate(date);
  const handleInitChange = (date) => setInitDate(date);
  const handleEndChange = (date) => setEndDate(date);

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setState({ ...state, [name]: value });
  };
  const handleSubmit = (ev) => {
    ev.preventDefault();
    // ENVIAR FORMULARIO
    console.log(state, createDate, initDate, endDate)
  };

  // RENDER
  return (
    <Content
      state={state}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      // DATES
      createDate={createDate}
      handleCreateChange={handleCreateChange}
      initDate={initDate}
      handleInitChange={handleInitChange}
      endDate={endDate}
      handleEndChange={handleEndChange}
    />
  );
};

export default Scheme;
