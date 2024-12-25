import { AboutCarousal, OfficialChiefdom } from "../components";
import { motion } from "framer-motion";
import { Official } from "../assets";
import styles, { layout } from "../styles";

const Officials = () => {
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
      <div className={`${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <AboutCarousal
            image={Official}
            title={"Officials and Chiefdom"}
            content={
              "Learn about the officials and traditional leaders of Kono District, including council representatives and the paramount chiefs who guide and support the district's governance and development."
            }
          />
        </div>
      </div>
      <div className={`${layout.section}`}>
        <OfficialChiefdom showButton={false} />
      </div>
    </motion.div>
  );
};

export default Officials;
