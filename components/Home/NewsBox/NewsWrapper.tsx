"use client";
import { useTheme } from "next-themes";
import { BtnMenu } from "./BtnMenu";
import LowerContainer from "./LowerContainer";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ChipsSet } from "./Chips";

export default function NewsWrapper() {
  const { theme } = useTheme();
  const [commentBoxOpen, setCommentBoxOpen] = useState(false);

  return (
    <div

      className={`z-20 relative xs:w-[360px] md:w-[480px] h-auto max-h-[300px] rounded-xl xs:my-[50px] lg:m-8 md:my-[30px] ${
        theme === "dark"
          ? "bg-black shadow shadow-slate-500"
          : "bg-page_bg_dark shadow-lg shadow-orange-500"
      }`}
    >
      <div className="absolute left-3 top-3">
        <BtnMenu />
      </div>

      <LowerContainer setCommentBoxOpen={setCommentBoxOpen} />

      <div className="flex flex-col justify-start items-start mx-2 text-ellipsis overflow-hidden max-h-[300px]">
        <div className={`mb-1 ml-[40px] text-start text-xl font-semibold mt-3 ${theme==='dark'?"text-[#9DB2BF]":"text-[#A0E4CB]"}`}>

          title text goes here
          
        </div>

        <div className={`w-[330px] ${theme==="light"?"text-white bg-transparent":"bg-transparent text-white"} mr-2 absolute -top-3 right-0 ease-in duration-300 bg-transparent`}>
          <ChipsSet/>
        </div>


        <ScrollArea className={`xs:h-[250px] w-full border-0 xs:block md:hidden pb-1 ${theme==='dark'?'text-gray-600':'text-[#9DB2BF]'}`}>
          Jokester began sneaking into the castle in the middle of the night and
          leaving jokes all over the place: under the king pillow, in his
          soup, even in the royal toilet. The king was furious, but he could not
          seem to stop Jokester. The king was furious, but he could not
          seem to stop Jokester.Jokester began sneaking into the castle in the middle of the night and
          leaving jokes all over the place: under the king pillow, in his
          soup, even in the royal toilet. The king was furious, but he could not
          seem to stop Jokester. And then, one day, the people of the kingdom
          discovered that the jokes left by Jokester were so funny that they
          could not help but laugh.  And then, one day, the people of the kingdom
          discovered that the jokes left by Jokester were so funny that they
          could not help but laugh. ...<Button variant="ghost" className="px-2 py-1 text-lg bg-transparent hover:bg-transparent hover:text-[#1D5D9B]">Read more</Button>
        </ScrollArea>
        <div className={`pb-1 justify-start items-end h-[300px] xs:hidden md:flex`}>
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
