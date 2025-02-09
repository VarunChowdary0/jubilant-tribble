import React from 'react'


interface curr{
    value : string ;
    placeholder : string;
    setter: React.Dispatch<React.SetStateAction<string>>;
}

const Input:React.FC<curr> = ({value,setter,placeholder}) => {
  return (
    <div>
        <p className=' text-[18px] mb-2'>{placeholder}</p>
        <input 
            className=' px-5 py-2 w-[400px] rounded text-black text-lg '
            value={value}
            onChange={(e)=>setter(e.target.value)}
            placeholder={placeholder} />
    </div>
  )
}

export default Input