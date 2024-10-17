import styles, { layout } from "../styles";

const AgriculturalResources = () => {
  return (
    <section className={`${layout.section} `}>
      <h2
        className={`${styles.heading1} lg:text-4xl  text-center text-black font-bold uppercase mt-8`}
      >
        Resources for Farmers
      </h2>
    </section>
  );
};

export default AgriculturalResources;
