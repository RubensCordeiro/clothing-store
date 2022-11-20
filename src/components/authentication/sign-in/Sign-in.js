/* eslint-disable no-unused-vars */

import { useState } from "react";
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInAuthUserWithEmailAndPassword,
} from "../../../utils/firebase/firebase.utils";
import Input from "../../form-components/Input";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignIn = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields((prevState) => {
      return { ...prevState, [name]: value };
    });
  };

  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await signInAuthUserWithEmailAndPassword(
        email,
        password
      );
    } catch (error) {
      if (["auth/user-not-found", "auth/wrong-password"].includes(error.code)) {
        alert("Wrong username or password");
      }
    }
  };

  return (
    <article className="w-[40%]">
      <h1 className="text-xl text-zinc-800 font-bold mb-1">
        I already have an account
      </h1>
      <p className="text-sm text-zinc-400 mb-4">
        Sign In with your email and password
      </p>
      <form action="submit" className="" onSubmit={submitHandler}>
        <Input
          label="Email"
          type="text"
          required
          name="email"
          value={email}
          onChange={handleChange}
        />
        <Input
          label="Password"
          type="text"
          required
          name="password"
          value={password}
          onChange={handleChange}
        />
        <div className="flex flex-col gap-y-2 w-[80%] mx-auto md:w-full md:flex-row md:justify-center md:gap-x-4">
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
