import React from "react";
import reactLogo from "../assets/react-logo.png";
import matgymLogo from "../assets/success-icon.png";
import "../styles/Banner.css";

const Banner = () => {
  return (
    <div className="banner">
      <div className="banner-texto">
        <h1>
          ¡Bienvenido a MatGym!
          <img
            src={matgymLogo}
            alt="MatGym Logo"
            className="logo-matgym-banner"
          />
        </h1>
        <p>Activa tu cuerpo, potencia tu vida.</p>
      </div>
      <img src={reactLogo} alt="React Logo" className="react-logo" />
    </div>
  );
};

export default Banner;
