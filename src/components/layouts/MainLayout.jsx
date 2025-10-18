import React, { useState } from "react";
import { Navbar } from "../Navbar/Navbar";
import { Outlet } from "react-router-dom";
import { Footer } from "../Footer/Footer";

export const MainLayout = ({ increaseItem, decreaseItem,  handleRemoveItem, cartItems, setCartItems, isCartOpen, setCartOpen }) => {
  const [showSearch, setShowSearch] = useState(false);
  const [showCart, setShowCart] = useState(true);

  return (
    <>
      <Navbar    showSearch={showSearch} 
        setShowSearch={setShowSearch}
        cartItems={cartItems}
        setCartItems={setCartItems}
        isCartOpen={isCartOpen}
        setCartOpen={setCartOpen} 
         handleRemoveItem= { handleRemoveItem}  
         setShowCart={setShowCart}
         increaseItem={increaseItem}
         decreaseItem={decreaseItem}
        />
      <Outlet context={{ showSearch, setShowSearch }} />
      <Footer />
    </>
  );
};
