"use client"

import { ModeToggle } from './ToggleMode';
import { NavBar } from '@/components/Home/NavBar';
import { ProfileContainer } from '@/components/Home/ProfileContainer';
import { useTheme } from 'next-themes';

export default function Header() {
  const { theme } = useTheme();

  return (
    <div className="flex justify-end items-center nav-bar w-full h-[50px] bg-saffron fixed top-0 z-50">
      <NavBar />
      <div
        className={`h-[30px] w-[70px] flex justify-center items-center rounded rounded-full p-1`}
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
