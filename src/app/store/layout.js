import React from "react";
import Sidebar from "../components/sidebar/Sidebar";
import { CartContextProvider } from "../context/CartContext";

export const metadata = {
  title: "Bookstore - Lend or Buy Books",
  description: "An Online Bookstore to sell and buy books",
};

const BookStoreLayout = ({ children }) => {
  return (
    <CartContextProvider>
      <div className="flex flex-col md:flex-row min-h-screen mb-10">
        <Sidebar />
        <div className=" p-2  w-screen">{children}</div>
      </div>
    </CartContextProvider>
  );
};

export default BookStoreLayout;
