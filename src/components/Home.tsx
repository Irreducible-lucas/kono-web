import {
  HeroImage,
  HeroArtLeft,
  HeroArtBottomRight,
  HeroArtRight,
  hero2,
  hero3,
} from "../assets";
import styles from "../styles";
import Button from "./Button";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const Home = () => {
  return (
    <section className="bg-white h-[calc(100% - 70px)] md:h-96 lg:h-[500px] grid grid-cols-1 md:grid-cols-2 relative">
      <img
        src={HeroArtLeft}
        className="hidden md:block h-[300px] absolute top-0 left-0"
        alt=""
      />
      <img
        src={HeroArtBottomRight}
        className="hidden md:block absolute bottom-0 right-0 z-10 md:h-32 lg:h-[250px]"
        alt=""
      />
      <img
        src={HeroArtRight}
        className="hidden md:block absolute top-0 right-0 z-20 md:h-32 lg:h-[250px]"
        alt=""
      />
      <img
        className="md:hidden absolute top-0 left-0 object-cover object-center h-full z-0 opacity-20"
        src={HeroImage}
        alt="Good Governance and Equality"
      />
      <div className="py-8 md:py-0 px-4 md:pl-[40px] lg:pl-[80px] grid w-full h-full place-content-center gap-6 z-20">
        <div>
          <h3
            className={`${styles.paragraph2} text-secondary text-center md:text-left font-bold`}
          >
            WELCOME TO SEND SIERRA LEONE
          </h3>
          <h1
            className={
              "text-center md:text-left font-manrope text-2xl md:text-4xl lg:text-6xl leading-tight font-bold"
            }
          >
            Good Governance <br /> And Equality Of <br /> Men and Women
          </h1>
          <p className={`${styles.paragraph2} text-center md:text-left`}>
            Promoting good governance, empowering voices, ensuring
            accountability, delivering essential services, and striving for
            gender equality in Sierra Leone.
          </p>
        </div>
        <div className="w-full md:w-[200px] mx-auto md:mx-0">
          <Button text="Donate Now" url="/donate" />
        </div>
      </div>
      <div className="hidden md:block md:[clip-path:polygon(0%_0%,_100%_0%,_100%_100%,_10%_100%)] ">
        <Carousel
          showThumbs={false}
          autoPlay={true}
          infiniteLoop
          interval={3000}
          showArrows={true}
          showStatus={false}
        >
          <img
            className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-[500px]"
            src={HeroImage}
            alt="Good Governance and Equality"
          />

          <img
            className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-[500px]"
            src={hero2}
            alt="Good Governance and Equality"
          />

          <img
            className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-[500px]"
            src={hero3}
            alt="Good Governance and Equality"
          />
        </Carousel>
      </div>
    </section>
  );
};

export default Home;
