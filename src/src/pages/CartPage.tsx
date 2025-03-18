import React from "react";
import { Trash } from "lucide-react";
import { useCart } from "../context/CartContext";

const CartPage: React.FC = () => {
  const { cart, increaseQuantity, decreaseQuantity } = useCart();

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Shopping Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="grid gap-4">
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between border p-4 rounded shadow"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-16 h-16 object-cover"
              />
              <div className="flex-1 ml-4">
                <h2 className="font-bold">{item.title}</h2>
                <p>${item.price.toFixed(2)}</p>
                <div className="flex items-center space-x-2 mt-2">
                  <button
                    onClick={() => decreaseQuantity(item.id)}
                    className="px-2 py-1 bg-gray-200 rounded"
                  >
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    onClick={() => increaseQuantity(item.id)}
                    className="px-2 py-1 bg-gray-200 rounded"
                  >
                    +
                  </button>
                </div>
              </div>
              {/* <button
                onClick={() => removeFromCart(item.id)}
                className="text-red-500"
              >
                <Trash className="h-5 w-5" />
              </button> */}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CartPage;
