import { Link } from "react-router-dom";
import styles from "../styles";
import { News } from "../types";
import { useState } from "react";

const NewsCard = ({ image, title, desc, date, month }: News) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <Link to={"#"} target="_blank">
    <div className="w-full relative mt-5 shadow-2xl rounded-lg overflow-hidden rotate-on-hover">
      <div
        className="relative"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div>
          <img
            src={image ? image : "https://picsum.photos/200"}
            className={`h-[250px] object-cover object-center w-full rounded-md transition-opacity duration-300 `}
            style={{
              transform: isHovered ? "scale(1.05)" : "scale(1)",
              transition: "transform 0.3s, opacity 0.3s",
              opacity: isHovered ? 0.5 : 1,
              display: "block",
            }}
          />
        </div>

        <div className="absolute -bottom-[50px] left-4 flex flex-col rotate">
          <div className="bg-orange-500 text-white rounded-t-lg p-5 flex flex-col items-center">
            <span className="text-2xl font-bold">{date}</span>
          </div>
          <div className="bg-green-900 text-white rounded-b-lg px-5 py-2 flex flex-col items-center ">
            <span className="text-sm">{month}</span>
          </div>
        </div>
      </div>
      <div className="bg-white px-4 pb-6 pt-16 h-[300px] rounded-b-lg">
          <h2
            className={`${styles.paragraph} text-center lg:text-left text-black font-bold uppercase`}
          >
            {title}
          </h2>
        <p className="mt-4 text-black">{desc.substring(0, 250)}{desc.length > 250 ? "...": ""}</p>
      </div>
    </div>
        </Link>
  );
};

export default NewsCard;
