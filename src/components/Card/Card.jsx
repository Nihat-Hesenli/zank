import { HiOutlineShoppingBag } from "react-icons/hi2";
import { VscHeart } from "react-icons/vsc";
import { SlRefresh } from "react-icons/sl";
import { FaCar } from "react-icons/fa";
import { CSSTransition } from 'react-transition-group';
import styles from '../Card/Card.module.css';
import React, { useRef } from "react";

export const Card = ({ isOpen, onClose, cartItems = [] , handleRemoveItem,}) => {
  const nodeRef = useRef(null);

  return (
    <CSSTransition
      nodeRef={nodeRef}
      in={isOpen}
      timeout={1000}
      classNames={{
        enter: styles.cartEnter,
        enterActive: styles.cartEnterActive,
        exit: styles.cartExit,
        exitActive: styles.cartExitActive,
      }}
      unmountOnExit
    >
      <div ref={nodeRef} className={styles.cartDrawer}>
        <div className={styles.TopRow}>
          <div className={styles.CloseBtn}>
            <button onClick={onClose} className={styles.CloseBtn_1}>X</button>
          </div>

          <div className={styles.CardIcons}>
            <HiOutlineShoppingBag />
            <VscHeart />
            <SlRefresh />
          </div>
        </div>

        <div className={styles.Line}></div>
        <span className={styles.CardText_1}>
          Buy $500.00 more to enjoy FREE Shipping
        </span>

        <div className={styles.progressWrapper}>
          <div className={styles.carIconCircle}>
            <FaCar className={styles.carIcon} />
          </div>
          <div className={styles.bar}></div>
        </div>

     
        {cartItems.length === 0 ? (
          <>
            <div className={styles.ShopBag_Photo}>
              <HiOutlineShoppingBag />
            </div>
            <p className={styles.CardText_2}>No products in the cart.</p>
            <div className={styles.CardButtons}>
              <button className={styles.CardButton_1}>Start Shopping</button>
              <button className={styles.CardButton_1}>Return Policy</button>
            </div>
          </>
        ) : (
          <div className={styles.cartItemsList}>
            
            {cartItems.map((item, index) => (
              <div key={index} className={styles.cartItem}>
                <img src={item.image} alt={item.title} className={styles.cartItemImage} />
                <div className={styles.cartItemDetails}>
                  <p className={styles.cartItemTitle}>{item.title}</p>
                  <p className={styles.cartItemPrice}>
                    {item.price
                      ? `$${(item.price - (item.price * item.percentage) / 100).toFixed(2)}`
                      : `$${item.minPrice} - $${item.maxPrice}`}
                  </p>
                </div>
                <button onClick={()=> handleRemoveItem(item.id)} className={styles.deleteBtn}>Delete</button>
              </div>
            ))}
        
          </div>
        )}
      </div>
    </CSSTransition>
  );
};
