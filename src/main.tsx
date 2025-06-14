import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Home from "./components/sections/home";
import Loader from "./components/sections/loader"; // ajuste o caminho se necessário

const RootApp = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simula tempo de carregamento
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return loading ? <Loader /> : <Home />;
};

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RootApp />
  </React.StrictMode>
);
