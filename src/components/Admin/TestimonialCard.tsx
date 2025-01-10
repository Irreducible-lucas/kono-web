import { FiStar } from "react-icons/fi";

const TestimonialCard = ({ data }: any) => {
  return (
    <div className="p-5 grid gap-4 grid-rows-[96px_1fr] bg-[#F4F7FC] h-[350px]">
      <img
        src={data?.image}
        className="w-24 h-24 mx-auto rounded-full border-2 border-[#1B43C6]"
      />
      <div className="h-full flex flex-col justify-between">
        <div>
          <h6 className="font-nunito font-semibold text-base mb-2">
            {data?.name}
          </h6>
          <p className="font-nunito font-normal text-base">
            {data?.text.substring(0, 100)}
            {data?.text.length > 100 ? "..." : ""}
          </p>
        </div>
        <div className="flex gap-2">
          <FiStar size={25} strokeWidth={0} fill={"gold"} className="star" />
          <p className="font-bold">({data?.rating})</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
