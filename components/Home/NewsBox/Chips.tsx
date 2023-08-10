"use client";
import { BsCheck2All } from "react-icons/bs";

export default function Chips() {
  return (
    <div className="bg-transparent flex rounded-md justify-between items-center hover:scale-110 ease-in duration-150 cursor-pointer">
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
