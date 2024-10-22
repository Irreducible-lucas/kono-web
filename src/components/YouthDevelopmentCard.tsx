import { Link } from "react-router-dom";
import styles from "../styles";
import { YouthDevelopment } from "../types";

const YouthDevelopmentCard = ({
  title,
  image,
  url,
  description,
}: YouthDevelopment) => {
  return (
    <div className="w-full relative bg-white">
      <div className="p-2">
        <div className="relative group">
          <img
            src={image}
            className="object-contain object-center w-full rounded-md mb-3"
          />

          <div className="absolute bottom-10 left-3  transform translate-y-10 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-out">
            <Link to={url} target="_blank">
              <h2
                className={`${styles.paragraph} text-left text-white font-bold uppercase`}
              >
                {title}
              </h2>
              <p className={`${styles.paragraph3} text-left text-white`}>
                {description}
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default YouthDevelopmentCard;
