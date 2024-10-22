import { Link } from "react-router-dom";
import styles from "../styles";
import { News } from "../types";
import { useState } from "react";

const NewsCard = ({ image, title, url, desc, date, month }: News) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div className="w-full relative mt-5 shadow-2xl rounded-lg overflow-hidden rotate-on-hover">
      <div
        className="relative"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="overflow-hidden relative h-[300px] lg:h-[350px]">
          {" "}
          <img
            src={image}
            className={`object-contain object-center w-full rounded-md mb-3 transition-opacity duration-300 `}
            style={{
              transform: isHovered ? "scale(1.05)" : "scale(1)",
              transition: "transform 0.3s, opacity 0.3s",
              opacity: isHovered ? 0.5 : 1,
              display: "block",
            }}
          />
        </div>

        <div className="absolute bottom-4 left-4 flex flex-col rotate">
          <div className="bg-orange-500 text-white rounded-t-lg p-5 flex flex-col items-center">
            <span className="text-2xl font-bold">{date}</span>
          </div>
          <div className="bg-green-900 text-white rounded-b-lg px-5 py-2 flex flex-col items-center ">
            <span className="text-sm">{month}</span>
          </div>
        </div>
      </div>
      <div className="bg-white p-4 h-52 rounded-b-lg">
        <Link to={url} target="_blank">
          <h2
            className={`${styles.paragraph} text-center lg:text-left text-black font-bold uppercase`}
          >
            {title}
          </h2>
        </Link>
        <p className="my-5 text-slate-400">{desc}</p>
      </div>
    </div>
  );
};

export default NewsCard;
