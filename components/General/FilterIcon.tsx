import React from 'react';

interface FilterIconProps {
  width?: number;
  height?: number;
  color?: string;
}

const FilterIcon: React.FC<FilterIconProps> = ({ width = 24, height = 24, color = 'black' }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5 10V8H19V10H5ZM3 5C3 4.44772 3.44772 4 4 4H20C20.5523 4 21 4.44772 21 5C21 5.55228 20.5523 6 20 6H4C3.44772 6 3 5.55228 3 5ZM7 14H17V12H7V14Z"
        fill={color}
      />
    </svg>
  );
};

export default FilterIcon;
