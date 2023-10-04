import styles from "./LoginFormLogin.module.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function TeacherLoginFormLogin() {
  const [emailLogin, setEmailLogin] = useState("");
  const [passwordLogin, setPasswordLogin] = useState("");
  const [messageToRender, setMessageToRender] = useState(null);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:4000/api/login/teacher", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ emailLogin, passwordLogin }),
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.clear();
        localStorage.setItem("teacher_id", data.teacher_id);
        localStorage.setItem("teacher_name", data.teacher_name);
        localStorage.setItem("email", data.email);
        localStorage.setItem("school", data.school);
        localStorage.setItem("profile_pic", data.profile_pic);
        localStorage.setItem("date_of_birth", data.date_of_birth);
        localStorage.setItem("contact_number", data.contact_number);
        console.log(localStorage);

        navigate("/teacher-projects-library");
      } else {
        console.error("Login failed:", data.error);
        const message = (
          <span className={styles.loginError}>
            <center>
              Incorrect email or password provided.
              <br />
              Please try again.
            </center>
          </span>
        );
        setMessageToRender(message);
      }
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  return (
    <div className={styles.loginFormLoginContainer}>
      <form className={styles.form}>
        <input className={styles.textField1} type="email" value={emailLogin} onChange={(e) => setEmailLogin(e.target.value)} required /> <br />
        <input className={styles.textField2} type="password" value={passwordLogin} onChange={(e) => setPasswordLogin(e.target.value)} required />
      </form>
      <button className={styles.button2} type="submit" name="login" onClick={handleLogin}>
        LOG IN
      </button>
      {messageToRender}
    </div>
  );
}
