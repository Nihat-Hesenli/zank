

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { VscHeart } from "react-icons/vsc";
import { SlRefresh } from "react-icons/sl";
import { IoEyeOutline } from "react-icons/io5";

import { shopShoesData } from "../../constants/Variables";
import styles from "./ShopPage.module.css";
import FilterSideBar from "../../components/FilterSideBar";
import { Card } from "../../components/Card/Card"
import { useOutletContext } from "react-router-dom";
import hotDeal from '../../assets/images/hot-deal.png'


export const ShopPage = () => {

  const [visibleCount, setVisibleCount] = useState(12);
  const [showCart, setShowCart] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const [cartItems, setCartItems] = useState(JSON.parse(localStorage.getItem("items")) || []);

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(cartItems))

  }, [cartItems]);


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
          <FilterSideBar setSearchQuery={setSearchQuery} />
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
                <button className={styles.filterText2}>  
                    <svg className={styles.shopSvg1} fill="currentColor" enable-background="new 0 0 512 512"  viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><g><g><path d="m494.89 204.7c-17.65-23.66-29.47-51.79-34.2-81.33-2.91-18.16-11.34-34.65-24.38-47.69-13.03-13.03-29.52-21.46-47.68-24.37-29.54-4.73-57.67-16.55-81.33-34.2-15.01-11.19-32.75-17.11-51.3-17.11s-36.29 5.92-51.3 17.11c-23.66 17.65-51.79 29.47-81.33 34.2-18.16 2.91-34.65 11.34-47.69 24.38-13.03 13.03-21.46 29.52-24.37 47.68-4.73 29.54-16.55 57.67-34.2 81.33-11.19 15.01-17.11 32.75-17.11 51.3s5.92 36.29 17.11 51.3c17.65 23.66 29.47 51.79 34.2 81.33 2.91 18.16 11.34 34.64 24.38 47.69 13.04 13.03 29.52 21.46 47.68 24.37 29.54 4.73 57.67 16.55 81.33 34.2 15.01 11.19 32.75 17.11 51.3 17.11s36.29-5.92 51.3-17.11c23.66-17.65 51.79-29.47 81.33-34.2 18.16-2.91 34.65-11.34 47.69-24.38 13.03-13.03 21.46-29.52 24.37-47.68 2.37-14.77 6.5-29.19 12.25-42.87 5.76-13.68 13.12-26.63 21.95-38.46 11.19-15.01 17.11-32.75 17.11-51.3s-5.92-36.29-17.11-51.3z" fill="#fff239"></path></g><g><path d="m512 256c0 18.55-5.92 36.29-17.11 51.3-8.83 11.83-16.19 24.78-21.95 38.46-5.75 13.68-9.88 28.1-12.25 42.87-2.91 18.16-11.34 34.65-24.37 47.68-13.04 13.04-29.53 21.47-47.69 24.38-29.54 4.73-57.67 16.55-81.33 34.2-15.01 11.19-32.75 17.11-51.3 17.11v-512c18.55 0 36.29 5.92 51.3 17.11 23.66 17.65 51.79 29.47 81.33 34.2 18.16 2.91 34.65 11.34 47.68 24.37 13.04 13.04 21.47 29.53 24.38 47.69 4.73 29.54 16.55 57.67 34.2 81.33 11.19 15.01 17.11 32.75 17.11 51.3z" fill="#ffd600"></path></g><g><path d="m256 73c-100.91 0-183 82.09-183 183s82.09 183 183 183 183-82.09 183-183-82.09-183-183-183z" fill="#ffd600"></path></g><g><path d="m439 256c0 100.91-82.09 183-183 183v-366c100.91 0 183 82.09 183 183z" fill="#ffb229"></path></g><g><path d="m358.13 218.96c-2.13-5.97-7.79-9.96-14.13-9.96h-54.22l-19.68-54.13c-2.16-5.92-7.79-9.87-14.1-9.87s-11.94 3.95-14.1 9.87l-19.68 54.13h-54.22c-6.34 0-12 3.99-14.13 9.96s-.28 12.63 4.63 16.65l41.65 34.08-22.25 61.18c-2.18 6.02-.31 12.76 4.66 16.79 4.98 4.03 11.96 4.45 17.39 1.06l56.05-35.03 56.05 35.03c2.44 1.53 5.2 2.28 7.95 2.28 3.36 0 6.7-1.13 9.44-3.34 4.97-4.03 6.84-10.77 4.66-16.79l-22.25-61.18 41.65-34.08c4.91-4.02 6.76-10.68 4.63-16.65z" fill="#fff239"></path></g><g><path d="m353.5 235.61-41.65 34.08 22.25 61.18c2.18 6.02.31 12.76-4.66 16.79-2.74 2.21-6.08 3.34-9.44 3.34-2.75 0-5.51-.75-7.95-2.28l-56.05-35.03v-168.69c6.31 0 11.94 3.95 14.1 9.87l19.68 54.13h54.22c6.34 0 12 3.99 14.13 9.96s.28 12.63-4.63 16.65z" fill="#ffd600"></path></g></g></svg>    
                    <span className={styles.filterTextLeft}>FEATURED  </span>              </button>   





