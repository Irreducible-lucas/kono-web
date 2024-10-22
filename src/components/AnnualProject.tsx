import { Ledger, Zainab } from "../assets";
import styles from "../styles";
import { Link } from "react-router-dom";

const AnnualProject = ({
  title,
  text,
  project_url,
}: {
  title: string;
  text: string;
  project_url: string;
}) => {
  return (
    <div className="bg-white flex flex-col items-start shadow-lg">
      <img src={Zainab} className="w-full" />

      <Link className="w-full" to={project_url}>
        <div className="p-4 text-black w-full">
          <p className={`uppercase ${styles.heading3} mb-1`}>{title}</p>
          <p className="w-full h-[100px]">
            {text.substring(0, 50)} {text.length > 50 ? "..." : ""}
          </p>
          <div className="p-4 bg-gray-600 text-white flex items-center justify-between w-full">
            <p>Download</p>
            <svg
              width="8"
              height="12"
              viewBox="0 0 8 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 0L7 6L1 12"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default AnnualProject;
