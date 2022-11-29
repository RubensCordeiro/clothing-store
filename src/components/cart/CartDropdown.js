import { useContext } from "react";
import { cartContext } from "../contexts/cartContext";
import CartItem from "./CartItem";
import { Link } from "react-router-dom";

const CartDropdown = () => {
  const { cartItems } = useContext(cartContext);

  const itemList = cartItems.map((cartItem) => {
    return <CartItem key={cartItem.name} cartItem={cartItem} />;
  });

  return (
    <div className="z-0 absolute flex flex-col justify-between align-center text-center left-[97%] top-[60px] transform: -translate-x-full bg-white px-2 py-4 border border-solid border-zinc-400 rounded w-[230px] h-[450px]">
      <div className="flex flex-col mx-auto overflow-y-scroll rounded-sm">
        <span>Your Items</span>
        <div className="text-zinc-700">{itemList}</div>
      </div>
      <Link
        to={"/checkout"}
        className="mt-1 mx-auto w-[70%] p-2 bg-zinc-700 rounded-sm text-white border border-solid border-transparent hover:bg-transparent hover:text-zinc-800 hover:border-zinc-700"
      >
        Go to checkout
      </Link>
    </div>
  );
};

export default CartDropdown;
