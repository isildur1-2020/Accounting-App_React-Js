import React, { useState } from "react";
import Content from './page'
import { useHistory } from "react-router-dom";

const Menu = ({ title }) => {
  const history = useHistory();
  const [drawer, setDrawer] = useState(false);

  const handleRedirect = (path) => history.push(path);

  return (
    <Content
      handleRedirect={handleRedirect}
      drawer={drawer}
      setDrawer={setDrawer}
      title={title}
    />
  );
};
export default Menu;
