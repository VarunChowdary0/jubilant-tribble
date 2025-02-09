import React, { useState,useEffect } from 'react'
import axios from 'axios';
import InputInt from '../wids/InputInt';
import url from '../Consts';

const tep = "⚠️ Student Not Found !";


const GradeStudent:React.FC = () => {
    const [id,setId] = useState<number>(0);
    const [CourseId,setCourseId] = useState<number>();
    const [msg,setMsg] = useState<string>("");
    const [name,setName] = useState<string>(tep);
    const [score,setScore] = useState<number>(0);

    const [data,setData] = useState< { $id: number,
        id: number,
        title: string,
        studentId: number,
        student: any,
        grade: any }[]
        >();

    useEffect(()=>{
        if(data?.length === 1) {
            setCourseId(data[0].id);
        }
    },[data])

     useEffect(()=>{
        axios.get(url+"/getname/"+id)
            .then((res)=>{
                console.log(res);
                setName(res.data);
                axios.get(url+"/course/"+id)
                    .then((resp)=>{
                        console.log(resp.data["$values"]);
                        setData(resp.data["$values"]);
                    })
                    .catch((Err0)=>{
                        console.log(Err0);
                    })
            })
            .catch((er)=>{
                console.log(er);
                setName(tep);
            });
        
    },[id]);
    
    const handleSave = () => {
        if (!id || !CourseId) {
            setMsg("❌ Please select a valid student and course.");
            return;
        }
        if (score === 0 || score === null || isNaN(score)) {
            setMsg("❌ Please enter a valid score.");
            return;
        }
    
        axios.post(url+"/grade", {
            score: score,
            studentId: id,
            courseId: CourseId
        })
        .then((res) => {
            setMsg("✅ Grading saved for Course ID: " + CourseId);
        })
        .catch((err) => {
            const errorMessage = err.response?.data?.message || err.message || "Unknown error occurred.";
            setMsg("❌ Error Occurred: " + errorMessage);
            console.error("API Error:", err);
        });
    };
    
 
    
  return (
    <div className=' h-screen w-screen px-32 bg-[#3f3f3f] flex pt-44  items-center gap- flex-col '>
        <div className=' h-fit w-[50vw] max-sm:w-[90vw] bg-[#272626] px-7 py-5 text-white rounded'>
                <p className=' text-3xl'>Grading student</p>
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
                <div className=' flex-col flex py-5'>

                {
                    data?.length === 1 ?
                    <>
                        <p className=' text-[18px] mb-2'>Course Name</p>
                        <div 
                            onLoad={()=>{
                            setCourseId(data[0].id)
                        }} className=' text-indigo-400 font-semibold tracking-wider text-2xl'>{data[0].title}</div>
                    </>
                    :
                    (
                        data?.length === 0 ?
                        <div className=' text-2xl w-full text-center text-yellow-400'>No Courses to be Graded</div>
                        :
                        <>
                            <p className=' text-[18px] mb-2'>Course Name</p>
                            <select 
                                className='text-black px-3 py-2 rounded-md' 
                                onChange={(e) => setCourseId(Number(e.target.value))}>
                                {data && data.map((ele, idx) => (
                                    <option key={idx} value={ele.id}>{ele.title}</option>
                                ))}
                            </select>
                        </>
                    )
                }

                {
                    CourseId &&
                    
                    <div className='mt-5 rounded-md h-16 w-[400px]'>
                        <p className='text-[18px] mb-2'>Score</p>
                        <input
                            type="number"
                            placeholder="Score"
                            value={score || ""}  
                            max={10}
                            min={0}
                            className='px-5 py-2 w-full rounded text-black text-lg'
                            onChange={(e) => setScore(Number(e.target.value))}
                        />
                    </div>
                }
                </div>
               { CourseId && <div onClick={handleSave} className=' flex justify-between items-center'>
                <p className=' h-10 pt-5 text-yellow-500 text-sm'>{msg}</p>
                    <div  className=" bg-indigo-600 w-fit rounded-md active:scale-90 
                    select-none shadow-lg transition-all px-3 py-2">
                        Submit
                    </div>
                </div>}
            </div>     
    </div>
  )
}

export default GradeStudent