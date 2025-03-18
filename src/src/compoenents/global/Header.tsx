import { useState } from "react";
import LoginModal from "../non-authenticated/LoginModal";
import { Heart, ShoppingCart } from "lucide-react";

function Header() {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  const handleOpenLoginModal = () => setIsLoginModalOpen(true);
  const handleCloseLoginModal = () => setIsLoginModalOpen(false);

  return (
    <div>
      <div className="flex  flex-row items-center justify-between px-6 py-1 bg-white text-black">
        <div className="flex items-center">
          <img
            className="h-12 w-12"
            src={"/images/fruit-store-logo.jpg"}
            alt="header-image"
          />
        </div>
        <div className="flex space-x-4 items-center justify-center">
          <div>Home</div>
          <div>Product</div>
          <div className="flex flex-row items-center justify-center gap-1 ">
            <Heart className="w-6 h-6" />
            <span>Favorite</span>
          </div>
          <a href="/cart">
            <div className="flex flex-row items-center justify-center gap-1">
              <ShoppingCart className="w-6 h-6" />
              <span>Cart</span>
            </div>
          </a>

          <button
            className="primary-green text-white py-1 px-4 rounded"
            onClick={handleOpenLoginModal}
          >
            Log In
          </button>
        </div>
      </div>

      <LoginModal isOpen={isLoginModalOpen} onClose={handleCloseLoginModal} />
    </div>
  );
}

export default Header;
