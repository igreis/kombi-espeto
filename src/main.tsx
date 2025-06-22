import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Home from "./components/sections/home";
import Loader from "./components/sections/loader"; // ajuste o caminho se necessário
import AOS from "aos";
import "aos/dist/aos.css";

const RootApp = () => {
  
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    AOS.init({
      duration: 1300, // Duração da animação em milissegundos
      //offset: window.innerWidth > 640 ? 180 : 550, // 200px acima no sm e 550px antes
      once: true, // Se `true`, a animação ocorre apenas uma vez
    });

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
