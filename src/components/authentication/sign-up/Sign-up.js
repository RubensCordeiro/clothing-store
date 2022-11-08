import { useState } from "react";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUp = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields((prevState) => {
      return { ...formFields, [name]: value };
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(displayName, email, password, confirmPassword);
  };

  return (
    <article className="w-[60%]">
      <h1 className="text-xl text-zinc-800 font-bold mb-1">
        I do not have an account
      </h1>
      <p className="text-sm text-zinc-400 mb-4">
        Sign up with your email and password
      </p>
      <form action="submit" className="" onSubmit={submitHandler}>
        <div className="flex flex-col mb-12">
          <label htmlFor="name" className="text-sm text-zinc-400 mb-1">
            Name
          </label>
          <input
            type="text"
            className="p-2 bg-zinc-100 rounded border-b-2 border-zinc-500"
            required
            name="displayName"
            value={displayName}
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col mb-12">
          <label htmlFor="name" className="text-sm text-zinc-400 mb-1">
            Email
          </label>
          <input
            type="text"
            className="p-2 bg-zinc-100 rounded border-b-2 border-zinc-500"
            required
            name="email"
            value={email}
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col mb-12">
          <label htmlFor="name" className="text-sm text-zinc-400 mb-1">
            Password
          </label>
          <input
            type="text"
            className="p-2 bg-zinc-100 rounded border-b-2 border-zinc-500"
            required
            name="password"
            value={password}
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col mb-12">
          <label htmlFor="name" className="text-sm text-zinc-400 mb-1">
            Confirm password
          </label>
          <input
            type="text"
            className="p-2 bg-zinc-100 rounded border-b-2 border-zinc-500"
            required
            name="confirmPassword"
            value={confirmPassword}
            onChange={handleChange}
          />
        </div>
        <div className="flex justify-between">
          <button className="px-4 py-2 bg-zinc-700 rounded text-white">
            Sign Up
          </button>
        </div>
      </form>
    </article>
  );
};
export default SignUp;
