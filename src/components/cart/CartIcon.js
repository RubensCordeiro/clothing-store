const CartIcon = () => {
  return (
    <div className="relative w-[30px] h-[30px] flex items-center justify-center ml-4 cursor-pointer">
      <img
        src="shopping-bag.svg"
        className="absolute bottom-[3px] w-[30px] h-[30px] "
        alt=""
      />
      <span className="absolute text-md">0</span>
    </div>
  );
};

export default CartIcon;
