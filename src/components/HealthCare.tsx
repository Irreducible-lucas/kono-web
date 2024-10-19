import { AboutCarousal, SupportedProgram } from "../components";
import { motion } from "framer-motion";
import { hero2, Women } from "../assets";
import CouncilServicesCard from "./CouncilServicesCard";
import styles from "../styles";

const HealthCare = () => {
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
            image={hero2}
            title={"Health Care"}
            content={
              "Information on local healthcare facilities public health initiative, and programs supported by the council"
            }
          />
        </div>
      </div>
      <CouncilServicesCard
        title="Local Health Care Facilities"
        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem
          temporibus a, accusamus ratione totam obcaecati aliquid. Excepturi
          dolorum non culpa perferendis itaque necessitatibus, optio
          asperiores a debitis. Eum, necessitatibus modi. Lorem, ipsum dolor
          sit amet consectetur adipisicing elit. Non doloremque odit
          repellat dignissimos totam, tenetur quod libero molestiae aut eius
          minus, architecto hic ex rerum laborum dolorum distinctio commodi
          ut."
        image={Women}
      />

      <CouncilServicesCard
        title="Public Health Initiative"
        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem
    temporibus a, accusamus ratione totam obcaecati aliquid. Excepturi
    dolorum non culpa perferendis itaque necessitatibus, optio
    asperiores a debitis. Eum, necessitatibus modi. Lorem, ipsum dolor
    sit amet consectetur adipisicing elit. Non doloremque odit
    repellat dignissimos totam, tenetur quod libero molestiae aut eius
    minus, architecto hic ex rerum laborum dolorum distinctio commodi
    ut."
        image={Women}
        reverse={true}
      />
      <div className="bg-slate-200 lg:py-5">
        <SupportedProgram />
      </div>
    </motion.div>
  );
};

export default HealthCare;
