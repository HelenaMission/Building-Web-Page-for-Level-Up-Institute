// import { useState } from "react";
// import styles from "./OtherNAV.module.css";
// import nzFlag from "../../../../common/assets/NavBar/NZFlag.png";
// import maoriFlag from "../../../../common/assets/NavBar/MaoriFlag.png";
// import levelUpLogo from "../../../../common/assets/NavBar/LevelUpWorks-white.png";

// const OtherNAV = ({ name, profile_pic }) => {
//   const [modal, setModal] = useState(false);
//   const toggleModal = () => {
//     setModal(!modal);
//   };

//   return (
//     <div>
//       <div className={styles.navbar}>
//         <div className={styles.logo}>
//           <img src={levelUpLogo} className={styles.levelUpLogo} alt="" />
//         </div>
//         <div className={styles.menu}>
//           <div className={styles.menuItem}>HOME</div>
//           <div className={styles.menuItem}>FEATURES</div>
//           <div className={styles.menuItem}>TEACHERS</div>
//         </div>
//         <div className={styles.langFlagLogin}>
//           <div className={styles.langFlag}>
//             <div>
//               <span className={styles.lang}>LANG</span>
//             </div>
//             <div>
//               <img src={nzFlag} className={styles.flagNZ} alt=""></img>
//             </div>
//             <div>
//               <img src={maoriFlag} className={styles.flagMaori} alt=""></img>
//             </div>
//           </div>
//           <div>
//             <div className={styles.avatarRegisterLogin}>
//               <img onClick={toggleModal} src={profile_pic} className={styles.avatar} alt="Profile Pic" />
//               <div className={styles.registerLogin}>{name}</div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default OtherNAV;

import { useState, useEffect } from "react";
import styles from "./OtherNAV.module.css";
import nzFlag from "../../../../common/assets/NavBar/NZFlag.png";
import maoriFlag from "../../../../common/assets/NavBar/MaoriFlag.png";
import levelUpLogo from "../../../../common/assets/NavBar/LevelUpWorks-white.png";
import { Link } from "react-router-dom";

const OtherNAV = ({ name, profile_pic, teacher_id, student_id}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isStudent, setIsStudent] = useState(false);

  console.log(teacher_id);
  console.log(student_id);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (teacher_id && teacher_id.length > 0) {
      setIsStudent(false);
    } else if (student_id && student_id.length > 0) {
      setIsStudent(true);
    }
  }, [teacher_id, student_id]);

  return (
    <div>
      <div className={styles.navbar}>
        <div className={styles.logo}>
          <img src={levelUpLogo} className={styles.levelUpLogo} alt="" />
        </div>
        <div className={styles.menu}>
          <div className={styles.menuItem}>HOME</div>
          <div className={styles.menuItem}>FEATURES</div>
          <div className={styles.menuItem}>TEACHERS</div>
        </div>
        <div className={styles.langFlagLogin}>
          <div className={styles.langFlag}>
            <div>
              <span className={styles.lang}>LANG</span>
            </div>
            <div>
              <img src={nzFlag} className={styles.flagNZ} alt=""></img>
            </div>
            <div>
              <img src={maoriFlag} className={styles.flagMaori} alt=""></img>
            </div>
          </div>

          {/* Dropdown section */}

          <div className={styles.avatarRegisterLogin}>
            <div className={styles.dropDown}>
              <div className={styles.dropDownToggle} onClick={toggleMenu}>
                <img src={profile_pic} className={styles.avatar} alt="Profile Pic" />

                <div className={styles.registerLogin}>{name.toUpperCase()}</div>
              </div>
              <span className={isOpen ? styles.arrowUp : styles.arrowDown}></span> {/* for isosceles */}
              
              {isOpen && isStudent && (
                <ul className={styles.dropDownMenu}>
                  <li className={styles.dropDownHover}>
                    <Link to={`/student-profile-viewer/${student_id}`}>My Profile</Link>{" "}
                    {/* It links to studentprofileviewer */}
                  </li>
                  <li className={styles.dropDownHover}>Settings</li>
                  <li className={styles.dropDownHover}>Log out</li>
                </ul>
              )}

              {isOpen && !isStudent && (
                <ul className={styles.dropDownMenu}>
                  <li className={styles.dropDownHover}>
                    <Link to={`/teacher-profile-viewer/${teacher_id}`}>My Profile</Link>{" "}
                    {/* It links to teacherprofileviewer */}
                  </li>
                  <li className={styles.dropDownHover}>Settings</li>
                  <li className={styles.dropDownHover}>Log out</li>
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OtherNAV;
