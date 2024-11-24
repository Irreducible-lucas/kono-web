import styles from "../style";
import { motion } from "framer-motion";
import { AboutCarousal, ServiceCard } from "../components";
import { hero2 } from "../assets";
import { useNavigate } from "react-router-dom";
import { aboutus } from "../constants";
import AboutUs from "../components/AboutUs";
import OurFocus from "../components/OurFocus";

const AboutUsPage = () => {
  let navigate = useNavigate();

  return (
    <motion.div
      id="home"
      transition={{
        when: "beforeChildren",
        staggerChildren: 2,
      }}
      className=" w-full overflow-hidden"
    >
      {/* carousal */}
      <div className={` ${styles.flexStart}`}>
        <div className={`${styles.boxWidth} `}>
          <AboutCarousal
            image={hero2}
            title={"About Us"}
            content={
              "Kono District Council supports education, youth development, and sustainable growth through community projects and policy advocacy."
            }
          />
          <AboutUs />
          <OurFocus />

          <div
            className={`${styles.paddingX} ${styles.paddingY}  flex flex-wrap justify-evenly`}
          >
            {aboutus.map((item) => (
              <ServiceCard
                key={item.id}
                showButton
                item={item}
                onClick={() => {
                  navigate(`/aboutus/${item.url}`, {
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

export default AboutUsPage;
