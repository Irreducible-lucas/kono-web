import { AboutCarousal, Footer, Header } from "../components";
import { motion } from "framer-motion";
import { hero2 } from "../assets";
import styles from "../styles";
const Infrastructure = () => {
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
            title={"Infrastructure"}
            content={
              "Information on road construction, water supply, electricity, and sanitation in Kono"
            }
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Infrastructure;
