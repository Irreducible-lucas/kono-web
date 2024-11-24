import { AboutCarousal } from "../components";
import { motion } from "framer-motion";
import { hero2 } from "../assets";
import styles from "../styles";
import ExpenditureCard from "../components/ExpenditureCard";

const PublicExpenditure = () => {
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
            title={"Public Expenditure"}
            content={
              "Access the project expenditure report for Kono District, providing detailed information on how funds are allocated and spent on various development initiatives, ensuring transparency and accountability in council-led projects."
            }
          />
        </div>
      </div>
      <ExpenditureCard />
    </motion.div>
  );
};

export default PublicExpenditure;
