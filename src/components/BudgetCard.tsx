import { BudgetProjects } from "../constants";
import { styles, layout } from "../styles";
import BudgetProject from "./BudgetProject";
const BudgetCard = () => {
  return (
    <section
      className={`${layout.section} bg-[url("/src/assets/report-on-projects-art.png")] bg-no-repeat bg-white bg-cover`}
    >
      <div className={`grid gap-4`}>
        <div>
          <h2
            className={`${styles.heading1} md:leading-relaxed lg:leading-[70px] text-center text-black uppercase`}
          >
            Project Report and Update
          </h2>
        </div>
        <p
          className={`w-full md:w-3/4 lg:w-2/4 text-center mx-auto text-black ${styles.paragraph2}`}
        >
          Dedicated to improving lives, Kono District Council fosters growth and
          sustainable progress for the community
        </p>
      </div>

      <div className="w-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-10 mt-8">
        {BudgetProjects.map((project) => (
          <BudgetProject
            key={project.title}
            title={project.title}
            text={project.text}
            project_url={project.link_url}
            status={project.status}
          />
        ))}
      </div>
    </section>
  );
};
export default BudgetCard;
