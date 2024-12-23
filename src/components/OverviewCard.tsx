import { Overview } from "../types";

const OverviewCard = ({ name, value, number, imgURL, color }: Overview) => {
  return (
    <div
      className={`rounded-lg p-4 h-[110px] flex flex-col justify-between`}
      style={{ backgroundColor: color }}
    >
      <p className="font-nunito text-sm font-normal leading-normal w-full">
        {name}
      </p>
      <div className="flex items-center justify-between ">
        <p className="text-lg font-bold leading-normal">{number}</p>
        <div className="flex items-center justify-center gap-1">
          <p className="text-xs font-normal">{value}</p>
          <img src={imgURL} />
        </div>
      </div>
    </div>
  );
};

export default OverviewCard;
