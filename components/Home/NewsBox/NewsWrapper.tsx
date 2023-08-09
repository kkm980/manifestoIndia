"use client";
import { useTheme } from "next-themes";
import { BtnMenu } from "./BtnMenu";
import LowerContainer from "./LowerContainer";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function NewsWrapper() {
  const { theme } = useTheme();
  const [commentBoxOpen, setCommentBoxOpen] = useState(false);
  return (
    <div
      className={`z-20 relative w-[480px] h-auto max-h-[300px] rounded-xl xs:my-4 lg:m-8 ${
        theme === "dark"
          ? "bg-black shadow shadow-slate-500"
          : "bg-page_bg_dark shadow-lg shadow-orange-500"
      }`}
    >
      <div className="absolute left-3 top-3">
        <BtnMenu />
      </div>

      <LowerContainer setCommentBoxOpen={setCommentBoxOpen} />

      <div className="flex flex-col justify-start items-end mx-2 text-ellipsis overflow-hidden max-h-[300px]">
        <div className={`text-xl font-semibold mb-2 w-full text-center ${theme==='dark'?"text-[#9DB2BF]":"text-[#A0E4CB]"}`}>title text goes here</div>
        <div className={`pb-1 flex justify-start items-end h-[300px] `}>
          <p className={`pb-1 ${theme==='dark'?'text-gray-600':'text-[#9DB2BF]'}`}>
                 Jokester began sneaking into the castle in the middle of the night and
          leaving jokes all over the place: under the king pillow, in his
          soup, even in the royal toilet. The king was furious, but he could not
          seem to stop Jokester. And then, one day, the people of the kingdom
          discovered that the jokes left by Jokester were so funny that they
          could not help but laugh. And once they started laughing, they couldnot
          stop. Jokester began sneaking into the castle in the middle of the
          night and leaving jokes all over the place: under the kings pillow,
          in his soup, even in the royal toilet. The king was furious, but he
          couldnot seem to...<Button variant="ghost" className="px-2 py-1 text-lg bg-transparent hover:bg-transparent hover:text-[#1D5D9B]">Read more</Button>
            </p>
            
        </div>
      </div>
    </div>
  );
}
