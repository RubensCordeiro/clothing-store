import { useReducer } from "react";
import { createContext, useState } from "react";
import cartItemReducer from "../../reducers/cartItemReducer";

const cartContext = createContext({
  cartOpen: false,
  setCartOpen: () => {},
  toggleCart: () => {},
  cartItems: [],
  cartItemDispatch: () => {},
  totalItems: 0,
  cartPrice: 0,
});

const CartProvider = ({ children }) => {
  const [cartItems, cartItemDispatch] = useReducer(cartItemReducer, []);
  const [cartOpen, setCartOpen] = useState(false);

  const totalItems =
    cartItems?.length > 0
      ? cartItems.reduce((sum, item) => sum + item.quantity, 0)
      : 0;

  const cartPrice = cartItems?.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const toggleCart = () => setCartOpen((prevState) => !prevState);

  const value = {
    cartOpen,
    setCartOpen,
    cartItems,
    toggleCart,
    cartItemDispatch,
    totalItems,
    cartPrice,
  };

  return <cartContext.Provider value={value}>{children}</cartContext.Provider>;
};

export { cartContext, CartProvider };
