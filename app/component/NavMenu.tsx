'use client';
import Image from "next/image";
import { Button } from "@/components/ui/button";
const NavMenu = () => {
  return (
    <nav className="flex justify-between items-center gap-4 border-b-2 py-4 px-2">
         <div>
             <Image alt = "dictionary_logo" src = "/assets/bookmark-book.svg" width={35} height={35}/>
         </div>
         <div className="nav_button">
            <Button className="border-0">Open Source Dictionary</Button>
         </div>
         <div>
             <Image alt = "dark_mode" src = "/assets/half-moon.svg" width={30} height={30}/>
         </div>
    </nav>
  )
}

export default NavMenu