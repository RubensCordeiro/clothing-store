import SignIn from "../../authentication/sign-in/Sign-in";
import SignUp from "../../authentication/sign-up/Sign-up";

const AuthenticationPage = () => {
  return (
    <section className="mt-8 px-8 flex flex-col mx-auto">
      <div className="flex justify-between gap-x-16">
        <SignIn />
        <SignUp />
      </div>
    </section>
  );
};

export default AuthenticationPage;
