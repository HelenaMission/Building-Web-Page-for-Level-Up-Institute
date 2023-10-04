import { useState } from "react";
import { Link } from "react-router-dom";
import avatar from "../../../../common/assets/NavBar/Avatar-white.png";
import styles from "./Dropdown.module.css";

export default function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.dropDown}>
      <div className={styles.dropDownToggle} onClick={toggleMenu}>
        <img src={avatar} width={"20px"} height={"20px"} alt=""></img>
        <p>Courtney Bristol</p>

        {isOpen && (
          <ul className={styles.dropDownMenu}>
            <Link to="/student-profile-viewer/12">
              <li className={styles.dropDownHover}>My Profile</li>
            </Link>
            <li className={styles.dropDownHover}>Settings</li>
            <li className={styles.dropDownHover}>Log out</li>
          </ul>
        )}
      </div>
    </div>
  );
}
