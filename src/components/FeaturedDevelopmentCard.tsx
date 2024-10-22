import { Link } from "react-router-dom";
import { useState } from "react";
import styles from "../styles";
import { FeaturedsDevelopment } from "../types";
import { corporate_identity, Christiana } from "../assets";

const FeaturedDevelopmentCard = ({
  title,
  image,
  url,
}: FeaturedsDevelopment) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className={`w-full relative bg-white overflow-hidden`}>
      <div className="p-2">
        <div
          className="relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="overflow-hidden relative">
            {" "}
            <img
              src={image}
              className={`object-contain object-center w-full rounded-md mb-3 transition-opacity duration-300`}
              style={{
                transform: isHovered ? "scale(1.05)" : "scale(1)",
                transition: "transform 0.3s, opacity 0.3s",
                opacity: isHovered ? 0.5 : 1,
                display: "block",
              }}
            />
          </div>
          <div className="absolute bottom-8 left-0 bg-red-400 z-10">
            <img
              src={isHovered ? Christiana : corporate_identity}
              className="w-28"
            />
          </div>
        </div>

        <Link to={url} target="_blank">
          <h2
            className={`${styles.paragraph} text-center lg:text-left text-black font-bold uppercase`}
          >
            {title}
          </h2>
        </Link>
      </div>
    </div>
  );
};

export default FeaturedDevelopmentCard;
