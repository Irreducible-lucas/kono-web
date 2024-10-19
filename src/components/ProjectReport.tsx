import { AboutCarousal, Footer, Header } from ".";
import { motion } from "framer-motion";
import { hero2 } from "../assets";
import styles, { layout } from "../styles";
import BudgetCard from "./BudgetCard";

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
            image={hero2}
            title={"Project Report and Update"}
            content={
              "   Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste accusamus sit minima similique tenetur placeat ut, pariatur, molestias, deserunt animi autem. Ipsa eveniet cum quis quidem veritatis recusandae perferendis laudantium."
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
