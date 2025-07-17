

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { VscHeart } from "react-icons/vsc";
import { SlRefresh } from "react-icons/sl";
import { IoEyeOutline } from "react-icons/io5";

import { shopShoesData } from "../../constants/Variables";
import styles from "./ShopPage.module.css";
import FilterSideBar from "../../components/FilterSideBar";
import {Card} from "../../components/Card/Card"

export const ShopPage = () => {
  const [visibleCount, setVisibleCount] = useState(12);
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState(JSON.parse(localStorage.getItem("items")) || []);

  useEffect(()=> {
    localStorage.setItem("items" ,JSON.stringify(cartItems))

  },[cartItems]);


    const handleAddToCart = (product) => {
    setShowCart(true);
    setCartItems((items) => [...items, product]);
  };

  const handleRemoveItem = (id) => {
setCartItems(cartItems.filter(item => item.id !== id));



  }




  return (
    <div className={styles.shopPageContainer}>

      
      <div className={styles.ShopPage_Title}>
        <ul className={styles.homeShop_section}>
          <li><Link to="/">HOME</Link></li>
          <li><Link to="/shop">SHOP</Link></li>
        </ul>
        <h2 className={styles.ShopText}>Shop</h2>
      </div>

      <div className={styles.contentWrapper}>
        <aside className={styles.sidebarWrapper}>
          <FilterSideBar />
        </aside>

        <main className={styles.mainContent}>
             <div className={styles.ShopPage_PhotoCard}>
            <div className={styles.ShopPage_PhotoCard_texts}>
              <h2 className={styles.ShopPage_PhotoCard_text_1}>Free Shipping On Over $50</h2>
              <div className={styles.ShopPage_PhotoCard_text_2}>
                For the terms of the campaign, see the description page.
              </div>
            </div>
            <button className={styles.ShopPage_PhotoCard_button}>See More Products</button>
          </div>  


          <div className={styles.filterSection}>
            <div className={styles.filterTexts}>
              <span className={styles.filterText1}>Fast Filters :</span>
              <div className={styles.filterText2_Section}>
                <button className={styles.filterText2}>FEATURED</button>
                <button className={styles.filterText2}>BEST SELLERS</button>
                <button className={styles.filterText2}>TOP RATED</button>
                <button className={styles.filterText2}>ON SALE</button>
                <button className={styles.filterText2}>IN STOCK</button>
                <button className={styles.filterText2}>SELECT COLOR</button>
                <button className={styles.filterText2}>SELECT SIZES</button>
              </div>
            </div>
          </div>

          <div className={styles.shopShoes_section}>
            <p className={styles.shopShoes_Text}>
              Showing 1-{visibleCount} of {shopShoesData.length} results
            </p>

            <div className={styles.shoeGrid}>
              {shopShoesData.slice(0, visibleCount).map((shoe) => (
                <div key={shoe.id} className={styles.card}
                 onClick={()=>handleAddToCart(shoe)}   >
                  <img src={shoe.image} className={styles.image} alt={shoe.title} />

                  <div className={styles.saleTag} 
                   style={{ backgroundColor: shoe.etiquette === "BEST RATED" ? "red" : shoe.etiquette==="BESTSELLER" ? "rgb(89, 144, 120)" : "#00438b" }
                 }>
                  {shoe.etiquette}
                  </div>

                  {shoe.percentage && (
                    <div className={styles.discountTag}>{shoe.percentage}%</div>
                  )}

                  <div className={styles.info}>
                    <h3 className={styles.model}>{shoe.title}</h3>
                    <p className={styles.price}>
                      {shoe.price !== undefined ? (
                        <>
                          <span className={styles.oldPrice}>${shoe.price.toFixed(2)}</span>
                          <span>
                            ${(shoe.price - (shoe.price * shoe.percentage) / 100).toFixed(2)}
                          </span>
                        </>
                      ) : (
                        <>${shoe.minPrice.toFixed(2)} - ${shoe.maxPrice.toFixed(2)}</>
                      )}
                    </p>
                  </div>

                  <div className={styles.rating}>
                    <span className={styles.star}>
                      <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />
                    </span>
                  </div>

                  <div className={styles.iconsOverlay}>
                    <div className={styles.iconCircle}><VscHeart /></div>
                    <div className={styles.iconCircle}><SlRefresh /></div>
                    <div className={styles.iconCircle}><IoEyeOutline /></div>
                  </div>
                </div>
              ))}
            </div>

            {visibleCount < shopShoesData.length && (
              <button
                className={styles.loadMoreBtn}
                onClick={() => setVisibleCount(visibleCount + 6)}
              >
                Load More
              </button>
            )}

       {showCart && <Card isOpen={showCart} onClose={() => setShowCart(false)}
         cartItems={cartItems} 
         handleRemoveItem={handleRemoveItem}
       />
         }
          </div>
        </main>
      </div>
    </div>
  );
};



