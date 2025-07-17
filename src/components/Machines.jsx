// src/components/Machines.jsx
import React, { useState } from "react";
import trotadora1 from "../assets/trotadora1.png";
import trotadora2 from "../assets/trotadora2.png";
import treadmillIcon from "../assets/treadmill-icon.png";
import "../styles/RegisterForm.css"; // ✅ contiene .seccion-gym-box

function Machines() {
  const [mostrarGaleria, setMostrarGaleria] = useState(false);

  return (
    <div
      className="seccion-gym-box"
      onMouseEnter={() => setMostrarGaleria(true)}
      onMouseLeave={() => setMostrarGaleria(false)}
    >
      <img src={treadmillIcon} alt="Máquinas" />
      <h3>Máquinas</h3>
      <p>Explora nuestras máquinas de entrenamiento de última generación.</p>

      {mostrarGaleria && (
        <div className="galeria-maquinas">
          <img src={trotadora1} alt="Trotadora 1" />
          <img src={trotadora2} alt="Trotadora 2" />
        </div>
      )}
    </div>
  );
}

export default Machines;
