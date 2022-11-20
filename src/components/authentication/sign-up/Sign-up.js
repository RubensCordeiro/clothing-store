import { useState } from "react";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../../utils/firebase/firebase.utils";

import Input from "../../form-components/Input";

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
      return { ...prevState, [name]: value };
    });
  };

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Password do not match");
      return;
    }

    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );
      await createUserDocumentFromAuth(user, { displayName });
      resetFormFields();
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("Cannot create user, email already in use");
      } else {
        console.log(error);
      }
    }
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
        <Input
          label="Name"
          type="text"
          required
          name="displayName"
          value={displayName}
          onChange={handleChange}
        />
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
        <Input
          label="Confirm Password"
          type="text"
          required
          name="confirmPassword"
          value={confirmPassword}
          onChange={handleChange}
        />
        <div className="flex justify-center">
          <button className="px-4 py-2 bg-zinc-700 rounded text-white">
            Sign Up
          </button>
        </div>
      </form>
    </article>
  );
};
export default SignUp;
