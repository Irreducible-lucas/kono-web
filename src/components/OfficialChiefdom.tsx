import { chiefdomsList } from "../constants";
import { layout } from "../style";
import { GeneralListModel } from "../types";
import Button from "./Button";
import { motion } from "framer-motion";
import ChiefdomPresenter from "./Chiefdom";

type Props = {
  title?: string;
  content?: string;
  subContent?: string;
  showButton: boolean;
  image?: string;
  buttonText?: string;
  onclick?: () => void;
  plans?: GeneralListModel[];
  planName?: string;
  showMoreInfo?: boolean;
};

const OfficialChiefdom = (props: Props) => {
  const {
    showButton,
    buttonText,
    onclick,
    showMoreInfo = true,
  } = props;

  const oddChiefdoms = chiefdomsList.filter((item) => item.id % 2 !== 0);
  const evenChiefdoms = chiefdomsList.filter((item) => item.id % 2 === 0);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.5, when: "beforeChildren" }}
      id="product"
      className={` grid grid-cols-1 md:grid-cols-2 lg:gap-8 items-start`}
    >
      <motion.div
        initial={{ x: "-100vw" }}
        animate={{ x: 0 }}
        transition={{ type: "spring", stiffness: 40 }}
        className={`${layout.sectionImg} w-full`}
      >
        <div>
          {showMoreInfo && (
            <div className="">
              {oddChiefdoms.map((item) => (
                <ChiefdomPresenter key={item.id} item={item} />
              ))}
            </div>
          )}
        </div>
      </motion.div>

      <motion.div
        initial={{ x: "100vw" }}
        animate={{ x: 0 }}
        transition={{ type: "spring", stiffness: 140 }}
        className={`${layout.sectionInfo} w-full`}
      >
        {/* <div className="flex mb-5" /> */}

        {showMoreInfo && (
          <div>
            {evenChiefdoms.map((item) => (
              <ChiefdomPresenter key={item.id} item={item} />
            ))}
          </div>
        )}

        {showButton && (
          <Button
            onClick={() => {
              if (onclick) onclick();
            }}
            styles={
              "text-primary bg-redprimary lg:max-w-1/2 p-2 mt-4 md:mt-5 mb-4 md:mt-0 lg:text-[16px]"
            }
            text={buttonText ? buttonText : "Explore More"}
          />
        )}
      </motion.div>
    </motion.section>
  );
};

export default OfficialChiefdom;
