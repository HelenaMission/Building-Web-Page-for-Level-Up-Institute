import OtherNAV from "./OtherNAV";

function ParentOtherNAV() {
  const name = localStorage.getItem("name");
  const teacherName = localStorage.getItem("teacher_name");
  const profile_pic = localStorage.getItem("profile_pic");
  const student_id= localStorage.getItem("student_id");
  const teacher_id = localStorage.getItem("teacher_id");

  const displayName = name ?? teacherName;
  
  return (
    <div>
      <OtherNAV name={displayName} profile_pic={profile_pic} teacher_id={teacher_id} student_id={student_id} />
    </div>
  );
}

export default ParentOtherNAV;
