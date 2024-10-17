import styles, { layout } from "../styles";
import EducationalPoliciesCard from "./EducationalPoliciesCard";
import { Education } from "../constants";

const EducationalPolicies = () => {
  return (
    <section className={`${layout.section} `}>
      <h2
        className={`${styles.heading1} text-center text-black font-bold uppercase`}
      >
        Updates on Education Policies
      </h2>
      <p className={`${styles.paragraph2} my-3`}>
        Here are the various updates on educational policies, Lorem ipsum dolor,
        sit amet consectetur adipisicing elit. Labore perspiciatis omnis
        tenetur, ab tempora quis natus enim incidunt optio, vel doloribus facere
        in reprehenderit porro aliquam iusto saepe, aliquid vitae?
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 ">
        {Education.map((policies) => (
          <EducationalPoliciesCard
            key={policies.id}
            title={policies.title}
            image={policies.image}
            url={policies.url}
            description={policies.description}
          />
        ))}
      </div>
    </section>
  );
};

export default EducationalPolicies;
