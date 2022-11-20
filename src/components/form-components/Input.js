const Input = ({ label, ...inputParams }) => {
  return (
    <div className="flex flex-col mb-12">
      <label htmlFor="name" className="text-sm text-zinc-400 mb-1">
        {label}
      </label>
      <input
        className="p-2 bg-zinc-100 rounded border-b-2 border-zinc-500"
        {...inputParams}
      />
    </div>
  );
};

export default Input;
