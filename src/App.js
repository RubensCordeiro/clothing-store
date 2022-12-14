import GlobalContainer from "./components/UI/GlobalContainer";
import Navbar from "./components/UI/Navigation/Navbar";
import { Routes, Route } from "react-router";

import HomePage from "./components/pages/home/HomePage";
import AuthenticationPage from "./components/pages/authentication/AuthenticationPage";
import CheckoutPage from "./components/pages/checkout/CheckoutPage";

import { UserProvider } from "./components/contexts/userContext";
import { CategoryProvider } from "./components/contexts/categoryContext";
import { CartProvider } from "./components/contexts/cartContext";
import Shop from "./components/pages/shop/Shop";

const App = () => {
  return (
    <div className="App">
      <UserProvider>
        <CategoryProvider>
          <CartProvider>
            <Navbar />
            <GlobalContainer>
              <Routes>
                <Route index element={<HomePage />} />
                <Route path="/auth" element={<AuthenticationPage />} />
                <Route path="/shop/*" element={<Shop />} />
                <Route path="/checkout" element={<CheckoutPage />} />
              </Routes>
            </GlobalContainer>
          </CartProvider>
        </CategoryProvider>
      </UserProvider>
    </div>
  );
};

export default App;
