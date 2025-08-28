"use client"

import React, { ChangeEvent } from "react"

interface HamburgerButtonPropTypes {
  isOpen: boolean,
  changeState: React.Dispatch<React.SetStateAction<boolean>>
}

export const HamburgerButton: React.FC<HamburgerButtonPropTypes> = ({ isOpen, changeState }) => {
  const handleHamburgerOpen = (event: ChangeEvent<HTMLInputElement>) => {
    changeState(event.target.checked)
  }
  return (


    <div className=" ">
      <input type="checkbox" name="hamburgerMenu" id="hamburgerMenu" className="hidden" checked={isOpen} onChange={handleHamburgerOpen} />
      <label htmlFor="hamburgerMenu" className="hamburger-label">
        <div className="hamburger-box">
          <span className="hamburger-bar bar-top"></span>
          <span className="hamburger-bar bar-mid"></span>
          <span className="hamburger-bar bar-bottom"></span>
        </div>
      </label>
    </div>
  )
}
