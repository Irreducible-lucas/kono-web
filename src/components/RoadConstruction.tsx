import styles, { layout } from "../styles";
import { RoadConstructions } from "../types";

const RoadConstruction = ({ title, description, image }: RoadConstructions) => {
  return (
    <section
      className={`${layout.section} grid grid-cols-1 lg:grid-cols-2 lg:items-center gap-5 lg:gap-10`}
    >
      <img src={image} className="w-full h-auto" />
      <div>
        <h1
          className={`${styles.heading2} text-black font-bold uppercase mb-5`}
        >
          {title}
        </h1>
        <p className={`${styles.paragraph2} `}>{description}</p>
      </div>
    </section>
  );
};

export default RoadConstruction;
