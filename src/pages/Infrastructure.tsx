import {
  AboutCarousal,
  ImplementationGist,
  PerformanceIndicator,
  WeWill,
} from "../components";
import { motion } from "framer-motion";
import { Bridge, Infrastructure2, RoadInfrastructure } from "../assets";
import CouncilServicesCard from "../components/CouncilServicesCard";
import styles, { layout } from "../styles";
import { PIData } from "../types";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRoad, faBridge } from "@fortawesome/free-solid-svg-icons";

const initiatives = [
  {
    title: "Feeder Roads & Sustainable Bridges",
    description:
      "Construct and rehabilitate more feeder roads with sustainable bridges and efficient water culverts to take development to the doorstep of everyone living in Kono.",
    icon: (
      <span className="inline-block bg-blue-100 p-2 rounded-full">
        <FontAwesomeIcon icon={faBridge} className="h-10 w-10 text-blue-500" />
      </span>
    ),
  },
  {
    title: "Rehabilitation & Expansion of Feeder Roads",
    description:
      "Construct and rehabilitate 2495 km and 1592 km of sustainable feeder roads respectively, across the district to improve access to farmers and take development to unreached communities in the district.",
    icon: (
      <span className="inline-block bg-green-100 p-2 rounded-full">
        <FontAwesomeIcon icon={faRoad} className="h-10 w-10 text-green-500" />
      </span>
    ),
  },
  {
    title: "Bridge & Culvert Work for Road Safety",
    description:
      "Construct 90 or more bridges, 560 or more culverts to protect our roads from rain-fed erosion and other climatic conditions.",
    icon: (
      <span className="inline-block bg-yellow-100 p-2 rounded-full">
        <FontAwesomeIcon
          icon={faBridge}
          className="h-10 w-10 text-yellow-500"
        />
      </span>
    ),
  },
];

const performanceIndicatorData: PIData[] = [
  {
    title: "Improved Roads & Market Access",
    description:
      "Appropriate partnership and funding is secured to construct and rehabilitate roads, bridges, and culverts. Farmers' access to both local and regional markets has been increased, and rural communities now have access to urban areas without high transport fare and other inconveniences caused by damaged roads.",
    progress: 100,
    color: "bg-blue-500",
    image: RoadInfrastructure,
  },
];

const Infrastructure = () => {
  return (
    <motion.div
      id="home"
      transition={{
        when: "beforeChildren",
        staggerChildren: 2,
      }}
      className="bg-white w-full overflow-hidden"
    >
      {/* carousal */}
      <div className={` ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <AboutCarousal
            image={Bridge}
            title={"Infrastructure"}
            content={
              "Discover infrastructure development in Kono District, including council-led projects to improve roads, utilities, public buildings, and community facilities for sustainable growth."
            }
          />
        </div>
      </div>
      <div className={layout.section}>
        <CouncilServicesCard
          title="Building Sustainable Infrastructure"
          description="Through a commitment to increase access to markets for farmers in the district, we will construct and rehabilitate feeder roads, including bridges and culverts, to make transportation of produce easy, affordable, and sustainable."
          image={Infrastructure2}
          commitment="To rehabilitate and construct more feeder roads that will increase access to markets for our farmers and interconnect our rural areas to the urban towns and cities."
        />
        <WeWill
          initiatives={initiatives}
          heading="Infrastructural Initiatives"
        />
        <ImplementationGist
          heading="Implementation Gist"
          subheading1="Establish a District Health Council or Commission to oversee healthcare delivery, collaborate with development partners and investors. The commission will also monitor and report on the patient-to-doctor ratio within the district and search for ways and means to improve service."
          subheading2="The commission will also be responsible for the licensing of all district healthcare workers, serving as a countermeasure to aid government efforts in the reduction of quacks within the system."
          subheading3="The Commission will establish a health insurance system that will serve as the nexus between our healthcare facilities and patients."
        />
        <div className="grid grid-cols-1">
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

export default Infrastructure;
