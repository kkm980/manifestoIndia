"use client"
import Image from 'next/image';
import { useTheme } from "next-themes";
export default function AvatarCase(){
    const { theme } = useTheme(); // Get the theme from the NextThemesProvider
   return(
    <div className={`ml-0 w-max cursor-pointer rounded rounded-full border-2 outline-0 
    ${theme=="dark"?"border-black":"border-white"}
    `}>
        <Image
        src="https://github.com/shadcn.png"
        alt="My Image"
        width={25} // Set the width of the image (in pixels)
        height={25} // Set the height of the image (in pixels)
        style={{borderRadius:"50%", outline:"none"}}
      />
    </div>
   )
}