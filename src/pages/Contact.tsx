import TalkToUs from "../components/TalkToUs";
import { AboutCarousal } from "../components";
import { motion } from "framer-motion";
import styles from "../styles";
import { hero2 } from "../assets";

const Contact = () => {
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
            title={"Contact Us"}
            content={
              "Need assistance or have feedback? We’re here to help! Reach out anytime via the form, email, or phone—we’d love to hear from you."
            }
          />
        </div>
      </div>
      <TalkToUs />
    </motion.div>
  );
};

export default Contact;
