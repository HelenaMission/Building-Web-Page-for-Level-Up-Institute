import styles from "../HomeHOP.module.css";
import logo from "../../../../../common/assets/NavBar/LevelUpWorks-white.png";

export default function HomeHOPDT() {
  return (
    <div className={styles.hopContainer}>
      <div className={styles.hop}>
        <div className={styles.hopCenter}>
          <div>
            <h2 className={styles.h2}>Expands Digital Knowledge Base</h2>
          </div>
          <div>
            <h3 className={styles.h3}>This programme gives you the 5 major capabilities to be confident in Digital Technologies:</h3>
          </div>
          <div className={styles.list}>
            <div className={styles.listItem}>
              <div>
                <img className={styles.logo} src={logo} alt="" />
              </div>
              <div>
                <h4 className={styles.h4}>PROBLEM SOLVING</h4>
                <h5 className={styles.h5}>The programme challenges are designed to think around multiple issues and challenges the way students interact with computers and other related technology.</h5>
              </div>
            </div>
          </div>
          <div className={styles.listItem}>
            <div>
              <img className={styles.logo} src={logo} alt="" />
            </div>
            <div>
              <h4 className={styles.h4}>DECISION-MAKING</h4>
              <h5 className={styles.h5}>The programme uses technology to make the lives of many people happier through the decisions made when creating digital applications.</h5>
            </div>
          </div>
          <div className={styles.listItem}>
            <div>
              <img className={styles.logo} src={logo} alt="" />
            </div>
            <div>
              <h4 className={styles.h4}>CONFIDENCE</h4>
              <h5 className={styles.h5}>When having the skills to manipulate the applications and learning to use it brings self-confidence into your life.</h5>
            </div>
          </div>
          <div className={styles.listItem}>
            <div>
              <img className={styles.logo} src={logo} alt="" />
            </div>
            <div>
              <h4 className={styles.h4}>HIGHER SELF-EXPECTATIONS</h4>
              <h5 className={styles.h5}>This programme develops students to think the best of themselves to bring higher expectations to their learning and lives as young adults.</h5>
            </div>
          </div>
          <div className={styles.listItem}>
            <div>
              <img className={styles.logo} src={logo} alt="" />
            </div>
            <div>
              <h4 className={styles.h4}>COHERENCE</h4>
              <h5 className={styles.h5}>This programme offers all students a broader education that makes links within and across learning areas.</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
