import React from 'react'
import Tag from './Tag'

interface curr{
    data : {
        id: number,
        score: number,
        courseId: number,
        courseName: string,
        studentId: number,
        studentName: string
    }
}
const Grade:React.FC<curr> = ({data}) => {
  return (
    <div className=' h-fit gap-10 bg-[#ffffff] text-[#7b7b7b]
    rounded-md py-5 px-10 flex '>
       <div className=' flex justify-between gap-3'>
           <span className='text-[#7165de] font-bold'>G_ID</span>
           <span className=''>{data.id}</span>
       </div>
       <div className=' w-[200px] items-start flex gap-3'>
           <span className=' text-[#7165de] font-bold'>Name</span>
           <span className=' '>{data.studentName}</span>
       </div>
       <div className=' flex  gap-4 w-[150px]'>
           <span className=' text-[#7165de] font-bold'>Course</span>
           <div className=' flex flex-wrap gap-2 scale-110'>
               <Tag tag={data.courseName}/>
           </div>
       </div>
       <div className=' flex justify-between gap-3'>
           <span className=' text-[#7165de] font-bold'>Score</span>
           <div className=' flex flex-wrap gap-2 scale-110'>
               <Tag tag={`${data.score} / 10 `}/>
           </div>
       </div>

   </div>
  )
}

export default Grade