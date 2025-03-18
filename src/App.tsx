import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./src/pages/Homepage";
import { CartProvider } from "./src/context/CartContext";
import CartPage from "./src/pages/CartPage";
import FavoritePage from "./src/pages/FavoritePage";
import Header from "./src/compoenents/global/Header";
import Footer from "./src/compoenents/global/Footer";

function App() {
  return (
    <CartProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/favorite" element={<FavoritePage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/" element={<Homepage />} />
        </Routes>
      </Router>
      <Footer />
    </CartProvider>
  );
}

export default App;
