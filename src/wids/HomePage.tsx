import React from 'react'

const HomePage:React.FC = () => {
  return (
    <div className='h-screen w-screen px-32 bg-[#3f3f3f] flex pt-44  items-center gap- flex-col '>
            <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-4xl font-bold text-white">
                    ASP.NET Core Web API Server
                </h1>
                <p className="mt-4 text-lg text-[#b9b9b9]">
                    This project is a student course & grading system built with ASP.NET Core,
                     Entity Framework, and React for the frontend.
                </p>
            </div>
            
        <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="bg-white p-6 rounded-lg shadow-lg">
                <h2 className="text-xl font-semibold text-gray-800">
                    1. Setting Up ASP.NET Core
                </h2>
                <p className="mt-2 text-gray-600">
                    Created an ASP.NET Core Web API project using 
                    <code>dotnet new webapi</code>
                    . Configured controllers, models, and DTOs.
                </p>
            </div>
                
            <div className="bg-white p-6 rounded-lg shadow-lg">
                <h2 className="text-xl font-semibold text-gray-800">
                    2. Database & Entity Framework
                </h2>
                <p className="mt-2 text-gray-600">
                    Used Entity Framework Core for database management.
                    Defined models for Students, Courses, and Grades.
                     Applied migrations and seeded data.
                </p>
            </div>
                
            <div className="bg-white p-6 rounded-lg shadow-lg">
                <h2 className="text-xl font-semibold text-gray-800">
                    3. RESTful API Endpoints
                </h2>
                <p className="mt-2 text-gray-600">
                    Implemented controllers for students,
                     courses, and grades using 
                     <code>[HttpGet]</code>, <code>[HttpPost]</code>, and <code>[HttpPut]</code> 
                     methods.
                </p>
            </div>
                
            <div className="bg-white p-6 rounded-lg shadow-lg">
                <h2 className="text-xl font-semibold text-gray-800">
                    4. Connecting React Frontend
                </h2>
                <p className="mt-2 text-gray-600">
                    Integrated the React frontend with Axios to fetch and manage data from the API.
                </p>
            </div>
        </div>
            
            <div className="mt-10 text-center">
                <a href="https://github.com/VarunChowdary0/ASP.NET_Rest_API"
                 className="bg-indigo-400 text-white px-6 py-3 rounded-lg
                  shadow-md hover:bg-blue-700 transition">
                    View API Source Code.
                </a>
            </div>
    </div>
  )
}

export default HomePage