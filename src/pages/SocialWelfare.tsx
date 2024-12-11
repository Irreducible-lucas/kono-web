import {
  AboutCarousal,
  ImplementationGist,
  PerformanceIndicator,
  WeWill,
} from "../components";
import { motion } from "framer-motion";
import {
  AgedWoman,
  ChildrenDatabase,
  DayReport,
  Dietary,
  DisabledChiild,
  Drug,
  hero2,
  Legal,
  Orphans,
  Psycho,
  PWD,
  Sensitization,
  Welfare,
  Welfares,
  Women,
  WomeninAgriculture,
  WomenYouth,
} from "../assets";
import styles, { layout } from "../styles";

import { PIData } from "../types";
import CouncilServicesCard from "../components/CouncilServicesCard";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHandHoldingHeart,
  faUsers,
  faBalanceScale,
  faHeart,
  faAppleAlt,
  faBullhorn,
  faGavel,
  faDatabase,
  faBuilding,
  faBookOpen,
  faFemale,
  faChalkboardTeacher,
  faHandsHelping,
} from "@fortawesome/free-solid-svg-icons";

const initiatives = [
  {
    title: "PWD Livelihood Support",
    description:
      "Provide livelihood support to persons living with disability for economic empowerment to 200, Vulnerable PWD's house hold heads;",
    icon: (
      <FontAwesomeIcon
        icon={faHandHoldingHeart}
        className="h-10 w-10 text-blue-500"
      />
    ),
  },
  {
    title: "Disability Day Celebration",
    description:
      "Celebrate International Day for Persons Living with Disability; beneficiaries would include 250 people (100 male and 150 female);",
    icon: (
      <FontAwesomeIcon icon={faUsers} className="h-10 w-10 text-green-500" />
    ),
  },
  {
    title: "Disability Act Awareness",
    description: "Conduct quarterly sensitization on the Disability Act, 2011",
    icon: (
      <FontAwesomeIcon
        icon={faBalanceScale}
        className="h-10 w-10 text-yellow-500"
      />
    ),
  },
  {
    title: "Aged Welfare Support",
    description:
      "Commemorate the International Day of the Aged & undertake monthly radio program on welfare issues for the Aged and all vulnerable persons;",
    icon: <FontAwesomeIcon icon={faHeart} className="h-10 w-10 text-red-500" />,
  },
  {
    title: "Dietary Aid for Vulnerable Elderly",
    description:
      "Provide diets to complement livelihood support to 30 most vulnerable older persons with disabilities in two chiefdoms (15 per chiefdom);",
    icon: (
      <FontAwesomeIcon icon={faAppleAlt} className="h-10 w-10 text-red-500" />
    ),
  },
  {
    title: "Youth Anti-Drug Campaigns",
    description:
      "Facilitate quarterly community awareness raising on the harmful effects of drugs (Kush) among youths in 13 chiefdoms",
    icon: (
      <FontAwesomeIcon icon={faBullhorn} className="h-10 w-10 text-blue-500" />
    ),
  },
  {
    title: "Legal Support for Vulnerable Groups",
    description:
      "Strengthen the legal and regulatory framework related to vulnerable peoples;",
    icon: (
      <FontAwesomeIcon icon={faGavel} className="h-10 w-10 text-green-500" />
    ),
  },
  {
    title: "Vulnerable Children Database",
    description: "Establish a database on vulnerable children and adolescents",
    icon: (
      <FontAwesomeIcon
        icon={faDatabase}
        className="h-10 w-10 text-yellow-500"
      />
    ),
  },
  {
    title: "Psycho-Social Centers",
    description:
      "Construct 7 & rehabilitate 5 psycho-social centers within the district",
    icon: (
      <FontAwesomeIcon
        icon={faBuilding}
        className="h-10 w-10 text-purple-500"
      />
    ),
  },
  {
    title: "Support for Aged & Disabled",
    description:
      "Provide livelihood support to 50 aged persons & 100 people with special needs;",
    icon: (
      <FontAwesomeIcon
        icon={faHandHoldingHeart}
        className="h-10 w-10 text-red-500"
      />
    ),
  },
  {
    title: "Rehabilitation & Education Aid",
    description:
      "Build 10 rehabilitation centers & provide educational support to 100 children with disabilities",
    icon: (
      <FontAwesomeIcon icon={faBookOpen} className="h-10 w-10 text-blue-500" />
    ),
  },
  {
    title: "Women Farmers & Disabled Support",
    description:
      "Support 120 women involved in farming & lend support to 200 children with disabilities;",
    icon: (
      <FontAwesomeIcon icon={faFemale} className="h-10 w-10 text-orange-500" />
    ),
  },
  {
    title: "Women’s Training Centers",
    description:
      "Maintain 5 women’s centers and construct 5 more skills training centers for women",
    icon: (
      <FontAwesomeIcon
        icon={faChalkboardTeacher}
        className="h-10 w-10 text-red-500"
      />
    ),
  },
  {
    title: "Social Welfare & Orphanages",
    description:
      "Construct 10 social welfare offices and 12 orphanage homes within the district",
    icon: (
      <FontAwesomeIcon
        icon={faHandsHelping}
        className="h-10 w-10 text-purple-500"
      />
    ),
  },
];

