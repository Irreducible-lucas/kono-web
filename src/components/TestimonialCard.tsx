import { stars } from "../assets";
import { Testimonial } from "../types";

const TestimonialCard = ({ image, name, rating, feedback }: Testimonial) => {
  return (
    <div className="flex justify-center items-center flex-col gap-4 shadow-md">
      <img
        src={image}
        alt="customer"
        className="rounded-full object-cover w-[120px] h-[120px]"
      />
      <h3 className="font-palanquin text-2xl text-center font-bold">
        {name}
      </h3>
      <div className="h-[100px]"> 
      <p className="max-w-sm text-center info-text">{feedback.substring(0, 190)} {feedback.length > 100 ? "..." : ""}</p>
      </div>
      <div className="flex justify-center items-center gap-2.5">
        <img
          src={stars}
          width={24}
          height={24}
          alt="rating star"
          className="object-contain m-0"
        />
        <p className="text-xl font-montserrat text-slate-gray font-bold">({rating})</p>
      </div>
      
    </div>
  );
};
export default TestimonialCard;
