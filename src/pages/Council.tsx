import { motion } from "framer-motion";
import styles from "../styles";
import { Support } from "../assets";
import { AboutKono } from "../components";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
}

const Objective: Project[] = [
  {
    id: 1,
    title: "Partnerships & Collaboration",
    description:
      "To facilitate partnerships and collaborations with various stakeholders, including other NGOs, government agencies and community groups, to address social challenges effectively.",
    image:
      "https://media.licdn.com/dms/image/D4E12AQG9pvdA-o6GUw/article-cover_image-shrink_600_2000/0/1684995289885?e=2147483647&v=beta&t=kej6-ttkSy9RuNtSIHw68RmUQdSm-ZL2nkBAfT-jmAs",
  },
  {
    id: 2,
    title: "Quality Healthcare",
    description:
      "Improve access to quality healthcare services, including preventive care, maternal health nd essential medicines, to enhance overall well-being.",
    image:
      "https://media.licdn.com/dms/image/C4E12AQGaXfnC3fbObA/article-cover_image-shrink_600_2000/0/1621736888280?e=2147483647&v=beta&t=5eY0z5v6Ed6Phukdr3R8C80yaR21LS7WbRKH_fvXAgg",
  },
  {
    id: 3,
    title: "Educational Inclusivity",
    description:
      "Enhance educational opportunities by providing scholarships, educational materials and infrastructure development to ensure inclusive and equitable education for all.",
    image:
      "https://cdn-wordpress-info.futurelearn.com/wp-content/uploads/Inclusivity_v1.png",
  },
  {
    id: 4,
    title: "Opportunity Generation",
    description:
      "To champion inclusivity and equal opportunities for individuals of all background and socio-economic statuses, fostering a future where everyone can flourish.",
    image:
      "https://www.generation.org/wp-content/uploads/2023/11/midcareer-section-3-1.jpg",
  },
  {
    id: 5,
    title: "Active Participation",
    description:
      "To encourage active participation and engagement among community embers in addressing local issues and implementing solutions.",
    image:
      "https://www.shutterstock.com/image-photo/business-team-voting-concept-smiling-600nw-1368239768.jpg",
  },
  {
    id: 6,
    title: "Eradicate Poverty",
    description:
      "Implement sustainable livelihood programs to uplift impoverished communities and eradicate extreme poverty.",
    image:
      "https://img.jagrantv.com/article/rc1035655/1665905000-international-day-for-the-eradication-of-poverty.jpg",
  },
];

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

const Council: React.FC = () => {
  return (
    <div className={`w-full flex flex-col container overflow-hidden`}>
      <div className="gradient__postion orange__gradient " />
      <div className={`${styles.flexStart}`}>
        <div className={`${styles.boxWidth} mt-4 sm:mt-10`}>
          <AboutKono
            image={`https://d1ivb2c2d81ilf.cloudfront.net/city-clerk/Headers/_1900x650_crop_center-center_90_none/City-Council-Dais.png`}
            title={"Council Service"}
            buttonText="Read more"
          />
        </div>
      </div>
      <section
        id="home"
        className={`flex flex-col sm:flex-row gap-8 my-8 sm:my-16`}
      >
        <div
          id="left"
          className={`flex-1 flex flex-col px-4 sm:px-6 xl:px-0 relative z-[1]`}
        >
          <h1 className="font-poppins font-semibold text-3xl sm:text-4xl md:text-[68px] text-secondaryBlack leading-tight md:leading-[80.8px] w-full">
            <span className="text-gradient">Overview of the </span>
            <br className="sm:block hidden" /> Council Structure
          </h1>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <p
              className={`text-secondaryGray max-w-[470px] font-thin mt-4 sm:mt-5 text-sm sm:text-base`}
            >
              The Kono District Council operates under the Local Government Act
              of 2004, which devolves certain functions from the central
              government to local councils. Our council is structured to
              efficiently manage these responsibilities and drive local
              development.
            </p>
          </motion.div>

          <motion.div
            initial={{ x: "-100vw" }}
            animate={{ x: 0 }}
            transition={{ type: "spring", stiffness: 40 }}
            className="flex mt-5 gap-4"
          ></motion.div>
        </div>

        <motion.div
          initial={{ x: "100vw" }}
          animate={{ x: 0 }}
          transition={{ type: "spring", stiffness: 35 }}
          id="right"
          className={`flex-1 flex justify-center items-center px-4 sm:px-0 my-6 sm:my-0`}
        >
          <img
            src={Support}
            alt="billing"
            className="w-full max-w-[90%] h-auto relative z-[5] shadow bg-white p-2"
          />
        </motion.div>
      </section>
      <div className={`flex items-center gap-4 flex-col mx-6`}>
        <h1 className={`${styles.heading1}`}>Our Objective</h1>
        <p className={`${styles.paragraph}`}>
          Our Objective are deeply rooted in respect for elders, community
          cooperation, and a strong connection to the land.
        </p>
        <div
          className={`${styles.marginY} grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-6`}
        >
          {Objective.map((project) => (
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
                <p className="text-sm text-gray-700">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Council;
