import { ProjectFundings } from "../constants";
import { styles, layout } from "../styles";
import BudgetProject from "./BudgetProject";

const ProjectFundingCard = () => {
  return (
    <section
      className={`${layout.section} bg-[url("/src/assets/report-on-projects-art.png")] bg-no-repeat bg-white bg-cover`}
    >
      <div className={`grid gap-4`}>
        <div>
          <h2
            className={`${styles.heading1} md:leading-relaxed lg:leading-[70px] text-center text-black uppercase`}
          >
            Project Funding
          </h2>
        </div>
        <p
          className={`w-full md:w-3/4 lg:w-2/4 text-center mx-auto text-black ${styles.paragraph2}`}
        >
          Focused on sustainable development, Kono District Council seeks
          funding to drive impactful projects that transform lives.
        </p>
      </div>

      <div className="w-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-10 mt-8">
        {ProjectFundings.map((project) => (
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

export default ProjectFundingCard;
