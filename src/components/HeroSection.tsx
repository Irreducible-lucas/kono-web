import { Lillian } from "../assets";
import YellowDivider from "../pages/YellowDivider";
import styles from "../styles";

const HeroSection = () => {
  return (
    <section className="p-8 w-full pt-10">
      <div className="flex flex-col md:flex-row items-center justify-between  mb-20">
        <div className="">
          <h1 className="font-poppins font-medium text-[42px] md:text-[68px]  text-secondaryBlack md:leading-[80.8px] leading-[55px] w-full">
            <span className="text-gradient font-bold md:text-[60px]">
              OFFICIAL KONO
            </span>
            <br className="sm:block hidden" /> District Council
          </h1>
          <YellowDivider />
          <p className={`${styles.paragraph}`}>
            Working Together for a Stronger, Brighter Future for Kono
          </p>
        </div>
        <img
          src={Lillian}
          width={340}
          height={180}
          className="rounded-full"
          alt="img"
        />
      </div>
    </section>
  );
};
export default HeroSection;
