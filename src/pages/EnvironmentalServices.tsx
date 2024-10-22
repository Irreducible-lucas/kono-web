import { AboutCarousal } from "../components";
import { motion } from "framer-motion";
import { hero2 } from "../assets";
import styles from "../styles";
import EnvironmentalServicesCard from "../components/EnvironmentalServicesCard";
const EnvironmentalServices = () => {
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
            title={"Environmental Services"}
            content={
              "Waste Mangement initiatives, clean-up campaignes, and environmental conservation efforts"
            }
          />
        </div>
      </div>
      <EnvironmentalServicesCard />
    </motion.div>
  );
};

export default EnvironmentalServices;
