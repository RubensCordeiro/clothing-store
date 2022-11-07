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

  return (
    <div className="">
      <h1>Sign in page</h1>
      <button onClick={logGoogleUser}>Log In via Google</button>
    </div>
  );
};

export default SignIn;
