import styles from "../style";
import { motion } from "framer-motion";
import { AboutCarousal, ServiceCard } from "../components";
import { hero2 } from "../assets";
import { useNavigate } from "react-router-dom";
import { councilsevices } from "../constants";

const CouncilServices = () => {
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
            title={"Council Services"}
            content={
              "Explore the wide range of services provided by Kono District Council, from community development and infrastructure projects to public health, education, and economic support initiatives."
            }
          />

          <div
            className={`${styles.paddingX} ${styles.paddingY}  flex flex-wrap justify-evenly`}
          >
            {councilsevices.map((item) => (
              <ServiceCard
                key={item.id}
                showButton
                item={item}
                onClick={() => {
                  navigate(`/council-services/${item.url}`, {
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
export default CouncilServices;
