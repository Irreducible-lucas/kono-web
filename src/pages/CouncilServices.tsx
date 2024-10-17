import { AboutCarousal, Footer, Header } from "../components";
import { motion } from "framer-motion";
import styles from "../styles";
import { hero2 } from "../assets";
const CouncilServices = () => {
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
            title={"Our Credit Unions"}
            content={
              "Learn more about the Cooperative Credit Unions that are under KAKEBO management and how they are helping impact the livelihoods and financial security of thousands of households and changing the business landscapes in many communities, towns and cities across Sierra Leone."
            }
          />
        </div>
      </div>
    </motion.div>
  );
};

export default CouncilServices;
