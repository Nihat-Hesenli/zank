import styles from '../AboutUs/AboutUs.module.css'

import AboutUsPhoto1 from '../../assets/images/AboutUsPhoto1.jpg'
import AboutUsPhoto2 from '../../assets/images/AboutUsPhoto2.jpg'
import AboutUsPhoto3 from '../../assets/images/AboutUsPhoto3.jpg'
import photoTitle from '../../assets/images/photoTitle_1.jpg'
import AboutUsPhoto4 from '../../assets/images/AboutUsPhoto4.svg'
import AboutUsPhoto5 from '../../assets/images/AboutUsPhoto5.svg'
import { FaStar } from "react-icons/fa";
import { FaS } from 'react-icons/fa6'
import AboutUsPhoto7 from '../../assets/images/AboutUsPhoto7.jpg'
import AboutUsPhoto8 from '../../assets/images/AboutUsPhoto8.jpg'
import AboutUsPhoto10 from '../../assets/images/AboutUsPhoto10.svg'
import AboutUsPhoto11 from '../../assets/images/AboutUsPhoto11.jpg'
import AboutUsPhoto12 from '../../assets/images/AboutUsPhoto12.jpg'
import AboutUsPhoto13 from '../../assets/images/AboutUsPhoto13.jpg'
import AboutUsPhoto14 from '../../assets/images/AboutUsPhoto14.jpg'


import { CiFacebook } from "react-icons/ci";

import { TiSocialTwitterCircular } from "react-icons/ti";
import { FaInstagram } from "react-icons/fa";














