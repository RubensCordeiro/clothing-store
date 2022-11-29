import { useEffect } from "react";
import { useContext } from "react";
import { cartContext } from "../../contexts/cartContext";

import CheckoutItem from "./CheckoutItem";

const CheckoutPage = () => {
  const { cartItems, setCartOpen, cartPrice, totalItems } =
    useContext(cartContext);

  useEffect(() => {
    setCartOpen(false);
  }, []);

  const itemList = cartItems.map((cartItem) => (
    <CheckoutItem key={cartItem.name} checkoutItem={cartItem} />
  ));

  return (
    <section className="max-w-[768px] min-h-[477px] mx-auto mt-4 pb-8 font-light">
      {totalItems > 0 && (
        <ul className="grid grid-cols-5 mx-auto text-center mb-2 text-sm">
          <li className="">Product</li>
          <li className="">Description</li>
          <li className="">Quantity</li>
          <li className="">Price</li>
          <li className="">Remove</li>
        </ul>
      )}
      {itemList}
      {cartPrice > 0 && (
        <div className="mx-auto text-xl font-light text-right w-[95%]">
          Total: ${cartPrice}
        </div>
      )}
      {totalItems === 0 && (
        <div className="text-center flex justify-center items-center mt-4 font-light">
          {"Your cart is empty, buy something ;)"}
        </div>
      )}
    </section>
  );
};

export default CheckoutPage;
