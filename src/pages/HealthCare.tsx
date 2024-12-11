import {
  AboutCarousal,
  ImplementationGist,
  PerformanceIndicator,
  WeWill,
} from "../components";
import { motion } from "framer-motion";
import {
  Health,
  WaterAvailability,
  Medical,
  WasteManagement,
  ToiletFacilities,
} from "../assets";
import CouncilServicesCard from "../components/CouncilServicesCard";
import styles, { layout } from "../styles";
import {
  BuildingOffice2Icon,
  UserGroupIcon,
  Cog6ToothIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/outline";
import { PIData } from "../types";

const initiatives = [
  {
    title: "Rehabilitate Facilities",
    description:
      "Rehabilitate 49 health facilities across the district, reconstruct 45, and supply 1 container of assorted drugs to all health facilities.",
    icon: <BuildingOffice2Icon className="h-10 w-10 text-blue-500" />,
  },
  {
    title: "Recruit Personnel",
    description:
      "Recruit and remunerate 35 healthcare personnel and construct 27 staff quarters for healthcare workers.",
    icon: <UserGroupIcon className="h-10 w-10 text-green-500" />,
  },
  {
    title: "Equip PHUs",
    description:
      "Provide 1 set of furniture for 6 PHUs from our furniture manufacturing unit and install 11 solar energy panels for each PHU.",
    icon: <Cog6ToothIcon className="h-10 w-10 text-yellow-500" />,
  },
  {
    title: "WASH Facilities & Training",
    description:
      "Construct 13 WASH facilities and annually train 500 medical workers for the district.",
    icon: <AcademicCapIcon className="h-10 w-10 text-red-500" />,
  },
];

const performanceIndicatorData: PIData[] = [
  {
    title: "Water Availability",
    description:
      "Availability and easy access to safe, sufficient, and affordable water for drinking, washing, sanitation, and personal hygiene.",
    progress: 100,
    color: "bg-blue-500",
    image: WaterAvailability,
  },
  {
    title: "Waste Management",
    description:
      "Effectively managed and sufficient dump sites across the district to control waste and commence recycling.",
    progress: 75,
    color: "bg-green-500",
    image: WasteManagement,
  },
  {
    title: "Toilet Facilities",
    description:
      "Sufficient and well-managed toilet facilities in more than 250 homes across the District.",
    progress: 60,
    color: "bg-orange-500",
    image: ToiletFacilities,
  },
];

const HealthCare = () => {
  return (
    <motion.div
      id="home"
      transition={{
        when: "beforeChildren",
        staggerChildren: 2,
      }}
      className="bg-white w-full overflow-hidden"
    >
      {/* Carousal */}
      <div className={`${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <AboutCarousal
            image={Health}
            title={"Health Care"}
            content={
              "Discover healthcare services in Kono District, including local facilities, public health initiatives, and council-supported programs aimed at improving community wellbeing."
            }
          />
        </div>
      </div>

      {/* Council Services Card */}
      <div className={layout.section}>
        <CouncilServicesCard
          title="Tackle The Challenge Of Health Care"
          description="We are a district that is committed to health and well-being of our people. We believe that a
healthy and prosperous people make a hardworking, innovative and creative community. Our
desire is to enhance healthcare delivery through collaboration with industry and local
enterprise partnerships to help grow our capacity for a healthy, competitive, smart and wealthy
Kono."
          image={Medical}
          commitment=" To establish new and maintain all existing health facilities across
            the district, and partner with the private sector to raise adequate
            funds for the development of the healthcare division of the
            district."
        />

        {/* Healthcare Initiatives */}
        <WeWill initiatives={initiatives} heading="Healthcare Initiatives" />

        {/* Implementation Gist */}
        <ImplementationGist
          heading="Implementation Gist"
          subheading1="Establish a District Health Council or Commission to oversee healthcare delivery, collaborate with development partners and investors. The commission will also monitor and report on the patient-to-doctor ratio within the district and search for ways and means to improve service."
          subheading2="The commission will also be responsible for the licensing of all district healthcare workers, serving as a countermeasure to aid government efforts in the reduction of quacks within the system."
          subheading3="The Commission will establish a health insurance system that will serve as the nexus between our healthcare facilities and patients."
        />

        {/* Performance Indicators */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {performanceIndicatorData.map((data, index) => (
            <PerformanceIndicator
              key={index}
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

export default HealthCare;
