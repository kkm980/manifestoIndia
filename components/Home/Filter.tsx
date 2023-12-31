import { Inter, Montserrat } from 'next/font/google';
import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { useToast } from '@/components/ui/use-toast';
import { cn } from '@/lib/utils';
import DateRangeSelector from '@/components/General/DateRangePicker';
import MultiSelectInput from '@/components/General/MultipleSelect';

const poppinsFont = Inter({
  weight: '500',
  subsets: ['latin'],
});

const montserratFont = Montserrat({
  weight: '500',
  subsets: ['latin'],
});

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

const party_names = [
  { value: '1', label: 'Option 1' },
  { value: '2', label: 'Option 2' },
  { value: '3', label: 'Option 3' },
  // Add more options as needed
];

export default function FilterComponent() {
  const { theme } = useTheme();
  const toast = useToast();
  const [value, onChange] = useState<Value>([null, null]);

  return (
    <div className={`relative`}>
      <div
        className={cn(`relative font-medium text-2xl ml-2 my-2 ${theme==='dark'?'text-[#9DB2BF]':'text-black'}`, poppinsFont.className)}
      >
        Filter your Search
      </div>

      <div className={`relative z-20 ${theme === 'dark' ? 'bg-page_bg_dark' : 'bg-page_bg_light'}`}>
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
