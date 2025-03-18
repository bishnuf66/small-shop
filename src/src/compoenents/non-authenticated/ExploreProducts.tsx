import React, { useState } from "react";
import ProductCard from "./ProductCard";

// Define the structure of a product
interface Product {
  id: number;
  image: string;
  price: number;
  rating: number;
  title: string;
}

const category = [];

const ExploreProducts: React.FC = () => {
  // Dummy data for products
  const products: Product[] = [
    {
      id: 1,
      image: "/images/strawberry.jpg",
      price: 29.99,
      rating: 4.5,
      title: "Product 1",
    },
    {
      id: 2,
      image: "/images/strawberry.jpg",
      price: 49.99,
      rating: 3.5,
      title: "Product 2",
    },
    {
      id: 3,
      image: "/images/strawberry.jpg",
      price: 19.99,
      rating: 5,
      title: "Product 3",
    },
    {
      id: 4,
      image: "/images/strawberry.jpg",
      price: 19.99,
      rating: 5,
      title: "Product 4",
    },
    {
      id: 5,
      image: "/images/strawberry.jpg",
      price: 19.99,
      rating: 5,
      title: "Product 5",
    },
  ];

  return (
    <div className="p-8">
      <div className="flex flex-row justify-between ">
        <div className="font-bold text-2xl">Explore Products</div>
        <div className="primary-red underline">View more</div>
      </div>
      <div className="grid grid-cols-5 gap-4 py-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ExploreProducts;
