import { motion } from "framer-motion";

type Props = {
  title: string;
  button?: string;
  image?: string;
  buttonText?: string;
  onclick?: () => void;
};

const AboutKono = (props: Props) => {
  const { title, image, buttonText } = props;
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
        <div className="absolute z-10 inset-0 flex flex-col justify-center mx-6 items-start ">
          <div className="flex flex-col">
            <h1
              className={`lg:text-6xl text-xl font-bold text-white text-start`}
            >
              {title}
            </h1>

            {buttonText ? (
              <button
                className="text-cyan bg-redprimary lg:max-w-1/2 w-1/2 lg:text-[18px] rounded-full px-2 py-3    transition-transform duration-300 ease-in-out
          hover:scale-110 border-none outline-none"
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

export default AboutKono;
