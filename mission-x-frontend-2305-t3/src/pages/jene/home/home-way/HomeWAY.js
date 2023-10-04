import styles from "./HomeWAY.module.css";
import classroom from "../../../../common/assets/Home/classroom.png";
import { useState } from "react";
import students from "../../../../common/assets/LoginSignup/students.png";
import teachers from "../../../../common/assets/LoginSignup/teachers.png";
import esc from "../../../../common/assets/LoginSignup/esc.png";
import StudentLoginFormLogin from "../../login/common/login-form-login/StudentLoginFormLogin";
import TeacherLoginFormLogin from "../../login/common/login-form-login/TeacherLoginFormLogin";
import StudentLoginFormSignup from "../../login/common/login-form-signup/StudentLoginFormSignup";
import TeacherLoginFormSignup from "../../login/common/login-form-signup/TeacherLoginFormSignup";

export default function HomeWAY() {
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
    <div className={styles.ctaContainer}>
      <div className={styles.imgContainer}>
        <img className={styles.img} src={classroom} alt="" />
      </div>
      <div className={styles.ctaBlurb}>
        <ul className={styles.ul}>
          <li>
            <h1 className={styles.h1}>What are you waiting for?</h1>
          </li>
          <li>
            <h2 className={styles.h2}>
              Start teaching Digital Technologies<br></br>today.
            </h2>
          </li>
          <li>
            <h3 className={styles.h3}>
              If you need more information, we are happy to answer any<br></br> questions you may have.
            </h3>
          </li>
          <li>
            <div className={styles.buttons}>
              <button className={styles.button1}>ENQUIRE NOW</button>
              <button id="myButton" className={styles.button2} onClick={toggleModal}>
                SIGN UP
              </button>
            </div>
          </li>
        </ul>
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
