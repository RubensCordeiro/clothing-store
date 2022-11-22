import { useContext } from "react";
import { productsContext } from "../contexts/productsContext";

import Product from "./Product";

const Products = () => {
  const { productList } = useContext(productsContext);

  const mappedProductList = productList.map(({ id, name, price, imageUrl }) => {
    return <Product key={id} name={name} price={price} imageUrl={imageUrl} />;
  });

  return (
    <article className="flex justify-center flex-wrap gap-y-10 gap-x-3">
      {mappedProductList}
    </article>
  );
};

export default Products;