<button className={styles.filterText2}>  
                    <svg className={styles.shopSvg1} fill="currentColor"  viewBox="-8 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m247.5 512-65.347656-54.921875-87.613282 9.449219-18.101562-86.234375-76.4375-43.871094 36.0625-80.421875-36.0625-80.421875 76.4375-43.871094 18.101562-86.234375 87.613282 9.449219 65.347656-54.921875 65.347656 54.921875 87.613282-9.449219 18.101562 86.234375 76.4375 43.871094-36.0625 80.421875 36.0625 80.421875-76.4375 43.871094-18.101562 86.234375-87.613282-9.449219zm0 0" fill="#ff641a"></path><path d="m312.847656 457.078125 87.613282 9.449219 18.101562-86.234375 76.4375-43.871094-36.0625-80.421875 36.0625-80.421875-76.4375-43.871094-18.101562-86.234375-87.613282 9.449219-65.347656-54.921875v512zm0 0" fill="#f03800"></path><path d="m157.5 241h-30v-45h-30v120h30v-45h30v45h30v-120h-30zm0 0" fill="#fff7cc"></path><path d="m397.5 196h-90v30h30v90h30v-90h30zm0 0" fill="#ffe6b3"></path><path d="m247.5 196c-24.8125 0-45 20.1875-45 45v30c0 24.8125 20.1875 45 45 45s45-20.1875 45-45v-30c0-24.8125-20.1875-45-45-45zm15 75c0 8.277344-6.722656 15-15 15s-15-6.722656-15-15v-30c0-8.277344 6.722656-15 15-15s15 6.722656 15 15zm0 0" fill="#fff7cc"></path><path d="m262.5 241v30c0 8.277344-6.722656 15-15 15v30c24.8125 0 45-20.1875 45-45v-30c0-24.8125-20.1875-45-45-45v30c8.277344 0 15 6.722656 15 15zm0 0" fill="#ffe6b3"></path></svg>   
                    <span className={styles.filterTextLeft}>BEST SELLERS  </span>              </button>   


<button className={styles.filterText2}>  
                    <svg className={styles.shopSvg1}  fill="currentColor" enable-background="new 0 0 512 512"  viewBox="0 0 512 512"  xmlns="http://www.w3.org/2000/svg"><g><path d="m361 377 49.2 15-8.101 45-41.099 15 35.698 15-8.101 45h-120.298c-28.799 0-56.999-10.8-78.3-30h-69l30-165h45c8.401 0 15-6.599 15-15v-105c32.999 0 60 27.001 60 60v60h152.703l-8.101 45z" fill="#ffd5cc"></path><path d="m407.501 407h-272.865l-13.636 75h69c21.301 19.2 49.501 30 78.3 30h120.298l8.101-45-35.699-15 41.1-15z" fill="#ffc0b3"></path><g id="Customer_Feedback_2_"><g><path d="m151 512h-60v-195h60z" fill="#4d5e80"></path></g><g><path d="m402.1 437-5.402 30h-95.698v-30z" fill="#fa9"></path></g><g><path d="m415.602 362-5.402 30h-109.2v-30z" fill="#ffc0b3"></path></g><g><path d="m311.195 169.849-55.195-29.019-55.195 29.019 10.547-61.465-44.648-43.521 61.699-8.965 27.597-55.898 27.598 55.898 61.699 8.965-44.648 43.521z" fill="#ffdf40"></path></g><g><path d="m477.898 257.967-55.195-29.019-55.195 29.019 10.547-61.465-44.648-43.521 61.699-8.965 27.598-55.898 27.598 55.898 61.698 8.965-44.648 43.521z" fill="#ffbe40"></path></g><g><path d="m144.492 257.967-55.195-29.019-55.195 29.019 10.547-61.465-44.649-43.521 61.699-8.965 27.598-55.898 27.598 55.898 61.699 8.965-44.648 43.521z" fill="#ffdf40"></path></g></g><path d="m311.195 169.849-10.547-61.465 44.649-43.521-61.699-8.965-27.598-55.898v140.83z" fill="#ffbe40"></path><path d="m91 407h60v105h-60z" fill="#3d4b66"></path></g></svg>
                    <span className={styles.filterTextLeft}>TOP RATED  </span>              </button>   



