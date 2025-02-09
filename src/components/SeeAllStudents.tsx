import React, { useEffect, useState } from 'react'
import Student from '../wids/Student'
import axios from 'axios'


interface course {
    $id: number;
    id: number,
    title: string,
    studentId: number,
    grade: null
}
const SeeAllStudents:React.FC = () => {
    const [data,setdata] = useState< {
        "$id": number,
        "id": number,
        name: string,
        courses: {
          "$id": number,
          "$values": course[]
        }
      }[]>();
    useEffect(()=>{
        axios.get("http://localhost:5013/api/student")
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
            <Student data={
                {
                    id : ele.id,
                    name: ele.name,
                    courses: ele.courses.$values
                }
            }/>
        )
        :
        <div className=' w-full h-full flex mt-28 text-white justify-center text-xl'>Loading.......</div>
    }
    </div>
  )
}

export default SeeAllStudents