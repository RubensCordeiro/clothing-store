import { createContext, useState } from "react";

const cartContext = createContext({
  cartOpen: false,
  setCartOpen: () => {},
  cartItems: [],
  addItemsToCart: () => {},
  totalItems: 0,
});

const CartProvider = ({ children }) => {
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const totalItems =
    cartItems.length > 0
      ? cartItems.reduce((sum, item) => sum + item.quantity, 0)
      : 0;

  const addItemToCart = (itemToAdd) => {
    const foundItem = cartItems.find((item) => item.name === itemToAdd.name);

    if (foundItem) {
      foundItem.quantity += 1;

      setCartItems((prevState) =>
        prevState.map((item) =>
          item.name === itemToAdd.name ? foundItem : item
        )
      );
    } else {
      itemToAdd.quantity = 1;
      setCartItems((prevState) => [...prevState, itemToAdd]);
    }
  };

  const toggleCart = () => setCartOpen((prevState) => !prevState);
  const value = {
    cartOpen,
    setCartOpen,
    cartItems,
    toggleCart,
    addItemToCart,
    totalItems,
  };

  return <cartContext.Provider value={value}>{children}</cartContext.Provider>;
};

export { cartContext, CartProvider };
