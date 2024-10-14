import { useState } from "react";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { NavLink } from "react-router-dom";
import { links } from "../constants";
import { SabiLogo } from "../assets";

const Nav = ({ fill = true }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      {/* Mobile Navbar */}
      <div className="lg:hidden flex items-center justify-between px-3 z-50">
        <NavLink to={"/"} className="hover:cursor-pointer">
          <img src={SabiLogo} className="py-5" alt="Sabi Logo" />
        </NavLink>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
          className={`w-8 h-8 hover:cursor-pointer ${
            fill ? "fill-black" : "fill-white"
          }`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
        >
          <path
            fill={fill ? "black" : "white"}
            d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32-14.3 32 32z"
          />
        </svg>
      </div>

      {/* Sidebar Menu */}
      <div
        className={`lg:hidden bg-white fixed top-0 right-0 h-screen z-40 py-5 w-1/2 transition-transform transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center px-3">
          <NavLink to="/search">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={`${fill ? "stroke-black" : "black"}`}
            >
              <path
                d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M22 22L20 20"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </NavLink>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            className={`w-8 h-8 fill-black hover:cursor-pointer`}
            onClick={() => setIsOpen(false)}
            aria-label="Close menu"
          >
            <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
          </svg>
        </div>

        {links.map((link, index) => (
          <div key={index} className="py-2">
            <NavLink to={link.url} onClick={() => setIsOpen(false)}>
              <div className=" px-8 py-2 border-b border-slate-200">
                {link.text}
              </div>
            </NavLink>
          </div>
        ))}
      </div>

      {/* Desktop Navbar */}
      <Menubar className="hidden lg:flex  bg-white py-10 px-10 border-none items-center gap-32">
        <NavLink to={"/"} className="hover:cursor-pointer ">
          <img src={SabiLogo} alt="Sabi Logo" />
        </NavLink>
        <div className="flex items-center justify-between">
          {links.map((link, index) => (
            <MenubarMenu key={index}>
              <NavLink to={link.url}>
                <MenubarTrigger>{link.text}</MenubarTrigger>
              </NavLink>
            </MenubarMenu>
          ))}
          <NavLink to="/search">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={`${fill ? "stroke-black" : "black"} hidden lg:flex`}
            >
              <path
                d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M22 22L20 20"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </NavLink>
        </div>
      </Menubar>
    </div>
  );
};

export default Nav;
