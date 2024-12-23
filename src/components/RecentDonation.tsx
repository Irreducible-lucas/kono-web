import RecentDonationCard from "./RecentDonationCard";

const RecentDonation = () => {
  return (
    <div>
      <p className="font-nunito font-semibold text-base leading-normal mb-4 text-[#343C6A]">
        Recent Donations
      </p>
      <div className="bg-white rounded-lg p-3 grid gap-3">
        <RecentDonationCard />
        <RecentDonationCard />
        <RecentDonationCard />
      </div>
    </div>
  );
};

export default RecentDonation;
