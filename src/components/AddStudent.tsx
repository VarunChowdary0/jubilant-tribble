import React, { useState } from 'react'
import Input from '../wids/Input'
import axios from 'axios';
import url from '../Consts';

const AddStudent:React.FC = () => {
    const [name,setName] = useState<string>("");
    const [msg,setMsg] = useState<string>("");
    const handleSave = () =>{
        const n = name;
        console.log(name);
        setName("");
        axios.post(url+"/student",{
            name : n
        })
        .then((res)=>{
            console.log(res);
            setMsg("Student Saved");
            setTimeout(()=>{
                setMsg("");
            },10000);
        })
        .catch((Err)=>{
            console.log(Err);
            setMsg("⚠️ Error Occured.");
            setTimeout(()=>{
                setMsg("");
            },10000);
        });
    }
  return (
    <>
        <div className=' h-screen w-screen bg-[#3f3f3f] flex pt-44 justify-center'>
            <div className=' h-fit w-[50vw] max-sm:w-[90vw] bg-[#272626] px-7 py-5 text-white rounded'>
                <p className=' text-3xl'>Add Student</p>
                <hr />
                <div className=' flex py-5'>
                    <Input 
                        value={name}
                        setter={setName}
                        placeholder='Student name'
                        />
                </div>
                <div className=' flex items-end justify-end'>
                    <div onClick={handleSave} className=" bg-indigo-600 w-fit rounded-md active:scale-90 
                    select-none shadow-lg transition-all px-3 py-2">
                        Submit
                    </div>
                </div>
                <p className=' text-yellow-500 text-sm'>{msg}</p>
            </div>
        </div>
    </>
  )
}

export default AddStudent