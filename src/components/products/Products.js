import { useContext } from "react";
import { categoryContext } from "../contexts/categoryContext";

import Product from "./Product";

const Products = () => {
  const { categoryMap } = useContext(categoryContext);

  const categoryList = Object.keys(categoryMap);

  const productList = categoryList.map((category) => {
    const categoryProducts = categoryMap[category].map(
      ({ id, name, price, imageUrl }) => (
        <Product key={id} name={name} price={price} imageUrl={imageUrl} />
      )
    );
    return (
      <article className="border border-solid border-zinc-600">
        <h2>{category.toUpperCase()}</h2>
        <div className="mx-auto grid grid-cols-4">{categoryProducts}</div>
      </article>
    );
  });

  return <section className="flex flex-col gap-y-4">{productList}</section>;
};

export default Products;
