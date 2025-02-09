import React from 'react'
import Tag from './Tag'

interface course {
    $id: number;
    id: number,
    title: string,
    studentId: number,
    grade: null
}

interface curr{
    data : {
        id: number,
        name: string,
        courses: course[]
      }
}
const Student:React.FC<curr> = ({data}) => {
    const cour = ["java","C#","python"]
  return (
    <div className=' h-fit gap-10 bg-[#ffffff] text-[#7b7b7b]
     rounded-md py-5 px-10 flex '>
        <div className=' flex justify-between gap-3'>
            <span className='text-[#7165de] font-bold'>ID</span>
            <span className=''>{data.id}</span>
        </div>
        <div className=' w-[200px] items-start flex gap-3'>
            <span className=' text-[#7165de] font-bold'>Name</span>
            <span className=' '>{data.name}</span>
        </div>
        <div className=' flex justify-between gap-3'>
            <span className=' text-[#7165de] font-bold'>Courses</span>
            <div className=' flex flex-wrap gap-2'>
                {
                    data.courses.map((ele)=>
                        <Tag tag={ele.title}/>
                    )
                }
                {
                    data.courses.length === 0 &&
                    <p className=' text-red-600'>No Courses</p>
                }
            </div>
        </div>

    </div>
  )
}

export default Student