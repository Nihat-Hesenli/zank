
import styles from "../Home/HomePage.module.css"
import shoeImg from '../../assets/images/winter_card_photo_1.jpg';
import featureImg from '../../assets/images/featured_card_photo_1.jpg'
import bigCardImage_1 from '../../assets/images/bigCardImg_1.png'
import bigCardImage_2 from '../../assets/images/bigCardImg_2.png'
import bigCardImage_3 from '../../assets/images/bigCardImg_3.png'
import widget_1 from '../../assets/images/widget_1.png'
import widget_2 from '../../assets/images/widget_2.png'
import widget_3 from '../../assets/images/widget_3.png'
import widget_4 from '../../assets/images/widget_4.png'
import photoTitle from '../../assets/images/photoTitle_1.jpg'
import trendProducts from '../../assets/images/trendProducts.jpg'

import currentPhoto_1 from '../../assets/images/currentphoto_1.jpg'
import currentPhoto_2 from '../../assets/images/currentphoto_2.jpg'
import currentPhoto_3 from '../../assets/images/currentphoto_3.jpg'
import currentPhoto_4 from '../../assets/images/currentphoto_4.jpg'

import zankInsta_1 from '../../assets/images/zankinsta_1.jpg'
import zankInsta_2 from '../../assets/images/zankinsta_2.jpg'
import zankInsta_3 from '../../assets/images/zankinsta_3.jpg'
import zankInsta_4 from '../../assets/images/zankinsta_4.jpg'
import zankInsta_5 from '../../assets/images/zankinsta_5.jpg'
import zankInsta_6 from '../../assets/images/zankinsta_6.jpg'







import { FaStar } from "react-icons/fa";
import { IoEyeOutline } from "react-icons/io5";
import { VscHeart } from "react-icons/vsc";
import { SlRefresh } from "react-icons/sl";

//Data
import { shoesData } from "../../constants/Variables";
import { featuredShoesData } from "../../constants/Variables";

import { monthShoesData } from "../../constants/Variables";
import { trendShoesData } from "../../constants/Variables";
import { instaPhotosData } from "../../constants/Variables";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

import { Navigation, Autoplay } from 'swiper/modules';
import { useNavigate } from "react-router-dom"; 
import { useRef } from "react";

  







