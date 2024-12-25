import { AboutCarousal } from "../components";
import { motion } from "framer-motion";

import styles from "../styles";
import BudgetCard from "../components/BudgetCard";
import { Report } from "../assets";

const ProjectReport = () => {
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
            image={Report}
            title={"Project Report and Update"}
            content={
              "  View project reports and updates from Kono District Council, offering detailed insights into the progress, outcomes, and future steps of ongoing and completed initiatives across various sectors."
            }
          />
        </div>
      </div>
      <div>
        <BudgetCard />
      </div>
    </motion.div>
  );
};

export default ProjectReport;
