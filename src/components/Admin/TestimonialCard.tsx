import { testimonial } from "@/src/assets";
import { FiStar } from "react-icons/fi";

const TestimonialCard = ({ data }: any) => {
  return (
    <div className="p-5 grid gap-4 bg-[#F4F7FC]">
      <img
        src={testimonial}
        className="w-24 h-24 rounded-full border-2 border-[#1B43C6]"
      />
      <div>
        <h6 className="font-nunito font-semibold text-lg mb-2">{data?.name}</h6>
        <p className="font-nunito font-normal text-base">{data?.text}</p>
      </div>
      <div className="flex gap-2">
        <FiStar size={25} strokeWidth={0} fill={"gold"} className="star" />
        <p className="font-bold">({data?.rating})</p>
      </div>
    </div>
  );
};

export default TestimonialCard;
