"use client"
import {useTheme} from "next-themes"
import { MessagesSquare } from "lucide-react"
import { FaShare } from "react-icons/fa"
import { Button } from "@/components/ui/button"
import PollBox from "./PollBox"
const MessageBox=()=>{
    
    return(
        <div className='cursor-pointer'>
            <Button variant="unbutton" size="unbutton">
                <MessagesSquare color="#A0E4CB" size={32}/> 
            </Button>
        
     </div>
    )
}

const ShareContainer=()=>{
    const {theme} =useTheme();

    return(
        <div className='cursor-pointer relative right-6 bottom-2'>
            <Button variant="unbutton" size="unbutton">
                <FaShare color="#A0E4CB" size={26}/> 
            </Button>
        
     </div>
    )
}


export default function LowerContainer(){
   return(
    <div className="absolute flex justify-between items-center w-full -bottom-6 left-2">
        <MessageBox/>
        <PollBox/>
        <ShareContainer/>
    </div>
    
   )
}