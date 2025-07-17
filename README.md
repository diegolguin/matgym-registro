# 💪 Proyecto MatGym - Formulario de Registro

Este proyecto fue desarrollado como parte de mi aprendizaje práctico con **React** y **Vite**. El objetivo fue crear una interfaz interactiva y validada para el registro de nuevos usuarios, incluyendo campos como RUT, correo, teléfono, comuna, contraseña, sexo y confirmación visual.

---

## 🚀 Tecnologías utilizadas

- **React JS**: Librería JavaScript para construir interfaces de usuario dinámicas y componentes reutilizables.
- **Vite**: Herramienta de construcción rápida que facilita el desarrollo con React y proporciona recarga instantánea.
- **CSS personalizado**: Para dar estilo a cada parte del formulario.
- **JSX**: Sintaxis para escribir componentes que mezclan HTML y JS.

---

## 🧠 Lo aprendido

- Cómo crear componentes reutilizables en React.
- Uso de `useState` para manejar estados internos del formulario.
- Validaciones personalizadas como:
  - Validación del RUT chileno.
  - Teléfonos que comienzan con 9 y tienen 9 dígitos.
  - Correos válidos.
  - Coincidencia y longitud de contraseñas (entre 5 y 6 caracteres).
- Condicionales y renderizado dinámico en React (`if`, operadores ternarios).
- Gestión visual del formulario (errores, validaciones, mensajes de éxito).
- Mostrar distintos componentes después de enviar el formulario (Dashboard, Banner, etc.).

---

## 🗂️ Estructura del proyecto

matgym-registro/
│
├── src/
│ ├── components/
│ │ ├── RegisterForm.jsx
│ │ ├── Dashboard.jsx
│ │ ├── Machines.jsx
│ │ └── ...
│ ├── styles/
│ │ └── RegisterForm.css
│ ├── main.jsx
│ └── App.jsx
│
├── index.html
├── vite.config.js
└── README.md

yaml
Copiar
Editar

---

## 🔍 Fuentes de información y referencias

- [React documentación oficial](https://reactjs.org/)
- [Vite documentación oficial](https://vitejs.dev/)
- [Regex para validación de correo y teléfono](https://regex101.com/)
- [Formato y validación del RUT chileno](https://es.wikipedia.org/wiki/Rol_%C3%9Anico_Tributario)
- **W3Schools React Tutorial**  
  https://www.w3schools.com/react/
---

## 📚 Bibliografía

- OpenAI. (2025). Asistente React + Vite.
- Documentación oficial de Vite y React.
- Clase del módulo de React y validación de formularios web en JSX.

---

**Autor**: Diego Sandoval Olguin  
**Fecha**: Julio 2025  
**Institucion**: Inacap / **Seccion**:N3-P14
