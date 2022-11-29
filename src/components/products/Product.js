import { useContext } from "react";
import { cartContext } from "../contexts/cartContext";

const Product = ({ name, price, imageUrl }) => {
  const { addItemToCart } = useContext(cartContext);

  return (
    <article className="flex flex-col w-[250px] border border-solid border-zinc-200 rounded-sm">
      <div
        className="relative w-full h-full flex flex-col items-center"
        onClick={() => addItemToCart({ name, price, imageUrl })}
      >
        <img
          className="peer object-cover h-full hover:opacity-50 cursor-pointer z-0"
          src={imageUrl}
        />
        <span className="absolute top-[90%] w-full text-center bg-white/[.2] invisible z-10 peer-hover:visible">
          Add to cart
        </span>
      </div>
      <div className="flex justify-between px-1">
        <span className="text-zinc-800">{name}</span>
        <span className="text-zinc-800">{price}</span>
      </div>
    </article>
  );
};

export default Product;
