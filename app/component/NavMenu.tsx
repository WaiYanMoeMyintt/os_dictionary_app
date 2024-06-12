'use client';
import Image from "next/image";
import { Button } from "@/components/ui/button";
import React from "react";

interface NavMenuProps {
  icon: boolean;
  setIcon: React.Dispatch<React.SetStateAction<boolean>>;
}

const NavMenu: React.FC<NavMenuProps> = ({ icon, setIcon }) => {
  return (
    <nav className="flex justify-between items-center gap-4 border-b-2 py-4 px-2">
      <div>
        <Image alt="dictionary_logo" src={!icon ? "/assets/bookmark-book.svg" : "/assets/bookmark_white.svg"} width={35} height={35} />
      </div>
      <div className="nav_button">
        <Button className="border-0">Open Source Dictionary</Button>
      </div>
      <div>
        <Image 
          className="cursor-pointer" 
          onClick={() => setIcon(prev => !prev)} 
          alt="dark_mode" 
          src={!icon ? "/assets/half-moon.svg" : "/assets/sun_white.svg"} 
          width={25} 
          height={25} 
        />
      </div>
    </nav>
  );
};

export default NavMenu;
