"use client"
import {useTheme} from "next-themes"
import { MessagesSquare } from "lucide-react"
import { FaShare } from "react-icons/fa"
import { Button } from "@/components/ui/button"
import {PollBox} from "./PollBox"
import  CommentBox  from "./CommentBox"

const ShareContainer=()=>{
    const {theme} =useTheme();

    return(
        <div className='cursor-pointer relative bottom-2'>
            <Button variant="unbutton" size="unbutton">
                <FaShare color="#A0E4CB" size={26}/> 
            </Button>
        
     </div>
    )
}


interface IProps {
    setCommentBoxOpen:React.Dispatch<React.SetStateAction<boolean>>
}


const LowerContainer:React.FC<IProps>=({setCommentBoxOpen})=>{
   return(
    <div className="absolute flex justify-between items-center w-full -bottom-6">
        <ShareContainer/>
        <CommentBox {...{setCommentBoxOpen}}/>
        <PollBox/>
    </div>
    
   )
}

export default LowerContainer