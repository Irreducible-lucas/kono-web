import styles from "../style";
import { Lillian } from "../assets";
import { motion } from "framer-motion";
// import { useNavigate } from "react-router-dom";

const Hero = () => {
  // let navigate = useNavigate();

  // const handleNavigate = () => {
  //   navigate(`/contactus`);
  // };
  return (
    <section id="home" className={`flex sm:flex-row flex-col `}>
      <div
        id="left"
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6 relative z-[1]`}
      >
        <h1 className="font-poppins font-semibold mx-12 text-[42px] md:text-[68px]  text-secondaryBlack md:leading-[80.8px] leading-[55px] w-full">
          <span className="text-gradient">Official Kono</span>
          <br className="sm:block hidden mx-12" /> District Council
        </h1>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <p
            className={` text-secondaryGray max-w-[470px] mx-12 font-thin mt-5 ${styles.paragraph}`}
          >
            Working Together for a Stronger, Brighter Future for Kono
          </p>
        </motion.div>

        <motion.div
          initial={{ x: "-100vw" }}
          animate={{ x: 0 }}
          transition={{ type: "spring", stiffness: 40 }}
          className="flex mt-5 gap-4"
        >
          {/* <Button
            isLink={true}
            location={"partners"}
            styles={"text-primary bg-primaryYello"}
            text={"JOIN THE NETWORK"}
          />
          <Button
            onclick={handleNavigate}
            styles={"border-2"}
            text={"CONTACT US"}
          /> */}
        </motion.div>
        {/* <Members /> */}
      </div>

      <div className="gradient__postion orange__gradient " />

      <motion.div
        initial={{ x: "100vw" }}
        animate={{ x: 0 }}
        transition={{ type: "spring", stiffness: 35 }}
        id="right"
        className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}
      >
        <img
          src={Lillian}
          alt="billing"
          className="w-[90%] h-[100%] pr-10 rounded-full relative z-[5]"
        />
      </motion.div>
    </section>
  );
};

export default Hero;
