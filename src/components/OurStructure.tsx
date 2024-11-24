import { OrganisationStructure } from "../assets";
import styles from "../styles";

const OurStructure = () => {
  return (
    <div className="mt-14">
      <h1 className={`${styles.heading1} text-center mb-8 lg:text-[2.3rem]`}>
        Our Structure
      </h1>
      <p className={`${styles.paragraph2} text-justify`}>
        The KDC Chairperson is the political head of the Council, assisted by a
        Deputy Chairperson, plus 24 Councilors and an employee of 14 core staff
        headed by the Chief Administrator.{" "}
      </p>
      <div className="flex items-center justify-center">
        <img src={OrganisationStructure} />
      </div>
    </div>
  );
};

export default OurStructure;
