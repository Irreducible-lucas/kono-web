import { AboutCarousal } from "../components";
import { motion } from "framer-motion";
import { Funding } from "../assets";
import styles from "../styles";
import ProjectFundingCard from "../components/ProjectFundingCard";

const ProjectFunding = () => {
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
            image={Funding}
            title={"Project Funding"}
            content={
              "Learn about the funding for projects in Kono District, including sources of financial support, investments in development initiatives, and how the council allocates resources to drive community growth and infrastructure improvement."
            }
          />
        </div>
      </div>

      <ProjectFundingCard />
    </motion.div>
  );
};

export default ProjectFunding;
