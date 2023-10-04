import styles from "./ProfileDetails.module.css";

export default function ProfileDetails({
  teacher_name,
  school,
  date_of_birth,
  contact_number,
  email,
}) {
  let options = {
    timeZone: "Pacific/Auckland",
    year: "numeric",
    month: "long",
    day: "2-digit",
  };

  return (
    <div>
      <div className={styles.profileDetailBox}>
        <h1 className={styles.profileName}>{teacher_name}</h1>
        <div className={styles.profileList}>
          <div className={styles.profileTitles}>
            <p>School</p>
            <p>Date of Birth</p>
            <p>Contact No</p>
            <p>Email Address</p>
          </div>
          <div className={styles.profileContents}>
            <p>{school}</p>
            <p>
              {Intl.DateTimeFormat("en-NZ", options)
                .format(new Date(date_of_birth))
                .replace(", ", " ")}
            </p>
            <p>{contact_number}</p>
            <p>{email}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
