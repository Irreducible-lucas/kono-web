import { AnnualBudgets } from "../constants";
import { styles, layout } from "../styles";
import AnnualProject from "./AnnualProject";

const AnnualBudgetCard = () => {
  return (
    <section
      className={`${layout.section} bg-[url("/src/assets/report-on-projects-art.png")] bg-no-repeat bg-white bg-top`}
    >
      <div className={`grid gap-4`}>
        <div>
          <h2
            className={`${styles.heading1} md:leading-relaxed lg:leading-[70px] text-center text-black uppercase`}
          >
            Annual Budgets
          </h2>
        </div>
        <p
          className={`w-full md:w-3/4 lg:w-2/4 text-center mx-auto text-black ${styles.paragraph2}`}
        >
          The ethos and commitment of SEND Sierra Leone is to improve the
          quality of lives throughout the country.
        </p>
      </div>

      <div className="w-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-10 mt-8">
        {AnnualBudgets.map((project) => (
          <AnnualProject
            key={project.title}
            title={project.title}
            text={project.text}
            project_url={project.link_url}
          />
        ))}
      </div>
    </section>
  );
};

export default AnnualBudgetCard;
