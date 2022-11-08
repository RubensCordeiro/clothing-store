/* eslint-disable no-unused-vars */

import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../../utils/firebase/firebase.utils";

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <article className="">
      <h1 className="text-xl text-zinc-800 font-bold mb-1">
        I already have an account
      </h1>
      <p className="text-sm text-zinc-400 mb-4">
        Sign In with your email and password
      </p>
      <form action="submit" className="" onSubmit={submitHandler}>
        <div className="flex flex-col mb-12">
          <label htmlFor="name" className="text-sm text-zinc-400 mb-1">
            Email
          </label>
          <input
            type="text"
            className="p-2 bg-zinc-100 rounded border-b-2 border-zinc-500"
          />
        </div>
        <div className="flex flex-col mb-12">
          <label htmlFor="name" className="text-sm text-zinc-400 mb-1">
            Password
          </label>
          <input
            type="text"
            className="p-2 bg-zinc-100 rounded border-b-2 border-zinc-500"
          />
        </div>
        <div className="flex justify-between">
          <button className="px-4 py-2 bg-zinc-700 rounded text-white">
            Sign in
          </button>
          <button
            onClick={logGoogleUser}
            className="px-4 py-2 bg-teal-700 rounded text-white"
          >
            Sign with google
          </button>
        </div>
      </form>
    </article>
  );
};

export default SignIn;
