import { Poppins, Montserrat, Inter } from "next/font/google";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { useEffect, useState } from "react";

import DateRangeSelector from "@/components/General/DateRangePicker";
type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];
import { useTheme } from "next-themes";
import { useToast } from "@/components/ui/use-toast";
import { ToastAction } from "@/components/ui/toast";
import MultiSelectInput from "../General/MultipleSelect";
const poppinsFont = Inter({
  weight: "500",
  subsets: ["latin"],
});

const montserratFont = Montserrat({
  weight: "500",
  subsets: ["latin"],
});

const party_names = [
    { value: "1", label: "Option 1" },
    { value: "2", label: "Option 2" },
    { value: "3", label: "Option 3" },
    // Add more options as needed
  ];

export default function FilterComponent() {
  const { theme } = useTheme();
  const toast = useToast();
  const [value, onChange] = useState<Value>([null, null]);
  const [inputVal, setInputVal] = useState<any>();
  useEffect(() => {
    value && console.log(value, "value");
  }, [value]);

  return (
    <div>

      <div
        className={cn(
          "relative font-medium text-2xl ml-2 my-2",
          poppinsFont.className
        )}
      >
        Filter your Search
      </div>

      <div
        className={`relative z-20 ${
          theme === "dark" ? "bg-page_bg_dark" : "bg-page_bg_light"
        }`}
      >
        <div className="relative z-10 ml-2">
          <DateRangeSelector value={value} onChange={onChange} />
        </div>
        <div className="relative mt-8">
          <MultiSelectInput options={party_names} placeholder="Choose Party" />
        </div>

        <div className="relative mt-8">
          <MultiSelectInput options={party_names} placeholder="Choose Party" />
        </div>

        <div className="relative mt-8">
          <MultiSelectInput options={party_names} placeholder="Choose Party" />
        </div>

        <div className="relative mt-8">
          <MultiSelectInput options={party_names} placeholder="Choose Party" />
        </div>

        <div className="relative mt-8">
          <MultiSelectInput options={party_names} placeholder="Choose Party" />
        </div>
      </div>
    </div>
  );
}
