const CartIcon = ({ clickHandler, itemQuantity }) => {
  return (
    <div
      className="relative w-[35px] h-[35px] flex items-center justify-center ml-4 cursor-pointer"
      onClick={clickHandler}
    >
      <img src="shopping-bag.svg" className="absolute bottom-[4px]" alt="" />
      <span className="absolute text-sm">{itemQuantity}</span>
    </div>
  );
};

export default CartIcon;
