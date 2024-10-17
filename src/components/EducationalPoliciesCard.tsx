import styles, { layout } from "../styles";
import { EducationalPolicy } from "../types";

const EducationalPoliciesCard = ({
  title,
  description,
  image,
}: EducationalPolicy) => {
  return (
    <section
      className={`${layout.section} flex items-center justify-center gap-5`}
    >
      <img
        src={image}
        className="rounded-full object-cover w-[120px] h-[120px]"
      />
      <div>
        <h6 className={`${styles.paragraph} font-bold uppercase`}>{title}</h6>
        <p className={`${styles.paragraph3}`}>{description}</p>
      </div>
    </section>
  );
};

export default EducationalPoliciesCard;
