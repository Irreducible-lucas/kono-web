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
              "Explore agriculture and livelihood programs in Kono District, focusing on sustainable farming, community empowerment, and council-supported initiatives to boost economic resilience."
            }
          />
        </div>
      </div>
      <AgriculturalResources />
    </motion.div>
  );
};

export default Agriculture;
