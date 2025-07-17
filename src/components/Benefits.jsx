// src/components/Benefits.jsx
import "../styles/Benefits.css"; // 🔁 RUTA ACTUALIZADA
import { FaDumbbell, FaUsers, FaCalendarAlt } from "react-icons/fa";

function Benefits() {
  return (
    <div className="benefits-section">
      <h2 className="benefits-title">🎯 Beneficios de ser parte de MatGym</h2>
      <div className="benefits-cards">
        <div className="benefit">
          <FaDumbbell className="benefit-icon" />
          <h3>Entrenamiento Ilimitado</h3>
          <p>Acceso sin restricciones a todas nuestras máquinas y clases.</p>
        </div>
        <div className="benefit">
          <FaUsers className="benefit-icon" />
          <h3>Comunidad Activa</h3>
          <p>Conéctate con otros atletas y entrena acompañado.</p>
        </div>
        <div className="benefit">
          <FaCalendarAlt className="benefit-icon" />
          <h3>Eventos Exclusivos</h3>
          <p>Participa en competencias y actividades especiales.</p>
        </div>
      </div>
    </div>
  );
}

export default Benefits;
