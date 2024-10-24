import { AboutCarousal } from "../components";
import { motion } from "framer-motion";
import { hero2 } from "../assets";
import styles from "../styles";
import AnnualBudgetCard from "../components/AnnualBudgetCard";

const AnnualBudget = () => {
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
        <div className={`${styles.boxWidth}`}>
          <AboutCarousal
            image={hero2}
            title={"Annual Budget"}
            content={
              "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque consequatur, cumque debitis eum recusandae quam! Molestias natus laudantium dolorem et consequatur quae voluptas magnam, quis quo similique provident illum cumque."
            }
          />
        </div>
      </div>
      <AnnualBudgetCard />
    </motion.div>
  );
};

export default AnnualBudget;
