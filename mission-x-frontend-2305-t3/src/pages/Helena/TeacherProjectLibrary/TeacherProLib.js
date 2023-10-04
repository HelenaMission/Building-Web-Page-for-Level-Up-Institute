import styles from "./TeacherProLib.module.css";
import OtherNAV from "../../jene/home/home-nav/ParentOtherNAV";
import Filter from "../../Jimson/ProjectLibrary/ComponentsForProjectLibrary/Filter";
import Footer from "../../Jimson/ProjectLibrary/ComponentsForProjectLibrary/Footer";
import OrangeButton from "../../../common/ui/OrangeButton";
import PinkButton from "../../../common/ui/PinkButton";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

export default function TeacherProLib() {
  // const { id } = useParams();
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // const [teacherUsers, setTeacherUsers] = useState([]);

  // useEffect(() => {
  //   fetch(`http://localhost:4000/api/teacherProjectLibrary/${id}`)
  //     .then((res) => res.json())
  //     .then((res) => {
  //       console.log("Fetched data:", res);
  //       setTeacherUsers(res);
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching data:", error);
  //     });
  // }, [id]);

  return (
    <div className={styles.containerProjectLibraryPage}>
      <OtherNAV />
      <div className={styles.projectText}>
        <h1>PROJECTS</h1> <br />
        <h4>Welcome to the project library. You can use the filters on the right to help you search for specific projects.</h4>
      </div>
      <Filter />
      <div className={styles.bttButtonDiv}>
        <OrangeButton name="BACK TO TOP"  />
        <Link to="/progress-tracker">
          <PinkButton name="BACK TO DASHBOARD" />
        </Link>
      </div>
      <Footer />
    </div>
  );
}
