"use client"
import { HamburgerButton } from "./hamburger-menu/hamburgerButton";
import { useState } from "react";
import { HamburgerMenu } from "./hamburger-menu/hamburgerMenu";


export const Navbar: React.FC = () => {
  const [hamburgerState, setHamburgerState] = useState(false);

  return (
    <div className="">
      <div className="flex pb-3 justify-center items-center w-full h-full">
        <HamburgerButton isOpen={hamburgerState} changeState={setHamburgerState} />
      </div>
      <div className="absolute right-0">
        <HamburgerMenu isOpen={hamburgerState} />
      </div>
    </div>
  )
}
