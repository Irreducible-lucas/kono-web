import React from "react";
import { motion } from "framer-motion";
import AboutCarousal from "../components/AboutCarousal";
import styles, { layout } from "../styles";
import { hero2 } from "../assets";

interface Project {
  id: number;
  title: string;
  completionDate: string;
  cost: string;
  impact: string;
  image: string;
}

const completedProjects: Project[] = [
  {
    id: 1,
    title: "Sewafe Bridge Reconstruction",
    completionDate: "March 2023",
    cost: "2.5 million USD",
    impact:
      "Improved transportation links between Koidu City and the western part of the district, benefiting over 100,000 residents and enhancing trade.",
    image:
      "https://www.foresightsl.com/wp-content/uploads/2020/01/Rural-bridge_single_deks.jpg",
  },
  {
    id: 2,
    title: "Youth Skills Training Center",
    completionDate: "November 2022",
    cost: "1.2 million USD",
    impact:
      "Provided vocational training facilities for 500 youth annually, offering courses in construction, agriculture, and information technology.",
    image:
      "https://wofan.org/wp-content/uploads/2023/07/IMG-20210529-WA0005.jpeg",
  },
  {
    id: 3,
    title: "Primary School Renovation Program",
    completionDate: "August 2022",
    cost: "3 million USD",
    impact:
      "Renovated and equipped 50 primary schools across the district, improving learning environments for over 15,000 students.",
    image:
      "https://solacebase.com/wp-content/uploads/2023/03/IMG-20230326-WA0036.jpg",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { x: -20, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
    },
  },
};

const CompletedProjects: React.FC = () => {
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
        <div className={`${styles.boxWidth} `}>
          <AboutCarousal
            image={hero2}
            title={"Completed Projects"}
            content={
              "Explore the completed projects in Kono District, highlighting the successful council-led initiatives that have enhanced infrastructure, public services, and community development, contributing to the district's growth and progress"
            }
          />
        </div>
      </div>

      <div className={`${layout.section} space-y-8`}>
        {completedProjects.map((project) => (
          <motion.div
            key={project.id}
            variants={itemVariants}
            className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col md:flex-row"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full md:w-1/3 h-48 md:h-auto object-cover"
            />
            <div className="p-6 flex-grow">
              <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
              <p className="text-sm text-gray-600 mb-2">
                Completed: {project.completionDate}
              </p>
              <p className="text-sm text-gray-600 mb-4">Cost: {project.cost}</p>
              <h4 className="text-lg font-semibold mb-2">Impact:</h4>
              <p className="text-gray-700">{project.impact}</p>
            </div>
            <motion.div
              className="bg-green-500 w-2 md:h-auto"
              initial={{ height: 0 }}
              animate={{ height: "100%" }}
              transition={{ duration: 1, ease: "easeInOut" }}
            />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default CompletedProjects;
