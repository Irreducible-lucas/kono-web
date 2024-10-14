import { HeroImage, hero2, hero3 } from "../assets";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const LandMarkImages = () => {
  return (
    <div className="">
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
  );
};

export default LandMarkImages;
