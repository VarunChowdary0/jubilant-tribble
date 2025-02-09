import React from 'react'

const Navigator:React.FC = () => {
  return (
    <div className=' px-5 py-3 fixed top-0 left-0 right-0 bg-[#363636] 
    text-white shadow-md hover:shadow-2xl transition-all flex justify-around'>
      <div className=' w-[20%] h-full'>
        <p className=' text-xl font-semibold text-indigo-400
         transition-all hover:cursor-pointer hover:text-indigo-500'>ASP.NET REST-API Course Manager</p>

      </div>
        <a className=' hover:text-sky-400' href="/">Home</a>
        <a className=' hover:text-sky-400' href="/addstudent">Add Student</a>
        <a className=' hover:text-sky-400' href="/allstudent">All Students</a>
        <a className=' hover:text-sky-400' href="/get_student">Get Student</a>
        <a className=' hover:text-sky-400' href="/allcourses">All Courses</a>
        <a className=' hover:text-sky-400' href="/course_register">Course Registration</a>
        <a className=' hover:text-sky-400' href="/gradestudent">Grade Student</a>
        <a className=' hover:text-sky-400' href="/allgrades">Grades</a>
    </div>
  )
}

export default Navigator