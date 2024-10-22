import styles from "../styles";
import { SupportedProgram } from "../types";

const SupportedProgramCard = ({ title, image }: SupportedProgram) => {
  return (
    <div className="w-full">
      <div className="p-2">
        <img
          src={image}
          className="object-contain shadow p-1 object-center w-full rounded-md mb-3"
        />
        <h2
          className={`${styles.paragraph} text-center lg:text-left text-black font-bold uppercase`}
        >
          {title}
        </h2>
      </div>
    </div>
  );
};

export default SupportedProgramCard;
