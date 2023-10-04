import styles from "./TeacherProfileViewer.module.css";
import OtherNAV from "../../jene/home/home-nav/ParentOtherNAV";
import ProfileEditor from "./ProfileEditor";
import PinkButton from "../../../common/ui/PinkButton";
import OrangeButton from "../../../common/ui/OrangeButton";
import ProfileDetails from "./ProfileDetails";
import HomeFoo from "../../jene/home/home-foo/HomeFOO";
import { Link } from "react-router-dom";

export default function TeacherProfileViewer() {
  const teacher_name = localStorage.getItem("teacher_name");
  const email = localStorage.getItem("email");
  const school = localStorage.getItem("school");
  const profile_pic = localStorage.getItem("profile_pic");
  const date_of_birth = localStorage.getItem("date_of_birth");
  const contact_number = localStorage.getItem("contact_number");

  return (
    <div className={styles.background}>
      <OtherNAV />

      {/** Contents*/}
      <div className={styles.profiles}>
        {/** Contents Left*/}
        <ProfileEditor profile_pic={profile_pic} />

        {/** Contents Right */}
        <ProfileDetails teacher_name={teacher_name} school={school} date_of_birth={date_of_birth} contact_number={contact_number} email={email} />
      </div>

      {/** Back buttons*/}
      <div className={styles.backbtn}>
        <OrangeButton name="BACK TO PROFILE" />
        <Link to="/progress-tracker">
          <PinkButton name="BACK TO DASHBOARD" />
        </Link>
      </div>

      {/** Footer */}
      <div className={styles.footer}></div>
      <HomeFoo />
    </div>
  );
}
