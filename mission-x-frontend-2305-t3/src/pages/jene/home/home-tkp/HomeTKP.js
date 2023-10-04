import styles from "./HomeTKP.module.css";
import Group1 from "../../../../common/assets/Home/Group 1.png";
import Group2 from "../../../../common/assets/Home/Group 2.png";
import Group3 from "../../../../common/assets/Home/Group 3.png";
import Group4 from "../../../../common/assets/Home/Group 4.png";

export default function homeTKP() {
  return (
    <div className={styles.tkpContainer}>
      <div className={styles.blurb}>
        <h1 className={styles.h1}>
          Teaching kids programming and digital skills is <span className={styles.span}>MORE</span> than just writing code.
        </h1>
      </div>
      <div className={styles.imgContainer}>
        <div className={styles.img}>
          <img src={Group1} alt="" />
        </div>
        <div className={styles.img}>
          <img src={Group3} alt="" />
        </div>
        <div className={styles.img}>
          <img src={Group4} alt="" />
        </div>
        <div className={styles.img}>
          <img src={Group2} alt="" />
        </div>
      </div>
    </div>
  );
}
