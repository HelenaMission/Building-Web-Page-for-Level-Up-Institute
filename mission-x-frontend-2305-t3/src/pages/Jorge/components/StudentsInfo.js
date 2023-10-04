import { useState, useEffect } from "react";
import styles from "./StudentsInfo.module.css";

export default function StudentsInfo() {
  const [studentsData, setStudentsData] = useState();

  useEffect(() => {
    fetch("http://localhost:4000/api/studentProfiles")
      .then((response) => response.json())
      .then((response) => {
        setStudentsData(response);
      })
      .catch((error) => {
        console.log("Error fetching student profiles:", error);
      });
  }, []);

  return (
    <div className={styles.container}>
      {studentsData &&
        studentsData.map(function (student) {
          return (
            <div key={student.student_id} className={styles.studentContainer}>
              <img
                src={student.profile_pic}
                alt={student.name}
                className={styles.photo}
              />
              <h4 className={styles.fullName}>{student.name}</h4>
            </div>
          );
        })}
    </div>
  );
}
