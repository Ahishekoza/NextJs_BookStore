"use client";

import { useCart } from "@/app/context/CartContext";
import { FaCartShopping } from "react-icons/fa6";
const AddToCart = ({ book }) => {
  const { AddItemInCart, cartItems } = useCart();

  const handleCart = (e) => {
    e.preventDefault();
    AddItemInCart(book);
   
  };

  return (
    <div className="flex justify-around  p-1">
      <button
        className="bg-purple-500  hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
        onClick={(e) => handleCart(e)}
      >
        <FaCartShopping className="w-5 mr-0.5 inline" /> to Buy
      </button>
      <button className="bg-purple-500  hover:bg-purple-700 text-white font-bold py-2 px-4 rounded">
        <FaCartShopping className="w-5 mr-0.5 inline" /> to Rent
      </button>
    </div>
  );
};

export default AddToCart;
