import { Lillian } from "../assets";
import styles from "../styles";

const HeroSection = () => {
  return (
    <section className=" p-3 w-full pt-10 bg-blue-600 ">
      <div className="flex flex-col md:flex-row items-center justify-between  mb-20">
        <div className="">
          <h1
            className={`${styles.heading1} lg:text-8xl mb-10 lg:max-w-md hidden lg:flex`}
          >
            Kono Official Website
          </h1>
          <p className={`${styles.paragraph}`}>
            Working Together for a Stronger, Brighter Future for Kono
          </p>
        </div>
        <img src={Lillian} width={340} height={180} className="rounded-full" />
      </div>
    </section>
  );
};
export default HeroSection;
