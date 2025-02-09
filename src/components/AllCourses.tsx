import React, { useEffect, useState } from 'react'
import Student from '../wids/Student'
import axios from 'axios'
import Course from '../wids/Course';


interface data{
    $id:number;
    id:number;
    title: string;
    name: string ;
    studentId: number
}
const AllCourses:React.FC = () => {
    const [data,setdata] = useState<data[]>();
    useEffect(()=>{
        axios.get("http://localhost:5013/api/course")
        .then((Res)=>{
            console.log(Res.data["$values"]);
            setdata(Res.data["$values"]);
            // setdata(Res.data);
        })
        .catch((err)=>{
            console.log(err);
        })
    },[]);
  return (
    <div className=' h-screen w-screen bg-[#3f3f3f] flex flex-col gap-10 pt-32 px-20 '>
        {data 
        ?
         data?.map((ele,idx)=>
            <Course 
                    id={ele.id}
                    $id={ele.$id}
                    title={ele.title}
                    name={ele.name}
                    studentId={ele.studentId}
            />
        ):
        <div className=' w-full h-full flex mt-28 text-white justify-center text-xl'>Loading.......</div>
    }
    </div>
  )
}

export default AllCourses