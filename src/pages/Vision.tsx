import { AboutCarousal } from "../components";
import { motion } from "framer-motion";
import {
  faHandshake,
  faEye,
  faUserTie,
  faCheckCircle,
  faBalanceScale,
  faLightbulb,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Globe2, Target } from "lucide-react";
import styles, { layout } from "../styles";
import { VisionMission } from "../assets";
import OurRole from "../components/OurRole";

const Vision = () => {
  const values = [
    {
      icon: (
        <FontAwesomeIcon icon={faHandshake} className="h-8 w-8 text-blue-600" />
      ), // Participation
      title: "Participation",
      description: "We work side by side with all relevant stakeholders.",
    },
    {
      icon: <FontAwesomeIcon icon={faEye} className="h-8 w-8 text-blue-600" />, // Transparency
      title: "Transparency",
      description:
        "We provide our stakeholders with the understanding of how we operate, and are always open to public inquiry.",
    },
    {
      icon: (
        <FontAwesomeIcon icon={faUserTie} className="h-8 w-8 text-blue-600" />
      ), // Professionalism
      title: "Professionalism",
      description:
        "We approach our work with the requisite skills and competencies.",
    },
    {
      icon: (
        <FontAwesomeIcon
          icon={faCheckCircle}
          className="h-8 w-8 text-blue-600"
        />
      ), // Integrity
      title: "Integrity",
      description:
        "We are honest, transparent, and accountable for our actions.",
    },
    {
      icon: (
        <FontAwesomeIcon
          icon={faBalanceScale}
          className="h-8 w-8 text-blue-600"
        />
      ), // Accountability
      title: "Accountability",
      description: "We take responsibility for our actions and inactions.",
    },
    {
      icon: (
        <FontAwesomeIcon icon={faLightbulb} className="h-8 w-8 text-blue-600" />
      ), // Innovation
      title: "Innovation",
      description:
        "We encourage creative solutions and continuous improvement in service delivery.",
    },
  ];

  return (
    <motion.div
      id="home"
      transition={{
        when: "beforeChildren",
        staggerChildren: 2,
      }}
      className="bg-white w-full overflow-hidden"
    >
      {/* carousal */}
      <div className={` ${styles.flexStart}`}>
        <div className={`${styles.boxWidth} `}>
          <AboutCarousal
            image={VisionMission}
            title={"Vision and Mission"}
            content={
              "Discover Kono District Council's vision for a prosperous future and its mission to empower communities through sustainable development and innovative initiatives."
            }
          />
        </div>
      </div>
      <div className={`${layout.section}`}>
        {" "}
        <div className="min-h-screen bg-white">
          {/* Vision & Mission Section */}
          <div className="bg-gray-50 py-16">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="grid gap-12 md:grid-cols-2">
                <div className="space-y-6">
                  <div className="inline-flex items-center rounded-full bg-blue-100 px-4 py-1">
                    <Target className="mr-2 h-5 w-5 text-blue-600" />
                    <span className="text-sm font-medium text-blue-600">
                      Our Vision
                    </span>
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900">
                    To be a progressive, peaceful, united, and cohesive district
                    that promotes economic development through
                    industrialization, agriculturalization, and services.
                  </h2>
                  <p className="text-lg text-gray-600">
                    The Kono District Council envisions a future where the
                    district becomes a model of development, prosperity, and
                    harmony. By focusing on economic growth through
                    industrialization, agricultural innovation, and the
                    expansion of services, we aim to elevate the standard of
                    living for all residents. Our vision is centered around
                    creating a cohesive community that works together to achieve
                    lasting peace, unity, and progress. We aspire to transform
                    the district into a vibrant hub of opportunity, where all
                    individuals can contribute to and benefit from sustainable
                    development. This vision drives our commitment to enhancing
                    both the local economy and the quality of life for every
                    member of the district.
                  </p>
                </div>
                <div className="space-y-6">
                  <div className="inline-flex items-center rounded-full bg-blue-100 px-4 py-1">
                    <Globe2 className="mr-2 h-5 w-5 text-blue-600" />
                    <span className="text-sm font-medium text-blue-600">
                      Our Mission
                    </span>
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900">
                    Working together to foster exceptional living standards and
                    inclusive development.
                  </h2>
                  <p className="text-lg text-gray-600">
                    We will work collectively as one District bringing together
                    our supportive traditional leaders, our conclave of
                    councilors, our dynamic support staff and every stakeholder
                    to provide exceptional standard of living for our people. We
                    will do this through effective dialogue, collaboration,
                    communication and mutual respect. We will build on the
                    District’s long standing traditions of brotherhood and
                    respect for the rule of law and the protection of the rights
                    and freedom of all, while fostering a culture of hard work,
                    creativity, innovation and development.
                  </p>
                  <p className="text-lg text-gray-600">
                    We are committed to equality of opportunity and to fostering
                    inclusivity, transparency and accountability, ensuring that
                    our people are granted equal opportunity to flourish and
                    prosper without hindrance. We believe that as diverse as our
                    District this strengthens our resolve to forge lasting
                    alliances, strengthen collaboration, mend broken
                    relationships and prosper together.
                  </p>
                  <p className="text-lg text-gray-600">
                    Our District’s distinctive mode of participative service
                    delivery and democratic engagement and honest communication
                    is, born out of the desire to change the narrative of public
                    service delivery in the country; we will continue to pioneer
                    servant leadership, honest, integrity trust and hard work.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <OurRole />

          {/* Values Section */}
          <div className="bg-white py-16">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900">
                  Our Core Values
                </h2>
                <p className="mt-4 text-lg text-gray-600">
                  Underpinning all our decisions and actions are our core
                  values:
                </p>
              </div>
              <div className="grid gap-8 md:grid-cols-3">
                {values.map((value, index) => (
                  <div
                    key={index}
                    className="rounded-xl border border-gray-200 p-8 text-center"
                  >
                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-50">
                      {value.icon}
                    </div>
                    <h3 className="mt-6 text-xl font-semibold text-gray-900">
                      {value.title}
                    </h3>
                    <p className="mt-4 text-gray-600">{value.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Vision;
