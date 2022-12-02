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
      <article className="mx-auto w-full md:px-8" key={Math.random()}>
        <h2 className="font-light text-2xl text-zinc-900 mb-1">
          {category.toUpperCase()}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-x-4 gap-y-4">
          {categoryProducts}
        </div>
        <div className="border-b-[1px] border-solid border-zinc-400 mx-auto w-[95%] py-2"></div>
      </article>
    );
  });

  return <section className="flex flex-col gap-y-2">{productList}</section>;
};

export default Products;
