import { Alice } from "../assets";
import styles, { layout } from "../styles";

const Welcome = () => {
  return (
    <section
      className={`${layout.section} flex flex-col lg:flex-row items-center gap-5`}
    >
      <img src={Alice} className="mt-20 w-full h-full lg:w-[50%] rounded-lg " />
      <div>
        <h1 className={`${styles.heading1} text-center mb-10 `}>
          Message From the District Chairman
        </h1>
        <p className={`${styles.paragraph2} text-slate-600`}>
          The Centre of Excellence has a duty to lead. Our government has taken
          the bold steps to always ensure that Lagos State maintains that
          leadership position. This is identified in the agenda of this
          government.
        </p>
      </div>
    </section>
  );
};

export default Welcome;
