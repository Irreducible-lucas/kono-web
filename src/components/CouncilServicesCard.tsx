import styles, { layout } from "../styles";
import { CouncilServiceCard } from "../types";

const CouncilServicesCard = ({
  image,
  title,
  description,
  reverse,
}: CouncilServiceCard & { reverse?: boolean }) => {
  return (
    <div className="bg-white">
      <div
        className={`${
          layout.section
        } grid grid-cols-1 lg:grid-cols-2 gap-5 items-center ${
          reverse ? "lg:grid-cols-2-reverse" : ""
        }`}
      >
        {!reverse ? (
          <>
            <img src={image} className="w-full h-auto" />
            <div>
              <h1
                className={`${styles.heading2} text-black font-bold uppercase mb-5`}
              >
                {title}
              </h1>
              <p className={`${styles.paragraph2}  `}>{description}</p>
            </div>
          </>
        ) : (
          <>
            <div>
              <h1
                className={`${styles.heading2} text-black font-bold uppercase mb-5`}
              >
                {title}
              </h1>
              <p className={`${styles.paragraph2} `}>{description}</p>
            </div>
            <img src={image} className="w-full h-auto" />
          </>
        )}
      </div>
    </div>
  );
};

export default CouncilServicesCard;
