import { useState, useRef } from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { links } from "../constants";
import { SabiLogo } from "../assets";

const Nav: React.FC<{ fill?: boolean }> = ({ fill = true }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  // Use the correct timeout type, either NodeJS.Timeout or ReturnType<typeof setTimeout>
  const hoverTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

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

  return (
    <div>
      {/* Desktop Navbar */}
      <div className="hidden lg:flex items-center justify-between px-8 py-4 bg-white">
        <NavLink to="/" className="flex items-center">
          <img src={SabiLogo} alt="Sabi Logo" className="h-12 " />
        </NavLink>
        <ul className="flex space-x-7 relative">
          {links.map((link, index) => (
            <li
              key={index}
              className="relative group"
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              {/* Parent Link */}
              <NavLink
                to={link.url}
                className="hover:text-blue-500 transition-colors font-medium"
              >
                {link.text}
              </NavLink>

              {/* Dropdown Menu */}
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
        <NavLink to="/search">
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`${fill ? "stroke-black" : "stroke-white"}`}
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
    </div>
  );
};

export default Nav;
