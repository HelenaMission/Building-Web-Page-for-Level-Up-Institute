import styles from "./HomeHOP.module.css";
import { useState } from "react";
import HomeHOPLP from "./home-hop-slides/HomeHOPLP";
import HomeHOPDT from "./home-hop-slides/HomeHOPDT";
import HomeHOPKC from "./home-hop-slides/HomeHOPKC";
import HomeHOPIR from "./home-hop-slides/HomeHOPIR";

export default function HomeHOP() {
  const [displayedContent, setDisplayedContent] = useState({
    component: <HomeHOPLP />,
    name: "learning-pathways",
  });

  function handleContentClick(event) {
    switch (event.target.id) {
      case "learning-pathways":
        setDisplayedContent({
          component: <HomeHOPLP />,
          name: "learning-pathways",
        });
        break;
      case "digital-technologies":
        setDisplayedContent({
          component: <HomeHOPDT />,
          name: "digital-technologies",
        });
        break;
      case "key-competencies":
        setDisplayedContent({
          component: <HomeHOPKC />,
          name: "key-competencies",
        });
        break;

      case "ir-4":
        setDisplayedContent({
          component: <HomeHOPIR />,
          name: "ir-4",
        });
        break;

      default:
        break;
    }
  }

  return (
    <div className={styles.hopContainer}>
      <div className={styles.title}>
        <h1 className={styles.h1}>How our programme helps teachers and schools</h1>
      </div>
      <div className={styles.buttons}>
        <button id="learning-pathways" className={`${styles.button1} ${displayedContent.name === "learning-pathways" && styles.active}`} onClick={handleContentClick}>
          LEARNING PATHWAYS
        </button>
        <button id="digital-technologies" className={`${styles.button1} ${displayedContent.name === "digital-technologies" && styles.active}`} onClick={handleContentClick}>
          DIGITAL TECHNOLOGIES
        </button>
        <button id="key-competencies" className={`${styles.button1} ${displayedContent.name === "key-competencies" && styles.active}`} onClick={handleContentClick}>
          KEY COMPETENCIES
        </button>
        <button id="ir-4" className={`${styles.button1} ${displayedContent.name === "ir-4" && styles.active}`} onClick={handleContentClick}>
          IR4.0
        </button>
      </div>
      <div>{displayedContent.component}</div>
    </div>
  );
}
