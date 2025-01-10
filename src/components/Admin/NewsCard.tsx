import styles from "@/src/styles";
import { NewsType } from "@/src/types";

const NewsCard = ({ data }: { data: NewsType }) => {
  return (
    <div className="w-full bg-white">
      <img
        className="object-cover w-full h-[200px] object-center"
        src={data?.image}
        alt="Project Image"
      />
      <div className="py-2 px-3 h-[250px] bg-slate-100">
        <h6 className="font-manrope font-bold text-base ">{data?.title}</h6>
        <p className={`${styles.paragraph3} text-base font-normal my-2`}>
          {data?.description.substring(0, 300)}
          {data?.description.length > 300 ? "..." : ""}
        </p>
      </div>
    </div>
  );
};

export default NewsCard;
