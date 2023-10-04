import styles from "../HomeHOP.module.css";
import logo from "../../../../../common/assets/NavBar/LevelUpWorks-white.png";

export default function HomeHOPLP() {
  return (
    <div className={styles.hopContainer}>
      <div className={styles.hop}>
        <div className={styles.hopCenter}>
          <div>
            <h2 className={styles.h2}>Interlinking Pathways</h2>
          </div>
          <div>
            <h3 className={styles.h3}>This programme gives us 5 important interlinking Learning Pathways:</h3>
          </div>
          <div className={styles.list}>
            <div className={styles.listItem}>
              <div>
                <img className={styles.logo} src={logo} alt="" />
              </div>
              <div>
                <h4 className={styles.h4}>COMPUTATIONAL THINKING</h4>
                <h5 className={styles.h5}>Within the programme the students are enabled to express problems and form solutions that will be designed so a computer can be used to create diverse and encapsulating applications.</h5>
              </div>
            </div>
          </div>
          <div className={styles.listItem}>
            <div>
              <img className={styles.logo} src={logo} alt="" />
            </div>
            <div>
              <h4 className={styles.h4}>DEVELOPING DIGITAL OUTCOMES</h4>
              <h5 className={styles.h5}>This programme is designed to strengthen the outcomes of each students personally to form strong applications.</h5>
            </div>
          </div>
          <div className={styles.listItem}>
            <div>
              <img className={styles.logo} src={logo} alt="" />
            </div>
            <div>
              <h4 className={styles.h4}>DESIGNING PROCESSED OUTCOMES</h4>
              <h5 className={styles.h5}>Students will be taught the ways of how outcomes are processed, thought about, and produced.</h5>
            </div>
          </div>
          <div className={styles.listItem}>
            <div>
              <img className={styles.logo} src={logo} alt="" />
            </div>
            <div>
              <h4 className={styles.h4}>DEVELOP VISUAL AND SOCIAL COMMUNICATIONS</h4>
              <h5 className={styles.h5}>Students will learn to design visually pleasing applications used to both keep the user aware of what is happening on the screen.</h5>
            </div>
          </div>
          <div className={styles.listItem}>
            <div>
              <img className={styles.logo} src={logo} alt="" />
            </div>
            <div>
              <h4 className={styles.h4}>STRONG TECHNOLOGICAL PRACTICES</h4>
              <h5 className={styles.h5}>The programme will show students the best practices to think and solve the problems brought on by using technology.</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
