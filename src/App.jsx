import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { HomePage } from "./pages/Home/HomePage";
import { ShopPage } from './pages/Shop/ShopPage';
import { AboutUs } from './pages/AboutUs/AboutUs';
import {Card} from './components/Card/Card'
import { MainLayout } from './components/layouts/MainLayout';
import { useState } from 'react';
import { Navbar } from './components/Navbar/Navbar';
import { Product } from './pages/Product/Product';
import { Contact } from './pages/Contact/Contact';



const App = () => {

  const [isCartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const handleRemoveItem = (id) => {
  setCartItems(prev => prev.filter(item => item.id !== id));
};



  return (
    <BrowserRouter>
 
      <Routes>
        <Route path="/" element={<MainLayout   handleRemoveItem={handleRemoveItem}    cartItems={cartItems}
      setCartItems={setCartItems}
      isCartOpen={isCartOpen}
      setCartOpen={setCartOpen} />}>
          <Route index element={<HomePage />} />
          <Route  path="/shop"    element={<ShopPage/> }/>
          <Route path="/product/:id" element={<Product handleRemoveItem ={handleRemoveItem}   cartItems={cartItems} setCartItems={setCartItems}  setCartOpen={setCartOpen} />}/>
          <Route  path="/AboutUs"    element={<AboutUs /> }/>
          <Route  path="/Contact"    element={<Contact /> }/>



        </Route>
      </Routes>
    </BrowserRouter>
  );
};


export default App;
