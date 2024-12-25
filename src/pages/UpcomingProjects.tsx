import React from "react";
import { motion } from "framer-motion";
import AboutCarousal from "../components/AboutCarousal";
import styles, { layout } from "../styles";
import { Upcoming } from "../assets";

interface Project {
  id: number;
  title: string;
  plannedStart: string;
  estimatedBudget: string;
  description: string;
  image: string;
}

const upcomingProjects: Project[] = [
  {
    id: 1,
    title: "Kono Agricultural Development Initiative",
    plannedStart: "January 2025",
    estimatedBudget: "4 million USD",
    description:
      "A comprehensive program to boost agricultural productivity in Kono District, including the introduction of modern farming techniques, provision of high-yield seeds, and establishment of farmer cooperatives.",
    image: "https://www.ifad.org/documents/d/new-ifad.org/aati_aug2022-jpg",
  },
  {
    id: 2,
    title: "Digital Kono Project",
    plannedStart: "March 2025",
    estimatedBudget: "2.5 million USD",
    description:
      "Improving internet connectivity across the district and providing digital literacy training to residents. The project aims to bridge the digital divide and create opportunities in the digital economy.",
    image:
      "https://media.licdn.com/dms/image/D4D12AQF-KiUWpv1p3w/article-cover_image-shrink_720_1280/0/1675673134455?e=2147483647&v=beta&t=UuBXQaysEECejpikffy5O22p6IPboan23lPqU3eK27c",
  },
  {
    id: 3,
    title: "Sustainable Mining Practices Program",
    plannedStart: "June 2025",
    estimatedBudget: "3 million USD",
    description:
      "Implementing environmentally friendly mining practices, rehabilitating mined-out areas, and providing alternative livelihoods for artisanal miners.",
    image:
      "https://veriforce.com/wp-content/uploads/2023/09/sustainable-mining-practices-960x640.jpg",
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

const UpcomingProjects: React.FC = () => {
  return (
    <motion.div
      id="home"
      variants={containerVariants}
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
            image={Upcoming}
            title={"Upcoming Projects"}
            content={
              "Learn about the upcoming projects in Kono District, focusing on future council-led initiatives aimed at driving further development in infrastructure, education, healthcare, and community services."
            }
          />
        </div>
      </div>
      <div className={`${layout.section} grid grid-cols-1 gap-8`}>
        {upcomingProjects.map((project) => (
          <motion.div
            key={project.id}
            variants={itemVariants}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <div className="md:flex">
              <div className="md:flex-shrink-0">
                <img
                  className="h-48 w-full object-cover md:w-48"
                  src={project.image}
                  alt={project.title}
                />
              </div>
              <div className="p-8">
                <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                  {project.plannedStart}
                </div>
                <h3 className="mt-1 text-2xl leading-tight font-medium text-black">
                  {project.title}
                </h3>
                <p className="mt-2 text-gray-500">
                  Estimated Budget: {project.estimatedBudget}
                </p>
                <p className="mt-4 text-gray-600">{project.description}</p>
              </div>
            </div>
            <motion.div
              className="bg-yellow-400 h-1"
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />
          </motion.div>
        ))}

        <motion.div
          className="mt-12 bg-gray-100 p-6 rounded-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <h3 className="text-2xl font-semibold mb-4">Get Involved</h3>
          <p className="mb-4">
            We welcome community participation in our upcoming projects. Here's
            how you can get involved:
          </p>
          <ul className="list-disc list-inside mb-4">
            <li>Attend public consultations and town hall meetings</li>
            <li>Provide feedback on proposed project plans</li>
            <li>Volunteer for community-based aspects of projects</li>
            <li>Propose ideas for future development initiatives</li>
          </ul>
          <p>
            For more information on any of our upcoming projects or to learn how
            you can contribute, please contact our Project Coordination Office
            at{" "}
            <a
              href="mailto:projects@konodistrict.gov.sl"
              className="text-blue-500 hover:underline"
            >
              projects@konodistrict.gov.sl
            </a>{" "}
            or call +232 xx xxx xxxx.
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default UpcomingProjects;
