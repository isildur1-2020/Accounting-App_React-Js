import React from "react";
import "./styles.css";
import Menu from "../Menu/index";
import background from "../../images/background.jpg";

const Home = () => (
    <div className="Home">
        <Menu title="Inicio" />
        {/* <img src={background} loading="lazy" alt="building" /> */}
        <img src={background} loading="lazy" />
    </div>
);

export default Home;
