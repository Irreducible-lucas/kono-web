import { AboutCarousal, AgriculturalResources } from "../components";
import { motion } from "framer-motion";
import { hero2 } from "../assets";
import styles from "../styles";

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
      {/* carousal */}
      <div className={` ${styles.flexStart}`}>
        <div className={`${styles.boxWidth} `}>
          <AboutCarousal
            image={hero2}
            title={"Agriculture"}
            content={
              "Resources for farmers, programs to support local agriculture, and opportunities for rural development"
            }
          />
        </div>
      </div>
      <AgriculturalResources />
    </motion.div>
  );
};

export default Agriculture;
