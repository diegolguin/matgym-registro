import React, { useState } from "react";
import "../styles/RegisterForm.css";
import hombre from "../assets/hombre.png";
import mujer from "../assets/mujer.png";
import Dashboard from "./Dashboard";
import Contest from "./Contest";
import Machines from "./Machines";
import Subscriptions from "./Subscriptions";
import Benefits from "./Benefits";
import Banner from "./Banner";

function RegisterForm() {
  const [mostrarFormulario, setMostrarFormulario] = useState(false);
  const [sexo, setSexo] = useState("");
  const [avatar, setAvatar] = useState(null);
  const [contrasena, setContrasena] = useState("");
  const [confirmacion, setConfirmacion] = useState("");
  const [valida, setValida] = useState(true);
  const [errorPassword, setErrorPassword] = useState("");
  const [rut, setRut] = useState("");
  const [rutValido, setRutValido] = useState(true);
  const [enviado, setEnviado] = useState(false);
  const [telefono, setTelefono] = useState("");
  const [telefonoValido, setTelefonoValido] = useState(true);
  const [correo, setCorreo] = useState("");
  const [correoValido, setCorreoValido] = useState(true);

  const validarTelefono = (valor) => /^9\d{8}$/.test(valor);
  const validarCorreo = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const validarRut = (rutInput) => {
    let rut = rutInput.replace(/[^\dkK]/g, "").toUpperCase();
    let cuerpo = rut.slice(0, -1);
    let dv = rut.slice(-1);
    if (cuerpo.length < 7) return false;

    let suma = 0;
    let multiplo = 2;
    for (let i = cuerpo.length - 1; i >= 0; i--) {
      suma += parseInt(cuerpo.charAt(i)) * multiplo;
      multiplo = multiplo < 7 ? multiplo + 1 : 2;
    }

    let dvEsperado = 11 - (suma % 11);
    dvEsperado = dvEsperado === 11 ? "0" : dvEsperado === 10 ? "K" : dvEsperado.toString();
    return dv === dvEsperado;
  };

  const formatearRut = (valor) => {
    let limpio = valor.replace(/[^\dkK]/g, "").toUpperCase();
    let cuerpo = limpio.slice(0, -1);
    let dv = limpio.slice(-1);
    let formateado = "";

    while (cuerpo.length > 3) {
      formateado = "." + cuerpo.slice(-3) + formateado;
      cuerpo = cuerpo.slice(0, -3);
    }

    formateado = cuerpo + formateado + "-" + dv;
    return formateado;
  };

  const handleSexoChange = (e) => {
    const selected = e.target.value;
    setSexo(selected);
    setAvatar(selected === "masculino" ? hombre : mujer);
  };

  const handleConfirmacionChange = (e) => {
    const confirmValue = e.target.value;
    setConfirmacion(confirmValue);
    setValida(contrasena === confirmValue);
  };

  const handleRutChange = (e) => {
    const raw = e.target.value;
    const limpio = raw.replace(/[^\dkK]/g, "").toUpperCase();

    if (limpio.length < 2) {
      setRut(raw);
      setRutValido(true);
      return;
    }

    const rutFormateado = formatearRut(limpio);
    setRut(rutFormateado);
    setRutValido(validarRut(limpio));
  };

  const handleTelefonoChange = (e) => {
    const valor = e.target.value;
    setTelefono(valor);
    setTelefonoValido(validarTelefono(valor));
  };

  const handleCorreoChange = (e) => {
    const valor = e.target.value;
    setCorreo(valor);
    setCorreoValido(validarCorreo(valor));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!valida) {
      alert("⚠️ Las contraseñas no coinciden");
      return;
    }
    if (!validarRut(rut)) {
      alert("⚠️ El RUT ingresado no es válido");
      return;
    }
    if (!telefonoValido) {
      alert("⚠️ El número de teléfono no es válido. Debe comenzar con 9 y tener 9 dígitos.");
      return;
    }
    if (!correoValido) {
      alert("⚠️ El correo electrónico no es válido.");
      return;
    }
    if (errorPassword) {
      alert("⚠️ " + errorPassword);
      return;
    }

    setEnviado(true);
  };

  return (
    <div className="contenedor-principal">
      {!mostrarFormulario && !enviado && (
        <button className="btn-inicio" onClick={() => setMostrarFormulario(true)}>
          Crear cuenta
        </button>
      )}

      {mostrarFormulario && !enviado && (
        <form className="formulario" onSubmit={handleSubmit}>
          <h2>Formulario de Registro</h2>

          <div className="grupo">
            <label>Nombre:</label>
            <input type="text" required />
          </div>

          <div className="grupo">
            <label>Apellido:</label>
            <input type="text" required />
          </div>

          <div className="grupo">
            <label htmlFor="rut">RUT:</label>
            <input
              type="text"
              placeholder="12.345.678-9"
              value={rut}
              onChange={handleRutChange}
              className={rutValido ? "" : "error"}
              required
            />
            {!rutValido && <span className="error-text">❌ RUT inválido</span>}
          </div>

          <div className="grupo">
            <label>Correo:</label>
            <input
              type="email"
              value={correo}
              onChange={handleCorreoChange}
              required
              className={correoValido ? "" : "error"}
            />
            {!correoValido && <span className="error-text">❌ Correo inválido</span>}
          </div>

          <div className="grupo">
            <label>Teléfono:</label>
            <input
              type="tel"
              value={telefono}
              onChange={handleTelefonoChange}
              required
              className={telefonoValido ? "" : "error"}
              placeholder="Ej: 912345678"
            />
            {!telefonoValido && <span className="error-text">❌ Teléfono inválido</span>}
          </div>

          <div className="grupo">
            <label>Comuna (RM):</label>
            <select required>
              <option value="">Seleccione</option>
              <option>Puente Alto</option>
              <option>La Florida</option>
              <option>Maipú</option>
              <option>Santiago</option>
              <option>Ñuñoa</option>
              <option>Providencia</option>
              <option>Las Condes</option>
              <option>La Reina</option>
              <option>Peñalolén</option>
              <option>San Bernardo</option>
            </select>
          </div>

          <div className="grupo">
            <label>Contraseña:</label>
            <input
              type="password"
              required
              value={contrasena}
              onChange={(e) => {
                const val = e.target.value;
                setContrasena(val);

                if (val.length < 5 || val.length > 6) {
                  setErrorPassword("❌ La contraseña debe tener entre 5 y 6 caracteres.");
                } else {
                  setErrorPassword("");
                }

                setValida(val === confirmacion);
              }}
              className={errorPassword ? "error" : ""}
            />
            {errorPassword && <span className="error-text">{errorPassword}</span>}
          </div>

          <div className="grupo">
            <label>Confirmar contraseña:</label>
            <input
              type="password"
              required
              value={confirmacion}
              onChange={handleConfirmacionChange}
              className={!valida ? "error" : ""}
            />
            {!valida && <span className="error-text">❌ Las contraseñas no coinciden</span>}
          </div>

          <div className="grupo">
            <label>Sexo:</label>
            <select onChange={handleSexoChange} required>
              <option value="">Seleccione</option>
              <option value="masculino">Masculino</option>
              <option value="femenino">Femenino</option>
            </select>
          </div>

          {avatar && (
            <div className="avatar-preview">
              <img src={avatar} alt="Avatar" />
            </div>
          )}

          <button
            type="submit"
            className="btn-enviar"
            disabled={
              !contrasena ||
              !confirmacion ||
              !valida ||
              !!errorPassword ||
              !rutValido ||
              !telefonoValido ||
              !correoValido
            }
          >
            Enviar
          </button>
        </form>
      )}

      {enviado && (
        <>
          <div className="mensaje-exito">
            <h2>
              <img
                src="/assets/check.png"
                alt=""
                style={{ width: "30px", marginRight: "10px", verticalAlign: "middle" }}
              />
              ¡Registro exitoso!
            </h2>
            <p>Gracias por registrarte en MatGym.</p>
          </div>

          <div className="secciones-gym">
            <Dashboard />
            <Contest />
            <Machines />
            <Subscriptions />
            <Benefits />
          </div>
        </>
      )}

      {!enviado && (
        <div className="banner-movimiento">
          <h1>Ponte en Movimiento</h1>
        </div>
      )}

      <footer className="footer-matgym">© 2025 MatGym</footer>
    </div>
  );
}

export default RegisterForm;
