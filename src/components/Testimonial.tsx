import Carousel, { ResponsiveType } from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import TestimonialCard from "./TestimonialCard";
import styles from "../styles";
import { useQuery } from "@tanstack/react-query";
import { fetchTestimonials } from "../api";

const Testimonial = () => {
  const responsive: ResponsiveType = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const { data, isLoading } = useQuery({
    queryKey: ["Testimonial", ""],
    queryFn: () => fetchTestimonials(),
  });

  // console.log(data.length);

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
        {isLoading ? (
          <p className="m-auto mt-4 max-w-lg text-center info-text">
            Fetching data
          </p>
        ) : (
          <Carousel
            responsive={responsive}
            removeArrowOnDeviceType={["tablet", "mobile"]}
            renderDotsOutside
            autoPlay={true}
            infinite
            // showDots
            swipeable
            className="custom-carousel"
            // customLeftArrow={<CustomLeftArrow />}
            // customRightArrow={<CustomRightArrow />}
          >
            {data &&
              data.length > 0 &&
              data.map((review: any, index: any) => (
                <TestimonialCard
                  key={index}
                  image={
                    review.image ? review.image : "https://picsum.photos/200"
                  }
                  name={review.name}
                  rating={review.rating}
                  feedback={review.text}
                />
              ))}
          </Carousel>
        )}
      </div>
    </div>
  );
};

export default Testimonial;
