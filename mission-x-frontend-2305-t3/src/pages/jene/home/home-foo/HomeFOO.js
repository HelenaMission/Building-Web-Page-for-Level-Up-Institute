import styles from "./HomeFOO.module.css";

export default function HomeFOO() {
  return (
    <div className={styles.body}>
      <div className={styles.row}>
        <div className={styles.column1}>
          <div className={styles.title}>COMPANY</div>
          <div>
            <ul className={styles.ul}>
              <li className={styles.li}>About Us</li>
              <li className={styles.li}>Careers</li>
              <li className={styles.li}>Partners</li>
            </ul>
          </div>
        </div>
        <div className={styles.column1}>
          <div className={styles.title}>COURSES</div>
          <div>
            <ul className={styles.ul}>
              <li className={styles.li}>Register</li>
              <li className={styles.li}>Login</li>
              <li className={styles.li}>Projects</li>
              <li className={styles.li}>Teachers</li>
              <li className={styles.li}>Parents</li>
              <li className={styles.li}>Resources</li>
            </ul>
          </div>
        </div>
        <div className={styles.column1}>
          <div className={styles.title}>SUPPORT</div>
          <div>
            <ul className={styles.ul}>
              <li className={styles.li}>FAQs</li>
              <li className={styles.li}>Helpdesk</li>
              <li className={styles.li}>Contact Us</li>
            </ul>
          </div>
        </div>
        <div className={styles.column1}>
          <div className={styles.title}>LEGAL</div>
          <div>
            <ul className={styles.ul}>
              <li className={styles.li}>Terms & Conditions</li>
              <li className={styles.li}>Privacy Policy</li>
            </ul>
          </div>
        </div>
        <div>
          <div className={styles.title2}>LevelUp Works</div>
          <div className={styles.blurb}>
            LevelUp Works is an Auckland-based<br></br>enterprise dedicated to developing game-<br></br>based learning software to help teachers in
            <br></br>response to the New Zealand Digital<br></br>Technologies & Hangarau Matihiko.<br></br>alan@levelupworks.com<br></br>(021) 668 185
          </div>
        </div>
      </div>
    </div>
  );
}
