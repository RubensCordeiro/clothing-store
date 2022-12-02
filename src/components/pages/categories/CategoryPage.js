import { useEffect } from "react";
import { useState } from "react";
import { useContext } from "react";
import { useParams } from "react-router";
import { categoryContext } from "../../contexts/categoryContext";
import Product from "../../products/Product";

const CategoryPage = () => {
  const [products, setProducts] = useState();
  const { category } = useParams();
  const { categoryMap } = useContext(categoryContext);

  useEffect(() => {
    setProducts(
      categoryMap[category]?.map(({ id, name, price, imageUrl }) => (
        <Product key={id} name={name} price={price} imageUrl={imageUrl} />
      ))
    );
  }, [category, categoryMap]);

  return (
    <article>
      <h2 className="font-light text-2xl text-zinc-900 mb-1">
        {category.toUpperCase()}
      </h2>
      <article className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-x-4 gap-y-4">
        {products}
      </article>
    </article>
  );
};

export default CategoryPage;
