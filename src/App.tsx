import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./src/pages/Homepage";
import { CartProvider } from "./src/context/CartContext";
import CartPage from "./src/pages/CartPage";
import Header from "./src/compoenents/global/Header";
import Footer from "./src/compoenents/global/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import MobileHeader from "./src/compoenents/global/MobileHeader";

function App() {
  return (
    <>
      <CartProvider>
        <Router>
          <div>
            {/* Mobile Header */}
            <div className="block md:hidden">
              <MobileHeader />
            </div>

            {/* Desktop Header */}
            <div className="hidden md:block">
              <Header />
            </div>
          </div>
          <Routes>
            <Route path="/cart" element={<CartPage />} />
            <Route path="/" element={<Homepage />} />
          </Routes>
          <Footer />
        </Router>
      </CartProvider>
      <ToastContainer />
    </>
  );
}

export default App;
