import styles from "@/src/styles";
import { NewsType } from "@/src/types";

const NewsCard = ({ data }: { data: NewsType }) => {
  return (
    <div className="w-full h-[19.5rem] mb-12 lg:mb-10 bg-white">
      <div className=" bg-[#F4F7FC] flex items-center p-5 rounded-md w-full h-[70%] ">
        <img
          className="object-cover w-full h-[200px] object-center"
          src={data?.image}
          alt="Project Image"
        />
      </div>
      <div className="py-2 px-3">
        <h6 className="font-manrope font-bold text-lg ">{data?.title}</h6>
        <p className={`${styles.paragraph3} text-base font-normal my-2`}>
          {data?.description}
        </p>
      </div>
    </div>
  );
};

export default NewsCard;
