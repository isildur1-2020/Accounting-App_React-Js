import React from "react";
import "./styles.css";
// COMPONENTS
import Menu from "../Menu/index";
// IMAGES
import background from "../../images/background.jpg";

const Home = () => {
  return (
    <div className="Home">
      <Menu title="Inicio" />
      <img src={background} loading="lazy" alt="building" />
    </div>
  );
};

export default Home;
