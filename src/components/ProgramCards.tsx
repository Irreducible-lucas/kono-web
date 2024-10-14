import styles from "../styles";
import { ProgramCardProps } from "../types";
import { Link } from "react-router-dom";

const ProgramCard = ({ image, link_url }: ProgramCardProps) => {
  return (
    <Link to={link_url}>
      <div className=" w-full relative shadow-md">
        <div className="bg-primary w-full h-[300px] lg:h-[250px]">
          <img src={image} alt="" className="h-full w-full object-cover" />
        </div>
      </div>
      <div
        className={`absolute w-[50px] h-[50px] bg-secondary ${styles.flexCenter} top-[275px] lg:top-[275px] right-[30px] z-10`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6 text-white"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
          />
        </svg>
      </div>
    </Link>
  );
};

export default ProgramCard;
