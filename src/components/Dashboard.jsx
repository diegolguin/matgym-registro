// src/components/Dashboard.jsx
import React from "react";
import dashboardIcon from "../assets/dashboard-icon.avif";
import "../styles/RegisterForm.css"; // ✅ Estilo donde definimos .seccion-gym-box

function Dashboard() {
  return (
    <div className="seccion-gym-box">
      <img src={dashboardIcon} alt="Dashboard Icon" />
      <h3>Panel Principal</h3>
      <p>Bienvenido al panel de administración de MatGym.</p>
    </div>
  );
}

export default Dashboard;

