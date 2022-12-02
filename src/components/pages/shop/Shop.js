import CategoriesPreviewPage from "../categories/CategoriesPreviewPage";
import CategoryPage from "../categories/CategoryPage";

import { Routes, Route } from "react-router";

const Shop = () => {
  return (
    <Routes>
      <Route index element={<CategoriesPreviewPage />} />
      <Route path=":category" element={<CategoryPage />} />
    </Routes>
  );
};

export default Shop;
