import {
  AboutCarousal,
  ImplementationGist,
  PerformanceIndicator,
  WeWill,
} from "../components";
import { motion } from "framer-motion";
import { Agricultiure, AgricultiureDevelopment, Agriculture2 } from "../assets";
import styles, { layout } from "../styles";
import { PIData } from "../types";
import CouncilServicesCard from "../components/CouncilServicesCard";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSeedling,
  faTools,
  faPaw,
  faIndustry,
  faAppleAlt,
} from "@fortawesome/free-solid-svg-icons";

const initiatives = [
  {
    title: "ABC Centers & Cocoa Seeds",
    description:
      "Construct 32 or more ABC centers and provide 11,000 improved varieties of Cocoa seedlings to Cocoa farmers across the district;",
    icon: (
      <FontAwesomeIcon icon={faSeedling} className="h-10 w-10 text-blue-500" />
    ),
  },
  {
    title: "Farming Tools & Grain Stores",
    description:
      "Procure 4 farming equipment and construct 23 grain stores across sections in the district;",
    icon: (
      <FontAwesomeIcon icon={faTools} className="h-10 w-10 text-green-500" />
    ),
  },
  {
    title: "Poultry & Cattle Ranch",
    description:
      "Establish 5000 birds’ poultry farm and a ranch of 500 cattle;",
    icon: (
      <FontAwesomeIcon icon={faPaw} className="h-10 w-10 text-yellow-500" />
    ),
  },
  {
    title: "Rice & Cassava Processing",
    description:
      "Construct 39 dry floors; procure 6 rice processing machines, and 15 cassava processing machines;",
    icon: (
      <FontAwesomeIcon icon={faIndustry} className="h-10 w-10 text-red-500" />
    ),
  },
  {
    title: "Crop Cultivation Expansion",
    description:
      "Engage 21,000 acres across the district (10,000 acres for Rice, 10,000 acres for Maize, 1,000 for Sugar Cane) to tackle food shortages and generate income.",
    icon: (
      <FontAwesomeIcon icon={faAppleAlt} className="h-10 w-10 text-green-500" />
    ),
  },
];

// Performance indicators section
const performanceIndicatorData: PIData[] = [
  {
    title: "Agricultural Development Coordination",
    description:
      "The functioning of a District Agricultural Development Corporation to coordinate our Feed Salone approach and mobilize individual and development capital to boost agriculture and food security in the District.",
    progress: 100,
    color: "bg-blue-500",
    image: AgricultiureDevelopment,
  },
];

const Agriculture = () => {
  return (
    <motion.div
      id="home"
      transition={{
        when: "beforeChildren",
        staggerChildren: 2,
      }}
      className="bg-white w-full overflow-hidden"
    >
      {/* Carousal Section */}
      <div className={styles.flexStart}>
        <div className={styles.boxWidth}>
          <AboutCarousal
            image={Agriculture2}
            title="Agriculture"
            content="Explore agriculture and livelihood programs in Kono District, focusing on sustainable farming, community empowerment, and council-supported initiatives to boost economic resilience."
          />
        </div>
      </div>
      <div className={layout.section}>
        <CouncilServicesCard
          title="Empowering Agriculture for Sustainable Growth"
          description="Kono District is the breadbasket of Sierra Leone, known for its mineral-rich resources and exceptional agricultural production. The district is committed to enhancing its cash crop production, especially rice, and diversifying income sources through commercial farming."
          image={Agricultiure}
          commitment="To sustain Kono's role as the breadbasket by adopting climate-smart agricultural practices, investing in state-of-the-art processing technologies, and implementing strategic marketing strategies to enter global markets."
        />
        <WeWill initiatives={initiatives} heading="Agricultural Initiative" />
        <ImplementationGist
          heading="Implementation Gist"
          subheading1="We will establish farming cooperatives across the district and a District Agricultural Development Corporation to mobilize private sector input, coordinate cooperatives, facilitate market access, seek investment, and partner with global agricultural organizations."
        />
        {/* Performance Indicators Section */}
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

export default Agriculture;
