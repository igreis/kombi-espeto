import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css"; // se houver estilos globais
import Home from "./components/sections/home";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>
);