const performanceIndicatorData: PIData[] = [
  {
    title: "PWD Support Reports",
    description:
      "No. of people living with disability receiving livelihood supported.",
    progress: 100,
    color: "bg-blue-500",
    image: PWD,
  },
  {
    title: "Disability Sensitization Reports",
    description: "Reports on quarterly sensitizations on disability.",
    progress: 100,
    color: "bg-blue-500",
    image: Sensitization,
  },
  {
    title: "Disability Day Reports",
    description:
      "Reports on the commemoration of the International Day of People with Disability",
    progress: 100,
    color: "bg-blue-500",
    image: DayReport,
  },
  {
    title: "Aged Day Reports",
    description:
      "Reports on the commemoration of the International Day of the Aged including radio programmes conducted.",
    progress: 100,
    color: "bg-blue-500",
    image: AgedWoman,
  },
  {
    title: "Dietary Support Reports",
    description:
      "Reports on the ratio of people provided with diets to compliment livelihood.",
    progress: 100,
    color: "bg-blue-500",
    image: Dietary,
  },
  {
    title: "Drug Awareness Reports",
    description:
      "Reports on the no of community awareness raising activities conducted on the harmful effects of drug abuse and its related incidences.",
    progress: 100,
    color: "bg-blue-500",
    image: Drug,
  },
  {
    title: "Legal Framework Workshops",
    description:
      "Reports on the number of workshops held to strengthen the legal and regulatory frameworks of the vulnerable.",
    progress: 100,
    color: "bg-blue-500",
    image: Legal,
  },

  {
    title: "Children Database",
    description: "A database on children and adolescent issues",
    progress: 100,
    color: "bg-blue-500",
    image: ChildrenDatabase,
  },
  {
    title: "Psycho-Social Centers Evidence",
    description:
      "Evidence of the constructed psych-social centers as well as those rehabilitated.",
    progress: 100,
    color: "bg-blue-500",
    image: Psycho,
  },
  {
    title: "Aged & Special Needs Support",
    description:
      "No of Aged People receiving livelihood support as well as the ratio of people with special needs on support systems.",
    progress: 100,
    color: "bg-blue-500",
    image: AgedWoman,
  },
  {
    title: "Disabled Children Support",
    description:
      "No of Aged People receiving livelihood support as well as the ratio of people with special needs on support systems.",
    progress: 100,
    color: "bg-blue-500",
    image: DisabledChiild,
  },
  {
    title: "Women’s Agriculture Yields",
    description: "Yield of the produce of women in Agriculture.",
    progress: 100,
    color: "bg-blue-500",
    image: WomeninAgriculture,
  },
  {
    title: "Welfare & Orphanage Evidence",
    description:
      "Evidence of the constructed social welfare office as well as evidence of the constructed orphanages.",
    progress: 100,
    color: "bg-blue-500",
    image: Orphans,
  },
  {
    title: "Women’s & Youth Centers",
    description:
      "Evidence of women's centers maintained as well as the skill training centers and youth centers constructed.",
    progress: 100,
    color: "bg-blue-500",
    image: WomenYouth,
  },
];

const SocialWelfare = () => {
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
            image={Welfare}
            title={"Social Welfare"}
            content={
              "Explore social welfare initiatives in Kono District, focusing on improving community well-being through support programs for vulnerable populations, youth empowerment, healthcare access, and council-led projects aimed at fostering equity and social development."
            }
          />
        </div>
      </div>
      <div className={layout.section}>
        <CouncilServicesCard
          title="Empowering Communities through Welfare Support"
          description="Through strategic partnerships and effective engagement with our people, and strong accountability and culturally responsive working relationship will enable our district to realize a future in which all our people, families and communities are empowered to live good lives and choose their own futures from a secure foundation"
          description2="At Kono District Council we recognize the importance of activating and empowering our peoples’ human and social capital as it is critical to delivering sustainable development and to social outcomes for the district"
          description3="The Council is working to support the empowerment and prosperity of our people by building strong and inclusive communities, enhancing wellbeing and economic development, and empowering our communities to determine their own path to health and prosperity. An integrated procurement and support strategy for our people and their businesses, along with supporting overall district business growth, creating more inclusive workplaces, and providing training programs are key mechanism to achieve this outcome"
          image={Welfares}
          commitment="To support the empowerment and prosperity of our people by building strong and inclusive communities, enhancing wellbeing and economic development, and empowering our communities to determine their own path to wealth and prosperity."
        />
        <WeWill initiatives={initiatives} heading="Social Welfare Initiative" />
        <ImplementationGist
          heading="Implementation Gist"
          subheading1="We will collaborate with the line ministry and partner with both the private sector and development players to ensure that structures and established to pursue the objectives contained herein."
        />
        {/* Performance Indicators Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {performanceIndicatorData.map((data, index) => (
            <PerformanceIndicator
              key={index}
              data={data}
              className="bg-white shadow-lg"
              imageSize="w-40 h-40"
              progressHeight="h-1"
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default SocialWelfare;
