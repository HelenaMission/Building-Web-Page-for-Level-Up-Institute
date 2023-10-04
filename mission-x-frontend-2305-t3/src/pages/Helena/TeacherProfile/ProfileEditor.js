import BlueBorderButton from "../../../common/ui/BlueBorderButton";
import styles from "./ProfileEditor.module.css";

export default function ProfileEditor({ profile_pic }) {
  return (
    <div>
      <div className={styles.profileEditorBox}>
        <img className={styles.teacherImg} src={profile_pic} alt="" />
        <div className={styles.btnContainer}>
          <BlueBorderButton name="EDIT PROFILE" />
          <BlueBorderButton name="CHANGE PHOTO" />
          <BlueBorderButton name="SETTINGS" />
        </div>
      </div>
    </div>
  );
}
