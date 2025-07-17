import React from "react";
import subscriptionIcon from "../assets/subscription-icon.png";
import webpay from "../assets/webpay.png";
import "../styles/Subscriptions.css"; // ✅ asegúrate que este archivo exista

function Subscriptions() {
  return (
    <div className="subscriptions">
      <img src={subscriptionIcon} alt="Subscription Icon" className="icon" />
      <h2>Planes de Suscripción</h2>
      <p>Elige el plan que más te convenga y accede a todos los beneficios.</p>
      
      {/* Imagen con tamaño controlado */}
      <div className="webpay-wrapper">
        <img src={webpay} alt="Webpay" className="webpay-image" />
      </div>
    </div>
  );
}

export default Subscriptions;
