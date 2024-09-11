import "./StylePadrao.css";
import HomePage from "./pages/Home/HomePage";
import Segunda_HomePage from "./pages/Segunda_HomePage/Segunda_HomePage";
import Sobre_O_Projeto from "./pages/Sobre_O_Projeto/Sobre_O_Projeto";
import Denuncias from "./pages/Denuncias/Denuncias";
import Login from "./pages/Login/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function CorpoSite() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Segunda" element={<Segunda_HomePage />} />
        <Route path="/Sobre_O_Projeto" element={<Sobre_O_Projeto />} />
        <Route path="/Denuncias" element={<Denuncias />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}
