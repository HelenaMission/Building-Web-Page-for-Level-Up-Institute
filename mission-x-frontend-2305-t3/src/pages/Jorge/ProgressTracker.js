import React from "react";
import WhiteNavBar from "./components/WhiteNavBar";
import styles from "./Pages.module.css";
import OptionsMenu from "./components/OptionsMenu";
import Footer from "./components/Footer";
import Tracker from "./components/Tracker";

export default function ProgressTracker() {
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
          <Tracker />
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
