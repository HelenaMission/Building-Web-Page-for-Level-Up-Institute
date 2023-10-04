import styles from "../HomeHOP.module.css";
import logo from "../../../../../common/assets/NavBar/LevelUpWorks-white.png";

export default function HomeHOPKC() {
  return (
    <div className={styles.hopContainer}>
      <div className={styles.hop}>
        <div className={styles.hopCenter}>
          <div>
            <h2 className={styles.h2}>Enhance Key Competencies</h2>
          </div>
          <div>
            <h3 className={styles.h3}>The programme enhances capabilities of students in the 5 Key Competencies identified in the New Zealand Curriculum:</h3>
          </div>
          <div className={styles.list}>
            <div className={styles.listItem}>
              <div>
                <img className={styles.logo} src={logo} alt="" />
              </div>
              <div>
                <h4 className={styles.h4}>THINKING</h4>
                <h5 className={styles.h5}>In particular the programme focused on problem solving, design thinking and computational thinking.</h5>
              </div>
            </div>
          </div>
          <div className={styles.listItem}>
            <div>
              <img className={styles.logo} src={logo} alt="" />
            </div>
            <div>
              <h4 className={styles.h4}>DISCERNING CODES</h4>
              <h5 className={styles.h5}>Analysing language, symbols, and texts in order to understand and make sense of the codes in which knowledge is expressed.</h5>
            </div>
          </div>
          <div className={styles.listItem}>
            <div>
              <img className={styles.logo} src={logo} alt="" />
            </div>
            <div>
              <h4 className={styles.h4}>SELF-MANAGEMENT</h4>
              <h5 className={styles.h5}>Projects and challenges are designed to motivate students to explore and experiment with self-motivation.</h5>
            </div>
          </div>
          <div className={styles.listItem}>
            <div>
              <img className={styles.logo} src={logo} alt="" />
            </div>
            <div>
              <h4 className={styles.h4}>RELATIONSHIPS WITH PEERS</h4>
              <h5 className={styles.h5}>
                The programme is designed with unplugged sessions where students interact in a range of different situations, including things like being able to listen well, recognise different points of view, and share ideas.
              </h5>
            </div>
          </div>
          <div className={styles.listItem}>
            <div>
              <img className={styles.logo} src={logo} alt="" />
            </div>
            <div>
              <h4 className={styles.h4}>PARTICIPATION AND COLLABORATION</h4>
              <h5 className={styles.h5}>The programme encourages students to be involved in communities, such as family, whānau, school, and contribute and make connections with other people.</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
