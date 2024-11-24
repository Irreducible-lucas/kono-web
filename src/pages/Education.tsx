import { AboutCarousal, YouthDevelopment } from "../components";
import { motion } from "framer-motion";
import { hero2 } from "../assets";
import styles from "../styles";
import EducationalPolicies from "../components/EducationalPolicies";
import SchoolList from "../components/SchoolList";

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
      {/* carousal */}
      <div className={` ${styles.flexStart}`}>
        <div className={`${styles.boxWidth} `}>
          <AboutCarousal
            image={hero2}
            title={"Education"}
            content={
              "Learn about education in Kono District, including schools, youth development programs, and council-supported initiatives to enhance learning opportunities and promote academic growth."
            }
          />
        </div>
      </div>
      <div>
        <SchoolList />
        <YouthDevelopment />
        <EducationalPolicies />
      </div>
    </motion.div>
  );
};

export default Education;
