import styles from "../styles";
import { CouncilServiceCard } from "../types";

const CouncilServicesCard = ({
  image,
  title,
  description,
  description2,
  description3,
  commitment,
}: CouncilServiceCard) => {
  return (
    <div className="bg-white">
      <div className={`grid grid-cols-1 lg:grid-cols-2 gap-5 items-center`}>
        <div>
          <h1
            className={`${styles.heading1} text-black lg:text-[2.2rem] font-bold uppercase mb-5`}
          >
            {title}
          </h1>
          <p className={`${styles.paragraph2} text-gray-700`}>{description}</p>
          <p className={`${styles.paragraph2} text-gray-700 my-3`}>
            {description2}
          </p>
          <p className={`${styles.paragraph2} text-gray-700`}>{description3}</p>
          <h1 className={`${styles.heading2} mt-5`}>Our Commitment</h1>
          <p className={`${styles.paragraph2} text-gray-700`}>{commitment}</p>
        </div>
        <img src={image} className="w-full h-full" />
      </div>
    </div>
  );
};

export default CouncilServicesCard;
