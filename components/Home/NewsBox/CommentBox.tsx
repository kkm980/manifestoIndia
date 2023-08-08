import { FaVoteYea } from "react-icons/fa";
import { MessagesSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import { Skeleton } from "@/components/ui/skeleton"

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

interface IProps {
  setCommentBoxOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
const CommentBox: React.FC<IProps> = ({ setCommentBoxOpen }) => {
  return (
    <Popover>
      <PopoverTrigger>
        <div className="relative bottom-[9px]">
          <MessagesSquare color="#A0E4CB" size={26} />
        </div>
      </PopoverTrigger>

      <PopoverContent
        className={`w-[650px] h-[400px] p-1 pt-2 pb-2 flex flex-col justify-start items-between`}
      >
        <div className="text-[24px] ml-4">Title of the post</div>
        <Separator />

        <ScrollArea className="h-[200px] w-[600px] border-0 mt-4 pl-4 pt-1 mt-0">
          Jokester began sneaking into the castle in the middle of the night and
          leaving jokes all over the place: under the king's pillow, in his
          soup, even in the royal toilet. The king was furious, but he couldn't
          seem to stop Jokester. And then, one day, the people of the kingdom
          discovered that the jokes left by Jokester were so funny that they
          couldn't help but laugh. And once they started laughing, they couldn't
          stop. Jokester began sneaking into the castle in the middle of the
          night and leaving jokes all over the place: under the king's pillow,
          in his soup, even in the royal toilet. The king was furious, but he
          couldn't seem to stop Jokester. And then, one day, the people of the
          kingdom discovered that the jokes left by Jokester were so funny that
          they couldn't help but laugh. And once they started laughing, they
          couldn't stop.
        </ScrollArea>

        <ScrollArea className="h-[200px] w-[600px] pl-4">
          <div className="flex items-center space-x-4 my-4">
            <Skeleton className="h-12 w-12 rounded-full" />
            <div className="space-y-2">
              <Skeleton className="h-4 w-[200px]" />
              <Skeleton className="h-4 w-[250px]" />
            </div>
          </div>
          <div className="flex items-center space-x-4 my-4">
            <Skeleton className="h-12 w-12 rounded-full" />
            <div className="space-y-2">
              <Skeleton className="h-4 w-[200px]" />
              <Skeleton className="h-4 w-[250px]" />
            </div>
          </div>
          <div className="flex items-center space-x-4 my-4">
            <Skeleton className="h-12 w-12 rounded-full" />
            <div className="space-y-2">
              <Skeleton className="h-4 w-[200px]" />
              <Skeleton className="h-4 w-[250px]" />
            </div>
          </div>
          <div className="flex items-center space-x-4 my-4">
            <Skeleton className="h-12 w-12 rounded-full" />
            <div className="space-y-2">
              <Skeleton className="h-4 w-[200px]" />
              <Skeleton className="h-4 w-[250px]" />
            </div>
          </div>
          <div className="flex items-center space-x-4 my-4">
            <Skeleton className="h-12 w-12 rounded-full" />
            <div className="space-y-2">
              <Skeleton className="h-4 w-[200px]" />
              <Skeleton className="h-4 w-[250px]" />
            </div>
          </div>
          <div className="flex items-center space-x-4 my-4">
            <Skeleton className="h-12 w-12 rounded-full" />
            <div className="space-y-2">
              <Skeleton className="h-4 w-[200px]" />
              <Skeleton className="h-4 w-[250px]" />
            </div>
          </div>
          <div className="flex items-center space-x-4 my-4">
            <Skeleton className="h-12 w-12 rounded-full" />
            <div className="space-y-2">
              <Skeleton className="h-4 w-[200px]" />
              <Skeleton className="h-4 w-[250px]" />
            </div>
          </div>
          <div className="flex items-center space-x-4 my-4">
            <Skeleton className="h-12 w-12 rounded-full" />
            <div className="space-y-2">
              <Skeleton className="h-4 w-[200px]" />
              <Skeleton className="h-4 w-[250px]" />
            </div>
          </div>
          <div className="flex items-center space-x-4 my-4">
            <Skeleton className="h-12 w-12 rounded-full" />
            <div className="space-y-2">
              <Skeleton className="h-4 w-[200px]" />
              <Skeleton className="h-4 w-[250px]" />
            </div>
          </div>
          <div className="flex items-center space-x-4 my-4">
            <Skeleton className="h-12 w-12 rounded-full" />
            <div className="space-y-2">
              <Skeleton className="h-4 w-[200px]" />
              <Skeleton className="h-4 w-[250px]" />
            </div>
          </div>
          <div className="flex items-center space-x-4 my-4">
            <Skeleton className="h-12 w-12 rounded-full" />
            <div className="space-y-2">
              <Skeleton className="h-4 w-[200px]" />
              <Skeleton className="h-4 w-[250px]" />
            </div>
          </div>
          <div className="flex items-center space-x-4 my-4">
            <Skeleton className="h-12 w-12 rounded-full" />
            <div className="space-y-2">
              <Skeleton className="h-4 w-[200px]" />
              <Skeleton className="h-4 w-[250px]" />
            </div>
          </div>
          
          
          
         
          
         
          

        </ScrollArea>
      </PopoverContent>
    </Popover>
  );
};

export default CommentBox;
