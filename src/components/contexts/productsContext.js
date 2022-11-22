import { useState } from "react";
import { createContext } from "react";
import { shopData } from "../../mocks/shop-data";

const productsContext = createContext({
  productList: shopData,
  setProductList: () => null,
});

const ProductsProvider = ({ children }) => {
  const [productList, setProductList] = useState(shopData);
  const value = { productList, setProductList };

  return (
    <productsContext.Provider value={value}>
      {children}
    </productsContext.Provider>
  );
};

export { productsContext, ProductsProvider };