export const HomePage = () => {

    const shoesRef = useRef(null);

     const handleScrollToProducts = () => {
     shoesRef.current?.scrollIntoView({ behavior: "smooth" }); 
  };


     const navigate = useNavigate();


    const handleStartShopping = () => {
    navigate("/shop"); 
  };

    return (
        <>




            <div className={styles.header}>
                <div className={styles.header_photo}></div>

                <div className={styles.header_texts}>
                    <div className={styles.header_text_1}>
                        <p>Modern Nike </p>
                        <p>Shoes Collection</p>
                    </div>
                    <div className={styles.header_text_2}>
                        <p>White shoes come in various styles, ranging</p>
                        <p>from sneakers to sandals, making it easy to find </p>
                        <p>one that suits your taste.</p>
                    </div>

                    <div className={styles.header_buttons}>
                        <button onClick={handleScrollToProducts} className={styles.header_button_1}>
                            Check Collection
                        </button>
                        <button onClick={handleStartShopping} className={styles.header_button_2}>
                            Shop Now
                        </button>


                    </div>
                </div>
            </div>


            <div className={styles.cards_container}>

                <div className={styles.card_1}>

                    <div className={styles.card_texts}>
                        <span className={styles.card_1_text}>
                            2022 WINTER TRENDS
                        </span>
                        <h3 className={styles.card_1_text_2}>

                            Chech New Trends
                        </h3>
                        <div className={styles.card_1_text_3}>

                            <p>  Cardigan helvetica sriracha, portland t</p>
                            <p>celiac truffaut woke artisan succulents  </p>
                            <p> cred art party slow-carb  pinterest </p>
                            <p>Migas humblebrag chicharrones    </p>
                            <p>everyday carry four lok...</p>
                        </div>



                    </div>

                </div>

                <div className={styles.card_2}>



                </div>

                <div className={styles.card_3}>

                </div>

                <div className={styles.card_4}>


                </div>




            </div>


            <div ref={shoesRef}  className={styles.winter_section}>

                <div className={styles.winter_head}>
                    <h3 className={styles.winter_head_1}>Winter Collection</h3>
                    <p className={styles.winter_head_2}>Cardigan helvetica sriracha, portland celiac truffaut</p>

                </div>

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
                                slidesPerView: 5,
                                spaceBetween: 20,
                            },
                        }}
                    >
                        {shoesData.map((shoe, index) => (
                            <SwiperSlide key={index}>
                                <div className={styles.card}>
                                    <img src={shoe.image} className={styles.image} />
                                    <div className={styles.saleTag}>{shoe.etiquette}</div>
                                    <div className={styles.discountTag}>%{shoe.percentage}</div>
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













                <div className={styles.dashedFrames}>

                    <div className={styles.dashedFrame}>
                        <p className={styles.dashedFrame_text_1}>
                            Super discount for<span className={styles.mobileHide}><br /></span> your first purchase
                        </p>

                        <div className={styles.dashedFrame_button}>
                            <span >FIRST 250</span>
                        </div>

                        <p className={styles.dashedFrame_text_2}>
                            Use discount code in<span className={styles.mobileHide}><br /></span> checkout page.
                        </p>

                    </div>



                    <div className={styles.dashedFrame_2}>
                        <p className={styles.dashedFrame_2_text}>
                            2nd shopping surprise campaign!
                        </p>

                        <div className={styles.dashedFrame_2_button}>
                            <span >Check Products</span>
                        </div>



                    </div>
                </div>


                <div className={styles.Featured_section}>

                    <div className={styles.Featured_section_head}>
                        <h3>Featured Products</h3>
                    </div>

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
                                    slidesPerView: 5,
                                    spaceBetween: 20,
                                },
                            }}
                        >
                            {shoesData.map((shoe, index) => (
                                <SwiperSlide key={index}>
                                    <div className={styles.card}>
                                        <img src={shoe.image} className={styles.image} />
                                        <div className={styles.saleTag}>{shoe.etiquette}</div>
                                        <div className={styles.discountTag}>%{shoe.percentage}</div>
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


                    <div className={styles.bigShoeCards}>

                        <div className={styles.bigShoeCard_1}>
                            <img src={bigCardImage_1} className={styles.bigShoeCardImg_1} />
                            <div className={styles.bigShoeCard_Content}>
                                <span className={styles.bigShoeCard_Content_Text_1}>NIKE DUNK</span>
                                <h4 className={styles.bigShoeCard_Content_Text_2}>2023 New Styles</h4>
                                <span className={styles.bigShoeCard_Content_Text_3}>Join the trend of pastel colors. </span>
                                <h3 className={styles.bigShoeCard_Content_Text_4}>See More Products.</h3>
                            </div>
                        </div>


                        <div className={styles.bigShoeCardRight}>
                            <div className={styles.bigShoeCard_2}>
                                <img src={bigCardImage_2} className={styles.bigShoeCardImg_2} />
                                <div className={styles.bigShoeCard_Content}>
                                    <span className={styles.bigShoeCard_2_Content_Text_1}>FREE METCON</span>
                                    <h4 className={styles.bigShoeCard_Content_Text_2}>Blue Sport Trends</h4>
                                    <h3 className={styles.bigShoeCard_Content_Text_4}>See More Products.</h3>
                                </div>
                            </div>

                            <div className={styles.bigShoeCard_2}>
                                <img src={bigCardImage_3} className={styles.bigShoeCardImg_2} />
                                <div className={styles.bigShoeCard_Content}>
                                    <span className={styles.bigShoeCard_2_Content_Text_1}>NIKE CITY</span>
                                    <h4 className={styles.bigShoeCard_Content_Text_2}>Pink Teen Shoes</h4>
                                    <h3 className={styles.bigShoeCard_Content_Text_4}>See More Products.</h3>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className={styles.widgetContainers}>

                        <div className={styles.widgetContainer_1}>
                            <img className={styles.widget_1} src={widget_1} alt="" />
                            <h5 className={styles.widgetText_1}>Amazing Value Every Day</h5>
                            <div className={styles.widgetText_2}>
                                <p>Items prices that fit your budget,</p>
                                <p className={styles.widgetParag_2}>true prices for everyone</p>

                            </div>


                        </div>

                        <div className={styles.widgetContainer_1}>
                            <img className={styles.widget_2} src={widget_2} alt="" />
                            <h5 className={styles.widgetText_1}>Successful Customer Service</h5>
                            <div className={styles.widget_2_Text_2}>
                                <p>We work with a focus on 100%</p>
                                <p className={styles.widgetParag_2}>customer satisfaction.e</p>

                            </div>


                        </div>

                        <div className={styles.widgetContainer_1}>
                            <img className={styles.widget_3} src={widget_3} alt="" />
                            <h5 className={styles.widgetText_1}>All Payment Methods</h5>
                            <div className={styles.widgetText_2}>
                                <p>Don't bother with payment</p>
                                <p className={styles.widget_3_Parag_2}>details.</p>

                            </div>


                        </div>

                        <div className={styles.widgetContainer_1}>
                            <img className={styles.widget_1} src={widget_4} alt="" />
                            <h5 className={styles.widgetText_1}>Completely free shipping</h5>
                            <div className={styles.widgetText_2}>
                                <p className={styles.widgetParag_1}>We'll handle the shipping, don't</p>
                                <p className={styles.widget_4_Parag_2}>think about details!</p>

                            </div>


                        </div>



                    </div>










                </div>


                <div className={styles.thisMonth_Section}>
                    <h3 className={styles.winter_head_1}>This Month’s Best Sellers</h3>
                    <div className={styles.humanSection}>

                        <p>Women </p>
                        <p >Men</p>
                        <p >Children </p>
                        <p >Sales</p>



                    </div>


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
                                    slidesPerView: 5,
                                    spaceBetween: 20,
                                },
                            }}
                        >
                            {shoesData.map((shoe, index) => (
                                <SwiperSlide key={index}>
                                    <div className={styles.card}>
                                        <img src={shoe.image} className={styles.image} />
                                        <div className={styles.saleTag}>{shoe.etiquette}</div>
                                        <div className={styles.discountTag}>%{shoe.percentage}</div>
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



                    <div className={styles.comment_container}>
                        <div className={styles.comment_photo}>

                        </div>

                        <div className={styles.comment_context}>

                            <div className={styles.comment_text_1}>
                                <p>This is due to their excellent service, competitive pricing and customer </p>
                                <p> support. It’s throughly refresing to get such a personal touch. Duis aute </p>
                                <p>lorem ipsum is simply free text irure dolor in reprehenderit</p>

                            </div>

                            <div className={styles.comment_photoText}>
                                <img className={styles.photoTitle_img} src={photoTitle} alt="" />
                                <div className={styles.photoTexts}>
                                    <h5 className={styles.photoText_1}>Jessica Brown</h5>
                                    <span className={styles.photoText_2}>Customer</span>


                                </div>



                            </div>


                        </div>

                    </div>

                    <div className={styles.trendProducts_section}>

                        <div className={styles.winter_head}>
                            <h3 className={styles.winter_head_1}>Trend Products of The Week</h3>
                            <p className={styles.winter_head_2}>Cardigan helvetica sriracha, portland celiac truffaut</p>

                        </div>

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
                                        slidesPerView: 5,
                                        spaceBetween: 20,
                                    },
                                }}
                            >
                                {shoesData.map((shoe, index) => (
                                    <SwiperSlide key={index}>
                                        <div className={styles.card}>
                                            <img src={shoe.image} className={styles.image} />
                                            <div className={styles.saleTag}>{shoe.etiquette}</div>
                                            <div className={styles.discountTag}>%{shoe.percentage}</div>
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

                    <div className={styles.winter_head}>
                        <h3 className={styles.winter_head_1}>Current articles from Zank</h3>
                        <p className={styles.winter_head_2}>Cardigan helvetica sriracha, #portland celiac truffaut</p>

                    </div>


                    <div className={styles.currentPhotoCards}>
                        <div className={styles.currentPhotoCard_1}>
                            <div className={styles.currentPhoto_section}>

                                <div className={styles.currentPhoto_wrapper}>
                                    <img className={styles.currentPhoto_1} src={currentPhoto_1} alt="" />
                                    <span className={styles.currentPhoto_1_btn}>Nike</span>
                                </div>

                            </div>

                            <div className={styles.current_context}>
                                <h6 className={styles.current_text_1}>9THEMEW</h6>
                                <a className={styles.current_text_2}>Paolo Banchero Signs With Jordan Brand</a>
                                <div className={styles.current_text_par}>
                                    <p className={styles.current_text_3}>Take all negative words out of your</p>
                                    <p className={styles.current_text_3}>mental dictionary and focus on the</p>
                                    <p className={styles.current_text_3}>solutions with…</p>
                                </div>
                            </div>
                        </div>
                        <div className={styles.currentPhotoCard_1}>
                            <div className={styles.currentPhoto_section}>

                                <div className={styles.currentPhoto_wrapper}>
                                    <img className={styles.currentPhoto_1} src={currentPhoto_2} alt="" />
                                    <span className={styles.currentPhoto_1_btn}>Nike</span>
                                </div>

                            </div>

                            <div className={styles.current_context}>
                                <h6 className={styles.current_text_1}>9THEMEW</h6>
                                <a className={styles.current_text_2}>On the Pitch:Nike Football Boots</a>
                                <div className={styles.current_text_par}>
                                    <p className={styles.current_text_3}>The main compont of healty </p>
                                    <p className={styles.current_text_3}>environment for self esteem is that it</p>
                                    <p className={styles.current_text_3}>needs be...</p>
                                </div>
                            </div>
                        </div>

                        <div className={styles.currentPhotoCard_1}>
                            <div className={styles.currentPhoto_section}>

                                <div className={styles.currentPhoto_wrapper}>
                                    <img className={styles.currentPhoto_1} src={currentPhoto_3} alt="" />
                                    <span className={styles.currentPhoto_1_btn}>Nike</span>
                                </div>

                            </div>

                            <div className={styles.current_context}>
                                <h6 className={styles.current_text_1}>9THEMEW</h6>
                                <a className={styles.current_text_2}>Jordan Wings is Expanding Into the Philippines </a>
                                <div className={styles.current_text_par}>
                                    <p className={styles.current_text_3}>                        Never ever think of giving up. Winners </p>
                                    <p className={styles.current_text_3}>                        never quit and quitters never win. Take</p>
                                    <p className={styles.current_text_3}>                         all…</p>
                                </div>
                            </div>
                        </div>

                        <div className={styles.currentPhotoCard_1}>
                            <div className={styles.currentPhoto_section}>

                                <div className={styles.currentPhoto_wrapper}>
                                    <img className={styles.currentPhoto_1} src={currentPhoto_4} alt="" />
                                    <span className={styles.currentPhoto_1_btn}>Nike</span>
                                </div>

                            </div>

                            <div className={styles.current_context}>
                                <h6 className={styles.current_text_1}>9THEMEW</h6>
                                <a className={styles.current_text_2}>Nike Launches Nike Training Club Workouts on Netflix</a>
                                <div className={styles.current_text_par}>
                                    <p className={styles.current_text_3}> We all intend to plan ahead, but too</p>
                                    <p className={styles.current_text_3}> often let the day-to-day minutia get</p>
                                    <p className={styles.current_text_3}> in…</p>
                                </div>
                            </div>
                        </div>







                    </div>

                    <div className={styles.zankInsta_section}>
                        <h3 className={styles.winter_head_1}>Follow on Instagram</h3>
                        <Swiper
                            modules={[Autoplay, Navigation]}
                            navigation
                            loop={true}
                            speed={900}
                            autoplay={{
                                delay: 3000,
                                disableOnInteraction: false,
                            }}
                            breakpoints={{
                                0: {
                                    slidesPerView: 2,
                                    spaceBetween: 10,
                                },
                                768: {
                                    slidesPerView: 3,
                                    spaceBetween: 15,
                                },
                                1024: {
                                    slidesPerView: 6,
                                    spaceBetween: 20,
                                },
                            }}
                            className={styles.zankInsta_photos}
                        >
                            {instaPhotosData.map((photo, index) => (
                                <SwiperSlide key={index}>
                                    <img
                                        className={styles.zankInsta_1}
                                        src={photo}
                                        alt={`Instagram photo ${index + 1}`}
                                    />
                                </SwiperSlide>
                            ))}
                        </Swiper>





                    </div>



                </div>





















            </div >


















        </>




    )

}




