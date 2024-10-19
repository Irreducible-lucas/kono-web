import { Link } from "react-router-dom";
import { AgriculturalResource } from "../types";

const AgriculturalResourcesCard = ({
  image,
  url,
  title,
  description,
}: AgriculturalResource) => {
  return (
    <div className={`w-full bg-white mt-5`}>
      <div className="p-2">
        <img
          src={image}
          className="object-contain object-center w-full rounded-md mb-3"
        />
        <div className="bg-slate-300 p-4 h-45 rounded-b-lg">
          <Link to={url} target="_blank">
            <h2
              className={`text-xs lg:text-sm  text-black font-bold uppercase`}
            >
              {title}
            </h2>
          </Link>
          <p className="my-2 ">{description}</p>
        </div>
      </div>
    </div>
  );
};
export default AgriculturalResourcesCard;
