import { CorporateImage } from "@/src/assets";
import styles from "@/src/styles";

interface ProjectCardProps {
  title: string;
  image: string;
  report: string;
  category: string;
  status: string;
  description: string;
  budget: string;
  completion_rate: string;
}

const ProjectCard = ({ data }: { data: ProjectCardProps }) => {
  return (
    <div className="w-full bg-white grid grid-rows-[200px_1fr] rounded-bl-lg rounded-br-lg shadow-md max-h-[500px]">
      <div>
        {data.image ? (
          <img
            src={data.image}
            alt="Project Image"
            className="object-cover w-full h-full object-center"
          />
        ) : (
          <img
            className="object-cover w-full h-full object-center"
            src={CorporateImage}
            alt="Project Image"
          />
        )}
      </div>
      <div className="grid gap-4 p-4 grid-rows-[20px_1fr_30px] h-[300px]">
        <div className="flex justify-between items-center">
          <p
            className={`${styles.paragraph3} text-[#1B43C6] text-base font-normal`}
          >
            {data.category}
          </p>
          <p
            className={`${styles.paragraph3} text-gray-700 text-base font-normal`}
          >
            <span className="font-bold">Budget: </span>
            {data.budget}
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <h6 className="font-manrope font-bold text-lg ">{data.title}</h6>
          <p
            className={`${styles.paragraph3} text-gray-700 text-base font-normal`}
          >
            {data.description.substring(0, 300)}
            {data.description.length > 300 ? "..." : ""}
          </p>
        </div>
        <div className="flex justify-between items-center">
          <div className="py-1 px-2 rounded-lg bg-blue-100 text-blue-700 font-bold text-sm">
            {data?.status}
          </div>
          <p
            className={`${styles.paragraph3} text-gray-700 text-base font-normal`}
          >
            {data.completion_rate}% complete
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
