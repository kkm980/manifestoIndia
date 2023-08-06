"use client";

import Link from "next/link";
import Image from "next/image";
import { Montserrat } from "next/font/google";
import { useTheme } from "next-themes";
import {
  Code,
  ImageIcon,
  LayoutDashboard,
  MessageSquare,
  Music,
  Settings,
  VideoIcon,
} from "lucide-react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { useEffect } from "react";

const poppins = Montserrat({ weight: "600", subsets: ["latin"] });

const routes = [
  {
    label: "Dashboard",
    icon: LayoutDashboard,
    href: "/dashboard",
    color: "text-sky-500",
  },
  {
    label: "Conversation",
    icon: MessageSquare,
    href: "/conversation",
    color: "text-violet-500",
  },
  {
    label: "Image",
    icon: ImageIcon,
    color: "text-pink-700",
    href: "/image",
  },
  {
    label: "Video",
    icon: VideoIcon,
    color: "text-orange-700",
    href: "/video",
  },
  {
    label: "Settings",
    icon: Settings,
    href: "/settings",
  },
];

export const NavBar = ({}: {}) => {
  const pathname = usePathname();
  const { theme } = useTheme();
  useEffect(() => {
    const htmlElement = document.documentElement;
    htmlElement.classList.remove("light", "dark");
    if(theme=="light"){
        htmlElement.classList.add("dark");
    }else{
        htmlElement.classList.add("light");
    }
    // htmlElement.classList.add(`${theme}`);
  }, [theme]);

  return (
    <div
      className={cn(
        "flex justify-between items-center mr-4 text-lg font-normal sm:w-[500px] xl:w-[700px] xxl:w-[1000px] xxxxl:w-[1200px]",
        theme === "light" ? "dark" : "light"
      )}
    >
      {routes.map((route) => (
       <Link
       key={route.href}
       href={route.href}
       shallow // Add this option
    //    className={cn(
    //      "group flex p-0 justify-start font-normal cursor-pointer rounded-lg transition hover:text-[#008080]",
    //      pathname === route.href && theme === "light"
    //        ? "text-[#008080]"
    //        : pathname !== route.href && theme === "light"
    //        ? "text-white"
    //        : pathname === route.href && theme === "dark"
    //        ? "text-[#008080]"
    //        : "text-black"
    //    )}
    className={cn(`font-medium`, poppins.className)}
     >
          <div className={`flex items-center flex-1 text-xs md:text-sm lg:text-lg xl:text-xl xxl:text-xxl hover:scale-105 ease-in duration-500 ${theme==='dark'?'text-[#EEEDED]':'text-black'} ${theme==='dark'?'hover:text-black':'hover:text-white'}`}>
            {/* <route.icon className={cn("h-5 w-5 mr-3", route.color)} /> */}
            {route.label}
          </div>
        </Link>
      ))}
    </div>
  );
};
