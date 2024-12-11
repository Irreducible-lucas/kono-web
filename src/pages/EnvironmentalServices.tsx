import {
  AboutCarousal,
  ImplementationGist,
  PerformanceIndicator,
  WeWill,
} from "../components";
import { motion } from "framer-motion";
import {
  EnvironmentalService,
  EnvironmentalService2,
  hero2,
  SafeWater,
  ToiletFacilities,
  WasteManagement,
  Women,
} from "../assets";
import styles, { layout } from "../styles";
import { PIData } from "../types";
import CouncilServicesCard from "../components/CouncilServicesCard";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWater,
  faPumpMedical,
  faGear,
  faWrench,
  faBuilding,
  faSun,
  faRecycle,
  faSchool,
  faToilet,
} from "@fortawesome/free-solid-svg-icons";

// Initiatives data
const initiatives = [
  {
    title: "Boreholes Construction",
    description: "Construct 24 new boreholes and rehabilitate 12 more.",
    icon: (
      <FontAwesomeIcon icon={faWater} className="h-10 w-10 text-blue-500" />
    ),
  },
  {
    title: "Hand Pump Wells",
    description: "Construct 77 hand pump wells and rehabilitate 73 more.",
    icon: (
      <FontAwesomeIcon
        icon={faPumpMedical}
        className="h-10 w-10 text-green-500"
      />
    ), // Updated to faPumpMedical
  },
  {
    title: "Gravity Water Systems",
    description: "Rehabilitate 14 gravity water systems and construct 4 more.",
    icon: (
      <FontAwesomeIcon icon={faGear} className="h-10 w-10 text-yellow-500" />
    ),
  },
  {
    title: "Well Maintenance",
    description:
      "Maintain 18 wells and train 180 pump attendants to manage wells.",
    icon: (
      <FontAwesomeIcon icon={faWrench} className="h-10 w-10 text-red-500" />
    ),
  },
  {
    title: "Water Dam & Bottling",
    description:
      "Rehabilitate 1 water dam and establish 1 water bottling factory.",
    icon: (
      <FontAwesomeIcon icon={faBuilding} className="h-10 w-10 text-blue-500" />
    ),
  },
  {
    title: "Solar Boreholes",
    description:
      "Maintain & expand 1 solar borehole and make available 1 set of tools for maintenance.",
    icon: (
      <FontAwesomeIcon icon={faSun} className="h-10 w-10 text-yellow-500" />
    ),
  },
  {
    title: "Water Facilities Upgrade",
    description: "Create 400 water facilities across the district.",
    icon: (
      <FontAwesomeIcon icon={faWrench} className="h-10 w-10 text-green-500" />
    ),
  },
  {
    title: "Waste Management Sites",
    description:
      "Construct 18 dump sites for effective waste management and recycling.",
    icon: (
      <FontAwesomeIcon icon={faRecycle} className="h-10 w-10 text-yellow-500" />
    ),
  },
  {
    title: "School WASH Facilities",
    description:
      "Construct 2 WASH facilities at every school in the district and rehabilitate 3 schools WASH facilities.",
    icon: (
      <FontAwesomeIcon icon={faSchool} className="h-10 w-10 text-red-500" />
    ),
  },
  {
    title: "Village Toilets",
    description:
      "Construct 250 toilets in selected villages across the district.",
    icon: (
      <FontAwesomeIcon icon={faToilet} className="h-10 w-10 text-red-500" />
    ),
  },
];

// Performance indicator data
const performanceIndicatorData: PIData[] = [
  {
    title: "Safe Water Access",
    description:
      "Availability and easy access to safe, sufficient, and affordable water for drinking, washing, sanitation, food preparation, and personal hygiene.",
    progress: 100,
    color: "bg-blue-500",
    image: SafeWater,
  },
  {
    title: "Waste Management",
    description:
      "Sufficient dump sites across the district to control waste and commence recycling.",
    progress: 100,
    color: "bg-green-500",
    image: WasteManagement,
  },
  {
    title: "Household Toilets",
    description:
      "Sufficient and well-managed toilet facilities in more than 250 homes across the district.",
    progress: 100,
    color: "bg-yellow-500",
    image: ToiletFacilities,
  },
];

const EnvironmentalServices = () => {
  return (
    <motion.div
      id="home"
      transition={{
        when: "beforeChildren",
        staggerChildren: 2,
      }}
      className="bg-white w-full overflow-hidden"
    >
      {/* Carousel */}
      <div className={styles.flexStart}>
        <div className={styles.boxWidth}>
          <AboutCarousal
            image={EnvironmentalService2}
            title="Environmental Services"
            content="Learn about environmental services in Kono District, focusing on conservation efforts, waste management, and council-supported initiatives aimed at preserving the district’s natural resources and promoting sustainable practices."
          />
        </div>
      </div>

      {/* Council Services Card */}
      <div className={layout.section}>
        <CouncilServicesCard
          title="Clean Water and Sanitation for Health"
          description="Access to safe, sufficient and affordable water for drinking, washing, sanitation, food preparation, and personal hygiene is a fundamental human right. We strive to make it a reality for all citizens of our district."
          image={EnvironmentalService}
          commitment="We commit to providing affordable, accessible, and sufficient water for all needs across the district and working toward achieving a clean and sanitized environment."
        />
        <WeWill
          initiatives={initiatives}
          heading="Water & Sanitation Initiative"
        />
        <ImplementationGist
          heading="Implementation Gist"
          subheading1="We establish farming cooperatives and a District Agriculture Development Corporation to mobilize private sector input, coordinate cooperatives, facilitate market access, raise funds, and build partnerships."
        />

        {/* Performance Indicators Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {performanceIndicatorData.map((data, index) => (
            <PerformanceIndicator
              key={data.title} // Using a unique key for better performance
              data={data}
              className="bg-white shadow-lg"
              imageSize="w-40 h-40"
              progressHeight="h-1"
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default EnvironmentalServices;
