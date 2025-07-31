import styles from '../../pages/Contact/Contact.module.css'






export const Contact = () => {

    return (
        <>


            <div className={styles.ContactSection}>

                <div className={styles.ContactInfos}>

                    <div className={styles.ContactInfo1}>
                        <h3 className={styles.InfoText1}>Our Showroom</h3>

                        <p className={styles.InfoText2}>

                            551 Water Color Green Ball St, New York, NY <br />
                            2041, USA <br />

                            +09000 000 34 35 <br />

                            +09000 000 34 36

                        </p>


                    </div>

                    <div className={styles.ContactInfo1}>
                        <h3 className={styles.InfoText1}>Quick Help</h3>

                        <p className={styles.InfoText3}>

                            You can ask anything you want to know about our <br />
                            products<br />
                            help@zank.themecom <br />

                            +refund@zank.themecom


                        </p>


                    </div>

                </div>


                <h3 className={styles.InfoText4}>Send a Message</h3>


                <div className={styles.ContactEmailSection}>

                    <input placeholder='Your name' className={styles.ContactMini}>

                    </input>
                    <input placeholder='Your E-mail' className={styles.ContactMini}>

                    </input>
                    <input placeholder='Technical help' className={styles.ContactMini}>

                    </input>

                    <input placeholder='Message' className={styles.ContactBig}>

                    </input>

                    <span className={styles.ContactBtn}>
                        Submit
                    </span>


                </div>




            </div>






        </>
    )


}