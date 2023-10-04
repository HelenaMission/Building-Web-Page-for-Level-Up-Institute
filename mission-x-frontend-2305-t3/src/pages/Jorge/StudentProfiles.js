import React from "react";
import WhiteNavBar from "./components/WhiteNavBar";
import styles from "./Pages.module.css";
import OptionsMenu from "./components/OptionsMenu";
import Footer from "./components/Footer";
import StudentsInfo from "./components/StudentsInfo";

export default function StudentProfiles() {
  return (
    <div className={styles.container}>
      <header>
        <WhiteNavBar />
      </header>
      <main className={styles.main}>
        <div className={styles.optionsMenu}>
          <OptionsMenu />
        </div>
        <div className={styles.tracker}>
          <div className={styles.subContainer}>
            <div className={styles.webScrollBar}>
              <StudentsInfo />
            </div>
          </div>
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
