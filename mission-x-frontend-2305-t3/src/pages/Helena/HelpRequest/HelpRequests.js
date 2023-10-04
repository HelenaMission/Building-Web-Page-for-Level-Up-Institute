import RequestItems from "./RequestItems";
import styles from "./HelpRequests.module.css";
import WhiteNavBar from "../../Jorge/components/WhiteNavBar";
import OptionsMenu from "../../Jorge/components/OptionsMenu";
import { FaRegCopyright } from "react-icons/fa";

export default function HelpRequests() {
  const profile_pic = localStorage.getItem("profile_pic");
  const teacher_id = localStorage.getItem("teacher_id");

  return (
    <div className={styles.main}>
      <WhiteNavBar />
      <div className={styles.contentsPage}>
        <div className={styles.optionsMenu}>
          <OptionsMenu profile_pic={profile_pic} />
        </div>
        <div>
          <RequestItems teacher_id={teacher_id} />
        </div>
      </div>
      <div className={styles.copyRight}>
        <div className={styles.copyRightContents}>
          <FaRegCopyright />
          LevelUp Works 2020
        </div>
      </div>
    </div>
  );
}
