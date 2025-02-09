import React, { useState } from 'react'
import Input from '../wids/Input'
import axios from 'axios';
import InputInt from '../wids/InputInt';
import Student from '../wids/Student';

interface course {
    $id: number;
    id: number,
    title: string,
    studentId: number,
    grade: null
}

const StudentByID = () => {
    const [Id,setId] = useState<number>(0);
    const [msg,setMsg] = useState<string>("");
    const [data,setdata] = useState< {
            id: number,
            name: string,
            courses: {
              "$id": number,
              "$values": course[]
            }
          }>();
    const handleSave = () =>{
        console.log(Id);
        axios.get("http://localhost:5013/api/student/"+Id)
        .then((res)=>{
            console.log(res); 
            console.log(res.data); 
            setMsg("Student Found")
            setdata(res.data);
            setTimeout(()=>{
                setMsg("");
            },10000);
        })
        .catch((Err)=>{
            console.log(Err);
            setMsg("⚠️ Student not found.");
            setTimeout(()=>{
                setMsg("");
            },10000);
        });
    }
  return (
    <>
        <div className=' h-screen w-screen px-32 bg-[#3f3f3f] flex pt-44  items-center gap-10 flex-col '>
            <div className=' h-fit w-fiT max-sm:w-[90vw] bg-[#272626] px-7 py-5  text-white rounded'>
                <p className=' text-3xl'>Student by ID</p>
                <hr />
                <div className=' flex py-5'>
                    <InputInt
                        value={Id}
                        setter={setId}
                        placeholder='Student ID'
                    />
                </div>
                <div className=' flex items-end justify-end'>
                    <div onClick={handleSave} className=" bg-indigo-600 w-fit rounded-md active:scale-90 
                    select-none shadow-lg transition-all px-3 py-2">
                        Submit
                    </div>
                </div>
                <p className=' h-4 text-yellow-500 text-sm'>{msg}</p>
            </div>
            {
                data ?

                <div className=' w-full'>
                    <Student data={
                                {
                                    id : data.id,
                                    name: data.name,
                                    courses: data.courses.$values
                                }
                             }/>
                </div>
                :
                <p className=' text-white '>Student Data</p>
            }
        </div>
    </>
  )
}
export default StudentByID