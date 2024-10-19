import { AboutCarousal, Footer, Header } from "../components";
import { motion } from "framer-motion";
import { hero2 } from "../assets";
import styles, { layout } from "../styles";
import ByLawCard from "./ByLawCard";
import { Laws } from "../constants";

const ByLaws = () => {
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
            title={"ByLaws and Ordinances"}
            content={
              "Details on the rules and regulations governing local communities in Kono"
            }
          />
        </div>
      </div>
      <div className={`${layout.section} `}>
        <h2
          className={`${styles.heading1} text-black font-bold uppercase text-center mb-16`}
        >
          Rule and regulations governing local communities in Kono.
        </h2>
        <div className=" grid grid-cols-1 lg:grid-cols-2 ">
          {Laws.map((resources) => (
            <ByLawCard
              key={resources.id}
              image={resources.image}
              title={resources.title}
              description={resources.description}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ByLaws;
