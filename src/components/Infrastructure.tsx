import {
  AboutCarousal,
  Electricity,
  Footer,
  Header,
  RoadConstructions,
  Sanitation,
} from "../components";
import { motion } from "framer-motion";
import { hero2, Women } from "../assets";
import styles from "../styles";

const Infrastructure = () => {
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
            title={"Infrastructure"}
            content={
              "Information on road construction, water supply, electricity, and sanitation in Kono"
            }
          />
        </div>
      </div>
      <RoadConstructions
        title="Road Construction"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas recusandae odio beatae dolor perspiciatis atque magnam explicabo ullam, reiciendis nostrum nihil vero fuga ad rem deserunt eius earum reprehenderit libero!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas recusandae odio beatae dolor perspiciatis atque magnam explicabo ullam, reiciendis nostrum nihil vero fuga ad rem deserunt eius earum reprehenderit libero!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas recusandae odio beatae dolor perspiciatis atque magnam explicabo ullam, reiciendis nostrum nihil vero fuga ad rem deserunt eius earum reprehenderit libero!
        "
        image={Women}
      />
      <Sanitation />
      <Electricity
        title="Electricity"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas recusandae odio beatae dolor perspiciatis atque magnam explicabo ullam, reiciendis nostrum nihil vero fuga ad rem deserunt eius earum reprehenderit libero!"
        image={Women}
      />
    </motion.div>
  );
};

export default Infrastructure;
