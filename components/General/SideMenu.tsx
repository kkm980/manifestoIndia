import React, { useState } from 'react';
import styles from './HamburgerMenu.module.css';
import HamburgerMenu from './HamburgerMenu';
import { useTheme } from 'next-themes';

interface HamburgerMenuProps {

}

const SideMenu: React.FC<HamburgerMenuProps> = () => {
    const { theme } = useTheme();
    const [menuOpen, setMenuOpen] = useState(false);
  
    const handleMenuClick = () => {
      setMenuOpen(!menuOpen);
    };
  return (
    <div className={`h-min z-60 bg-transparent xs:block md:hidden absolute top-4`}>
       <HamburgerMenu onClick={handleMenuClick} className="xs:flex md:hidden" color={theme==='dark'?'bg-black':'bg-white'}/>
       <div className={`absolute border-2 ${theme === 'dark' ? 'border-white bg-black' : 'border-black bg-white'} rounded-md top-8 -right-6 ${menuOpen ? 'block' : 'hidden'} ${menuOpen ? 'w-auto' : 'w-0'} transition duration-[2000ms] ease-in-out`}>
         <div>abccccccccccccccccccccccccccccccccccccccccccc</div>
         <div>abc</div>
         <div>abc</div>
         <div>abc</div>
         <div>abc</div>

         <div>abc</div>
         <div>abc</div>
         <div>abc</div>
         <div>abc</div>
         <div>abc</div>
         <div>abc</div>
         <div>abc</div>
         <div>abc</div>
         <div>abc</div>
         <div>abc</div>
         <div>abc</div>
         <div>abc</div>

         <div>abc</div>

         <div>abc</div>
       </div>
    </div>
  );
};

export default SideMenu;