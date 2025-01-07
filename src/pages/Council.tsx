import { AboutCarousal, OurStructure } from "../components";
import { motion } from "framer-motion";
import { Alice, Structure } from "../assets";
import styles, { layout } from "../styles";
import YellowDivider from "./YellowDivider";
import { useQuery } from "@tanstack/react-query";
import { fetchAboutInfo } from "../api";

const Council = () => {
  const { isPending, error, data }: any = useQuery({
    queryKey: ["about", ""],
    queryFn: () => fetchAboutInfo(),
  });

  console.log(data, "council data");

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
            image={Structure}
            title={"Council Structure"}
            content={
              "Explore the structure of Kono District Council, from its leadership to its operational teams, driving strategic initiatives and community development across the district."
            }
          />
        </div>
      </div>
      <div className={`${layout.section} `}>
        <div className="flex flex-col lg:flex-row items-center gap-8">
          <img
            src={Alice}
            alt="Kono Map"
            className="mt-1 w-full h-full lg:w-[50%] rounded-lg transition-transform duration-300 hover:scale-105"
          />
          <div className="flex flex-col items-start">
            <YellowDivider />
            <h1
              className={`${styles.heading1} text-center mb-8 lg:text-[2.3rem]`}
            >
              {data && data.length > 0
                ? data[1]?.title
                : "Organizational Excellence"}

              {/* Organizational Excellence */}
            </h1>
            <p className={`${styles.paragraph2} text-justify`}>
              {data && data.length > 0
                ? data[1]?.description
                : `Success in the development of our district is determined by
              working together to deliver strategic initiatives and build
              organizational excellence. To influence development for Kono
              District, we require a diverse skillset and an empowered team
              working towards a common goal. The Council’s organisational
              excellence is achieved by leading with humility, integrity and
              professionalism, maintaining a district-wide focus, being
              strategic and effective, and using well-developed evidence to
              advocate for our district.`}
            </p>
          </div>
        </div>
        <OurStructure />
      </div>
    </motion.div>
  );
};

export default Council;
