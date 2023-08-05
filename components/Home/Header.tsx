"use client"

import {ProfileContainer} from "@/components/Home/ProfileContainer"
import { ModeToggle } from "./ToggleMode"
import {NavBar} from "@/components/Home/NavBar"
import { useTheme } from "next-themes";
export default function Header(){
    const { theme } = useTheme();
   return (
     <div className="flex justify-end items-center nav-bar w-full h-[50px] bg-saffron fixed top-0 z-50">
       <NavBar />
       <div
         className={`flex justify-center items-center rounded rounded-full p-1 pt-1.5 px-2`}
         style={{ backgroundColor: theme === "dark" ? "black" : "white" }}
       >
        <div className=" ease-in duration-1000 p-0 m-0" style={{ order: theme === "dark" ? "1" : "2" }}>
          <ProfileContainer />
        </div>
        <div className=" ease-in duration-1000 p-0 m-0" style={{ order: theme === "dark" ? "2" : "1" }}>
          <ModeToggle />
        </div>
       </div>
     </div>
   );
}