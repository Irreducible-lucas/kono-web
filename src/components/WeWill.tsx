import { ReactNode } from "react";
import styles from "../styles";

type Initiative = {
  title: string;
  description: string;
  icon: ReactNode;
};

interface WeWillProps {
  initiatives: Initiative[];
  heading: string;
  className?: string;
}

const WeWill = ({ initiatives, heading, className }: WeWillProps) => {
  return (
    <div className={`my-10 lg:mt-20 ${className || ""}`}>
      <h1 className={`${styles.heading2} lg:text-[2rem] mb-10 text-center `}>
        {heading}
      </h1>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        {initiatives.map((item, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg p-4 border border-gray-200 flex flex-col items-center"
          >
            {item.icon}
            <h2 className="text-lg md:text-xl font-medium mt-4 mb-2 text-center h-[84px] md:h-16 ">
              {item.title}
            </h2>
            <p className="text-gray-600 text-center">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeWill;
