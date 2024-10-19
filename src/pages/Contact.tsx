import TalkToUs from "../components/TalkToUs";
import { AboutCarousal, Footer, Header } from "../components";
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
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero explicabo quae architecto voluptates, vel pariatur, nemo, nesciunt cupiditate quo quidem eaque beatae distinctio odit laborum aspernatur a facere quas sit."
            }
          />
        </div>
      </div>
      <TalkToUs />
      <Footer />
    </motion.div>
  );
};

export default Contact;
