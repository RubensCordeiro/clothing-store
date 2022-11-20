import GlobalContainer from "./components/UI/GlobalContainer";
import Navbar from "./components/UI/Navigation/Navbar";
import { Routes, Route } from "react-router";

import HomePage from "./components/pages/home/HomePage";
import AuthenticationPage from "./components/pages/authentication/AuthenticationPage";

import { UserProvider } from "./components/contexts/userContext";

const App = () => {
  return (
    <div className="App">
      <UserProvider>
        <Navbar />
        <GlobalContainer>
          <Routes>
            <Route index element={<HomePage />} />
            <Route path="/auth" element={<AuthenticationPage />} />
          </Routes>
        </GlobalContainer>
      </UserProvider>
    </div>
  );
};

export default App;
