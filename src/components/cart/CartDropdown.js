const CartDropdown = () => {
  return (
    <div className="z-0 absolute flex flex-col justify-between align-center text-center left-[97%] top-[60px] transform: -translate-x-full bg-white px-2 py-4 border border-solid border-zinc-400 rounded w-[230px] h-[300px]">
      <div className="">Items Here</div>
      <button className="mt-1 mx-auto w-[70%] p-2 bg-zinc-700 rounded-sm text-white border border-solid border-transparent hover:bg-transparent hover:text-zinc-800 hover:border-zinc-700">
        Go to checkout
      </button>
    </div>
  );
};

export default CartDropdown;
