import styles from "../HomeHOP.module.css";
import logo from "../../../../../common/assets/NavBar/LevelUpWorks-white.png";

export default function HomeHOPIR() {
  return (
    <div className={styles.hopContainer}>
      <div className={styles.hop}>
        <div className={styles.hopCenter}>
          <div>
            <h2 className={styles.h2}>IR4.0</h2>
          </div>
          <div>
            <h3 className={styles.h3}>Designed with IT industry experts, the programme develops the students to find applicable jobs and careers in the Fourth Industrial Revolution. (IR4.0):</h3>
          </div>
          <div className={styles.list}>
            <div className={styles.listItem}>
              <div>
                <img className={styles.logo} src={logo} alt="" />
              </div>
              <div>
                <h4 className={styles.h4}>LEARNING TO LEARN</h4>
                <h5 className={styles.h5}>The programme will set challenges at the end of every project to encourage students to explore and learn how to learn.</h5>
              </div>
            </div>
          </div>
          <div className={styles.listItem}>
            <div>
              <img className={styles.logo} src={logo} alt="" />
            </div>
            <div>
              <h4 className={styles.h4}>COMMUNITY ENGAGEMENT</h4>
              <h5 className={styles.h5}>The programme encourages students to be involved in the communities, such as family, friends, and in school, to contribute and make connections with other people.</h5>
            </div>
          </div>
          <div className={styles.listItem}>
            <div>
              <img className={styles.logo} src={logo} alt="" />
            </div>
            <div>
              <h4 className={styles.h4}>CULTURAL DIVERSITY</h4>
              <h5 className={styles.h5}>This programme is designed in New Zealand and reflects NZ's cultural diversity.</h5>
            </div>
          </div>
          <div className={styles.listItem}>
            <div>
              <img className={styles.logo} src={logo} alt="" />
            </div>
            <div>
              <h4 className={styles.h4}>INCLUSION</h4>
              <h5 className={styles.h5}>In particular the programme is designed with acknowledgement to the student's identities and talents, allowing them to be creative to their personal ability.</h5>
            </div>
          </div>
          <div className={styles.listItem}>
            <div>
              <img className={styles.logo} src={logo} alt="" />
            </div>
            <div>
              <h4 className={styles.h4}>FUTURE FOCUS</h4>
              <h5 className={styles.h5}>The programme leads students to explore future themes such as artificial intelligence and augmented reality.</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
