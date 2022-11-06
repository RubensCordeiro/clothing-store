import GlobalContainer from "./components/UI/GlobalContainer";
import Navbar from "./components/UI/Navigation/Navbar";
import HomePage from "./components/pages/home/HomePage";
import { Routes, Route } from "react-router";

function App() {
  return (
    <div className="App">
      <Navbar />
      <GlobalContainer>
        <Routes>
          <Route index element={<HomePage />} />
        </Routes>
      </GlobalContainer>
    </div>
  );
}

export default App;
