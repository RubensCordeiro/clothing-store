import { useContext } from "react";
import { Link } from "react-router-dom";
import { userContext } from "../../contexts/userContext";
import { signOutUser } from "../../../utils/firebase/firebase.utils";

import CartIcon from "../../cart/CartIcon";
import CartDropdown from "../../cart/CartDropdown";

import { cartContext } from "../../contexts/cartContext";

const Navbar = () => {
  const { currentUser } = useContext(userContext);

  const { cartOpen, toggleCart, totalItems } = useContext(cartContext);

  return (
    <nav className="relative px-6 py-4 mb-2 flex justify-between items-center align-center bg-zinc-100 z-10">
      <Link to={"/"} className="">
        <img src="crown.svg" alt="SVG Logo" />
      </Link>
      <ul className="text-zinc-600 flex gap-x-2 items-center ">
        <li className="hover:text-zinc-800">
          <Link to={"/shop"}>Shop</Link>
        </li>
        {"|"}
        {currentUser === null && (
          <li className="hover:text-zinc-800">
            <Link to={"/auth"}>Sign-in</Link>
          </li>
        )}
        {currentUser !== null && (
          <li className="hover:text-zinc-800">
            <span className="cursor-pointer" onClick={signOutUser}>
              Sign-out
            </span>
          </li>
        )}
        <li>
          <CartIcon clickHandler={toggleCart} itemQuantity={totalItems} />
        </li>
      </ul>
      {cartOpen && <CartDropdown />}
    </nav>
  );
};

export default Navbar;
