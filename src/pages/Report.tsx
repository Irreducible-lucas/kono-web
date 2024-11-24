import styles from "../style";
import { motion } from "framer-motion";
import { AboutCarousal, ServiceCard } from "../components";
import { hero2 } from "../assets";
import { useNavigate } from "react-router-dom";
import { aboutus, reportFinancials } from "../constants";

const Report = () => {
  let navigate = useNavigate();

  return (
    <motion.div
      id="home"
      transition={{
        when: "beforeChildren",
        staggerChildren: 2,
      }}
      className="bg-primary w-full overflow-hidden"
    >
      {/* carousal */}
      <div className={` ${styles.flexStart}`}>
        <div className={`${styles.boxWidth} `}>
          <AboutCarousal
            image={hero2}
            title={"Report and Financials"}
            content={
              "Access the latest reports and financial information from Kono District Council, providing transparency on budget allocation, expenditure, and the outcomes of council-led projects and initiatives."
            }
          />

          <div
            className={`${styles.paddingX} ${styles.paddingY}  flex flex-wrap justify-evenly`}
          >
            {reportFinancials.map((item) => (
              <ServiceCard
                key={item.id}
                showButton
                item={item}
                onClick={() => {
                  navigate(`/reports-financials/${item.url}`, {
                    state: { item },
                  });
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Report;
