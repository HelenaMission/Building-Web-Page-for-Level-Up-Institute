import { Link } from "react-router-dom";
import styles from "./BackToProjectsButton.module.css";

export default function BackToProjects() {
  return (
    <div className={styles.backToProjectButtonContainer}>
      <Link to="/projects-library">
        <button className={styles.backToProjectBtn}>BACK TO PROJECTS</button>
      </Link>
    </div>
  );
}
