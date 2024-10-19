import { motion } from "framer-motion";
import { containerVariant } from "../variants";
import styles from "../styles";
import { HistoryBody, Introduction } from "../pages";
import { Alice } from "../assets";

const Council = () => {
  return (
    <div>
      <motion.div
        variants={containerVariant}
        initial="hidden"
        animate="visible"
        className={`w-full overflow-hidden`}
      >
        <div className={`${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>
            <Introduction
              title={"Details Of The Governance Structure"}
              subTitle={""}
              image={Alice}
            />
          </div>
        </div>
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <HistoryBody />
        </div>
      </motion.div>
    </div>
  );
};

export default Council;
