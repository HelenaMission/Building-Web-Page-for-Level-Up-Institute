import React, { useState, useEffect } from "react";
import styles from "./Tracker.module.css";

export default function Tracker() {
  const [completedProjects, setCompletedProjects] = useState([]);
  const [studentsData, setStudentsData] = useState([]);
  const [projectCount, setProjectCount] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/api/studentProfiles")
      .then((response) => response.json())
      .then((response) => {
        setStudentsData(response);
        setCompletedProjects(response.map(() => []));
      })
      .catch((error) => {
        console.log("Error fetching student profiles:", error);
      });

    fetch("http://localhost:4000/api/projects")
      .then((response) => response.json())
      .then((data) => {
        setProjectCount(data.length);
      })
      .catch((error) => {
        console.log("Error fetching projects:", error);
      });
  }, []);

  useEffect(() => {
    fetch("http://localhost:4000/api/studentProjects")
      .then((response) => response.json())
      .then((data) => {
        const updatedCompletedProjects = [...completedProjects];

        data.forEach((project) => {
          const { student_id, project_id, date_submitted } = project;

          if (date_submitted) {
            const studentIndex = studentsData.findIndex(
              (student) => student.student_id === student_id
            );

            if (studentIndex !== -1) {
              updatedCompletedProjects[studentIndex].push(project_id);
            }
          }
        });

        setCompletedProjects(updatedCompletedProjects);
      })
      .catch((error) => {
        console.log("Error fetching student projects:", error);
      });
  }, [studentsData]);

  const renderCircles = (studentIndex) => {
    const circles = [];

    for (let i = 1; i <= projectCount; i++) {
      const circleClass = completedProjects[studentIndex]?.includes(i)
        ? styles.circleActive
        : styles.circleInactive;

      circles.push(
        <button key={i} className={circleClass}>
          {i}
        </button>
      );
    }

    return circles;
  };

  const renderStudents = () => {
    return studentsData.map((student, studentIndex) => {
      const studentName = student.name;
      const completedCount = completedProjects[studentIndex]?.length || 0;

      return (
        <div key={studentIndex} className={styles.studentContainer}>
          <div className={styles.header}>
            <h4>{studentName}</h4>
            <p>{`${completedCount}/${projectCount} Projects Completed`}</p>
          </div>
          <div className={styles.circleContainer}>
            {renderCircles(studentIndex)}
          </div>
        </div>
      );
    });
  };

  return (
    <div className={styles.tracker}>
      <div className={styles.container}>
        <div className={styles.webScrollBar}>
          <h2 className={styles.title}>BEGINNER COURSE</h2>
          {renderStudents()}
        </div>
      </div>
    </div>
  );
}
