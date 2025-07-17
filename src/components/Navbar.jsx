// src/components/Navbar.jsx
import React from "react";
import "../styles/Navbar.css"; // Asegúrate de tener este archivo como ya lo tienes

function Navbar() {
  return (
    <nav className="navbar">
      <h1>MatGym 🏋️‍♂️</h1>
      <ul>
        <li><a href="#formulario">Registro</a></li>
        <li><a href="#dashboard">Panel</a></li>
        <li><a href="#beneficios">Beneficios</a></li>
        <li><a href="#concursos">Concursos</a></li>
        <li><a href="#maquinas">Máquinas</a></li>
        <li><a href="#suscripciones">Suscripciones</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
