import { testimonial } from "@/src/assets";

const TestimonialCard = () => {
  return (
    <div className="p-5 gap-2 bg-[#F4F7FC]">
      <img
        src={testimonial}
        className="w-24 h-24 rounded-full border-2 border-[#1B43C6] mb-5"
      />
      <h6 className="font-nunito font-semibold text-lg mb-3 ">
        Kiyotaka Ayanakoji
      </h6>
      <p className="font-nunito font-normal text-sm text-[#1B43C6] mb-10">
        Project
      </p>
      <p className="font-nunito font-normal text-base">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
    </div>
  );
};

export default TestimonialCard;
