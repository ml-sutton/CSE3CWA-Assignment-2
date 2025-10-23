"use client"
import { usePathname } from "next/navigation"
import { PageLinks } from "../../../../const/pagelinks"
import { HamburgerLink } from "./hamburgerLink"

interface HamburgerMenuPropTypes {
  isOpen: boolean
}
export const HamburgerMenu: React.FC<HamburgerMenuPropTypes> = ({ isOpen }) => {
  const currentRoute = usePathname();
  return (
    <div className={`flex transition-all flex-row ${isOpen ? "h-fit" : "h-0"} `}>
      <div className={`flex flex-row mt-5.5 h-fit justify-center items-center z-50 ${isOpen ? "flex" : "hidden"}`}>
        <ul className={`${isOpen ? "lg:flex lg:w-screen lg:justify-end lg:border-t-2 lg:bg-[#9a1812] lg:dark:bg-[#454545] lg:border-t-[#242424] lg:dark:border-t-[#e2231b]" : "hidden"}`}>
          {PageLinks.map((item, key) => (<li key={key} >
            <HamburgerLink href={item.href} name={item.name} isActive={item.href === currentRoute} />
          </li>))}
          <li>
            {/* <ThemeSwitcherHamburger /> */}
          </li>
        </ul>
      </div>
    </div>
  )
}
