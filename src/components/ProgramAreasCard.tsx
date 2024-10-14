import { ProgramCards } from "../constants";
import styles from "../styles";
import ProgramCard from "./ProgramCards";

const ProgramAreasCards = () => {
  return (
    <section className="mx-5 lg:mx-0 py-[40px] px-[40px] lg:px-[20px] lg:py-[40px] border-[1px] border-lightgrey my-10 ">
      <h2 className={`${styles.heading3} py-1 px-2 bg-black text-white mb-20`}>
        Babajide Sanwo-Olu ADMINISTRATION'S ACHIEVEMENTS ACCORDING TO THE
        T.H.E.M.E.S AGENDA
      </h2>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 ">
        {ProgramCards.map((program) => (
          <ProgramCard
            key={program.id}
            image={program.image}
            link_url={program.link_url}
          />
        ))}
      </div>
    </section>
  );
};

export default ProgramAreasCards;
