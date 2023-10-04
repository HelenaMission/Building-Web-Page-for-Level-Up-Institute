import styles from "./LoginFormSignup.module.css";
import { useState } from "react";

export default function LoginFormSignup() {
  const [nameSignup, setNameSignup] = useState("");
  const [emailSignup, setEmailSignup] = useState("");
  const [passwordSignup1, setPasswordSignup1] = useState("");
  const [passwordSignup2, setPasswordSignup2] = useState("");
  const [messageToRender, setMessageToRender] = useState("");

  function handleForm(event) {
    event.preventDefault();

    if (passwordSignup1 != passwordSignup2) {
      const message = (
        <span className={styles.signupFail}>
          <center>
            Password entries do not match.
            <br />
            Please try again.
          </center>
        </span>
      );
      setMessageToRender(message);
      return console.log(passwordSignup1.length, passwordSignup2.length);
    }

    if (passwordSignup1.length < 3) {
      const message = (
        <span className={styles.signupFail}>
          <center>
            Your password must be a minimum of 3 characters long.
            <br />
            Please try again.
          </center>
        </span>
      );
      setMessageToRender(message);
      return;
    }

    if (event.target.name === "signup") {
      fetch(`http://localhost:4000/api/signup/teacher`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: nameSignup, email: emailSignup, password: passwordSignup1 }),
      })
        .then((res) => {
          console.log(res);
          if (res.ok) {
            const message = (
              <span className={styles.signupSuccess}>
                <center>
                  User successfully created!
                  <br />
                  Please use LOG IN to login.
                </center>
              </span>
            );
            setMessageToRender(message);
          } else if (res.status === 409) {
            const message = (
              <span className={styles.signupFail}>
                <center>
                  Email already exists.
                  <br />
                  Please choose a different email.
                </center>
              </span>
            );
            setMessageToRender(message);
          } else {
            const message = <span style={{ color: "red" }}>Something went wrong!</span>;
            setMessageToRender(message);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }

  return (
    <div className={styles.loginFormSignupContainer}>
      <form className={styles.loginFormSignup}>
        <input onChange={(event) => setNameSignup(event.target.value)} className={styles.textField1} type="text" name="name" placeholder="Full Name" />
        <br />
        <input onChange={(event) => setEmailSignup(event.target.value)} className={styles.textField2} type="email" name="email" placeholder="Email Address" />
        <br />
        <input onChange={(event) => setPasswordSignup1(event.target.value)} className={styles.textField2} type="password" name="password1" placeholder="Password" />
        <br />
        <input onChange={(event) => setPasswordSignup2(event.target.value)} className={styles.textField2} type="password" name="password2" placeholder="Confirm Password" />
      </form>
      <button className={styles.button2} type="submit" name="signup" onClick={handleForm}>
        SIGN UP
      </button>
      {messageToRender}
    </div>
  );
}
