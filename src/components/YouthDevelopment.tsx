import { YouthDevelopments } from "../constants";
import { styles, layout } from "../styles";
import YouthDevelopmentCard from "./YouthDevelopmentCard";

const YouthDevelopment = () => {
  return (
    <section className={`bg-white py-[40px] ${layout.section}`}>
      <h2
        className={`${styles.heading1}  lg:text-3xl text-center text-black font-bold uppercase`}
      >
        Youth Development Initiatives{" "}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 md:gap-x-1 mt-3 ">
        {YouthDevelopments.map((development) => (
          <YouthDevelopmentCard
            key={development.id}
            title={development.title}
            image={development.image}
            url={development.url}
            description={development.description}
          />
        ))}
      </div>
    </section>
  );
};

export default YouthDevelopment;
