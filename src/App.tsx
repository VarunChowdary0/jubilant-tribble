import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import AddStudent from "./components/AddStudent";
import Navigator from "./components/Navigator";
import SeeAllStudents from "./components/SeeAllStudents";
import StudentByID from "./components/StudentByID";
import AllCourses from "./components/AllCourses";
import CourseRegistration from "./components/CourseRegistration";
import GradeStudent from "./components/GradeStudent";
import AllGrades from "./components/AllGrades";
import HomePage from "./wids/HomePage";

const App:React.FC = () => {
  return ( 
    <>
    <div className="  hidden max-sm:flex items-center justify-center 
    text-black text-xl w-screen h-screen ">
      We are Sorry, this is not for Mobiles.
    </div>
      <div className=" bg-[#ecede8] max-sm:hidden">
      <Navigator/>
          <Router>
            <Routes>
              <Route element={<HomePage/>} path="/"/>
              <Route element={<AddStudent/>} path="/addstudent"/>
              <Route element={<SeeAllStudents/>} path="/allstudent"/>
              <Route element={<StudentByID/>} path="/get_student"/>
              <Route element={<AllCourses/>} path="/allcourses"/>
              <Route element={<CourseRegistration/>} path="/course_register"/>
              <Route element={<GradeStudent/>} path="/gradestudent"/>
              <Route element={<AllGrades/>} path="/allgrades"/>
            </Routes>
          </Router>
      </div>
    </>
  );
}

export default App;
