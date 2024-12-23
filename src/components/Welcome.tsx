import { useState } from "react";
import { motion } from "framer-motion";
import { Alice } from "../assets";
import YellowDivider from "../pages/YellowDivider";
import styles, { layout } from "../styles";
import Button from "./Button";

const Welcome = () => {
  const [showAll, setShowAll] = useState(false);

  const handleToggle = () => {
    setShowAll((prevState) => !prevState);
  };

  const paragraphs = [
    "The role of Kono District Council is to support our communities to grow, develop and take advantage of the significant benefits our district has to offer including its vast natural resources, fertile land for commercial agriculture, natural landscape for tourism and hospitality and a promising economy.",
    "By working in partnership with the central Government, our paramount chiefs, businesses and communities, the Council aims to coordinate and support endeavours that build an integrated district economy, fostering growth, and transform our communities into vibrant places to live, work, grow and prosper.",
    "This Strategic Plan is aligned with the Central Government’s Big Five Game Changers which include, Feed Salone, Youth Employment, Human Capital Development, Revamping of Public Sector Architecture and Tech and Infrastructure.",
    "The Plan is also aligned with specific sectors which guide the national development agenda.",
    "This plan sets out our strategic direction for the period 2024-28, including our values, vision, mission and strategic priorities.",
  ];

  const animationVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  // Title animation variant
  const titleAnimation = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <section
      className={`${layout.section} grid grid-cols-1 lg:grid-cols-2 items-center gap-5`}
    >
      <img
        src={Alice}
        alt="chairman"
        className="mt-1 w-full h-full rounded-lg transition-transform duration-300 hover:scale-105"
      />
      <div className="flex flex-col items-start">
        <YellowDivider />
        {/* Title Animation */}
        <motion.h1
          className={`${styles.heading1} lg:text-[2rem] text-center mb-8`}
          variants={titleAnimation}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          MESSAGE FROM THE CHAIRMAN
        </motion.h1>
        {/* Paragraphs Animation (sequential) */}
        {paragraphs
          .slice(0, showAll ? paragraphs.length : 2)
          .map((text, index) => (
            <motion.p
              key={index}
              className={`${styles.paragraph2} my-4 text-justify`}
              variants={animationVariants}
              initial="hidden"
              animate="visible"
              transition={{
                duration: 0.6,
                ease: "easeInOut",
                delay: (index - 1) * 0.2,
              }}
            >
              {text}
            </motion.p>
          ))}
        {/* Toggle Button */}
        <Button
          text={showAll ? "Show Less" : "Read More"}
          isLink={false}
          location="#"
          onClick={handleToggle}
        />
      </div>
    </section>
  );
};

export default Welcome;
