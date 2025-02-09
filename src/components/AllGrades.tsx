import React, { useEffect, useState } from 'react'
import Grade from '../wids/Grade';
import axios from 'axios';
import url from '../Consts';

const AllGrades:React.FC = () => {
    const [data,setData] = useState<
    {
        $id: number,
        id: number,
        score: number,
        courseId: number,
        courseName: string,
        studentId: number,
        studentName: string
      }[]>();
      useEffect(()=>{
        axios.get(url+"/grade")
        .then((res)=>{
            setData(res.data["$values"])
        })
        .catch((err)=>{
          console.log(err)
        })
      },[])
  return (
    <div className=' h-screen w-screen bg-[#3f3f3f] flex flex-col gap-10 pt-32 px-20 '>
      {
        data ?
        data.map((ele,idx)=>
          <Grade  data={ele}/>
      )
      :
      <div className=' w-full h-full flex mt-28 text-white justify-center text-xl'>Loading.......</div>
    }
    </div>
  )
}

export default AllGrades