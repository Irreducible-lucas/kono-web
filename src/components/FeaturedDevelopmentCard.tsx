import { Link } from "react-router-dom";
import styles from "../styles";
import { FeaturedsDevelopment } from "../types";
import { corporate_identity } from "../assets";

const FeaturedDevelopmentCard = ({
  title,
  image,
  url,
}: FeaturedsDevelopment) => {
  return (
    <div className={`w-full relative bg-white`}>
      <div className="p-2">
        <div className="relative">
          <img
            src={image}
            className="object-contain object-center w-full rounded-md mb-3"
          />
          <div className="absolute bottom-8 left-0 bg-red-400">
            <img src={corporate_identity} className="w-28" />
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
