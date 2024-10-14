import { HeroImage, hero2, hero3 } from "../assets";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import styles from "../styles";

const Project = () => {
  return (
    <section className="bg-white mx-5 lg:mx-0">
      <div className="">
        <h2 className={`${styles.heading3} py-1 px-2 bg-black my-5 text-white`}>
          Projects
        </h2>
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

export default Project;
