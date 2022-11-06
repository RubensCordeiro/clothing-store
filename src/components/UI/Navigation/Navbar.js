import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="px-6 py-4 mb-2 flex justify-between items-center bg-zinc-100">
      <Link to={"/"} className="">
        <img src="crown.svg" alt="SVG Logo" />
      </Link>
      <ul className="text-zinc-600 hover:text-zinc-800">
        <li className="flex gap-x-2 items-center">
          <Link to={"/shop"}>Shop</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
