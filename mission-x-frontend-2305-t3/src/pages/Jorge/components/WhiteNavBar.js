import styles from "./WhiteNavBar.module.css";
import levelUpLogo from "../../../common/assets/NavBar/LevelUpWorks-blue.png";
import nzFlag from "../../../common/assets/NavBar/NZFlag.png";
import maoriFlag from "../../../common/assets/NavBar/MaoriFlag.png";

export default function WhiteNavBar() {
  return (
    <div>
      <div className={styles.navbar}>
        <img src={levelUpLogo} className={styles.levelUpLogo} />
        <div className={styles.helpCentre}>Help Centre</div>
        <div className={styles.moreProjects}>More Projects</div>
        <div className={styles.flag}>
          <img src={nzFlag} className={styles.nzFlag}></img>
          <img src={maoriFlag} className={styles.maoriFlag}></img>
        </div>
      </div>
    </div>
  );
}
