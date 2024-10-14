import { Link } from "react-router-dom";
import styles from "../styles";
import { News } from "../types";

const NewsCard = ({ image, title, url, desc, date, month }: News) => {
  return (
    <div className="w-full relative mt-5 shadow-2xl rounded-lg overflow-hidden">
      <div className="bg-primary w-full h-[300px] lg:h-[350px] relative">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover object-center rounded-t-lg"
        />
        <div className="absolute bottom-4 left-4 flex flex-col">
          <div className="bg-orange-500 text-white rounded-t-lg p-5 flex flex-col items-center">
            <span className="text-2xl font-bold">{date}</span>
          </div>
          <div className="bg-green-900 text-white  rounded-b-lg px-5 py-2 flex flex-col items-center">
            <span className="text-sm">{month}</span>
          </div>
        </div>
      </div>
      <div className="bg-white p-4 h-45 rounded-b-lg">
        <Link to={url} target="_blank">
          <h2
            className={`${styles.paragraph} text-center lg:text-left text-black font-bold uppercase`}
          >
            {title}
          </h2>
        </Link>
        <p className="my-5 text-slate-400">{desc}</p>
      </div>
    </div>
  );
};

export default NewsCard;
