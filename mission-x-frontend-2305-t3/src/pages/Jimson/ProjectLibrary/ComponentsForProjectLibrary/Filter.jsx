import { useState, useEffect } from "react";
import styles from "./Filter.module.css";
import axios from "axios";

export default function Filter() {
  const [selected, setSelected] = useState();
  const [displayContent, setDisplayContent] = useState([]);

  const [data, setData] = useState([]); //fetched data from database
  // ----------Filtered Data ------------
  const display5 = data.slice(0, 5);
  // console.log(display5)
  const display10 = data.slice(0, 10);
  // console.log(display10)
  const displayAll = data;
  const beginner = data.filter((item) => {
    return item.course === "Beginner";
  });
  const intermediate = data.filter((item) => {
    return item.course === "Intermediate";
  });
  const advanced = data.filter((item) => {
    return item.course === "Advanced";
  });
  const free = data.filter((item) => {
    return item.subscription === "Free";
  });
  console.log(free);
  const premium = data.filter((item) => {
    return item.subscription === "Premium";
  });

  useEffect(() => {
    // to render fetched data once
    axios
      .get("http://localhost:4000/api/projects")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  // ---------Checkbox state handler ------------
  const handleCheck = (event) => {
    setSelected((prevState) => {
      return { ...prevState, [event.target.value]: event.target.checked };
    });
  };
  console.log("Checkboxes selected:", selected);

  // ---------Button event handler --------------
  const handleClick = (event) => {
    setSelected((prevState) => {
      return { ...prevState, [event.target.value]: event.target.checked };
    });
  };
  console.log("button selected:", selected);

  return (
    <div className={styles.mainContainer}>
      {/* ---------Checkbox Section------------- */}
      <div className={styles.checkboxContainer}>
        <h4 className={styles.checkboxFilter}>SUBSCRIPTION</h4>
        <div className={styles.subscription}>
          <div>
            <input onChange={handleCheck} type="checkbox" id="free" value="free"></input>
            <label htmlFor="free"> Free</label>
          </div>
          <div>
            <input onChange={handleCheck} type="checkbox" id="premium" value="premium"></input>
            <label htmlFor="premium"> Premium</label>
          </div>
        </div>
        <br />
        <h4 className={styles.checkboxFilter}>ACTIVITY TYPE</h4>
        <div className={styles.activityType}>
          <div>
            <input type="checkbox"></input>
            <label> Animation</label>
          </div>
          <div>
            <input type="checkbox"></input>
            <label> Game </label>
          </div>
          <div>
            <input type="checkbox"></input>
            <label> Chatbot </label>
          </div>
          <div>
            <input type="checkbox"></input>
            <label> Augmented Reality</label>
          </div>
        </div>
        <br />
        <h4 className={styles.checkboxFilter}>YEAR LEVEL</h4>
        <div className={styles.yearLevel}>
          <div>
            <input type="checkbox"></input>
            <label> 1 - 4 </label>
          </div>
          <div>
            <input type="checkbox"></input>
            <label> 5 - 6 </label>
          </div>
          <div>
            <input type="checkbox"></input>
            <label> 7 - 8 </label>
          </div>
          <div>
            <input type="checkbox"></input>
            <label> 9 - 13 </label>
          </div>
        </div>
        <br />
        <h4 className={styles.checkboxFilter}>SUBJECT MATTER</h4>
        <div className={styles.subjectMatter}>
          <div>
            <input type="checkbox"></input>
            <label> Computer Science </label>
          </div>
          <div>
            <input type="checkbox"></input>
            <label> Maths </label>
          </div>
          <div>
            <input type="checkbox"></input>
            <label> Science </label>
          </div>
          <div>
            <input type="checkbox"></input>
            <label> Language </label>
          </div>
          <div>
            <input type="checkbox"></input>
            <label> Art </label>
          </div>
          <div>
            <input type="checkbox"></input>
            <label> Music </label>
          </div>
        </div>
        <br />
      </div>

      {/* ---------------Buttons Section--------------- */}
      <div className={styles.buttonsAndDisplayContainer}>
        <div className={styles.buttonsDiv}>
          <div className={styles.leftButtons}>
            <button id="display-beginner" onClick={handleClick} className={`${styles.filterBtn} ${styles.beginnerAnd5Btn} ${styles.leftButtonSize}`}>
              BEGINNER
            </button>
            <button id="display-intermediate" onClick={handleClick} className={`${styles.filterBtn} ${styles.leftButtonSize}`}>
              INTERMEDIATE
            </button>
            <button id="display-advanced" onClick={handleClick} className={`${styles.filterBtn} ${styles.advancedAndAllBtn} ${styles.leftButtonSize}`}>
              ADVANCED
            </button>
          </div>
          <div className={styles.rightButtons}>
            <button id="display-5" onClick={handleClick} className={`${styles.filterBtn} ${styles.beginnerAnd5Btn} ${styles.rightButtonSize}`}>
              5
            </button>
            <button id="display-10" onClick={handleClick} className={`${styles.filterBtn}  ${styles.rightButtonSize}`}>
              10
            </button>
            <button id="display-all" onClick={handleClick} className={`${styles.filterBtn} ${styles.advancedAndAllBtn} ${styles.rightButtonSize}`}>
              All
            </button>
          </div>
        </div>

        {/* ---------Rendering--------- */}
        <div className={styles.gridContainer}>
          {data.map((item) => (
            <div className={styles.card}>
              <img src={item.project_pic} alt="img" />
              <p className={styles.titleCard} key={item.id}>
                {item.name}
              </p>
              <p className={styles.textCard}>
                {item.course.toUpperCase()} | {item.activity_type}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
