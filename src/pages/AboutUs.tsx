import { motion } from "framer-motion";
import styles from "../styles";
import { AboutHero, Support } from "../assets";
import { AboutKono } from "../components";

const AboutUs = () => {
  return (
    <div className="w-full flex flex-col container overflow-hidden">
      <div className="gradient__postion orange__gradient" />

      {/* Hero Section */}
      <div className={`${styles.flexStart}`}>
        <div className={`${styles.boxWidth} mt-4 sm:mt-10`}>
          <AboutKono
            image={AboutHero}
            title="About Kono"
            buttonText="Read more"
          />
        </div>
      </div>

      {/* Main Content Section */}
      <section
        id="home"
        className="flex flex-col sm:flex-row gap-8 my-8 sm:my-16"
      >
        {/* Left Content */}
        <div
          id="left"
          className="flex-1 flex flex-col px-4 sm:px-6 xl:px-0 relative z-[1]"
        >
          <h1 className="font-poppins font-semibold text-3xl sm:text-4xl md:text-[68px] text-secondaryBlack leading-tight md:leading-[80.8px] w-full">
            <span className="text-gradient">Kono District</span>
            <br className="hidden sm:block" /> Council
          </h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <p className="text-secondaryGray max-w-[470px] font-thin mt-4 sm:mt-5 text-sm sm:text-base">
              Welcome to the heart of Sierra Leone's diamond country! Kono
              District, located in the Eastern Province, is a land of rich
              natural resources, vibrant culture, and resilient people. Our
              district is known for its diamond mines, but we are so much more –
              a community working together towards sustainable development and a
              brighter future for all our residents.
            </p>
          </motion.div>

          <motion.div
            initial={{ x: "-100vw" }}
            animate={{ x: 0 }}
            transition={{ type: "spring", stiffness: 40 }}
            className="flex mt-4 sm:mt-5 gap-4"
          />
        </div>

        {/* Right Content */}
        <motion.div
          initial={{ x: "100vw" }}
          animate={{ x: 0 }}
          transition={{ type: "spring", stiffness: 35 }}
          id="right"
          className="flex-1 flex justify-center items-center px-4 sm:px-0 my-6 sm:my-0"
        >
          <img
            src={Support}
            alt="billing"
            className="w-full max-w-[90%] h-auto relative z-[5] shadow bg-white p-2"
          />
        </motion.div>
      </section>

      {/* History Section */}
      <div className="flex flex-col px-4 sm:px-6 xl:px-0 mb-8">
        <div>
          <h1 className={`${styles.heading1} mb-5`}>Our History</h1>
        </div>
        <p className="text-justify text-sm sm:text-base">
          Kono District has a storied history dating back centuries. Originally
          inhabited by the Kono people, our region became internationally known
          in the 1930s with the discovery of diamonds. This discovery
          transformed Kono from a rural farming community into a hub of mining
          activity, attracting people from across Sierra Leone and beyond. The
          Kono people have maintained their rich cultural heritage despite rapid
          modernization. Our traditions are deeply rooted in respect for elders,
          community cooperation, and a strong connection to the land. The Kono
          language, part of the Mande language family, continues to be widely
          spoken alongside Krio and English.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
