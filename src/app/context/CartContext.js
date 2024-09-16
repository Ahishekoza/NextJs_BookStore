'use client'

import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  console.log(cartItems);

  const AddItemInCart = (cartItem) => {
    try {
      setCartItems((prevCartItems) => {
        // @CHECK if the item is already present in the cart
        const existingItem = prevCartItems.find(
          (prevCartItem) => prevCartItem.item.id === cartItem.id
        );

        if (existingItem) {
          return prevCartItems.map((item) =>
            item.item.id === cartItem.id
              ? { ...item, quantity: item.quantity + 1 } // Increase the quantity by 1
              : item
          );
        } else {
          return [...prevCartItems, { item: cartItem, quantity: 1 }];
        }
      });
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <CartContext.Provider value={{ cartItems, setCartItems, AddItemInCart }}>
      {children}
    </CartContext.Provider>
  );
};


export const useCart = ()=>{
  return useContext(CartContext)
}
