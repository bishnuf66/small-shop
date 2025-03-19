import { useState } from "react";
import LoginModal from "../non-authenticated/LoginModal";
import { Heart, Search, ShoppingCart } from "lucide-react";
import { useCart } from "../../context/CartContext";

function Header() {
  const { getTotalItems } = useCart();
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const handleOpenLoginModal = () => setIsLoginModalOpen(true);
  const handleCloseLoginModal = () => setIsLoginModalOpen(false);
  const [searchQuery, setSearchQuery] = useState("");

  const items = getTotalItems();
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would implement your search functionality, for now, it's just logging
    console.log("Search query:", searchQuery);
  };

  return (
    <div>
      <div className="flex  flex-row items-center justify-between px-6 py-1 bg-white text-black">
        <div className="flex items-center gap-20">
          <a href="/">
            <img
              className="h-12 w-12"
              src={"/images/fruit-store-logo.jpg"}
              alt="header-image"
            />
          </a>
          {/* Search Bar */}
          <form
            onSubmit={handleSearchSubmit}
            className="w-full mb-4 flex flex-row"
          >
            <input
              type="text"
              placeholder="Search for fruits..."
              value={searchQuery}
              onChange={handleSearchChange}
              className="w-full p-2 border border-gray-300 "
            />
            <span className="bg-[#42872F] w-10 h-10 flex items-center justify-center">
              {" "}
              <Search className="text-white" />
            </span>
          </form>
        </div>
        <div className="flex space-x-4 items-center justify-center">
          <a href="/">
            {" "}
            <div>Home</div>{" "}
          </a>

          <div className="flex flex-row items-center justify-center gap-1 ">
            <Heart className="w-6 h-6" />
            <span>Favorite</span>
          </div>
          <a href="/cart">
            <div className="flex flex-row items-center justify-center gap-1 relative">
              <ShoppingCart className="w-6 h-6" />
              Cart{" "}
              <span className="absolute bg-green-500 text-white -top-3 -right-3 rounded-full  w-5 h-5 flex  items-center justify-center">
                {items}
              </span>
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
