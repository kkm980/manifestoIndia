import React, { useState, useEffect, useRef } from "react";
import { TiDelete } from "react-icons/ti";
import { Input } from "../ui/input";
import { Badge } from "@/components/ui/badge";
import { useTheme } from "next-themes";
interface Option {
  value: string;
  label: string;
}

interface MultiSelectInputProps {
  options: Option[];
  placeholder: string;
}

const MultiSelectInput: React.FC<MultiSelectInputProps> = ({
  options,
  placeholder,
}) => {
  const [inputValue, setInputValue] = useState("");
  const [suggestions, setSuggestions] = useState<Option[]>([]);
  const [selectedOptions, setSelectedOptions] = useState<Option[]>([]);
  const [showErrorMessage, setShowErrorMessage] = useState(false); // State to track if the error message should be shown
  const inputRef = useRef<HTMLInputElement>(null);
  const {theme}=useTheme();
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    value !== " " && setInputValue(value);

    // Filter the options based on the input value
    const filteredOptions = options.filter(
      (option) =>
        option.label.toLowerCase().indexOf(value.trim().toLowerCase()) !== -1
    );
    setSuggestions(filteredOptions);
  };

  const handleOptionClick = (option: Option[]) => {
    setSelectedOptions([...selectedOptions, ...option]);
    setInputValue("");
    setSuggestions([]);
    inputRef.current?.focus();
  };

  const handleRemoveOption = (option: Option) => {
    setSelectedOptions(selectedOptions.filter((item) => item !== option));
    inputRef.current?.focus();
  };

  useEffect(() => {
    function handleOutsideClick(event: MouseEvent) {
      if (
        inputRef.current &&
        !inputRef.current.contains(event.target as Node)
      ) {
        setSuggestions([]);
        setInputValue("");
      }
    }

    document.addEventListener("click", handleOutsideClick);
    return () => document.removeEventListener("click", handleOutsideClick);
  }, []);

  useEffect(() => {
    setShowErrorMessage(suggestions.length === 0 && inputValue.trim() !== ""); // Show the error message when no suggestions and input has value
  }, [inputValue, suggestions]);

  const handleSelectAll = () => {
    setSelectedOptions([...options]);
    setSuggestions([]);
  };

  const handleRemoveAll = () => {
    setSelectedOptions([]);
    setSuggestions([]);
  };

  return (
    <div className="mb-8 mt-4 relative w-[300px]">
      <div className="absolute -top-6 left-3 w-max mt-0 bg-transparent">
        <div className={`${theme==='dark'?'text-[#749BC2]':'text-black'} text-semibold text-xs md:text-sm lg:text-lg xl:text-xl xxl:text-xxl`}>{placeholder}</div>
      </div>
      <div className="">
      <Input
        ref={inputRef}
        type="text"
        className={`${theme==='dark'?'text-white bg-black':'text-black bg-white'} ml-2 w-[300px] px-4 py-2 text-xl xxl:text-xxl rounded-md focus:outline-none`}
        value={inputValue}
        onChange={handleInputChange}
      />
      </div>
      
      {showErrorMessage && (
        <div className="absolute top-1 right-2 z-10 w-max mt-0 bg-transparent">
          <div className="text-xl xxl:text-xl text-red-600">* No match</div>
        </div>
      )}
      <div className="mt-1 flex justify-between items-center w-full">
        <Badge
         className={`ml-3 px-2 py-1 text-md xl:text-md xxl:text-xl text-white rounded-md bg-[blue-600] focus:outline-none hover:bg-blue-600 cursor:pointer ${theme==='dark'?'bg-transparent border border-[#526D82] text-[#526D82] hover:bg-[#526D82] hover:text-white':'bg-transparent border border-[#138808] text-[#138808] hover:text-white hover:bg-[#138808]'}`}
         onClick={handleSelectAll}
        >
            Select All
        </Badge>
        {selectedOptions.length>0 && 
        <Badge
        className={`px-2 py-1 text-md xl:text-md xxl:text-xl text-white rounded-md bg-red-600 focus:outline-none hover:bg-red-600 cursor:pointer ${theme==='dark'?'bg-transparent border border-[#D27685] text-red-400 hover:bg-[#D27685] hover:text-white':'bg-transparent border border-[#FF7722] text-[#FF7722] hover:bg-[#FF7722] hover:text-white'}`}
        onClick={handleRemoveAll}
        >
          Remove All
        </Badge>
        }
      </div>

      {inputValue && suggestions.length > 0 && (
        <div className="absolute z-20 w-full mt-2 bg-white border border-gray-300 rounded-md shadow-lg">
          <div
            className={`px-4 py-2 ${theme==='dark' ?'text-white bg-[#526D82]':'text-black bg-[#7F8487]'}  cursor-pointer transition-transform duration-300 ease-in-out transform`}
            onClick={() => handleOptionClick([...suggestions])}
          >
            Select all matching
          </div>
          {suggestions.map((option) => (
            <div
              key={option.value}
              className={`px-4 py-2 cursor-pointer transition-transform duration-300 ease-in-out transform hover:text-cherry hover:bg-hover_bg ${theme==='dark'?'bg-black text-white hover:bg-[#898B8A]':'bg-white text-black hover:bg-[#D1D1D1]'}`}
              onClick={() => handleOptionClick([option])}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
      <div className="w-full flex justify-between flex-wrap ml-3 mt-2">
        {selectedOptions.map((option) => (
          <div
            key={option.value}
            className={`flex items-center px-2 py-1 mb-2 text-sm ${theme==='dark'?'bg-black text-white':'bg-white text-black border border-black'} rounded-md`}
          >
            <span className={`text-md xxl:text-xl ${theme==='dark'?'text-[#9DB2BF] bg-black':'text-black bg-white'}`}>{option.label}</span>
            <button
              className="ml-2 font-bold focus:outline-none"
              onClick={() => handleRemoveOption(option)}
            >
              <TiDelete className={`w-5 h-5 ${theme==='dark'?'text-red-300':'text-[#FF7722]'}`} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MultiSelectInput;
