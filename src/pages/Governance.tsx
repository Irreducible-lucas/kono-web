import styles from "../style";
import { motion } from "framer-motion";
import { AboutCarousal, ServiceCard } from "../components";
import { hero2 } from "../assets";
import { useNavigate } from "react-router-dom";
import { governance } from "../constants";

const Governance = () => {
  let navigate = useNavigate();

  return (
    <motion.div
      id="home"
      transition={{
        when: "beforeChildren",
        staggerChildren: 2,
      }}
      className="bg-primary w-full overflow-hidden"
    >
      {/* carousal */}
      <div className={` ${styles.flexStart}`}>
        <div className={`${styles.boxWidth} `}>
          <AboutCarousal
            image={hero2}
            title={"Governance and Policies"}
            content={
              "Explore the governance structure and policies of Kono District Council, outlining the framework that guides decision-making, strategic priorities, and the implementation of development initiatives for the betterment of the district."
            }
          />

          <div
            className={`${styles.paddingX} ${styles.paddingY}  flex flex-wrap justify-evenly`}
          >
            {governance.map((item) => (
              <ServiceCard
                key={item.id}
                showButton
                item={item}
                onClick={() => {
                  navigate(`/governance-policies/${item.url}`, {
                    state: { item },
                  });
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Governance;
