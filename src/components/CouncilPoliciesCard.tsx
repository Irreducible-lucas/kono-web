import { CouncilPolicy } from "../types";

const CouncilPoliciesCard = ({ image }: CouncilPolicy) => {
  return (
    <div className="w-full">
      <div className="p-2">
        <img
          src={image}
          className="object-contain object-center w-full rounded-md mb-3"
        />
      </div>
    </div>
  );
};
export default CouncilPoliciesCard;
