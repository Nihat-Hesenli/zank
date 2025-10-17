
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { VscHeart } from "react-icons/vsc";
import { SlRefresh } from "react-icons/sl";
import { FaCar } from "react-icons/fa";
import styles from '../Card/Card.module.css';
import React from "react";
import { BsTrash3 } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeItem, increaseItem, decreaseItem, setCartOpen } from "../../redux/cartSlice";




export const Card = ({ isOpen, onClose }) => {
  const navigate = useNavigate();

  const handleStartShopping = () => {
    onClose();
    navigate("/shop");
  };
  const dispatch = useDispatch();

    const cartItems = useSelector(state => state.cart.cartItems);

const handleIncrease = (id) => dispatch(increaseItem(id));
const handleDecrease = (id) => dispatch(decreaseItem(id));
const handleRemove = (id) => dispatch(removeItem(id));









  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className={styles.cartDrawer}
          initial={{ x: "100%" }}       
          animate={{ x: 0 }}           
          exit={{ x: "100%" }}        
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
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
                <button onClick={handleStartShopping} className={styles.CardButton_1}>Start Shopping</button>
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
                        ? `$${((item.price - (item.price * item.percentage) / 100) * item.quantity).toFixed(2)}`
                        : `$${item.minPrice} - $${item.maxPrice}`}
                      {item.quantity > 1 && ` x${item.quantity}`}
                    </p>
                    <div className={styles.quantityControls}>
                      <button onClick={() => handleDecrease(item.id)}  className={`${styles.qtyBtn} ${styles.decrease}`}>-</button>
                      <span className={styles.qtyNumber}>{item.quantity}</span>
                      <button onClick={() => handleIncrease(item.id)} className={`${styles.qtyBtn} ${styles.increase}`}>+</button>
                    </div>
                  </div>
                  <span onClick={() => handleRemove(item.id)} className={styles.trashBtn}>
                    <BsTrash3 />
                  </span>
                </div>
              ))}
            </div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

