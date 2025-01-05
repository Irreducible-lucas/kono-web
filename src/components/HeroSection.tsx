import { useQuery } from "@tanstack/react-query";
import { fetchHeroData } from "../api";
import { Lillian } from "../assets";
import YellowDivider from "../pages/YellowDivider";
import styles from "../styles";

const HeroSection = () => {
  const { data }: any = useQuery({
    queryKey: ["hero", ""],
    queryFn: () => fetchHeroData(),
  });

  const title = data?.title ? data.title : "OFFICIAL KONO District Council";

  // Split the title at the second space
  const splitIndex = title.split(" ", 2).join(" ").length;
  const firstPart = title.slice(0, splitIndex);
  const secondPart = title.slice(splitIndex + 1);

  return (
    <section className="p-8 w-full pt-10">
      <div className="flex flex-col md:flex-row items-center justify-between  mb-20">
        <div className="">
          <h1 className="font-poppins font-medium text-[42px] md:text-[68px]  text-secondaryBlack md:leading-[80.8px] leading-[55px] w-full">
            <span className="text-gradient font-bold md:text-[60px]">
              {firstPart.trim()}
            </span>
            <br className="sm:block hidden " /> {secondPart.trim()}
          </h1>
          <YellowDivider />
          <p className={`${styles.paragraph} mb-10`}>
            {data?.message
              ? data?.message
              : `Working Together for a Stronger, Brighter Future for Kono`}
          </p>
        </div>
        <img
          src={data?.image ? data?.image : Lillian}
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
