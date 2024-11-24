import styles from "../style";
import { motion } from "framer-motion";
import { AboutCarousal, OurProject, ServiceCard } from "../components";
import { hero2 } from "../assets";
import { useNavigate } from "react-router-dom";
import { developmentProject } from "../constants";

const DevelopmentProject = () => {
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
            title={"Development Projects"}
            content={
              "Explore the development projects in Kono District, including council-led initiatives aimed at enhancing community welfare, infrastructure, economic growth, and social services for a sustainable future."
            }
          />
          <OurProject />
          <div
            className={`${styles.paddingX} ${styles.paddingY}  flex flex-wrap justify-evenly`}
          >
            {developmentProject.map((item) => (
              <ServiceCard
                key={item.id}
                showButton
                item={item}
                onClick={() => {
                  navigate(`/development-projects/${item.url}`, {
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
export default DevelopmentProject;
