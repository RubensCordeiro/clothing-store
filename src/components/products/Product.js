import { useContext } from "react";
import { cartContext } from "../contexts/cartContext";

const Product = ({ name, price, imageUrl }) => {
  const { addItemToCart } = useContext(cartContext);

  return (
    <article className="w-full h-[350px] flex flex-col mx-auto">
      <div
        className="relative w-full h-[95%] rounded-sm flex flex-col cursor-pointer"
        onClick={() => addItemToCart({ name, price, imageUrl })}
      >
        <img
          src={imageUrl}
          alt=""
          className="peer h-full w-full object-cover z-0 hover:opacity-50 rounded-sm"
        />
        <span className="w-full absolute top-[50%] text-center invisible z-10 peer-hover:visible text-zinc-900 font-light">
          <span className="border-y-[1px] border-solid border-zinc-900">
            Add to cart
          </span>
        </span>
      </div>
      <div className="flex justify-between font-light text-zinc-700">
        <span className="">{name}</span>
        <span className="">{price}</span>
      </div>
    </article>
  );
};

export default Product;
