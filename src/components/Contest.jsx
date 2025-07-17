// src/components/Contest.jsx
import React, { useState } from "react";
import contestIcon from "../assets/corrida10k.png";
import familia from "../assets/Deporte-en-familia.png";
import "../styles/RegisterForm.css"; // ✅ contiene .seccion-gym-box

function Contest() {
  const [mostrarFotos, setMostrarFotos] = useState(false);

  return (
    <div
      className="seccion-gym-box"
      onMouseEnter={() => setMostrarFotos(true)}
      onMouseLeave={() => setMostrarFotos(false)}
    >
      <img src={contestIcon} alt="Concurso" />
      <h3>Concursos</h3>
      <p>Participa en desafíos y gana premios exclusivos.</p>

      {mostrarFotos && (
        <div className="galeria-concursos">
          <img src={familia} alt="Deporte en familia" />
        </div>
      )}
    </div>
  );
}

export default Contest;
