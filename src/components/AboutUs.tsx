import { Alice } from "../assets";
import YellowDivider from "../pages/YellowDivider";
import styles, { layout } from "../styles";
import {
  FaHandsHelping,
  FaBullhorn,
  FaAward,
  FaHandshake,
} from "react-icons/fa";

const AboutUs = () => {
  const roles = [
    {
      title: "Connection",
      icon: <FaHandsHelping className="text-blue-500 text-4xl" />,
      description:
        "We connect our district, people, and communities to opportunities, services, and funding.",
    },
    {
      title: "Promotion",
      icon: <FaBullhorn className="text-green-500 text-4xl" />,
      description:
        "We promote development, investment, and growth in jobs and economic activity.",
    },
    {
      title: "Championing",
      icon: <FaAward className="text-yellow-500 text-4xl" />,
      description:
        "We champion our district’s brand, assets, identity, and successes while tackling challenges.",
    },
    {
      title: "Collaboration",
      icon: <FaHandshake className="text-purple-500 text-4xl" />,
      description:
        "We collaborate to build relationships and respond to opportunities and challenges.",
    },
  ];

  return (
    <section className={`${layout.section}`}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <YellowDivider />
          <h2 className={`${styles.heading1} mb-8`}>Who We Are</h2>
          <p className={`${styles.paragraph2} mb-2 text-justify`}>
            Established in 2004, Kono District Council's role is to help our
            community grow, develop and take advantage of the benefits our
            district has to offer including its enviable natural resource,
            agriculture, lifestyle, natural landscapes, a growing tourism and a
            thriving economy.
          </p>
          <p className={`${styles.paragraph2} text-justify`}>
            We work for the Kono District stretching from Kenema District, the
            Republic of Guinea, Koinadugu District and Kailahun District.
          </p>
        </div>

        <img
          src={Alice}
          alt="Community Development"
          className="rounded-lg shadow-md"
        />
      </div>
      <div className="mt-10">
        <p
          className={`${styles.paragraph2} my-5  font-bold text-center text-gray-700`}
        >
          We are critical on-the-ground connectors, advocates, and influencers
          for the development of our district. We:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {roles.map((role, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-center justify-center gap-5 mb-4">
                <div>{role.icon}</div>
                <h3 className="text-xl font-semibold text-center text-gray-700 mb-2">
                  {role.title}
                </h3>
              </div>
              <p className="text-gray-600 text-center">{role.description}</p>
            </div>
          ))}
        </div>
        <div className="my-10">
          <p className={`${styles.paragraph2} mb-2 `}>
            Our Conclave of Councilors headed by a tireless and dynamic Chairman
            and Deputy, supported by a college of Paramount Chiefs (to render
            wise counsel) leads the Council in providing our overarching
            strategic and policy direction, in pursuit of our vision and goals
            for the district. Also, we are blessed with dedicated and passionate
            team of KDC staff, led by the Chief Administrator work within the
            district, across a diverse range of district projects, guided by
            this strategic direction and strong resolve to reclaim our beloved
            District which was once acclaimed to be the bread basket of Sierra
            Leone.
          </p>
          <p className={`${styles.paragraph2}`}>
            Our projects encompass all areas of the District, and our reach
            spans from individual guidance and support for local businesses and
            community groups, to influencing strategic priorities within higher
            levels of government. KDC’s work, while diverse and wide-ranging, is
            always centered on our vision for the development of the district.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
