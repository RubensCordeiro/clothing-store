import { useContext } from "react";
import { categoryContext } from "../../contexts/categoryContext";

import CategoryPreview from "../../categories/CategoryPreview";

const CategoriesPreviewPage = () => {
  const { categoryMap } = useContext(categoryContext);

  const categoryList = Object.keys(categoryMap);

  const productList = categoryList.map((category) => {
    return (
      <CategoryPreview
        key={category}
        category={category}
        productList={categoryMap[category]}
      />
    );
  });

  return <section className="flex flex-col gap-y-2">{productList}</section>;
};

export default CategoriesPreviewPage;
