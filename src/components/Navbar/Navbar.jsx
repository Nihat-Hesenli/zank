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



export const Navbar = () => {
    const [showCart, setShowCart] = useState(false);

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
                            <Link to="/product">PRODUCT</Link>
                            <Link to="/pages">PAGES</Link>
                        </div>




                    </div>
                    <div className="navbar_mid">
                        ZANK



                    </div>
                    <div className="navbar_right">
                        <FaSearch fontSize={18} color="black" />
                        <HiOutlineShoppingBag fontSize={25} color="black" onClick={() => setShowCart(true)} style={{ cursor: "pointer" }} />
                        <VscHeart fontSize={25} color="black" />
                        <SlRefresh fontSize={20} color="black" />
                        <FaRegUser fontSize={21} color="black" />
                        <HiMiniBars3 fontSize={23} color="black" />





                    </div>





                </div>

            </div>
            {
              <Card isOpen={showCart} onClose={() => setShowCart(false)} />      
                    }
        </>


    );
};


