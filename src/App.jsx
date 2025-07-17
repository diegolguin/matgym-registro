// src/App.jsx
import React from "react";
import Banner from "./components/Banner";
import RegisterForm from "./components/RegisterForm";
import "./App.css";

function App() {
  return (
    <div className="main-wrapper">
      <div className="App">
        <Banner />
        <section>
          <RegisterForm />
        </section>
      </div>
    </div>
  );
}

export default App;

