import styles from "../styles";

import { motion } from "framer-motion";

type Props = {
  title: string;
  content: string;
  button?: string;
  image?: string;
  buttonText?: string;
  onclick?: () => void;
};

const AboutCarousal = (props: Props) => {
  const { title, content, image, buttonText } = props;
  return (
    <section className={`flex justify-center items-center `}>
      <motion.div
        initial={{ y: "100vw" }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 35 }}
        className={`bg-center relative bg-cover h-[50vh]  object-scale-down  w-full `}
        style={{
          backgroundImage: `url( ${image})`,
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60 "></div>

        {/* Centered div */}
        <div className="absolute z-10 inset-0 flex flex-col justify-center items-center ">
          <div className="flex flex-col items-center text-white gap-6">
            <p className={`${styles.heading1} text-white text-center`}>
              {title}
            </p>
            <p
              className={`tex-sm md:text-lg sm:w-[80%] w-full font-poppins text-secondaryBlue text-center px-16`}
            >
              {content}
            </p>
            {buttonText ? (
              <button
                className="text-primary bg-redprimary lg:max-w-1/2 w-1/2 lg:text-[18px] rounded-full px-2 py-3    transition-transform duration-300 ease-in-out
          hover:scale-110 hover:bg-red-600"
              >
                {buttonText}
              </button>
            ) : (
              <></>
            )}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutCarousal;