<button className={styles.filterText2}>  
             <img className={styles.shopSvg1} src={hotDeal} alt="" />
                    <span className={styles.filterTextLeft}>ON SALE </span>              </button>   



               <button className={styles.filterText2}>  
                    <svg className={styles.shopSvg1}   viewBox="0 0 512 512"  xmlns="http://www.w3.org/2000/svg" data-name="Layer 1"><path d="m441.667 118.253-192-85.333a10.687 10.687 0 0 0 -8.667 0l-192 85.333a10.669 10.669 0 0 0 -6.333 9.747v234.667a10.669 10.669 0 0 0 6.333 9.747l192 85.333a10.673 10.673 0 0 0 8.667 0l192-85.333a10.669 10.669 0 0 0 6.333-9.747v-234.667a10.669 10.669 0 0 0 -6.333-9.747z" fill="#ff9500"></path><path d="m249.667 457.747 192-85.333a10.669 10.669 0 0 0 6.333-9.747v-234.667a10.669 10.669 0 0 0 -6.333-9.747l-192-85.333a10.687 10.687 0 0 0 -4.334-.92v426.667a10.7 10.7 0 0 0 4.334-.92z" fill="#fbab01"></path><path d="m245.333 213.333 201.65-89.622a10.572 10.572 0 0 0 -5.316-5.459l-192-85.333a10.687 10.687 0 0 0 -8.667 0l-192 85.334a10.572 10.572 0 0 0 -5.316 5.459z" fill="#fac100"></path><path d="m156.467 173.837 205.133-91.17-26.265-11.673-205.133 91.17z" fill="#fbab01"></path><circle cx="373.333" cy="362.667" fill="#00cf66" r="96"></circle><path d="m389.333 437.333a90.608 90.608 0 0 1 -56.1-161.807 95.949 95.949 0 1 0 127.241 127.238 90.434 90.434 0 0 1 -71.141 34.569z" fill="#00b157"></path><path d="m362.667 405.333a10.632 10.632 0 0 1 -7.542-3.125l-26.667-26.667a10.666 10.666 0 0 1 15.083-15.083l19.125 19.122 45.792-45.789a10.666 10.666 0 1 1 15.083 15.083l-53.333 53.333a10.632 10.632 0 0 1 -7.541 3.126z" fill="#eaeff0"></path></svg>
                    <span className={styles.filterTextLeft}> IN STOCK  </span>              </button>  





                <button className={styles.filterText2}>
                         <span className={styles.filterTextLeft}> SELECT COLOR  </span> 
               
                  </button>
                <button className={styles.filterText2}>
                  
                                           <span className={styles.filterTextLeft}>          SELECT SIZES </span> 

         


                </button>
              </div>
            </div>
          </div>
{/* "svgFeatured zank-svg-icon"  */}
          <div className={styles.shopShoes_section}>


            <p className={styles.shopShoes_Text}>
              Showing 1-{visibleCount} of {shopShoesData.length} results
            </p>

            <div className={styles.shoeGrid}>
              {shopShoesData
                .filter((shoe) =>
                  shoe.title.toLowerCase().includes(searchQuery.toLowerCase())
                )
                .slice(0, visibleCount)
                .map((shoe) => (
                  <Link key={shoe.id} to={`/product/${shoe.id}`}  className={styles.card} >

                    <img src={shoe.image} className={styles.image} alt={shoe.title} />

                    <div
                      className={styles.saleTag}
                      style={{
                        backgroundColor:
                          shoe.etiquette === "BEST RATED"
                            ? "red"
                            : shoe.etiquette === "BESTSELLER"
                              ? "rgb(89, 144, 120)"
                              : "#00438b",
                      }}
                    >
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
                          <>
                            ${shoe.minPrice.toFixed(2)} - ${shoe.maxPrice.toFixed(2)}
                          </>
                        )}
                      </p>
                    </div>

                    <div className={styles.rating}>
                      <span className={styles.star}>
                        <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />
                      </span>
                    </div>

                    <div className={styles.iconsOverlay}>
                      <div className={styles.iconCircle}>
                        <VscHeart />
                      </div>
                      <div className={styles.iconCircle}>
                        <SlRefresh />
                      </div>
                      <div className={styles.iconCircle}>
                        <IoEyeOutline />
                      </div>
                    </div>

                      </Link>
                      

                  

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
              handleAddToCart={handleAddToCart}
            />
            }

          </div>
        </main>
      </div>
    </div>
  );
};


{/* <div key={shoe.id} className={styles.card} onClick={() => handleAddToCart(shoe)}> */ }



