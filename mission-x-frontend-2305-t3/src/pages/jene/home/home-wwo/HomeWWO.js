import styles from "./HomeWWO.module.css";
import laptop1 from "../../../../common/assets/Home/laptop1.png";
import laptop2 from "../../../../common/assets/Home/laptop2.png";
import laptop3 from "../../../../common/assets/Home/laptop3.png";
import laptop4 from "../../../../common/assets/Home/laptop4.png";
import animation from "../../../../common/assets/Home/animation.png";
import augreality from "../../../../common/assets/Home/augreality.png";
import chatbots from "../../../../common/assets/Home/chatbots.png";
import games from "../../../../common/assets/Home/games.png";
import { useState } from "react";

export default function HomeWWO() {
  const [displayedContent, setDisplayedContent] = useState({
    component: laptop1,
    name: "laptop1",
  });

  const [activeDot, setActiveDot] = useState("laptop1");

  function handleContentClick(event) {
    switch (event.target.id) {
      case "laptop1":
        setDisplayedContent({
          component: laptop1,
          name: "laptop1",
        });
        setActiveDot("laptop1");
        break;
      case "laptop2":
        setDisplayedContent({
          component: laptop2,
          name: "laptop2",
        });
        setActiveDot("laptop2");
        break;
      case "laptop3":
        setDisplayedContent({
          component: laptop3,
          name: "laptop3",
        });
        setActiveDot("laptop3");
        break;
      case "laptop4":
        setDisplayedContent({
          component: laptop4,
          name: "laptop4",
        });
        setActiveDot("laptop4");
        break;
      default:
        break;
    }
  }

  return (
    <div className={styles.wwoContainer}>
      <div className={styles.blurb}>
        <h1 className={styles.h1}>What we offer</h1>
        <h2 className={styles.h2}>The Creative Problem Solving programme is a series of digital creation projects aimed to encourage self-motivation and student agency, designed by New Zealand’s leading IT industry experts and schools.</h2>
        <h3 className={styles.h3}>What will students create?</h3>
        <div className={styles.imgContainer1}>
          <img src={animation} id="laptop1" className={`${styles.img1} ${displayedContent.name === "laptop1"}`} onClick={handleContentClick} alt="" />
          <img src={games} id="laptop2" className={`${styles.img1} ${displayedContent.name === "laptop2"}`} onClick={handleContentClick} alt="" />
          <img src={chatbots} id="laptop3" className={`${styles.img1} ${displayedContent.name === "laptop3"}`} onClick={handleContentClick} alt="" />
          <img src={augreality} id="laptop4" className={`${styles.img1} ${displayedContent.name === "laptop4"}`} onClick={handleContentClick} alt="" />
        </div>
      </div>
      <div>
        <div>
          <div className={styles.imgContainer2}>
            <div>
              <img src={displayedContent.component} className={styles.img2} alt="" />
            </div>
            <div className={styles.dotContainer}>
              <span className={`${styles.dot} ${activeDot === "laptop1" && styles.active}`}></span>
              <span className={`${styles.dot} ${activeDot === "laptop2" && styles.active}`}></span>
              <span className={`${styles.dot} ${activeDot === "laptop3" && styles.active}`}></span>
              <span className={`${styles.dot} ${activeDot === "laptop4" && styles.active}`}></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
