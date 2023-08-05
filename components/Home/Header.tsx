"use client"

import {ProfileContainer} from "@/components/Home/ProfileContainer"
import { ModeToggle } from "./ToggleMode"
import {NavBar} from "@/components/Home/NavBar"
import { useTheme } from "next-themes";
export default function Header(){
    const { theme } = useTheme();
   return(
    <div className="flex justify-end items-center nav-bar w-full h-[50px] bg-saffron fixed top-0 z-50">
        <NavBar/>
        <div className={`flex justify-center items-center rounded rounded-full p-0.5 pr-1`}
        style={{backgroundColor:theme==='dark'?'black':'white'}}>
        <ProfileContainer/>
        <ModeToggle/></div>
        
    </div>
   )
}