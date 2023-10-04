import React from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./OptionsMenu.module.css";
import teacher from "../Assets/JasminaSalvador.png";
import progressTracker from "../../../common/assets/TeacherDashboard/progressTracker.png";
import progressTrackerSelected from "../../../common/assets/TeacherDashboard/progressTrackerSelected.png";
import studentProfiles from "../../../common/assets/TeacherDashboard/studentProfiles.png";
import studentProfilesSelected from "../../../common/assets/TeacherDashboard/studentProfilesSelected.png";
import helpRequests from "../../../common/assets/TeacherDashboard/helpRequests.png";
import helpRequestsSelected from "../../../common/assets/TeacherDashboard/helpRequestsSelected.png";
import projectSubmission from "../../../common/assets/TeacherDashboard/projectSubmissions.png";
import projectLibrary from "../../../common/assets/TeacherDashboard/projectLibrary.png";
import logout from "../../../common/assets/logout.png";
import profile from "../../../common/assets/profile.png";
import settings from "../../../common/assets/settings.png";

export default function OptionsMenu() {
  const location = useLocation();

  const isActiveRoute = (routePath) => {
    return location.pathname === routePath;
  };

  return (
    <div>
      <div id={styles.teacherDiv}>
        <img
          className={styles.teacherImage}
          src={teacher}
          alt="Jasmina Salvador"
        ></img>
      </div>

      <div id={styles.menuOptions}>
        <ul>
          <li className={styles.list}>
            <img
              src={
                isActiveRoute("/progress-tracker")
                  ? progressTrackerSelected
                  : progressTracker
              }
              className={styles.logos}
              alt="tracker"
            ></img>
            <span>
              <Link to="/progress-tracker">PROGRESS TRACKER</Link>
            </span>
          </li>
          <li className={styles.list}>
            <img
              src={
                isActiveRoute("/student-profiles")
                  ? studentProfilesSelected
                  : studentProfiles
              }
              className={styles.logos}
              alt="profiles"
            ></img>
            <span>
              <Link to="/student-profiles">STUDENT PROFILES</Link>
            </span>
          </li>
          <li className={styles.list}>
            <img
              src={
                isActiveRoute("/help-requests")
                  ? helpRequestsSelected
                  : helpRequests
              }
              className={styles.logos}
              alt="requests"
            ></img>
            <span>
              <Link to="/help-requests">HELP REQUESTS</Link>
            </span>
          </li>
          <li className={styles.list}>
            <img
              src={projectSubmission}
              className={styles.logos}
              alt="Project Submissions"
            ></img>
            <span>PROJECT SUBMISSIONS</span>
          </li>
          <li className={styles.list}>
            <img
              src={projectLibrary}
              className={styles.logos}
              alt="Project Submissions"
            ></img>
            <span>PROJECT LIBRARY</span>
          </li>
        </ul>
      </div>

      <ol className={styles.ol} id={styles.list}>
        <li>
          <img src={profile} alt="profile"></img>
          <p>Profile</p>
        </li>
        <li>
          <img src={settings} alt="settings"></img>
          <p>Settings</p>
        </li>
        <li>
          <img src={logout} alt="log out"></img>
          <p>Log out</p>
        </li>
      </ol>
    </div>
  );
}
