import CategoriesPreviewPage from "../categories/CategoriesPreviewPage";

import { Routes, Route } from "react-router";

const Shop = () => {
  return (
    <Routes>
      <Route index element={<CategoriesPreviewPage />} />
    </Routes>
  );
};

export default Shop;
