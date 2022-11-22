import GlobalContainer from "./components/UI/GlobalContainer";
import Navbar from "./components/UI/Navigation/Navbar";
import { Routes, Route } from "react-router";

import HomePage from "./components/pages/home/HomePage";
import AuthenticationPage from "./components/pages/authentication/AuthenticationPage";

import { UserProvider } from "./components/contexts/userContext";
import { ProductsProvider } from "./components/contexts/productsContext";
import Shop from "./components/pages/shop/Shop";

const App = () => {
  return (
    <div className="App">
      <UserProvider>
        <ProductsProvider>
          <Navbar />
          <GlobalContainer>
            <Routes>
              <Route index element={<HomePage />} />
              <Route path="/auth" element={<AuthenticationPage />} />
              <Route path="/shop" element={<Shop />} />
            </Routes>
          </GlobalContainer>
        </ProductsProvider>
      </UserProvider>
    </div>
  );
};

export default App;
