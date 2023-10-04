import styles from "./HomeNAV.module.css";
import avatar from "../../../../common/assets/NavBar/Avatar-white.png";
import nzFlag from "../../../../common/assets/NavBar/NZFlag.png";
import maoriFlag from "../../../../common/assets/NavBar/MaoriFlag.png";
import levelUpLogo from "../../../../common/assets/NavBar/LevelUpWorks-white.png";
import { useState } from "react";
import students from "../../../../common/assets/LoginSignup/students.png";
import teachers from "../../../../common/assets/LoginSignup/teachers.png";
import esc from "../../../../common/assets/LoginSignup/esc.png";
import StudentLoginFormLogin from "../../login/common/login-form-login/StudentLoginFormLogin";
import TeacherLoginFormLogin from "../../login/common/login-form-login/TeacherLoginFormLogin";
import StudentLoginFormSignup from "../../login/common/login-form-signup/StudentLoginFormSignup";
import TeacherLoginFormSignup from "../../login/common/login-form-signup/TeacherLoginFormSignup";

export default function HomeNAV() {
  const [showLoginForm, setShowLoginForm] = useState(true);
  const [showSignUpForm, setShowSignUpForm] = useState(false);

  const [modal, setModal] = useState(false);
  const toggleModal = () => {
    setModal(!modal);
  };

  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

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
          <div className={styles.avatarRegisterLogin}>
            <div>
              <img src={avatar} className={styles.avatar} alt=""></img>
            </div>
            <div id="myButton" className={styles.registerLogin} onClick={toggleModal}>
              REGISTER | LOGIN
            </div>
          </div>
        </div>
      </div>
      <div>
        {modal && (
          <div className={styles.modal}>
            <div onClick={toggleModal} className={styles.overlay}></div>
            <div className={styles.modalContent}>
              <div className={styles.fullscreen}>
                <div className={styles.loginContainer}>
                  <div className={styles.studentsContainer}>
                    <div>
                      <img className={styles.imgStudents} src={students} alt="" />
                    </div>
                    <div>
                      <h1 className={styles.h1Students}>Students</h1>
                    </div>
                    <div className={styles.loginOptions}>
                      <h2
                        className={`${styles.loginH2} ${showLoginForm ? styles.active : ""}`}
                        onClick={() => {
                          setShowLoginForm(true);
                          setShowSignUpForm(false);
                        }}
                      >
                        LOG IN
                      </h2>
                      <h2
                        className={`${styles.signupH2} ${showSignUpForm ? styles.active : ""}`}
                        onClick={() => {
                          setShowLoginForm(false);
                          setShowSignUpForm(true);
                        }}
                      >
                        SIGN UP
                      </h2>
                    </div>
                    {showLoginForm && <StudentLoginFormLogin />}
                    {showSignUpForm && <StudentLoginFormSignup />}
                  </div>
                  <div className={styles.teachersContainer}>
                    <div className={styles.img1Container}>
                      <img className={styles.imgEsc} onClick={toggleModal} src={esc} alt="" />
                    </div>
                    <div className={styles.teachers}>
                      <div>
                        <img className={styles.imgTeachers} src={teachers} alt="" />
                      </div>
                      <div>
                        <h1 className={styles.h1Teachers}>Teachers</h1>
                      </div>
                      <div className={styles.loginOptions}>
                        <h2
                          className={`${styles.loginH2} ${showLoginForm ? styles.active : ""}`}
                          onClick={() => {
                            setShowLoginForm(true);
                            setShowSignUpForm(false);
                          }}
                        >
                          LOG IN
                        </h2>
                        <h2
                          className={`${styles.signupH2} ${showSignUpForm ? styles.active : ""}`}
                          onClick={() => {
                            setShowLoginForm(false);
                            setShowSignUpForm(true);
                          }}
                        >
                          SIGN UP
                        </h2>
                      </div>
                    </div>
                    {showLoginForm && <TeacherLoginFormLogin />}
                    {showSignUpForm && <TeacherLoginFormSignup />}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
