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
    <NavDisplay />
    <Nav />

    <div className={``}>
      <Outlet />
    </div>

    <Footer />
  </motion.div>
);

export default Root;
