import { Alice } from "../assets";
import { chiefdomsList } from "../constants";
import styles, { layout } from "../style";
import { GeneralListModel } from "../types";
import Button from "./Button";
import { motion } from "framer-motion";
import { useState } from "react";

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
    title,
    showButton,
    image,
    buttonText,
    onclick,
    showMoreInfo = true,
  } = props;

  const oddChiefdoms = chiefdomsList.filter((item) => item.id % 2 !== 0);
  const evenChiefdoms = chiefdomsList.filter((item) => item.id % 2 === 0);

  const [showAllContent, setShowAllContent] = useState<{
    [key: number]: boolean;
  }>({});

  const toggleContentVisibility = (id: number) => {
    setShowAllContent((prev) => ({ ...prev, [id]: !prev[id] }));
  };

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
          <img
            src={image ? image : Alice}
            alt={title}
            className="h-full object-contain lg:mb-8"
          />
          {showMoreInfo && (
            <div className="">
              {oddChiefdoms.map((item) => (
                <div key={item.id} className="mb-8">
                  <h1 className={` ${styles.heading2} `}>{item.title}</h1>
                  <p
                    className={`font-poppins md:p-0 text-justify mt-5 md:mt-0 lg:mt-5 leading-8`}
                  >
                    {showAllContent[item.id]
                      ? item.content
                      : `${item.content.substring(0, 500)}...`}{" "}
                    <span
                      className="text-blue-500 cursor-pointer ml-2"
                      onClick={() => toggleContentVisibility(item.id)}
                    >
                      {showAllContent[item.id] ? " Show Less" : " See More"}
                    </span>
                  </p>
                  <p className={`mt-3 font-bold`}>
                    <span>Key Summary: </span> {item.summary}
                  </p>
                </div>
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
        <div className="flex mb-5" />

        {showMoreInfo && (
          <div>
            {evenChiefdoms.map((item) => (
              <div key={item.id} className="mb-8">
                <h1 className={` ${styles.heading2} `}>{item.title}</h1>
                <p
                  className={`font-poppins md:p-0 text-justify mt-5 md:mt-0 lg:mt-5 leading-8`}
                >
                  {showAllContent[item.id]
                    ? item.content
                    : `${item.content.substring(0, 500)}...`}{" "}
                  <span
                    className="text-blue-500 cursor-pointer ml-2"
                    onClick={() => toggleContentVisibility(item.id)}
                  >
                    {showAllContent[item.id] ? " Show Less" : " See More"}
                  </span>
                </p>
                <p className={`mt-3 font-bold`}>
                  <span>Key Summary: </span> {item.summary}
                </p>
              </div>
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
