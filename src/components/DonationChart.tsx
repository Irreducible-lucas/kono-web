import { chart } from "../assets";

const DonationChart = () => {
  return (
    <div>
      <p className="mb-4 font-nunito font-semibold text-base leading-normal text-[#343C6A]">
        Donation Amount (Monthly)
      </p>
      <img src={chart} alt="Donations Chart" className="w-full" />
    </div>
  );
};

export default DonationChart;
