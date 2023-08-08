"use client"
import {useTheme} from 'next-themes';
import { BtnMenu } from './BtnMenu';
import { MessagesSquare } from 'lucide-react';
import LowerContainer from './LowerContainer';
export default function NewsWrapper(){
  const {theme}=useTheme();

   return(
    <div className={`relative w-[50%] h-auto max-h-[300px] rounded-xl mb-8 ${theme==='dark'?'bg-black shadow shadow-slate-500':'bg-page_bg_dark shadow-lg shadow-orange-500'}`}>
        <div className='absolute left-3 top-3'>
           <BtnMenu/> 
        </div>
       
        <LowerContainer/>
        
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