import { Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { Category } from "../pages/Category";
import { Salgados } from "../pages/Salgados";
import { Bebidas } from "../pages/Bebidas";
import { Outros } from "../pages/Outros";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Category" element={<Category />} />
      <Route path="/Salgados" element={<Salgados />} />
      <Route path="/Bebidas" element={<Bebidas />} />
      <Route path="/Outros" element={<Outros />} />
    </Routes>
  );
}
