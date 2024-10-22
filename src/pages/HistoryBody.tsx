import { motion } from "framer-motion";
import { AboutCarousal } from "../components";
import styles from "../styles";
const HistoryBody = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="container mx-auto px-4 py-8"
    >
      <div className={` ${styles.flexStart}`}>
        <div className={`${styles.boxWidth} `}>
          <AboutCarousal
            image={`https://i0.wp.com/feedbackoysg.com/wp-content/uploads/2021/04/Local-Government-Buildings-14-1-scaled.jpg?fit=768%2C512&ssl=1`}
            title={"Ongoing Projects"}
            content={
              "A page dedicated to projects that are currently being implemented, such as road construction, healthcare improvements, or education initiatives."
            }
          />
        </div>
      </div>
    </motion.div>
  );
};

export default HistoryBody;
