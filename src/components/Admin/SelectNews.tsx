import { gallery } from "@/src/assets";
import styles from "@/src/styles";

const SelectNews = () => {
  return (
    <div className="bg-white flex flex-col items-center justify-center w-full h-60 lg:h-full">
      <img src={gallery} className="w-16 h-16 mb-5 rounded-md" />
      <p className={`${styles.paragraph} text-xs  text-center text-[#849299]`}>
        Select a single to get more information
      </p>
    </div>
  );
};

export default SelectNews;
