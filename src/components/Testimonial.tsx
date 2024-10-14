import Carousel, { ArrowProps, ResponsiveType } from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { reviews } from "../constants";
import TestimonialCard from "./TestimonialCard";
import styles from "../styles";
import { ChevronLeft, ChevronRight } from "../assets";

// const CustomLeftArrow = ({ onClick }: ArrowProps) => {
//   return (
//     <button
//       className="absolute left-0 top-1/2 transform -translate-y-1/2  p-3  z-10 "
//       onClick={onClick}
//       aria-label="Previous Slide"
//     >
//       <img src={ChevronLeft} width={50} height={50} />
//     </button>
//   );
// };

// const CustomRightArrow = ({ onClick }: ArrowProps) => {
//   return (
//     <button
//       className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10"
//       onClick={onClick}
//       aria-label="Next Slide"
//     >
//       <img src={ChevronRight} width={50} height={50} />
//     </button>
//   );
// };

const Testimonial = () => {
  const responsive: ResponsiveType = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="py-[2rem] text-center px-10" id="client">
      <h3 className={`${styles.heading1} lg:text-6xl`}>
        What Our
        <span className="text-red-700"> Local Residents </span>
        Say?
      </h3>
      <p className="m-auto mt-4 max-w-lg text-center info-text">
        Hear genuine stories from our council projects have positively impacted
        them.
      </p>
      <div
        className="mt-20 px-8 mb-20"
        style={{ paddingBottom: "30px", position: "relative" }}
      >
        <Carousel
          responsive={responsive}
          removeArrowOnDeviceType={["tablet", "mobile"]}
          renderDotsOutside
          // showDots
          swipeable
          className="custom-carousel"
          // customLeftArrow={<CustomLeftArrow />}
          // customRightArrow={<CustomRightArrow />}
        >
          {reviews.map((review, index) => (
            <TestimonialCard
              key={index}
              image={review.image}
              name={review.name}
              rating={review.rating}
              feedback={review.feedback}
            />
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Testimonial;
