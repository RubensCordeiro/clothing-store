import { createContext, useState } from "react";

const cartContext = createContext({
  cartOpen: false,
  setCartOpen: () => {},
  toggleCart: () => {},
  cartItems: [],
  addItemsToCart: () => {},
  removeItemFromCart: () => {},
  deleteItemFromCart: () => {},
  totalItems: 0,
  cartPrice: 0,
});

const CartProvider = ({ children }) => {
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const totalItems =
    cartItems?.length > 0
      ? cartItems.reduce((sum, item) => sum + item.quantity, 0)
      : 0;

  const cartPrice = cartItems?.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

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

  const removeItemFromCart = (itemToRemove) => {
    const foundItem = cartItems.find((item) => item.name === itemToRemove.name);

    if (foundItem.quantity >= 2) {
      foundItem.quantity -= 1;

      setCartItems((prevState) =>
        prevState.map((item) =>
          item.name === itemToRemove.name ? foundItem : item
        )
      );
    } else {
      deleteItemFromCart(itemToRemove);
    }
  };

  const deleteItemFromCart = (itemToRemove) => {
    setCartItems((prevState) =>
      prevState.filter((item) => item.name !== itemToRemove.name)
    );
  };

  const toggleCart = () => setCartOpen((prevState) => !prevState);

  const value = {
    cartOpen,
    setCartOpen,
    cartItems,
    toggleCart,
    addItemToCart,
    removeItemFromCart,
    deleteItemFromCart,
    totalItems,
    cartPrice,
  };

  return <cartContext.Provider value={value}>{children}</cartContext.Provider>;
};

export { cartContext, CartProvider };
