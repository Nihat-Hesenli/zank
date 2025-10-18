import styles from './Footer.module.css';

import { FaFacebook } from "react-icons/fa";
<FaFacebook />

import { AiFillTwitterCircle } from "react-icons/ai";
<AiFillTwitterCircle />

import { SiYoutubemusic } from "react-icons/si";
<SiYoutubemusic />

import { FaTelegram } from "react-icons/fa";
<FaTelegram />

import { FaVk } from "react-icons/fa6";
<FaVk />


import { FaSquareWhatsapp } from "react-icons/fa6";
<FaSquareWhatsapp />

import { FaMedapps } from "react-icons/fa";
<FaMedapps />

import { FaRegCirclePlay } from "react-icons/fa6";
<FaRegCirclePlay />

import { FaAppStore } from "react-icons/fa6";
<FaAppStore />



export const Footer = () => {

    return (
        <>

            <div className={styles.FooterEmail_Section}>


                <div className={styles.FooterEmail_Texts}>

                    <h3 className={styles.FooterEmail_Text_1}>Take an extra 10% off your first order</h3>
                    <p className={styles.FooterEmail_Text_2}>Sign up to get the latest on new Products, Promotions, Design news and more</p>

                </div>


                <div className={styles.footer_inputEmail}>
                    <input className={styles.email_input} type="text" placeholder='Your E-mail' />
                    <button className={styles.email_btn} >Submit</button>
                </div>

                <div className={styles.footerIcons}>
                    <FaFacebook color='blue' />
                    <AiFillTwitterCircle style={{ color: '#1da1f2' }} />
                    <SiYoutubemusic style={{ color: 'red' }} />
                    <FaTelegram style={{ color: '#1da1f2' }} />
                    <FaVk style={{ color: 'blue', borderRadius: '10px' }} />





                </div>
            </div>

            <div className={styles.footerSection}>

                <div className={styles.footerTexts}>
                    <div className={styles.footerText_Container}>
                        <h5 className={styles.footerText_1}>About Zank</h5>

                        <ul className={styles.footerText_1}>
                            <li>Zank Inside</li>
                            <li>About Us</li>
                            <li>Company</li>
                            <li>Careers</li>
                            <li>Brands</li>
                        </ul>
                    </div>

                    <div className={styles.footerText_Container}>
                        <h5 className={styles.footerText_1}>Categories</h5>




                        <ul className={styles.footerText_1}>
                            <li> Football</li>
                            <li>Basketball</li>
                            <li>Volleyball</li>
                            <li>Men</li>
                            <li>Women</li>
                        </ul>
                    </div>

                    <div className={styles.footerText_Container}>
                        <h5 className={styles.footerText_1}>Campaigns</h5>





                        <ul className={styles.footerText_1}>
                            <li>Winter Shoes</li>
                            <li> Women T-shirts</li>
                            <li>%50 Sales</li>
                            <li> Outlet</li>
                            <li> Pre-Sale</li>
                        </ul>
                    </div>

                    <div className={styles.footerText_Container}>
                        <h5 className={styles.footerText_1}>Help</h5>





                        <ul className={styles.footerText_1}>
                            <li>Order Tracking</li>
                            <li>Terms & Conditions </li>
                            <li>Privacy Policy</li>
                            <li>Tutorials</li>
                            <li>FAQ</li>
                        </ul>
                    </div>
                </div>

                <div className={styles.footerPhone}>
                    <div className={styles.footerPhoneButtons}>
                        <button className={styles.footerRedBtn}>
                            HELP: (+777) 450-15-415
                        </button>

                        <span className={styles.footerGreenBtn}>
                            <FaSquareWhatsapp />

                        </span>
                    </div>

                    <h6 className={styles.footerPhone_text_1}>Download app for faster shopping:</h6>

                    <div className={styles.appIcons}>
                        <div className={styles.appIconsCircle}>
                            <FaMedapps className={styles.appIcon} />
                        </div>
                        <div className={styles.appIconsCircle}>
                            <FaRegCirclePlay />


                        </div>
                        <div className={styles.appIconsCircle}>

                            <FaAppStore />

                        </div>





                    </div>

                </div>

            </div>














        </>

    )


}