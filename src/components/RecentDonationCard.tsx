import { dollar } from "../assets";

const RecentDonationCard = () => {
  return (
    <div className="flex items-center gap-3 my-1">
      <div className="flex items-center justify-center w-10 h-10 bg-[#E7EDFF] rounded-full">
        <img src={dollar} alt="Dolar" width={20} height={20} />
      </div>
      <div className="flex flex-1 items-center gap-10 md:justify-between ">
        <div>
          <h6 className="font-nunito font-normal text-sm leading-normal">
            Donation from xxx
          </h6>
          <p className="font-nunito font-normal text-xs text-[#718EBF]">
            28 Jan 2021
          </p>
        </div>
        <div>
          <p className="font-nunito font-normal text-sm leading-normal text-[#41D4A8] right-4 ">
            +$2,500
          </p>
        </div>
      </div>
    </div>
  );
};

export default RecentDonationCard;
