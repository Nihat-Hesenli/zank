import React, { useState } from 'react';
import { useEffect } from 'react';

import ProductPhoto_1 from '../../assets/images/ProductPhoto_1.jpg'
import ProductPhoto_2 from '../../assets/images/ProductPhoto_2.jpg'
import ProductPhoto_3 from '../../assets/images/ProductPhoto_3.jpg'
import ProductPhoto_4 from '../../assets/images/ProductPhoto_4.jpg'
import ProductPhoto_5 from '../../assets/images/ProductPhoto_5.jpg'
import ProductPhoto_6 from '../../assets/images/ProductPhoto_6.jpg'
import ProductBigPhoto_1 from '../../assets/images/ProductShoeImg1.jpg'

import buyCard from '../../assets/images/buyCard.webp'
import { FaStar, FaChevronDown } from "react-icons/fa";
import { VscHeart } from "react-icons/vsc";
import { IoEyeOutline } from "react-icons/io5";

import { SlRefresh } from "react-icons/sl";
import { FaCar } from "react-icons/fa";
import { TfiRulerAlt } from "react-icons/tfi";
import { HiOutlineShoppingBag } from "react-icons/hi2";


import { TbTruckDelivery } from "react-icons/tb";

import { TbCalendarTime } from "react-icons/tb";



import { FaFacebook } from "react-icons/fa";


import { AiFillTwitterCircle } from "react-icons/ai";


import { SiStyleshare, SiYoutubemusic } from "react-icons/si";

import { FaTelegram } from "react-icons/fa";

import { FaVk } from "react-icons/fa6";
import { FaPinterest } from "react-icons/fa";

import { FaLinkedin } from "react-icons/fa6";

import { TbBrandOkRu } from "react-icons/tb";

import { FaWhatsapp } from "react-icons/fa";

import { FaViber } from "react-icons/fa";

import { useParams } from "react-router-dom";
import { shopShoesData } from "../../constants/Variables";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

import { Navigation, Autoplay } from 'swiper/modules';

import { shoesData } from "../../constants/Variables";














import { useDispatch, useSelector } from "react-redux";
import { addToCart, increaseItem, decreaseItem, setCartOpen } from "../../redux/cartSlice";


import styles from "../Product/Product.module.css"


