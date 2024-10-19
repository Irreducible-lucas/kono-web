import { AboutCarousal, Footer, Header } from "../components";
import { motion } from "framer-motion";
import { hero2 } from "../assets";
import styles, { layout } from "../styles";
import ExpenditureCard from "./ExpenditureCard";

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
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque consequatur, cumque debitis eum recusandae quam! Molestias natus laudantium dolorem et consequatur quae voluptas magnam, quis quo similique provident illum cumque."
            }
          />
        </div>
      </div>
      <ExpenditureCard />
    </motion.div>
  );
};

export default PublicExpenditure;
