import React from "react";
import { motion } from "framer-motion";
import AboutCarousal from "./AboutCarousal";
import styles from "../styles";

interface Project {
  id: number;
  title: string;
  status: string;
  budget: string;
  description: string;
  image: string;
}

const ongoingProjects: Project[] = [
  {
    id: 1,
    title: "Koidu City Water Supply Expansion",
    status: "60% complete",
    budget: "5 million USD",
    description:
      "Expanding the water supply network to reach an additional 50,000 residents in Koidu City. The project includes the construction of new water treatment facilities and the laying of 100 km of new pipelines.",
    image:
      "https://www.wsp.com/-/media/sector/global/image/drinking-water-supply/img-drinking-water-supply-social.jpg",
  },
  {
    id: 2,
    title: "Rural Electrification Initiative",
    status: "40% complete",
    budget: "3.5 million USD",
    description:
      "Bringing electricity to 20 rural communities through a combination of grid extensions and off-grid solar solutions. This project aims to improve quality of life and stimulate economic activities in rural areas.",
    image:
      "https://www.afrik21.africa/wp-content/uploads/2018/12/shutterstock_414703612-1-800x400.jpg",
  },
  {
    id: 3,
    title: "Kono District Hospital Modernization",
    status: "75% complete",
    budget: "7 million USD",
    description:
      "Upgrading medical equipment, expanding the emergency department, and constructing a new maternity ward at the Kono District Hospital to improve healthcare services for the entire district.",
    image:
      "https://images.squarespace-cdn.com/content/v1/53065ca3e4b007434405f11e/1393718167330-IFACBR53QBP6PTP2AZR6/2380-1.jpg",
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
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
    },
  },
};

const OngoingProjects: React.FC = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="container mx-auto px-4 py-8"
    >
      <div className={` ${styles.flexStart}`}>
        <div className={`${styles.boxWidth} `}>
          <AboutCarousal
            image={`https://i0.wp.com/feedbackoysg.com/wp-content/uploads/2021/04/Local-Government-Buildings-14-1-scaled.jpg?fit=768%2C512&ssl=1`}
            title={"Ongoing Projects"}
            content={
              "A page dedicated to projects that are currently being implemented, such as road construction, healthcare improvements, or education initiatives."
            }
          />
        </div>
      </div>
      <div
        className={`${styles.marginY} grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-6`}
      >
        {ongoingProjects.map((project) => (
          <motion.div
            key={project.id}
            variants={itemVariants}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-sm text-gray-600 mb-2">{project.status}</p>
              <p className="text-sm text-gray-600 mb-2">
                Budget: {project.budget}
              </p>
              <p className="text-sm text-gray-700">{project.description}</p>
            </div>
            <motion.div
              className="bg-blue-500 h-2"
              initial={{ width: 0 }}
              animate={{ width: project.status.split("%")[0] + "%" }}
              transition={{ duration: 1, ease: "easeInOut" }}
            />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default OngoingProjects;
