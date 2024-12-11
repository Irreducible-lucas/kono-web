import {
  AboutCarousal,
  ImplementationGist,
  PerformanceIndicator,
  WeWill,
} from "../components";
import { motion } from "framer-motion";
import {
  Classroom,
  EducationBuilding,
  Learn,
  ScholarshipFunding,
} from "../assets";
import styles, { layout } from "../styles";

import { PIData } from "../types";
import CouncilServicesCard from "../components/CouncilServicesCard";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSchool,
  faHouse,
  faChair,
  faUniversity,
} from "@fortawesome/free-solid-svg-icons";

const initiatives = [
  {
    title: "Rehabilitate School",
    description:
      "Rehabilitate 66 schools, reconstruct 67 and recruit and remunerate 1210 highly trained and qualified teachers wherever they are found;",
    icon: (
      <FontAwesomeIcon icon={faSchool} className="h-10 w-10 text-blue-500" />
    ),
  },
  {
    title: "Construction of Staff Quarters",
    description:
      "Construct 13 and more staff quarters where necessary, provide over 12,000 set of teaching & learning materials for our pupils across the District. We will encourage our teachers from all the fields to write, publish and sell to our schools easy-to-use textbooks for all levels.",
    icon: (
      <FontAwesomeIcon icon={faHouse} className="h-10 w-10 text-green-500" />
    ),
  },
  {
    title: "Construction of School Furniture",
    description:
      "Construct 22,000 set of school furniture through our own carpentry workshop and dig 3 or more WASH facilities in our schools;",
    icon: (
      <FontAwesomeIcon icon={faChair} className="h-10 w-10 text-yellow-500" />
    ),
  },
  {
    title: "Build Satellite Colleges",
    description:
      "Collaborate with Kono University of Science and Technology (KUSH) to build satellite colleges in every chiefdom, training and capacitating our teachers, committing to research, and seeking scholarships and partnerships with top-notch universities across the globe.",
    icon: (
      <FontAwesomeIcon icon={faUniversity} className="h-10 w-10 text-red-500" />
    ),
  },
];

const performanceIndicatorData: PIData[] = [
  {
    title: "Education Commission & Capacity Building",
    description:
      "The identification, selection, and recruitment of members of the District Education Commission that will serve as the steering committee for the District Education Goal. An improved teaching, learning, and research capacity of all our schools across the District.",
    progress: 100,
    color: "bg-blue-500",
    image: EducationBuilding,
  },
  {
    title: "Scholarships & Fundraising for Schools",
    description:
      "The availability of sufficient scholarships for our children to study in Kono and overseas and the availability of sufficient funds through diverse fundraising strategies to use for salary upgrades, construction of more labs to improve teacher-to-student ratio and school community improvement.",
    progress: 75,
    color: "bg-green-500",
    image: ScholarshipFunding,
  },
];

const Education = () => {
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
      <div className={`${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <AboutCarousal
            image={Learn}
            title={"Education"}
            content={
              "Learn about education in Kono District, including schools, youth development programs, and council-supported initiatives to enhance learning opportunities and promote academic growth."
            }
          />
        </div>
      </div>

      <div className={layout.section}>
        <CouncilServicesCard
          title="Advancing Education for a Brighter Future"
          description="By a commitment to the personal education of our children, wards and other siblings, we will provide a quality of education and experience which equips our people with the values, skills and intellectual discipline that will enable them to make a positive contribution to society."
          image={Classroom}
          commitment="To improve access to free and high-quality basic and advanced education for our children, wards and other siblings by recruiting highly trained and experienced teaching staff that will prioritize service over self."
        />
        <WeWill initiatives={initiatives} heading="Educational Initiative" />
        <ImplementationGist
          heading="Implementation Gist"
          subheading1="To sustain this, we will establish a District Education Commission to oversee our schools, colleges and universities, monitor and evaluate progress, facilitate end-of-term teacher capacity-building conferences, and champion fundraising activities on behalf of the district."
        />

        {/* Performance Indicators Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
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

export default Education;
