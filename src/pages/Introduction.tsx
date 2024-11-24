import { Alice } from "../assets";
import styles, { layout } from "../style";
import { motion } from "framer-motion";

interface IntroductionProps {
  title: string;
  subTitle: string;
}

export const childVariant = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};

const Introduction = ({ title, subTitle }: IntroductionProps) => {
  return (
    <section id="home" className={`flex sm:flex-row flex-col`}>
      <div
        id="left"
        className={`sm:max-w-md md:max-w-2xl w-full ${styles.flexStart} ${styles.marginX} ${styles.marginY} flex-col gap-5 xl:px-0 sm:px-16 px-6 relative z-[1]`}
      >
        <h1 className="font-poppins font-medium text-[42px] md:text-[52px] text-primaryYello md:leading-[60.8px] leading-[55px] w-full sm:w-[70%]">
          {title}
        </h1>

        <div className="w-full max-w-xs md:max-w-sm h-[1px] bg-secondaryBlue" />
        <div>
          <p
            className={`text-secondaryBlue max-w-[470px] font-thin w-full ${styles.paragraph}`}
          >
            {subTitle}
          </p>
        </div>
      </div>

      <motion.div
        initial={{ y: "100vw" }}
        animate={{ y: 0 }}
        transition={{ delay: 0.6, type: "spring", stiffness: 35 }}
        id="right"
        className={`${layout.sectionImg} flex-[1.1]`}
      >
        <img
          src={Alice}
          alt="billing"
          className="w-[80%] md:w-[75%] relative z-[5] rounded-tl-[50px] rounded-br-[50px]"
        />
      </motion.div>
    </section>
  );
};

export default Introduction;
