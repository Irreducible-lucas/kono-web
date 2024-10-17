import { AboutCarousal, Footer, Header, YouthDevelopment } from "../components";
import { motion } from "framer-motion";
import { hero2 } from "../assets";
import styles from "../styles";
import EducationalPolicies from "./EducationalPolicies";
import SchoolList from "./SchoolList";

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
              "List of Schools and educational Programs, support for youth development, and update on education policies."
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
