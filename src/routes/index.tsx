import { Routes, Route } from "react-router-dom";

import { Home } from "../pages/Home";
import { Category } from "../pages/Category";
import { Product } from "../pages/Product";
import { DefaultLayout } from "../layouts/DefaultLayout";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/category" element={<Category />} />
        <Route path="/product" element={<Product />} />
      </Route>
    </Routes>
  );
}
