import React, { useEffect, useState } from 'react'
import Input from '../wids/Input'
import InputInt from '../wids/InputInt';
import axios from 'axios';
import url from '../Consts';

const tep = "⚠️ Student Not Found !";

const CourseRegistration:React.FC = () => {
    const [id,setId] = useState<number>(0);
    const [CourseName,setCourseName] = useState<string>("");
    const [name,setName] = useState<string>(tep);
    const [msg,setMsg] = useState<string>("");

    useEffect(()=>{
        axios.get(url+"/getname/"+id)
            .then((res)=>{
                console.log(res);
                setName(res.data);
            })
            .catch((er)=>{
                console.log(er);
                setName(tep);
            })
    },[id]);

    const handleSave = () => {
        if(name !== tep && CourseName !== ""){
            axios.post(url+"/course",{
                title: CourseName,
                studentId: id
            })
            .then((res)=>{
                console.log(res);
                setId(0);
                setCourseName("");
                setMsg("Course Registration Successfull.");
            })
            .catch((err)=>{
                setMsg("⚠️ Course Registration Failed.");
            })
        }
        setMsg("Please enter valied data !")
    }
  return (
    <div className=' h-screen w-screen bg-[#3f3f3f] flex flex-col gap-10 pt-32 px-20 items-center'>
        <div className=' h-fit w-[50vw] max-sm:w-[90vw] bg-[#272626] px-7 py-5 text-white rounded'>
                <p className=' text-3xl'>Course Register</p>
                <hr />
                <div className=' relative flex py-5'>
                    <InputInt
                        value={id}
                        setter={setId}
                        placeholder='Student Id'
                        />
                        <div className=' flex items-center px-5 top-14 rounded-md
                         text-lg font-semibold tracking-wider opacity-75 hover:cursor-not-allowed absolute
                          w-[40%] right-0 h-10 bg-slate-500'>
                            {name}
                        </div>
                </div>
                <div className=' flex py-5'>
                    <Input
                        value={CourseName}
                        setter={setCourseName}
                        placeholder='Course name'
                        />
                </div>
                <div onClick={handleSave} className=' flex justify-between items-center'>
                <p className=' h-10 pt-5 text-yellow-500 text-sm'>{msg}</p>
                    <div  className=" bg-indigo-600 w-fit rounded-md active:scale-90 
                    select-none shadow-lg transition-all px-3 py-2">
                        Submit
                    </div>
                </div>
            </div>
    </div>
  )
}

export default CourseRegistration