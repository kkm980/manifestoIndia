import { useEffect, useState } from "react";
import DateRangePicker from "@wojtekmaj/react-daterange-picker";
import "@wojtekmaj/react-daterange-picker/dist/DateRangePicker.css";
import "react-calendar/dist/Calendar.css";
import { Montserrat } from "next/font/google";
import { useTheme } from "next-themes";
import "./styles.css";
import "./inputStyles.css";
import { useToast } from "@/components/ui/use-toast";
import { ToastAction } from "@/components/ui/toast";
import { dateRangeChecker, minDate } from "@/lib/utils";

const montserratFont = Montserrat({ weight: "500", subsets: ["latin"] });

interface DateRangeSelectorProps {
  value: any;
  onChange: any;
}
function badDateCallup(
  value: any,
  onChange: any,
  minDate: any,
  toast: any,
  dateRangeChecker: any
) {
  if (
    value &&
    value[0] != null &&
    value[1] != null &&
    (!dateRangeChecker(value[0]) || !dateRangeChecker(value[1]))
  ) {
    toast({
      className: "w-fit",
      title: "Invalid Date Range",
      description: `Choose a date range in between ${minDate} and Today`,
    });
    onChange([null, null]);
  }
}

const DateRangeSelector: React.FC<DateRangeSelectorProps> = ({
  value,
  onChange,
}) => {
  const [hydrated, setHydrated] = useState(false);
  const { toast } = useToast();
  const { theme } = useTheme();
  useEffect(() => {
    badDateCallup(value, onChange, minDate, toast, dateRangeChecker);
  }, [value, onChange, toast]);

  useEffect(() => {
    // This forces a rerender, so the date is rendered
    // the second time but not the first
    setHydrated(true);
  }, []);
  if (!hydrated) {
    // Returns null on first render, so the client and server match
    return null;
  }

  const customClassNames = `my-calendar-container custom-input-class ${
    theme === "light" ? "custom-theme-light" : "custom-theme-dark"
  } ${montserratFont.className}`;

  const customInputClassNames = `my-input-container  ${
    theme === "light" ? "custom-theme-and-light" : "custom-theme-and-dark"
  } ${montserratFont.className}`;

  return (
    <div className="">
      <div
        className={`text-xl xl:text-xl xxl:text-xxl ${
          theme === "dark" ? "text-[#749BC2]" : "text-black"
        }`}
      >
        Choose a date range
      </div>
      <DateRangePicker
        onChange={onChange}
        calendarClassName={customClassNames}
        className={customInputClassNames}
        value={value}
        maxDetail="year"
        rangeDivider="to"
        monthPlaceholder="MM"
        yearPlaceholder="YYYY"
        yearAriaLabel="years ago"
        monthAriaLabel="months ago"
        // onCalendarClo
      />
    </div>
  );
};

export default DateRangeSelector;
