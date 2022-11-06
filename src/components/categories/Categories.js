import { categories } from "../../mocks/categories";
import Category from "./Category";

const categoryList = categories.map((category) => {
  return (
    <Category
      key={category.id}
      title={category.title}
      imageUrl={category.imageUrl}
    />
  );
});

const Categories = () => {
  return (
    <div className="flex flex-wrap justify-around gap-y-1 gap-x-2">
      {categoryList}
    </div>
  );
};

export default Categories;
