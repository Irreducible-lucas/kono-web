import { SupportedPrograms } from "../constants";
import styles, { layout } from "../styles";
import SupportedProgramCard from "./SupportedProgramCard";

const SupportedProgram = () => {
  return (
    <div className={`${layout.section} `}>
      <h1 className={`${styles.heading1} text-center  `}>
        Programs Supported by the Council
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-x-1 mt-3 p-3">
        {SupportedPrograms.map((program) => (
          <SupportedProgramCard
            key={program.id}
            title={program.title}
            image={program.image}
          />
        ))}
      </div>
    </div>
  );
};

export default SupportedProgram;
