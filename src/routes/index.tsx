import { Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { Category } from "../pages/Category";
import { SubCategory } from "../pages/SubCategory";
import { Products } from "../pages/Products";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Category" element={<Category />} />
      <Route path="/SubCategory" element={<SubCategory />} />
      <Route path="/Products" element={<Products />} />
    </Routes>
  );
}
