import { konoMap } from "../assets";
import { chiefdomsList } from "../constants";
import YellowDivider from "./YellowDivider";
import styles, { layout } from "../styles";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetchAboutInfo } from "../api";

const HistoryBody = () => {
  const { isPending, error, data }: any = useQuery({
    queryKey: ["about", ""],
    queryFn: () => fetchAboutInfo(),
  });

  return (
    <section className={`${layout.section} `}>
      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Left: Map Image */}
        <img
          src={konoMap}
          alt="Kono Map"
          className="mt-1 w-full h-full rounded-lg transition-transform duration-300 hover:scale-105"
        />

        {/* Right: Description */}
        <div className="flex flex-col items-start">
          <YellowDivider />
          <h1 className={`${styles.heading1} text-center mb-8`}>
            {data && data.length > 0 ? data[0]?.title : "Our District"}
          </h1>
          <p className={`${styles.paragraph2} text-justify`}>
            {data && data.length > 0
              ? data[0]?.description
              : `Founded between the Fifteenth and Sixteenth centuries by
            Mali-Guinean descendants, Kono District is one of three districts in
            the Eastern region of Sierra Leone; sitting 360 kilometers away from
            the nation’s Capital, Freetown. Our District is renowned for its
            huge deposits of precious natural resources and cash crops such as:
            diamonds, gold, iron ore, clay, limestone, granite, hardwood, cocoa,
            coffee, rice, etc. However, our District became a self-administered
            territory in 1927, when the colonial administrative headquarter was
            moved to Sefadu. Before that, the district was administered from
            Panguma.`}
          </p>
        </div>
      </div>

      {/* Chiefdoms List with Links */}
      <p className={`${styles.paragraph2} my-5 font-bold`}>
        Our Chiefdoms include:{" "}
        {chiefdomsList.map((chiefdom, index) => (
          <span key={chiefdom.id}>
            <Link
              to={`/aboutus/officials#chiefdom-${chiefdom.id}`} // Include the hash for navigation
              className="text-blue-600 hover:underline"
            >
              {chiefdom.name}
            </Link>
            {index < chiefdomsList.length - 1 ? ", " : "."}
          </span>
        ))}
      </p>
    </section>
  );
};

export default HistoryBody;
