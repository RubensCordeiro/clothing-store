import { Link } from "react-router-dom";
const Category = (params) => {
  const { title, imageUrl } = params;
  return (
    <div
      className="min-w-[30%] px-10 py-20 flex text-center justify-center grow bg-center bg-no-repeat bg-cover border border-solid border-zinc-200"
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
    >
      <Link
        to={`/shop/${title.toLowerCase()}`}
        className="border border-solid border-zinc-400 px-8 py-4 bg-zinc-100 opacity-80 rounded cursor-pointer hover:opacity-100"
      >
        <h2 className="font-bold text-lg">{title}</h2>
        <p>Shop Now</p>
      </Link>
    </div>
  );
};

export default Category;
