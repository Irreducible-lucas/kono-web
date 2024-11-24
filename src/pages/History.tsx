import { AboutCarousal } from "../components";
import { motion } from "framer-motion";
import { hero2 } from "../assets";
import styles from "../styles";
import HistoryBody from "./HistoryBody";

const History = () => {
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
            title={"History"}
            content={
              "Discover the rich heritage of Kono District, from its cultural roots to its evolution as a key economic and social hub in Sierra Leone."
            }
          />
        </div>
      </div>
      <HistoryBody />
    </motion.div>
  );
};
export default History;
