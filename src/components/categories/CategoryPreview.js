import { Link } from "react-router-dom";

import Product from "../products/Product";

const CategoryPreview = ({ category, productList }) => {
  const categoryProducts = productList
    .filter((item, index) => index < 4)
    .map(({ id, name, price, imageUrl }) => (
      <Product key={id} name={name} price={price} imageUrl={imageUrl} />
    ));

  return (
    <article className="mx-auto w-full md:px-8" key={category}>
      <h2 className="font-light text-2xl text-zinc-900 mb-1">
        <Link to={`/shop/${category.toLowerCase()}`}>
          {category.toUpperCase()}
        </Link>
      </h2>
      <article className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-x-4 gap-y-4">
        {categoryProducts}
      </article>
      <div className="border-b-[1px] border-solid border-zinc-400 mx-auto w-[95%] py-2"></div>
    </article>
  );
};

export default CategoryPreview;
