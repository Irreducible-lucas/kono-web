import { ManualImage4, Women } from "../assets";
import { Agricultural } from "../constants";
import styles, { layout } from "../styles";
import AgriculturalResourcesCard from "./AgriculturalResourcesCard";
import CouncilServicesCard from "./CouncilServicesCard";

const AgriculturalResources = () => {
  return (
    <section className={`${layout.section} `}>
      <h2
        className={`${styles.heading1} lg:text-3xl text-center text-black font-bold uppercase mt-8`}
      >
        Resources for Farmers
      </h2>
      <div className="grid grid-cols-2 lg:grid-cols-4">
        {Agricultural.map((resources) => (
          <AgriculturalResourcesCard
            key={resources.id}
            image={resources.image}
            url={resources.url}
            title={resources.title}
            description={resources.description}
          />
        ))}
      </div>
      <CouncilServicesCard
        title="Program to Support Local Agriculture"
        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem
          temporibus a, accusamus ratione totam obcaecati aliquid. Excepturi
          dolorum non culpa perferendis itaque necessitatibus, optio
          asperiores a debitis. Eum, necessitatibus modi. Lorem, ipsum dolor
          sit amet consectetur adipisicing elit. Non doloremque odit
          repellat dignissimos totam, tenetur quod libero molestiae aut eius
          minus, architecto hic ex rerum laborum dolorum distinctio commodi
          ut."
        image={ManualImage4}
      />

      <CouncilServicesCard
        title="Opportunities For Rural Development"
        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem
    temporibus a, accusamus ratione totam obcaecati aliquid. Excepturi
    dolorum non culpa perferendis itaque necessitatibus, optio
    asperiores a debitis. Eum, necessitatibus modi. Lorem, ipsum dolor
    sit amet consectetur adipisicing elit. Non doloremque odit
    repellat dignissimos totam, tenetur quod libero molestiae aut eius
    minus, architecto hic ex rerum laborum dolorum distinctio commodi
    ut."
        image={ManualImage4}
        reverse={true}
      />
    </section>
  );
};

export default AgriculturalResources;
