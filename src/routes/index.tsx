import { Routes, Route } from "react-router-dom";

import { Home } from "../pages/Home";
import { Product } from "../pages/Product";
import { Category } from "../pages/Category";
import { SubCategory } from "../pages/SubCategory";
import { DefaultLayout } from "../layouts/DefaultLayout";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Product />} />
        <Route path="/categories" element={<Category />} />
        <Route path="/sub-categories" element={<SubCategory />} />
      </Route>
    </Routes>
  );
}
