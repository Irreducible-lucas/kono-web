import styles from "../styles";
import { ImplementationGistProps } from "../types";

const ImplementationGist = ({
  heading,
  subheading1,
  subheading2,
  subheading3,
}: ImplementationGistProps) => {
  return (
    <div className="my-10 lg:mt-20">
      <h1 className={`${styles.heading2} lg:text-[2rem] mb-5 text-center`}>
        {heading}
      </h1>
      <p className={`${styles.paragraph2} my-2 text-justify`}>{subheading1}</p>
      <p className={`${styles.paragraph2} my-2 text-justify`}>{subheading2}</p>
      <p className={`${styles.paragraph2} my-2 text-justify`}>{subheading3}</p>
    </div>
  );
};

export default ImplementationGist;
