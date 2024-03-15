import styles from "./hero.module.css";
import hand_icon from "../Assets/hand_icon.png";
import arrow_icon from "../Assets/arrow.png";
import hero_image from '../Assets/hero_image.png' 
export default function Hero() {
  return (
    <div className={styles.hero}>
      <div className={styles.heroLeft}>
        <h2>NEW ARRIVALS ONLY</h2>
        <div>
          <div className={styles.handHandIcon}>
            <p>new</p>
            <img src={hand_icon} alt="" />
          </div>
          <p>Collections</p>
          <p>For everyone</p>
        </div>
        <div className={styles.heroLatestBtn}>
          <div>Latest Collection</div>
          <img src={arrow_icon} alt="" />
        </div>
      </div>
      <div className={styles.heroRight}>
        <img src={hero_image} alt="" />
      </div>
    </div>
  );
}
