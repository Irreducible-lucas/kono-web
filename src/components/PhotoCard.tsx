import styles from "@/src/styles";
export interface Photo {
  title: string;
  subtitle: string;
}

const PhotoCard = ({ title, subtitle }: Photo) => {
  return (
    <div className="w-full h-[19.5rem] mb-12 lg:mb-10 bg-white">
      <div className=" bg-[#F4F7FC] flex items-center p-5 rounded-md w-full h-[70%] ">
        {/* this is the containers for images  */}
      </div>
      <div className="py-2 px-3">
        <p
          className={`${styles.paragraph3} text-[#1B43C6] text-base font-normal my-2`}
        >
          {title}
        </p>
        <h6 className="font-manrope font-bold text-lg ">{subtitle}</h6>
      </div>
    </div>
  );
};

export default PhotoCard;
