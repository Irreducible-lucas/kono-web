import { useState } from "react";
import styles, { layout } from "../styles";
import { BylawProps } from "../types";

const ByLawCard = ({ image, title, description }: BylawProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleDescription = () => {
    setIsExpanded(!isExpanded);
  };

  const shortDescription = description.substring(0, 100);

  return (
    <div className="grid grid-cols-2 gap-x-3 p-5">
      <img src={image} alt={title} className="w-full h-auto object-cover" />
      <div>
        <h6 className={`uppercase ${styles.heading3} mb-1`}>{title}</h6>
        <p className="w-full h-auto">
          {isExpanded ? description : `${shortDescription}...`}
          <span
            onClick={toggleDescription}
            className="text-red-500 cursor-pointer ml-2"
          >
            {isExpanded ? "See Less" : "See More"}
          </span>
        </p>
      </div>
    </div>
  );
};

export default ByLawCard;
