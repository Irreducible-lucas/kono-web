import styles from "../style";
import { motion } from "framer-motion";
import { Outlet } from "react-router-dom";
import { Footer, Nav, NavDisplay } from "../components";

const Root = () => (
  <motion.div
    transition={{
      when: "beforeChildren",
      staggerChildren: 2,
    }}
    className="w-full overflow-hidden"
  >
    <div className={` ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <NavDisplay />
        <Nav />
      </div>
    </div>

    <div className={``}>
      <Outlet />
    </div>

    <div className={`bg-[#FFFAF4] ${styles.flexCenter} `}>
      <div className={`${styles.boxWidth}`}>
        <Footer />
      </div>
    </div>
  </motion.div>
);

export default Root;