export const Product = () => {

    const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.cartItems);


  const handleAdd = () => {
    dispatch(addToCart(product));
    dispatch(setCartOpen(true));                
  };


   const handleIncrease = (id) => dispatch(increaseItem(id));
  const handleDecrease = (id) => dispatch(decreaseItem(id));





    useEffect(() => {
        const interval = setInterval(() => {
            setTimeLeft((prevTime) => {
                let { days, hours, minutes, seconds } = prevTime;

                if (days === 0 && hours === 0 && minutes === 0 && seconds === 0) {
                    clearInterval(interval);
                    return prevTime;
                }

                if (seconds > 0) seconds--;
                else {
                    seconds = 59;
                    if (minutes > 0) minutes--;
                    else {
                        minutes = 59;
                        if (hours > 0) hours--;
                        else {
                            hours = 23;
                            if (days > 0) days--;
                        }
                    }
                }

                return { days, hours, minutes, seconds };
            });
        }, 1000);

        return () => clearInterval(interval);
    }, []);







    const [timeLeft, setTimeLeft] = useState({
        days: 6,
        hours: 8,
        minutes: 16,
        seconds: 50,
    });



    const { id } = useParams();
    const product = shopShoesData.find((item) => item.id === id);
    if (!product) {
        return <div>Ürün bulunamadı. (id: {id})</div>;
    }


    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const [selectedSport, setSelectedSport] = useState("Choose an opinion");
    const [selectedColor, setSelectedColor] = useState(null);
    const [selectedSize, setSelectedSize] = useState(null);

    const toggleDropdown = () => setDropdownOpen(!isDropdownOpen);
    const handleSelect = (sport) => {
        setSelectedSport(sport);
        setDropdownOpen(false);





    };



 
    //     setCartItems(prevItems => {
    //         let newItems = [];
    //         let isFound = false;

    //         // Mevcut cartItems içinde ürünü ara
    //         for (let i = 0; i < prevItems.length; i++) {
    //             if (prevItems[i].id === product.id) {
    //                 isFound = true;
    //                 // quantity artır
    //                 newItems.push({ ...prevItems[i], quantity: prevItems[i].quantity + 1 });
    //             } else {
    //                 newItems.push(prevItems[i]);
    //             }
    //         }

    //         // Eğer ürün bulunmadıysa, yeni ekle
    //         if (!isFound) {
    //             newItems.push({
    //                 id: product.id,
    //                 title: product.title,
    //                 image: product.imageBig,
    //                 price: product.price,
    //                 minPrice: product.minPrice,
    //                 maxPrice: product.maxPrice,
    //                 percentage: product.percentage,
    //                 quantity: 1
    //             });
    //         }

    //         return newItems;
    //     });

    //     setCartOpen(true);
    // };























    return (
        <>

            <div className={styles.ProductContainer}>




                <div className={styles.ProductPhotos}>
                    <div className={styles.ProductPhotoSmall}>
                        {product.imageMini?.map((img, index) => (
                            <img
                                key={index}
                                src={img}
                                className={`${styles.ProductPhoto_2} ${index === 5 ? styles.hideOnMobile : ''}`}
                                alt={`mini-${index}`}
                            />
                        ))}
                    </div>


                    <div className={styles.ProductPhoto_1}>
                        <img src={product.imageBig}
                            className={styles.ProductPhoto_1}
                            alt="main" />
                    </div>





                </div>



                <div className={styles.ProductContext}>
                    <div className={styles.ContextTexts_1}>
                        <span className={styles.ContextText_1}>Home</span>
                        <span className={styles.ContextText_1}>Products</span>
                        <span className={styles.ContextText_1}>Nike Air Max Plus</span>



                    </div>
                    <div className={styles.ContextText_2}>
                        <h2 className={styles.ContextText_title}>{product.title}</h2>

                        <div className={styles.Price}>
                            {product.price
                                ? `$${product.price}`
                                : `$${product.minPrice} – $${product.maxPrice}`}
                        </div>














                        <span className={styles.ContextTextPar}>
                            There is always the new project, the new opportunity. It is not easy to dress well. A lot <br />
                            of self-importance goes on in the fashion industry. I’m not like that. My learning <br />
                            process is by eye alone; it’s not at all scientific. Men have got more of a discerning <br />
                            eye.<br />

                        </span>

                        <div className={styles.ContextBorder}>
                            <div className={styles.Context}>
                                <p className={styles.BorderText_1}>Countdown Campaign </p>
                                <div className={styles.BorderCounts}>
                                    <span className={styles.BorderCount_1}>
                                        {String(timeLeft.days).padStart(2, "0")}
                                    </span>
                                    <p className={styles.BorderGap}>:</p>
                                    <span className={styles.BorderCount_1}>
                                        {String(timeLeft.hours).padStart(2, "0")}
                                    </span>
                                    <p className={styles.BorderGap}>:</p>
                                    <span className={styles.BorderCount_1}>
                                        {String(timeLeft.minutes).padStart(2, "0")}
                                    </span>
                                    <p className={styles.BorderGap}>:</p>
                                    <span className={styles.BorderCount_2}>
                                        {String(timeLeft.seconds).padStart(2, "0")}
                                    </span>
                                </div>

                                <p className={styles.BorderText_3}>
                                    Lorem ipsum dolor sit amet  </p>




                            </div>


                        </div>

                        <div className={styles.orderedSection}>
                            <div className={styles.orderedTexts}>

                                <span className={styles.orderedText_1}>Ordered: 81</span>
                                <span className={styles.orderedText_1}> Items available: 419 </span>

                            </div>

                            <div className={styles.progressBarContainer}>
                                <div className={styles.progressBarFill} style={{ width: "25%" }}></div>
                            </div>


                            <div className={styles.filterGroupRow}>
                                <h3 className={styles.filterTitle}>color</h3>
                                <div className={styles.colorOptions}>
                                    {["black", "lightBlue", "green", "yellow", "brown", "white"].map((color) => (
                                        <span
                                            key={color}
                                            className={`${styles.colorDot} ${styles[color]} ${selectedColor === color ? styles.selectedColor : ""}`}
                                            onClick={() => setSelectedColor(color)}
                                        ></span>
                                    ))}
                                </div>
                            </div>


                            {/* Sizes */}
                            <div className={styles.filterGroupRow}>
                                <h3 className={styles.filterTitle}>sizes</h3>
                                <div className={styles.sizesOptions}>
                                    {["EU39", "EU40", "EU41", "EU42", "EU42.5", "EU43", "EU43.5", "EU44", "EU45", "EU46"].map(size => (
                                        <span
                                            key={size}
                                            className={`${styles.sizeItem} ${selectedSize === size ? styles.selectedSize : ""}`}
                                            onClick={() => setSelectedSize(size)}
                                        >
                                            {size}
                                        </span>
                                    ))}
                                </div>
                            </div>


                            {/* Sports */}
                            <div className={styles.filterGroup}>
                                <div className={styles.filterTitle}>
                                    <h3 className={styles.filterTitle}>Sports</h3>

                                </div>
                                <div className={styles.dropdownWrapper}>
                                    <div className={styles.dropdownHeader} onClick={toggleDropdown}>
                                        {selectedSport}
                                        <FaChevronDown className={styles.dropdownArrow} />
                                    </div>
                                    {isDropdownOpen && (
                                        <div className={styles.dropdownList}>
                                            {["Football", "Lifestyle", "Running", "Basketball", "Tennis"].map((sport) => (
                                                <div
                                                    key={sport}
                                                    className={styles.dropdownItem}
                                                    onClick={() => handleSelect(sport)}
                                                >
                                                    {sport}
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </div>

                            <div className={styles.buySection}>

                                <div className={styles.buyContext}>




                                    <div className={styles.priceSection}>

                                        <div className={styles.oldPrice}>$120.00</div>
                                        <div className={styles.price}>$97.00</div>
                                    </div>

                                    <span className={styles.buyText1}>419 in stock (can be backordered)</span>

                                    <div className={styles.buyButtons}>
                                        <div className={styles.buyButtons_1}>
                                            <button  className={styles.buyButtons_count}>{cartItems.find(item => item.id === product.id)?.quantity || 0}</button>
                                            <button
                                            
                                                onClick={()=>{
                                                    
                                                       dispatch(addToCart({...product, image: product.imageBig}));

                                                    
                                                  
                                                }}


                                                className={styles.blueButton1}>Add to cart </button>
    











                                            <button className={styles.blueButton2}><VscHeart fontSize={18} color="white" /></button>
                                            <button className={styles.blueButton2}> <SlRefresh fontSize={18} color="white" /></button>






                                        </div>

                                        <div className={styles.buyButtons_2}>
                                            <button className={styles.redButton}>Buy Now</button>

                                        </div>


                                        <span className={styles.buyLine}></span>



                                        <div className={styles.buyDelivery}>
                                            <FaCar className={styles.carIcon} />

                                            <span className={styles.buyDeliveryText}>   2 - day Delivery      Speedy and reliable parcel delivery!</span>


                                        </div>
                                    </div>










                                </div>


                                <div className={styles.buyIcons}>
                                    <div className={styles.buyIcon1}>
                                        <TbTruckDelivery fontSize={20} />

                                        <span className={styles.buyIconText}>
                                            Delivery & Return
                                        </span>
                                    </div>
                                    <div className={styles.buyIcon1}>

                                        <TfiRulerAlt fontSize={20} />
                                        <span className={styles.buyIconText}>
                                            Size Guide
                                        </span>


                                    </div>
                                    <div className={styles.buyIcon1}>

                                        <TbCalendarTime fontSize={23} />

                                        <span className={styles.buyIconText}>
                                            Estimated Delivery Jul 22 Jul 26
                                        </span>




                                    </div>


                                </div>

                                <div className={styles.yellowDashframes}>
                                    <div className={styles.yellowDashframe}>
                                        <div className={styles.yellowDashframeContext}>

                                            <HiOutlineShoppingBag color='#c28e00' fontSize={20} />
                                            <span className={styles.yellowText}>
                                                51 people have this in their carts right now. It's running out!
                                            </span>

                                        </div>


                                    </div>


                                </div>




                                <div className={styles.ResponsiveBuy}>

                                    <div className={styles.buyCategory}>
                                        <div className={styles.buyCategoryTexts}>
                                            <span className={styles.buyCategoryText1}>SKU:</span>
                                            <span className={`${styles.buyCategoryText2} ${styles.label}`}>
                                                {product.sku || "N/A"}
                                            </span>
                                        </div>

                                        {/* Category */}
                                        <div className={styles.buyCategoryTexts}>
                                            <span className={styles.buyCategoryText1}>Category:</span>
                                            <span className={`${styles.buyCategoryText2} ${styles.label}`}>
                                                {product.categories?.join(", ") || "N/A"}
                                            </span>
                                        </div>

                                        {/* Tag */}
                                        <div className={styles.buyCategoryTexts}>
                                            <span className={styles.buyCategoryText1}>Tag:</span>
                                            <span className={`${styles.buyCategoryText2} ${styles.label}`}>
                                                {product.tags?.join(", ") || "N/A"}
                                            </span>
                                        </div>

                                        {/* Brand */}
                                        <div className={styles.buyCategoryTexts}>
                                            <span className={styles.buyCategoryText1}>Brand:</span>
                                            <span className={`${styles.buyCategoryText2} ${styles.label}`}>
                                                {product.brand || "N/A"}
                                            </span>
                                        </div>
                                    </div>

                                    <div className={styles.buyShare}>
                                        <span className={styles.buyShareText}>Share:</span>
                                        <div className={styles.buySosial}>
                                            <FaFacebook fontSize={28} style={{ color: "#1877F2" }} />
                                            <AiFillTwitterCircle fontSize={28} style={{ color: "#1DA1F2" }} />
                                            <FaPinterest fontSize={28} style={{ color: "#E60023" }} />
                                            <FaLinkedin fontSize={28} style={{ color: "#0A66C2" }} />
                                            <TbBrandOkRu fontSize={28} style={{ color: "#EE8208" }} />
                                            <FaWhatsapp fontSize={28} style={{ color: "#25D366" }} />
                                            <FaTelegram fontSize={28} style={{ color: "#0088cc" }} />
                                            <FaViber fontSize={28} style={{ color: "#665CAC" }} />
                                            <FaVk fontSize={28} style={{ color: "#4C75A3" }} />


                                        </div>



                                    </div>


                                    <div className={styles.buyCredit}>

                                        <img className={styles.buyCard} src={buyCard} alt="" />
                                        <span className={styles.buyCreditText}>
                                            Trusted Seller Description
                                        </span>
                                    </div>

                                </div>









                            </div>


                        </div>






                    </div>



                </div >

            </div>






            <div className={styles.InformationSection}>
                <div className={styles.InfoTitle}>
                    <h1 className={styles.InfoText}>
                        Description

                    </h1>

                    <h1 className={styles.InfoText}>
                        Additionalinformation

                    </h1>

                    <h1 className={styles.InfoText}>
                        Reviews (4)

                    </h1>

                    <h1 className={styles.InfoText}>
                        Q & A (2)

                    </h1>

                    <h1 className={styles.InfoText}>
                        Sizes

                    </h1>

                    <h1 className={styles.InfoText}>
                        ModelInformation

                    </h1>






                </div>

                <div className={styles.InfoPar}>
                    Boldly explore new places in the Nike Air Max Plus and get a taste of legendary Tuned Air technology. Air units in the forefoot and heel offer big cushioning to help you zoom around the playground in comfort. But <br />
                    these sneakers don’t just feel good—they look good too! With a design rooted in the original (look for a whale’s tail near the bottom), fun gradient colours make a bold statement while you play.
                </div>

                <div className={styles.infoList}>
                    <li> Colour Shown: University Red/Black</li>


                    <li> Style: FB8024-600 </li>


                </div>

            </div >










            <div className={styles.ViewersSection}>
                <span className={styles.ViewersTitle}>

                    Viewers Also Liked
                </span>


                <div className={styles.shoe_cards}>

                    <Swiper
                        modules={[Navigation, Autoplay]}
                        navigation
                        loop={true}
                        speed={1000}
                        spaceBetween={20}
                        slidesPerGroup={2}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                        }}
                        breakpoints={{

                            0: {
                                slidesPerView: 2,

                                spaceBetween: 15,
                            },
                            768: {
                                slidesPerView: 3,

                                spaceBetween: 14,
                            },
                            1440: {
                                slidesPerView: 4,
                                spaceBetween: 20,
                            },

                        }}
                    >
                        {shoesData.map((shoe, index) => (
                            <SwiperSlide key={index}>
                                <div className={styles.card}>
                                    <img src={shoe.image} className={styles.image} />
                                    <div className={styles.saleTag}>{shoe.etiquette}</div>
                                    <div className={styles.discountTag}>{shoe.percentage}%</div>
                                    <div className={styles.info}>
                                        <h3 className={styles.model}>{shoe.title}</h3>
                                        <p className={styles.price}>
                                            {shoe.price !== undefined ? (
                                                <>
                                                    <span className={styles.oldPrice}>${shoe.price.toFixed(2)}</span>
                                                    <span>
                                                        ${(
                                                            shoe.price - (shoe.price * shoe.percentage) / 100
                                                        ).toFixed(2)}
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
                            </SwiperSlide>
                        ))}
                    </Swiper>







                </div>



            </div>















        </>





    );





}














