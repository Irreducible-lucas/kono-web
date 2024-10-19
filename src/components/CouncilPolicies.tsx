import { AboutCarousal, Footer, Header } from "../components";
import { motion } from "framer-motion";
import { hero2 } from "../assets";
import styles, { layout } from "../styles";
import CouncilPoliciesCard from "./CouncilPoliciesCard";
import { PolicyCard } from "../constants";
const CouncilPolicies = () => {
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
            title={"Council Policies"}
            content={
              "Showcase key policy document related to governance, procurement,landuse, and community Development"
            }
          />
        </div>
      </div>
      <div className={`${layout.section} my-12 `}>
        <h1
          className={`${styles.heading1} text-black font-bold uppercase text-center mb-5`}
        >
          Policy Document
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 md:gap-x-1 mt-3 p-3">
          {PolicyCard.map((policies) => (
            <CouncilPoliciesCard key={policies.id} image={policies.image} />
          ))}
        </div>
      </div>
    </motion.div>
  );
};
export default CouncilPolicies;
