"use client";
import { useTheme } from "next-themes";
import { BtnMenu } from "./BtnMenu";
import LowerContainer from "./LowerContainer";
import { useState } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export default function NewsWrapper() {
  const { theme } = useTheme();
  const [commentBoxOpen, setCommentBoxOpen] = useState(false);
  return (
    <div
      className={`z-20 relative w-[50%] h-auto max-h-[300px] rounded-xl m-8 ${
        theme === "dark"
          ? "bg-black shadow shadow-slate-500"
          : "bg-page_bg_dark shadow-lg shadow-orange-500"
      }`}
    >
      <div className="absolute left-3 top-3">
        <BtnMenu />
      </div>

      <LowerContainer setCommentBoxOpen={setCommentBoxOpen} />

      <p className="">dfdf</p>
      <p className="">dfdf</p>
      <p className="">dfdf</p>
      <p className="">dfdf</p>
      <p className="">dfdf</p>
      <p className="">dfdf</p>
      <p className="">dfdf</p>
      <p className="">dfdf</p>
      <p className="">dfdf</p>
      <p className="">dfdf</p>
      <p className="">dfdf</p>
      <p className="">dfdf</p>
      <p className="">dfdf</p>

    </div>
  );
}
