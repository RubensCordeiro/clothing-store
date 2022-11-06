import GlobalContainer from "./components/UI/GlobalContainer";
import Navbar from "./components/UI/Navigation/Navbar";
import HomePage from "./components/pages/home/HomePage";
import { Routes, Route } from "react-router";
import SignIn from "./components/pages/sign-in/Sign-in";

function App() {
  return (
    <div className="App">
      <Navbar />
      <GlobalContainer>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/sign-in" element={<SignIn />} />
        </Routes>
      </GlobalContainer>
    </div>
  );
}

export default App;
