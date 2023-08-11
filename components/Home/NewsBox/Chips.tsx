"use client";
import { BsCheck2All } from "react-icons/bs";
import {useTheme} from 'next-themes';

export default function Chips() {
    const {theme} = useTheme();

  return (
    <div className={`relative bg-transparent flex rounded-md justify-between items-center hover:scale-110 ease-in duration-150 cursor-pointer ${theme==='dark'?'border border-transparent bg-transparent':'border border-transparent bg-[black] -top-0'}`}>
      <p className="mr-1">dfdf</p>
      <BsCheck2All size={22}/>
    </div>
  );
}


export const ChipsSet=()=>{
    return (
        <div className="bg-transparent flex justify-between w-full">
            <Chips/>
            <Chips/>
            <Chips/>
            <Chips/>

            <Chips/>

        </div>
    )
}
