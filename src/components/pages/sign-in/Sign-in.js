import { signInWithGooglePopup } from "../../../utils/firebase/firebase.utils";

const SignIn = () => {
  const logGoogleUser = async () => {
    const response = await signInWithGooglePopup();
  };

  return (
    <div className="">
      <h1>Sign in page</h1>
      <button onClick={logGoogleUser}>Log In via Google</button>
    </div>
  );
};

export default SignIn;
