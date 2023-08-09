"use client"

import { ModeToggle } from './ToggleMode';
import { NavBar } from '@/components/Home/NavBar';
import { ProfileContainer } from '@/components/Home/ProfileContainer';
import { useTheme } from 'next-themes';
import HamburgerMenu from '../General/HamburgerMenu';
import { useState } from 'react';
import FilterIcon from '../General/FilterIcon';
import SideMenu from '../General/SideMenu';

export default function Header() {
  const { theme } = useTheme();

  return (
    <div className="flex xs:justify-end md:justify-end xs:pr-5 md:pl-0 items-center nav-bar w-full h-[50px] bg-saffron fixed top-0 z-50">

      {/* <FilterIcon width={24} height={24} color="blue"/> */}
      <NavBar />
     <SideMenu/>
      <div
        className={`h-[30px] w-[70px] justify-center items-center rounded rounded-full p-1 xs:hidden md:flex`}
        style={{ backgroundColor: theme === 'dark' ? 'black' : 'white' }}
      >
        <div className={`ease-in duration-1000 p-0 m-0 ${theme === 'dark' ? 'order-1' : 'order-2'}`}>
          <ProfileContainer />
        </div>
        <div className={`ease-in duration-1000 p-0 m-0 ${theme === 'dark' ? 'order-2' : 'order-1'}`}>
          <ModeToggle />
        </div>
      </div>
    </div>
  );
}
