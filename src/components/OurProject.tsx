import styles, { layout } from "../styles";

const OurProject = () => {
  return (
    <section className={`${layout.section}`}>
      <h1 className={`${styles.heading1} text-center mb-8`}>Our Projects</h1>
      <p className={`${styles.paragraph2} text-justify`}>
        At KDC we work in partnership with our traditional leaders, industry
        leaders, civil society organisations, community groups and government
        ministries, departments and agencies to undertake projects to develop
        Kono. As a part of our role, we also monitor and report on major
        projects occurring throughout the district.
      </p>
      <p className={`${styles.paragraph2} text-justify`}>
        Check below to find out more about major projects occurring in the
        District, as well as our Council projects.
      </p>
    </section>
  );
};

export default OurProject;
