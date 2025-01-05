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
    <div className="w-full mb-12 lg:mb-10 bg-white rounded-bl-lg rounded-br-lg shadow-md">
      <div>
        {data.image ? (
          <img src={data.image} alt="Project Image" />
        ) : (
          <img
            className="object-cover w-full h-[200px] object-center"
            src={CorporateImage}
            alt="Project Image"
          />
        )}
      </div>
      <div className="grid gap-4 p-4">
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
        <h6 className="font-manrope font-bold text-lg ">{data.title}</h6>

        <p
          className={`${styles.paragraph3} text-gray-700 text-base font-normal`}
        >
          {data.description}
        </p>
        <div className="flex justify-between items-center">
          <div className="p-2 rounded-lg bg-blue-100 text-blue-700 font-bold text-sm">
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
