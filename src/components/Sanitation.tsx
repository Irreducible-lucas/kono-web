import { ProblemImage1 } from "../assets";
import styles, { layout } from "../styles";

const Sanitation = () => {
  return (
    <section
      className={`${layout.section} grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-x-5 w-full`}
    >
      <div>
        <h2 className={`${styles.heading2} font-bold uppercase mb-5`}>
          Sanitation
        </h2>
        <div className="h-40 w-full">
          <img src={ProblemImage1} className="w-full h-full object-cover" />
        </div>
      </div>
      <div className="flex flex-col items-center justify-between">
        <h2 className={`${styles.heading2} font-bold uppercase mb-5`}>
          Water Supply
        </h2>
        <div className="h-40 grid grid-cols-2 gap-0">
          <img src={ProblemImage1} className="w-full h-full object-cover" />
          <img src={ProblemImage1} className="w-full h-full object-cover" />
        </div>
      </div>
    </section>
  );
};

export default Sanitation;
