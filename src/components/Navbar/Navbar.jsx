import './Navbar.css';
import { FaSearch } from 'react-icons/fa';
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { VscHeart } from "react-icons/vsc";
import { SlRefresh } from "react-icons/sl";

import { FaRegUser } from "react-icons/fa6";
import { HiMiniBars3 } from "react-icons/hi2";

import { Link } from 'react-router-dom';


import { Card } from '../Card/Card';
import { useState } from 'react';

import { useSelector, useDispatch } from "react-redux";
import { setCartOpen } from "../../redux/cartSlice";





export const Navbar = () => {
    const [showCart, setShowCart] = useState(false);
    const cartItems = useSelector(state => state.cart.cartItems);
    const isCartOpen = useSelector(state => state.cart.isCartOpen);

    const dispatch = useDispatch();




    return (
        <>
            <div>

                <div className="top-navbar">
                    <div className="top-navbar-left">
                        FREE SHIPPING ON ALL ORDERS OVER $75
                    </div>
                    <div className="top-navbar-right">
                        <a href="#">Find Store </a>
                        <a href="#">Join Us </a>
                        <a href="#">Help </a>
                        <a href="#">Sign In</a>
                    </div>
                </div>


                <div className="navbar_2">

                    <div className="navbar_left">

                        <div className="navbar_left_text">
                            <Link to="/">HOME</Link>
                            <Link to="/shop">SHOP</Link>
                            <Link to="/aboutUs">ABOUT US</Link>
                            <Link to="/contact">CONTACT</Link>

                        </div>






                    </div>
                    <div className="navbar_mid">
                        ZANK



                    </div>
                    <div className="navbar_right">

                        <FaSearch
                            fontSize={18}
                            color="black"
                            style={{ cursor: "pointer" }}
                            onClick={() => setShowSearch(true)} 
                        />

                        <HiOutlineShoppingBag fontSize={25} color="black" onClick={() => dispatch(setCartOpen(true))} style={{ cursor: "pointer" }} />
                        <VscHeart fontSize={25} color="black" />
                        <SlRefresh fontSize={20} color="black" />
                        <FaRegUser fontSize={21} color="black" />
                        <HiMiniBars3 fontSize={23} color="black" />





                    </div>





                </div>

            </div>


            {isCartOpen && (
                <Card
                    isOpen={isCartOpen}
                    onClose={() => dispatch(setCartOpen(false))}
                    cartItems={cartItems}
                />
            )}

        </>


    );
};


