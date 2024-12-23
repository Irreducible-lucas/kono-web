import { Link as RouterLink } from "react-router-dom";
import { SideNavLink } from "../types";
import { useState } from "react";

export const links: SideNavLink[] = [
  {
    id: 1,
    text: "Dashboard",
    icon: "dashboard-icon.png",
    icon_active: "dashboard-active-icon.png",
    url: "/dashboard",
  },
  {
    id: 2,
    text: "Homepage",
    icon: "home-icon.png",
    icon_active: "home-active-icon.png",
    url: "/dashboard/home",
  },
  {
    id: 3,
    text: "Project",
    icon: "partner-icon.png",
    icon_active: "partner-active-icon.png",
    url: "/dashboard/project",
  },
  {
    id: 4,
    text: "News",
    icon: "identity-icon.png",
    icon_active: "identity-active-icon.png",
    url: "/dashboard/news",
  },
  {
    id: 5,
    text: "Testimonial",
    icon: "testimonial-icon.png",
    icon_active: "testimonial-active-icon.png",
    url: "/dashboard/testimonial",
  },
  {
    id: 6,
    text: "Team",
    icon: "team-icon.png",
    icon_active: "team-active-icon.png",
    url: "/dashboard/team",
  },
  {
    id: 7,
    text: "Program",
    icon: "program-icon.png",
    icon_active: "program-active-icon.png",
    url: "/dashboard/program",
  },
  {
    id: 8,
    text: "Report",
    icon: "report-icon.png",
    icon_active: "report-active-icon.png",
    url: "/dashboard/report",
  },
  {
    id: 9,
    text: "Event",
    icon: "event-icon.png",
    icon_active: "event-active-icon.png",
    url: "/dashboard/event",
  },
  {
    id: 10,
    text: "Recruitment",
    icon: "recruitment-icon.png",
    icon_active: "recruitment-active-icon.png",
    url: "/dashboard/recruitment",
  },
  {
    id: 11,
    text: "Testimonial",
    icon: "testimonial-icon.png",
    icon_active: "testimonial-active-icon.png",
    url: "/dashboard/testimonial",
  },
  {
    id: 12,
    text: "Blog",
    icon: "blog-icon.png",
    icon_active: "blog-active-icon.png",
    url: "/dashboard/blog",
  },
  {
    id: 13,
    text: "Donate",
    icon: "donate-icon.png",
    icon_active: "donate-active-icon.png",
    url: "/dashboard/donate",
  },
];

const SideNavLinks = () => {
  const [hoveredLink, setHoveredLink] = useState<SideNavLink | null>(null);
  return (
    <div className="flex flex-col gap-4">
      {links?.map((link) => (
        <RouterLink key={link?.id} to={link?.url}>
          <div
            className="w-full px-4"
            onMouseEnter={() => setHoveredLink(link)}
          >
            <div className="flex items-center gap-4 group hover:bg-[#1B43C61A] py-3 px-4 rounded-full">
              {hoveredLink?.id === link.id ? (
                <img
                  src={`/src/assets/icons/${link.icon_active}`}
                  className="w-6"
                  alt={`${link.text} icon`}
                />
              ) : (
                <img
                  src={`/src/assets/icons/${link.icon}`}
                  className="w-6"
                  alt={`${link.text} icon`}
                />
              )}
              <p className="group-hover:text-secondary text-darkgrey group-hover:font-semibold text-md font-nunito">
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
