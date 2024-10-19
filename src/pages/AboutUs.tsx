import { motion } from "framer-motion";
import { containerVariant } from "../variants";
import styles from "../styles";
import Introduction from "./Introduction";
import { Alice } from "../assets";
import HistoryBody from "./HistoryBody";

const AboutUs = () => {
  return (
    <motion.div
      variants={containerVariant}
      initial="hidden"
      animate="visible"
      className={`w-full overflow-hidden`}
    >
      <div className={`${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Introduction
            title={"Our Culture & Tradition"}
            subTitle={""}
            image={Alice}
          />
        </div>
      </div>
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <HistoryBody />
      </div>
    </motion.div>
  );
};

export default AboutUs;
