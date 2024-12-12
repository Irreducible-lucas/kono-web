import { useState, useRef } from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { links } from "../constants";
import { Logo } from "../assets";

const Nav: React.FC<{ fill?: boolean }> = ({ fill = true }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const hoverTimeout = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = (index: number) => {
    if (hoverTimeout.current) {
      clearTimeout(hoverTimeout.current);
    }
    setOpenIndex(index);
  };

  const handleMouseLeave = () => {
    hoverTimeout.current = setTimeout(() => {
      setOpenIndex(null);
    }, 150);
  };

  const handleSubmenuClick = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div>
      {/* Mobile Navbar */}
      <div className="lg:hidden flex items-center justify-between pr-4 py-3 z-50 ">
        {/* Logo */}
        <NavLink to={"/"} className="hover:cursor-pointer flex mr-auto">
          <img src={Logo} className="h-20 w-auto" alt="logo" />
        </NavLink>

        {/* Hamburger Menu */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
          className={`h-8 w-8 hover:cursor-pointer ${
            fill ? "fill-black" : "fill-white"
          }`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
        >
          <path
            fill={fill ? "black" : "white"}
            d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"
          />
        </svg>
      </div>

      {/* Sidebar Menu */}
      <div
        className={`lg:hidden bg-white fixed top-0 right-0 h-screen z-40 py-5 w-[70%] transition-transform transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end p-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            className="w-8 h-8 fill-black hover:cursor-pointer"
            onClick={() => setIsOpen(false)}
            aria-label="Close menu"
          >
            <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
          </svg>
        </div>

        {/* Menu items */}
        {links.map((link, index) => (
          <div key={index} className="py-2">
            <div
              className="px-8 py-2 border-b border-slate-200 flex justify-between items-center cursor-pointer"
              onClick={() => link.child && handleSubmenuClick(index)}
            >
              <NavLink to={link.url} onClick={() => setIsOpen(false)}>
                {link.text}
              </NavLink>
              {link.child && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 320 512"
                  className={`w-4 h-4 ${
                    openIndex === index ? "rotate-180" : "rotate-0"
                  } transition-transform`}
                >
                  <path d="M143 352.3L7 216.3C-2.3 207-2.3 192 7 182.7l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0L160 257.4l96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.4 9.5-24.6 9.5-33.9.1z" />
                </svg>
              )}
            </div>

            {/* Submenu items */}
            {link.child && openIndex === index && (
              <div className="pl-12">
                {link.child.map((child, childIndex) => (
                  <div key={childIndex} className="py-2">
                    <NavLink
                      to={child.url}
                      onClick={() => setIsOpen(false)}
                      className="block border-b border-slate-200 "
                    >
                      {child.text}
                    </NavLink>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Desktop Navbar */}
      <div className="hidden lg:flex items-center justify-between pr-5  bg-white ">
        <NavLink to="/" className="flex items-center mr-auto">
          <img src={Logo} alt="Sabi Logo" className="h-28 w-full  " />
        </NavLink>
        <ul className="flex space-x-5 relative">
          {links.map((link, index) => (
            <li
              key={index}
              className="relative group"
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              <NavLink
                to={link.url}
                className="hover:text-blue-500 transition-colors font-medium "
              >
                {link.text}
              </NavLink>

              {link.child && (
                <motion.div
                  className="absolute left-0 mt-2 bg-white shadow-md rounded-md z-50"
                  style={{ width: "200px" }}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{
                    opacity: openIndex === index ? 1 : 0,
                    y: openIndex === index ? 0 : -10,
                  }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ type: "spring", stiffness: 130 }}
                >
                  <ul>
                    {link.child.map((child, childIndex) => (
                      <li
                        key={childIndex}
                        className="px-4 py-2 hover:bg-gray-100"
                        onClick={() => setOpenIndex(null)}
                      >
                        <NavLink
                          to={child.url}
                          className="block text-sm font-medium hover:text-blue-500"
                        >
                          {child.text}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Nav;
