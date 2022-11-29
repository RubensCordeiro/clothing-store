const CartItem = ({ cartItem }) => {
  const { name, price, imageUrl, quantity } = cartItem;
  return (
    <article className="flex py-4">
      <img src={imageUrl} alt="" className="w-[80px] mr-3" />
      <div className="flex flex-col justify-center rounded">
        <div className="text-left">
          <span>{name}</span>
        </div>
        <div className="flex align-center justify-left">
          <span>{quantity}</span>
          <span>x</span>
          <span className="px-1">${price}</span>
        </div>
      </div>
    </article>
  );
};

export default CartItem;
