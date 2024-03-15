import logo from "../Assets/logo.png";
import cart_icon from "../Assets/cart_icon.png";
import styles from "./navbar.module.css";
import { useState } from "react";
import { Link } from "react-router-dom";
export default function Navbar() {
  const [menu, setMenu] = useState("shop");
  return (
    <div className={styles.navbar}>
      <div className={styles.navLogo}>
        <img src={logo} alt="" />
        <p>SHOPPER</p>
      </div>
      <ul className={styles.navMenu}>
        <li
          onClick={() => {
            setMenu("shop");
          }}
        >
          <Link className={styles.Link} to="/">Shop</Link>
          {menu === "shop" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("mens");
          }}
        >
          <Link className={styles.Link} to="/mens">Men</Link> {menu === "mens" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("womens");
          }}
        >
          <Link className={styles.Link} to="womens">Womens</Link> {menu === "womens" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("kids");
          }}
        >
          <Link className={styles.Link} to="kids">Kids</Link> {menu === "kids" ? <hr /> : <></>}
        </li>
      </ul>
      <div className={styles.navLoginCart}>
        <Link className={styles.Link} to="/login">
          <button>Login</button>
        </Link>

        <Link className={styles.Link} to="/cart">
          <img src={cart_icon} alt="" />
        </Link>
        <div className={styles.navCartCount}>3</div>
      </div>
    </div>
  );
}
