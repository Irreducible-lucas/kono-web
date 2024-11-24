import { motion } from "framer-motion";
import { hoverVariant } from "../variants";

interface Props {
  item: any;
  onClick: () => void;
  showButton?: boolean;
}

function ServiceCard({ item, onClick, showButton }: Props) {
  const { content, subtitle, title } = item;
  return (
    <motion.div
      variants={hoverVariant}
      whileHover={"hover"}
      className="flex flex-col gap-y-1 p-5 md:w-[47%] lg:w-[30%] xl:w-[23%] w-full justify-center items-center  rounded-[20px]  bg-white    m-2 md:h-[380px] shadow-lg "
    >
      <img src={item.img} alt="menu" className="h-[130px]" />
      <div className="flex flex-col justify-between gap-3">
        <p className="font-poppins font-bold text-[12px] md:text-[18px] text-center ">
          {subtitle || title}
        </p>
        <p className="font-poppins font-normal text-[12px] md:text-[16px]  text-center">
          {content.substring(0, 80)}
        </p>
      </div>

      {showButton && (
        <div className={`flex justify-between  text-linkactive  p-2 `}>
          <motion.button
            whileHover={{
              scale: 1.1,
              boxShadow: "0px 0px 8px rgb(255,255,255)",
            }}
            onClick={() => {
              onClick();
            }}
          >
            <span className="capitalize text-sm  md:text-md cursor-pointer">
              Read More
            </span>
          </motion.button>
        </div>
      )}
    </motion.div>
  );
}

export default ServiceCard;
