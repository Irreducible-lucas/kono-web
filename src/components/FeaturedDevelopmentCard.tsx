import { Link } from "react-router-dom";
import { useState } from "react";
import { FaPlane } from "react-icons/fa"; // Importing the airplane icon
import styles from "../styles";
import { ProjectType } from "../types";

const FeaturedDevelopmentCard = ({ data }: { data: ProjectType }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link to={"#"} target="_blank">
      <div className="w-full relative bg-white overflow-hidden shadow-lg">
        <div className="p-2">
          <div
            className="relative"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div className="overflow-hidden relative">
              <img
                src={data?.image ? data?.image : "https://picsum.photos/200"}
                className={`h-[250px] object-cover object-center w-full rounded-md mb-3 transition-opacity duration-300`}
                style={{
                  transform: isHovered ? "scale(1.05)" : "scale(1)",
                  transition: "transform 0.3s, opacity 0.3s",
                  opacity: isHovered ? 0.5 : 1,
                  display: "block",
                }}
              />
            </div>
            {/* Airplane Icon Container */}
            <div
              className="absolute left-2 -bottom-[25px] z-10 flex items-center justify-center w-16 h-16 bg-black "
              style={{ transform: "translateX(50%)" }}
            >
              <FaPlane
                className={`transition-transform duration-300 text-white text-4xl ${
                  isHovered ? "-rotate-90" : "rotate-0"
                }`}
              />
            </div>
          </div>

          <div className="px-4 pt-12 pb-4 h-[400px] lg:h-[350px]">
            <div className="max-h-[70px]">
            <h2
              className={`${styles.paragraph} text-center lg:text-left text-black font-bold uppercase`}
            >
              {data?.title.substring(0, 55)} {data?.title.length > 55 ? "..." : ""}
            </h2>
            </div>
            <div className="mt-4 h-[200px]">
            <p className="text-center lg:text-left">
              {data?.description.substring(0, 320)}
              {data?.description.length > 320 ? "..." : ""}
            </p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default FeaturedDevelopmentCard;
