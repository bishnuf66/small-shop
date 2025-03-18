import React from "react";
import { Heart, ShoppingCart } from "lucide-react";
import { useCart } from "../../context/CartContext";

interface ProductProps {
  product: {
    id: number;
    image: string;
    price: number;
    rating: number;
    title: string;
  };
}

const ProductCard: React.FC<ProductProps> = ({ product }) => {
  const { addToCart, cart } = useCart();

  const cartItem = cart.find((item) => item.id === product.id);
  const quantity = cartItem ? cartItem.quantity : 0;

  return (
    <div className="border p-4 rounded shadow">
      <div className="relative">
        <img
          src={product.image}
          alt={product.title}
          className="w-40 h-40 object-fill"
        />
        <div className="absolute top-2 right-2 flex flex-col">
          <button>
            <Heart className="mr-2 h-4 w-4" />
          </button>
          <button onClick={() => addToCart({ ...product, quantity: 1 })}>
            <ShoppingCart className="mr-2 h-4 w-4" />
          </button>
        </div>
      </div>
      <h2 className="font-bold text-lg mt-2 primary-text-green">
        {product.title}
      </h2>
      <p className="text-gray-600">${product.price.toFixed(2)}</p>
      <p className="text-yellow-500">
        {"★".repeat(Math.floor(product.rating))}{" "}
        {"☆".repeat(5 - Math.floor(product.rating))}
      </p>
      <button
        className="bg-primary-green text-black py-1 px-4 rounded shadow-md mt-4"
        onClick={() => addToCart({ ...product, quantity: 1 })}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
