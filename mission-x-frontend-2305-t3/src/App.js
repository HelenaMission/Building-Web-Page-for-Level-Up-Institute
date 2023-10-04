import { Routes, Route } from "react-router-dom";
import Home from "./pages/jene/home/Home";
import ProjectLibraryPage from "./pages/Jimson/ProjectLibrary/ProjectLibraryPage";
import StudentProfileViewerPage from "./pages/Jimson/StudentProfileViewer/StudentProfileViewerPage";
import ProgressTracker from "./pages/Jorge/ProgressTracker";
import StudentProfiles from "./pages/Jorge/StudentProfiles";
import TeacherProfileViewer from "./pages/Helena/TeacherProfile/TeacherProfileViewer";
import HelpRequests from "./pages/Helena/HelpRequest/HelpRequests";
import TeacherProLib from "./pages/Helena/TeacherProjectLibrary/TeacherProLib";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects-library" element={<ProjectLibraryPage />} />
        <Route path="/student-profile-viewer/:id" element={<StudentProfileViewerPage />} />
        <Route path="/progress-tracker" element={<ProgressTracker />} />
        <Route path="/student-profiles" element={<StudentProfiles />} />
        <Route path="/teacher-profile-viewer/:id" element={<TeacherProfileViewer />} />
        <Route path="/help-requests" element={<HelpRequests />} />
        <Route path="/teacher-projects-library" element={<TeacherProLib />} />
      </Routes>
    </div>
  );
}

export default App;
