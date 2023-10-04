import styles from "./StudentDetailsCard.module.css";

const StudentDetailsCard = ({ name, teacher_name, profile_pic, school, course, date_of_birth, contact_number, email }) => {
  // date conversion from mysql
  let options = {
    timeZone: "Pacific/Auckland",
    year: "numeric",
    month: "long",
    day: "2-digit",
  };

  return (
    <div>
      <div className={styles.mainContainer}>
        <div className={styles.profileContainer}>
          <div className={styles.profileImageCard}>
            <div>
              <img className={styles.studentImg} src={profile_pic} alt="" />
            </div>
            <button className={styles.buttonSPV}>EDIT PROFILE</button>
            <button className={styles.buttonSPV}>CHANGE PHOTO</button>
          </div>

          {/* ------------Student Details Section---------------- */}
          <div className={styles.studentDetailsContainer}>
            <div className={styles.studentsName}>
              <h1>{name}</h1>
            </div>

            <div className={styles.detailsWrapper}>
              <div className={styles.key}>
                <h4 className={styles.textK}>School</h4>
                <h4 className={styles.textK}>Teacher</h4>
                <h4 className={styles.textK}>Course</h4>
                <h4 className={styles.textK}>Date of Birth</h4>
                <h4 className={styles.textK}>Contact No</h4>
                <h4 className={styles.textK}>Email Address</h4>
              </div>
              <div className={styles.value}>
                <h4 className={styles.text}>{school}</h4>
                <h4 className={styles.text}>{teacher_name}</h4>
                <h4 className={styles.text}>{course}</h4>
                <h4 className={styles.text}> {Intl.DateTimeFormat("en-NZ", options).format(new Date(date_of_birth)).replace(", ", " ")}</h4>
                <h4 className={styles.text}>{contact_number}</h4>
                <h4 className={styles.text}>{email}</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDetailsCard;
