"use client"
import {useTheme} from 'next-themes';
import { BtnMenu } from './BtnMenu';

export default function NewsWrapper(){
  const {theme}=useTheme();

   return(
    <div className={`relative w-[50%] h-auto max-h-[300px] rounded-xl mb-8 ${theme==='dark'?'bg-[#0C2233]':'bg-page_bg_dark'}`}>
        <div className='absolute left-2 top-2'>
           <BtnMenu/> 
        </div>
        
        <p className="">
            dfdf
        </p>
        <p className="">
            dfdf
        </p>
        <p className="">
            dfdf
        </p>
        <p className="">
            dfdf
        </p>
        <p className="">
            dfdf
        </p>
        <p className="">
            dfdf
        </p>
       
        <p className="">
            dfdf
        </p>
        <p className="">
            dfdf
        </p>
        <p className="">
            dfdf
        </p>
        <p className="">
            dfdf
        </p>



    </div>
   )
}