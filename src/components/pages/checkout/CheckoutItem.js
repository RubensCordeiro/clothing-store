import { useContext } from "react";
import { cartContext } from "../../contexts/cartContext";

const CheckoutItem = ({ checkoutItem }) => {
  const { name, price, imageUrl, quantity } = checkoutItem;

  const { cartItemDispatch } = useContext(cartContext);

  return (
    <article>
      <div className="border-t-[1px] border-top border-solid border-zinc-400 w-[95%] mx-auto"></div>
      <div className="grid grid-cols-5 mx-auto text-center">
        <div className="p-3">
          <img src={imageUrl} alt="" className="rounded" />
        </div>
        <span className="flex items-center justify-center text-sm text-zinc-700">
          {name}
        </span>
        <div className="relative flex items-center justify-center gap-x-1">
          <span
            className="scale-y-150 text-zinc-600 font-bold cursor-pointer hover:text-teal-600"
            onClick={() =>
              cartItemDispatch({
                type: "REMOVE_ITEM",
                payload: { itemToUpdate: { name } },
              })
            }
          >
            {"<"}
          </span>
          <span className=" text-sm text-zinc-700">{quantity}</span>
          <span
            className="scale-y-150 text-zinc-600 font-bold cursor-pointer hover:text-teal-600"
            onClick={() =>
              cartItemDispatch({
                type: "ADD_ITEM",
                payload: { itemToUpdate: { name } },
              })
            }
          >
            {">"}
          </span>
        </div>
        <span className="flex items-center justify-center text-sm text-zinc-700">
          {price}
        </span>
        <div className="flex items-center justify-center text-sm text-red-600">
          <span
            className="cursor-pointer scale-125 hover:scale-150"
            onClick={() =>
              cartItemDispatch({
                type: "DELETE_ITEM",
                payload: { itemToUpdate: { name } },
              })
            }
          >
            X
          </span>
        </div>
      </div>
    </article>
  );
};

export default CheckoutItem;
