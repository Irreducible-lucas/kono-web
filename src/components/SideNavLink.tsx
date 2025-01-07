import { Link as RouterLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChartPie,
  faHome,
  faClipboard,
  faNewspaper,
  faQuoteLeft,
  faUsers,
  faCog,
  faFileAlt,
  faShieldAlt,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

// Links with Font Awesome icons
export const links = [
  // {
  //   id: 1,
  //   text: "Dashboard",
  //   icon: faChartPie,
  //   url: "/dashboard",
  // },
  {
    id: 2,
    text: "Homepage",
    icon: faHome,
    url: "/dashboard/home",
  },
  {
    id: 3,
    text: "Project",
    icon: faClipboard,
    url: "/dashboard/project",
  },
  {
    id: 4,
    text: "News",
    icon: faNewspaper,
    url: "/dashboard/news",
  },
  {
    id: 5,
    text: "Testimonial",
    icon: faQuoteLeft,
    url: "/dashboard/testimonial",
  },
  {
    id: 6,
    text: "About Us",
    icon: faUsers,
    url: "/dashboard/about-us",
  },
  // {
  //   id: 7,
  //   text: "Council Services",
  //   icon: faCog,
  //   url: "/dashboard/council-services",
  // },
  // {
  //   id: 8,
  //   text: "Report",
  //   icon: faFileAlt,
  //   url: "/dashboard/report",
  // },
  {
    id: 10,
    text: "Policies",
    icon: faShieldAlt,
    url: "/dashboard/policies",
  },
];

const SideNavLinks = () => {
  const [hoveredLink, setHoveredLink] = useState<number | null>(null);

  return (
    <div className="flex flex-col gap-4">
      {links?.map((link) => (
        <RouterLink key={link.id} to={link.url}>
          <div
            className="w-full px-4"
            onMouseEnter={() => setHoveredLink(link.id)}
            onMouseLeave={() => setHoveredLink(null)}
          >
            <div className="flex items-center gap-4 group hover:bg-[#1B43C61A] py-3 px-4 rounded-full transition-all duration-200">
              <FontAwesomeIcon
                icon={link.icon}
                className={`w-6 text-lg transition-all duration-200 ${
                  hoveredLink === link.id ? "text-blue-600" : "text-gray-600"
                }`}
              />
              <p className="group-hover:text-blue-600 text-darkgrey group-hover:font-semibold text-md font-nunito">
                {link?.text}
              </p>
            </div>
          </div>
        </RouterLink>
      ))}
    </div>
  );
};

export default SideNavLinks;
