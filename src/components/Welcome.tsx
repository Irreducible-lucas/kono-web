import { konoMap } from "../assets";
import YellowDivider from "../pages/YellowDivider";
import styles, { layout } from "../styles";
import Button from "./Button";

const Welcome = () => {
  return (
    <section
      className={`${layout.section} flex flex-col lg:flex-row items-center gap-8`}
    >
      <img
        src={konoMap}
        alt="Kono Map"
        className="mt-1 w-full h-full lg:w-[50%] rounded-lg transition-transform duration-300 hover:scale-105"
      />
      <div className="flex flex-col items-start">
        <YellowDivider />
        <h1 className={`${styles.heading1} text-center mb-8`}>Our District</h1>
        <p className={`${styles.paragraph2} text-justify`}>
          Founded between the Fifteenth and Sixteenth centuries by Mali-Guinean
          descendants, Kono District is one of three districts in the Eastern
          region of Sierra Leone; sitting 360 kilometers away from the nation’s
          Capital, Freetown. Our District is renowned for its huge deposits of
          precious natural resources and cash crops such as: diamonds, gold,
          iron ore, clay, limestone, granite, hardwood, cocoa, coffee, rice,
          etc. However, our District became a self-administered territory in
          1927, when the colonial administrative headquarter was moved to
          Sefadu. Before that, the district was administered from Panguma.
        </p>
        <p className={`${styles.paragraph2} my-5 text-justify`}>
          Our district’s geography includes ancient mountain ranges that spring
          from Liberia through Kenema and stretches way beyond Soa Chiefdom,
          deep forests, highly productive farmlands, and breathtaking green
          scenery.
        </p>

        <Button text="Read More" isLink={true} location="/aboutus/history" />
      </div>
    </section>
  );
};

export default Welcome;
