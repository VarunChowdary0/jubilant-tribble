import React from 'react'


interface curr{
    value : number ;
    placeholder : string;
    setter: React.Dispatch<React.SetStateAction<number>>;
}

const InputInt:React.FC<curr> = ({value,setter,placeholder}) => {
  return (
    <div>
        <p className=' text-[18px] mb-2'>{placeholder}</p>
        <input 
            type='number'
            className=' px-5 py-2 w-[400px] rounded text-black text-lg '
            value={value}
            onChange={(e)=>setter(e.target.valueAsNumber)}
            placeholder={placeholder} />
    </div>
  )
}

export default InputInt