export const AboutUs = () => {

    return (

        <>


            <div className={styles.AboutUsContainer}>
                <div className={styles.AboutUsHeader}>


                    <div className={styles.DarkOverlay}></div> {/* ✅ Gölge katmanı */}

                    <div className={styles.AboutUsHeader}>
                        <img className={styles.AboutUsHeaderPhoto} src={AboutUsPhoto1} alt="" />

                        <div className={styles.HeaderTexts}>
                            <span className={styles.HeaderText1}>
                                ZANK COMPANY
                            </span>
                            <span className={styles.HeaderText2}>

                                We believe we can all make <br />
                                a difference.
                            </span>

                            <span className={styles.HeaderText3}>
                                Aesthetic brunch polaroid bespoke, vice kale chips <br />
                                leggings 90’s selfies raw denim.
                            </span>




                        </div>
                    </div>


                </div>

                <div className={styles.AboutUsPhotoTexts}>
                    <div className={styles.AboutUsPhotoText1}>
                        <div className={styles.AboutUsPhotoTextImg}>

                            <img src={AboutUsPhoto2} alt="" />

                        </div>
                        <div className={styles.AboutUsPhotoTextContext}>
                            <span className={styles.AboutUsPhotoBtn}>FOOTBALL</span>
                            <h2 className={styles.AboutUsPhotoPar1}>
                                Modern and eye-catching lines
                            </h2>

                            <p className={styles.AboutUsPhotoPar2}>

                                Inspired by the rebellious spirit of America and the intrigue of unwavering <br />
                                authenticity, R13 launched in Fall 2009. At the forefront of design, R13 cuts avant <br />
                                -garde silhouettes such as the skinny legging and harem pant from Italian and  <br />
                                Turkish denim produced in Castelfranco, Italy. Pure indigo casting, quality <br />
                                stretch and machine hand mending give the jeans their superior shape
                            </p>

                            <p className={styles.AboutUsPhotoPar3}>
                                #rings #necklaces #silverrings #earrings #zank
                            </p>

                            <p className={styles.AboutUsPhotoPar4}> Shop Now</p>


                        </div>




                    </div>
                    <div className={styles.AboutUsPhotoText2}>
                        <div className={styles.AboutUsPhotoTextContext2}>
                            <span className={styles.AboutUsPhotoBtn}>BASKETBALL</span>
                            <h2 className={styles.AboutUsPhotoPar1}>

                                Exciting and innovative
                            </h2>

                            <p className={styles.AboutUsPhotoParSec2}>

                                Inspired by the rebellious spirit of America and the intrigue of unwavering
                                authenticity, R13 launched in <br /> Fall 2009. At the forefront of design, R13 cuts avant
                                -garde silhouettes such as the skinny legging and <br /> harem pant from Italian and
                                Turkish denim produced in Castelfranco, Italy. Pure indigo casting,<br />
                                stretch and machine hand mending give the jeans their superior shape  quality and an authentic...
                            </p>

                            <p className={styles.AboutUsPhotoParSec3}>

                                Inspired by the rebellious spirit of America and the intrigue of unwavering
                                authenticity, R13 launched in <br /> Fall 2009. At the forefront of design, R13 cuts avant
                                -garde silhouettes such as the skinny legging and <br /> harem pant from Italian and
                                Turkish denim produced in Castelfranco, Italy. Pure indigo casting,<br />
                                stretch and machine hand mending give the jeans their superior shape  quality
                            </p>
                        </div>
                        <div className={styles.AboutUsPhotoTextImg2}>

                            <img src={AboutUsPhoto3} alt="" />

                        </div>











                    </div>










                </div >

                <div className={styles.PricePolicySection}>
                    <div className={styles.PricePolicyTitle}>
                        <div className={styles.PricePolicySectionTexts}>

                            <h6 className={styles.PricePolicySectionText1}>
                                price policy
                            </h6>
                            <h2 className={styles.PricePolicySectionText2}>

                                Popular understanding, zank for everyone!
                            </h2>
                            <p className={styles.PricePolicySectionText3}>

                                Cardigan helvetica sriracha, portland celiac truffaut woke artisan succulents cred art <br />
                                party slow-carb pinterest. Migas humblebrag chicharrones everyday carry four loko.
                            </p>




                        </div>

                    </div>





                </div>


                <div className={styles.BackgroundVideoWrapper}>
                    <iframe
                        src="https://www.youtube.com/embed/CzAuMkm4zSQ?autoplay=1&mute=1&controls=0&loop=1&playlist=CzAuMkm4zSQ&start=10&end=30&modestbranding=1&rel=0&playsinline=1"
                        className={styles.BackgroundVideo}
                        title="Background Video"
                        frameBorder="0"
                        allow="autoplay; fullscreen"
                        allowFullScreen
                    ></iframe>
                </div>

                <div className={styles.AboutUsPhotoTitleBlue}>
                    <h6 className={styles.AboutUsPhotoTitleContext}>
                        Cardigan helvetica sriracha, portland celiac truffaut woke artisan succulents cred art <br />
                        party slow-carb pinterest. Migas humblebrag chicharrones everyday carry four loko.




                    </h6>
                </div>


                <div className={styles.comment_container}>


                    <div className={styles.comment_context}>

                        <div className={styles.comment_photoText}>
                            <img className={styles.photoTitle_img} src={photoTitle} alt="" />
                            <div className={styles.photoTexts}>
                                <h5 className={styles.photoText_1}>Caleb Hoffman</h5>
                                <span className={styles.photoText_2}>Customer</span>


                            </div>



                        </div>
                        <div className={styles.comment_text_1}>
                            <p>This is due to their excellent service, competitive pricing and customer support. It’s </p>
                            <p>  throughly refresing to get such a personal touch. Duis aute  lorem ipsum is simply </p>
                            <p> free text irure dolor in reprehenderit in esse nulla pariatur</p>

                        </div>



                    </div>

                </div>


                <div className={styles.AboutUsReviews}>
                    <h3 className={styles.AboutUsReviewsTitle}>Customer Reviews</h3>

                    <div className={styles.AboutUsReviewsSections}>
                        <div className={styles.AboutUsReviewsSection1}>
                            <div className={styles.AboutUsReviewsContext_1}>
                                <div className={styles.AboutUsReviewPhotoSection}>
                                    <img className={styles.AboutUsReviewPhoto1} src={AboutUsPhoto4} alt="" />

                                </div>

                                <div className={styles.AboutUsAdmin}>
                                    <span className={styles.AboutUsReviewText1}>
                                        Admin
                                    </span>

                                    <div className={styles.VerifiedSection}>
                                        <img className={styles.VerifiedPhoto} src={AboutUsPhoto5} alt="" />

                                        <span className={styles.VerifiedSectionText}>
                                            Verified owner
                                        </span>
                                    </div>


                                </div>



                            </div>

                            <div className={styles.AboutUsRating}>
                                <FaStar />  <FaStar /> <FaStar /> <FaStar /> <FaStar />
                                <span className={styles.AboutUsRatingText}> 5/5 </span>
                            </div>

                            <p className={styles.AboutUsReviewText3}>Yes of course possible, you can use Zank for any shop 🙂</p>
                            <p className={styles.AboutUsReviewText4}>
                                4 YEARS AGO
                            </p>

                            <div className={styles.AboutUsReviewPhotoText}>
                                <img className={styles.AboutUsReviewPhoto2} src={AboutUsPhoto7} alt="" />
                                <p className={styles.AboutUsReviewText5}> Nike Air Max Plus</p>
                            </div>
                        </div>

                        <div className={styles.AboutUsReviewsSection1}>
                            <div className={styles.AboutUsReviewsContext_1}>
                                <div className={styles.AboutUsReviewPhotoSection}>
                                    <img className={styles.AboutUsReviewPhoto1} src={AboutUsPhoto10} alt="" />

                                </div>

                                <div className={styles.AboutUsAdmin}>
                                    <span className={styles.AboutUsReviewText1}>
                                        Angel Morris
                                    </span>

                                    <div className={styles.VerifiedSection}>
                                        {/* <img className={styles.VerifiedPhoto} src={AboutUsPhoto5} alt="" /> */}

                                        <span className={styles.VerifiedSectionText}>
                                            Reviewer
                                        </span>
                                    </div>


                                </div>



                            </div>

                            <div className={styles.AboutUsRating}>
                                <FaStar />  <FaStar /> <FaStar /> <FaStar /> <FaStar />
                                <span className={styles.AboutUsRatingText}> 5/5 </span>
                            </div>

                            <p className={styles.AboutUsReviewText3}>    really very like this product, thank you!</p>
                            <p className={styles.AboutUsReviewText4}>
                                4 YEARS AGO
                            </p>

                            <div className={styles.AboutUsReviewPhotoText}>
                                <img className={styles.AboutUsReviewPhoto2} src={AboutUsPhoto8} alt="" />
                                <p className={styles.AboutUsReviewText5}> Nike Air Max 270</p>
                            </div>
                        </div>

                        <div className={styles.AboutUsReviewsSection1}>
                            <div className={styles.AboutUsReviewsContext_1}>
                                <div className={styles.AboutUsReviewPhotoSection}>
                                    <img className={styles.AboutUsReviewPhoto1} src={AboutUsPhoto4} alt="" />

                                </div>

                                <div className={styles.AboutUsAdmin}>
                                    <span className={styles.AboutUsReviewText1}>
                                        Admin
                                    </span>

                                    <div className={styles.VerifiedSection}>
                                        {/* <img className={styles.VerifiedPhoto} src={AboutUsPhoto5} alt="" /> */}

                                        <span className={styles.VerifiedSectionText}>
                                            Reviewer
                                        </span>
                                    </div>


                                </div>



                            </div>

                            <div className={styles.AboutUsRating}>
                                <FaStar />  <FaStar /> <FaStar /> <FaStar /> <FaStar />
                                <span className={styles.AboutUsRatingText}> 5/5 </span>
                            </div>

                            <p className={styles.AboutUsReviewText3}>
                                All exchanges and returns would need to be raised within 10 days <br />
                                of the invoice        </p>
                            <p className={styles.AboutUsReviewText4}>
                                4 YEARS AGO
                            </p>

                            <div className={styles.AboutUsReviewPhotoText2}>
                                <img className={styles.AboutUsReviewPhoto2} src={AboutUsPhoto8} alt="" />
                                <p className={styles.AboutUsReviewText5}> Nike Air Max 270</p>
                            </div>
                        </div>
                    </div>


                </div>

                <div className={styles.AboutUsTeamSection}>
                    <div className={styles.TeamTitle}>
                        <h3 className={styles.TeamTitleText1}>Creative Team</h3>
                        <p className={styles.TeamTitleText2}>
                            Cardigan helvetica sriracha, portland celiac truffaut woke
                        </p>


                    </div>

                    <div className={styles.AboutUsTeams}>

                        <div className={styles.AboutUsTeam1}>

                            <img className={styles.AboutUsTeamPhoto} src={AboutUsPhoto11} alt="" />

                            <h5 className={styles.AboutUsTeamText1}>
                                Frida Doe
                            </h5>
                            <p className={styles.AboutUsTeamText2}>Support</p>


                            <div className={styles.TeamIcons}>
                                <CiFacebook fontSize={28} /><TiSocialTwitterCircular fontSize={31} /><FaInstagram fontSize={28} />



                            </div>







                        </div>

                           <div className={styles.AboutUsTeam1}>

                            <img className={styles.AboutUsTeamPhoto} src={AboutUsPhoto12} alt="" />

                            <h5 className={styles.AboutUsTeamText1}>
                                Elisa Doe
                            </h5>
                            <p className={styles.AboutUsTeamText2}>Designer</p>


                            <div className={styles.TeamIcons}>
                                <CiFacebook fontSize={28} /><TiSocialTwitterCircular fontSize={31} /><FaInstagram fontSize={28} />



                            </div>







                        </div>

                           <div className={styles.AboutUsTeam1}>

                            <img className={styles.AboutUsTeamPhoto} src={AboutUsPhoto13} alt="" />

                            <h5 className={styles.AboutUsTeamText1}>
                               Mary Doe
                            </h5>
                            <p className={styles.AboutUsTeamText2}>Designer</p>


                            <div className={styles.TeamIcons}>
                                <CiFacebook fontSize={28} /><TiSocialTwitterCircular fontSize={31} /><FaInstagram fontSize={28} />



                            </div>







                        </div>

                           <div className={styles.AboutUsTeam1}>

                            <img className={styles.AboutUsTeamPhoto} src={AboutUsPhoto14} alt="" />

                            <h5 className={styles.AboutUsTeamText1}>
                                Jin Doe
                            </h5>
                            <p className={styles.AboutUsTeamText2}>Designer</p>


                            <div className={styles.TeamIcons}>
                                <CiFacebook fontSize={28} /><TiSocialTwitterCircular fontSize={31} /><FaInstagram fontSize={28} />



                            </div>







                        </div>




                    </div>




                </div>




            </div>
        </>
    )



}