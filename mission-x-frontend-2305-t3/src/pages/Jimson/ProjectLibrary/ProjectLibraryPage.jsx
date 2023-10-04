import React from "react";
import { Link } from "react-router-dom"; // Import the Link component
import styles from "./ProjectLibraryPage.module.css";
import OtherNAV from "../../jene/home/home-nav/ParentOtherNAV";
import Filter from "./ComponentsForProjectLibrary/Filter";
import Footer from "./ComponentsForProjectLibrary/Footer";

export default function ProjectLibraryPage() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className={styles.containerProjectLibraryPage}>
      <OtherNAV />
      <div className={styles.projectText}>
        <h1>PROJECTS</h1> <br />
        <h4>Welcome to the project library. You can use the filters on the right to help you search for specific projects.</h4>
      </div>
      <Filter />
      <div className={styles.bttButtonDiv}>
        <button className={styles.backToTopButton} onClick={scrollToTop}>
          BACK TO TOP
        </button>
      </div>
      {/* Adding the link below the "Back to Top" button */}
      <div className={styles.studentProfileLinkDiv}>
        <Link to="/student-profile-viewer">Go to Student Profile Viewer</Link>
      </div>
      <div className={styles.studentProfileLinkDiv}>
        <Link to="/teacher-profile-viewer">Go to Teacher Profile Viewer</Link>
      </div>
      <Footer />
    </div>
  );
}
