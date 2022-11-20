import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="px-6 py-4 mb-2 flex justify-between items-center bg-zinc-100">
      <Link to={"/"} className="">
        <img src="crown.svg" alt="SVG Logo" />
      </Link>
      <ul className="text-zinc-600 flex gap-x-2 items-center ">
        <li className="hover:text-zinc-800">
          <Link to={"/shop"}>Shop</Link>
        </li>
        {"|"}
        <li className="hover:text-zinc-800">
          <Link to={"/auth"}>Sign-in</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
