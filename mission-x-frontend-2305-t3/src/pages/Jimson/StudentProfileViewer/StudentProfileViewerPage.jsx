import OtherNAV from "../../jene/home/home-nav/ParentOtherNAV";
import StudentDetailsCard from "./ComponentsForStudentProfileViewer/StudentDetailsCard";
import BackToProjects from "./ComponentsForStudentProfileViewer/BackToProjectsButton";
import Footer from "../ProjectLibrary/ComponentsForProjectLibrary/Footer";

export default function StudentProfileViewerPage() {
  const name = localStorage.getItem("name");
  const teacher_name = localStorage.getItem("teacher_name");
  const profile_pic = localStorage.getItem("profile_pic");
  const school = localStorage.getItem("school");
  const course = localStorage.getItem("course");
  const date_of_birth = localStorage.getItem("date_of_birth");
  const contact_number = localStorage.getItem("contact_number");
  const email = localStorage.getItem("email");

  return (
    <div>
      <OtherNAV />
      <StudentDetailsCard name={name} teacher_name={teacher_name} profile_pic={profile_pic} school={school} course={course} date_of_birth={date_of_birth} contact_number={contact_number} email={email} />
      <BackToProjects />
      <Footer />
    </div>
  );
}
