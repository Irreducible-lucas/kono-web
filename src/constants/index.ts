import {
  NewsImage1,
  NewsImage2,
  NewsImage3,
  NewsImage4,
  NewsImage5,
  NewsImage6,
  NewsImage7,
  NewsImage8,
  NewsImage9,
  NewsImage10,
  NewsImage11,
  Rebecca,
  Ramatu,
  ClimateImage,
  GenderEqualityImage,
  HealthImage,
  SustainableGrowthImage,
  EducationImage,
  NewsImage12,
  Health,
  Learn,
  Agricultiure,
  Infrastructure2,
  EnvironmentalService,
  Welfare,
  Structure,
  OngoingProject,
  Upcoming,
  Budget,
  Expenditure,
  Funding,
  Policy,
  ByLawOrdiance,
  HistoryImage,
  VisionMission,
  Official,
  CompleteProject,
  Report,
} from "../assets";
import {
  Link,
  ProgramCardProps,
  Review,
  FeaturedsDevelopment,
  FeaturedTypes,
  News,
  SupportedProgram,
  YouthDevelopment,
  EducationalPolicy,
  AgriculturalResource,
  CouncilPolicy,
  LawCard,
  ByLaw,
  BudgetProject,
  ExpenditureProject,
  DepartmentalContact,
  ServicesProps,
  ChiefdomProps,
  ProjectFunding,
  ProjectCategoryType,
  ProjectStatusType,
} from "../types";
import { CareLogo } from "../assets/logos";

export const links: Link[] = [
  {
    id: 1,
    text: "Home",
    url: "/home",
    child: null,
  },
  {
    id: 2,
    text: "About Us",
    url: "/aboutus",
    child: [
      {
        id: 1,
        text: "History of Kono",
        url: "/aboutus/history",
      },
      { id: 2, text: "Council Structure", url: "/aboutus/council-structure" },
      { id: 3, text: "Vision and Mission", url: "/aboutus/vision&mission" },
      { id: 4, text: "Officials and Chiefdoms", url: "/aboutus/officials" },
    ],
  },

  {
    id: 3,
    text: "Council Services",
    url: "/council-services",
    child: [
      {
        id: 1,
        text: "Healthcare",
        url: "/council-services/healthcare",
      },
      { id: 2, text: "Education", url: "/council-services/education" },
      {
        id: 3,
        text: "Agriculture and Livelihood",
        url: "/council-services/agriculture-livelihood",
      },
      {
        id: 4,
        text: "Infrastructure",
        url: "/council-services/infrastructure",
      },
      {
        id: 5,
        text: "Environmental Services",
        url: "/council-services/environmental-services",
      },
      {
        id: 6,
        text: "Social Welfare ",
        url: "/council-services/social-welfare",
      },
    ],
  },
  {
    id: 4,
    text: "Development Projects",
    url: "/development-projects",
    child: [
      {
        id: 1,
        text: "Ongoing-Projects",
        url: "/development-projects/ongoing-project",
      },
      {
        id: 2,
        text: "Completed Projects",
        url: "/development-projects/completed-project",
      },
      {
        id: 3,
        text: "Upcoming Project",
        url: "/development-projects/upcoming-project",
      },
    ],
  },
  {
    id: 5,
    text: "Reports and Financials",
    url: "/reports-financials",
    child: [
      {
        id: 1,
        text: "Annual Budget",
        url: "/reports-financials/annual-budget",
      },
      {
        id: 2,
        text: "Projects Reports and Update",
        url: "/reports-financials/projects-report",
      },
      {
        id: 3,
        text: "Project Funding",
        url: "/reports-financials/project-funding",
      },
      {
        id: 4,
        text: "Public Expenditure Report",
        url: "/reports-financials/public-expenditure",
      },
    ],
  },
  {
    id: 6,
    text: "Governance and policies",
    url: "/governance-policies",
    child: [
      {
        id: 1,
        text: "Council Policies",
        url: "/governance-policies/council-policies",
      },
      {
        id: 2,
        text: "Bylaws and Ordiances",
        url: "/governance-policies/bylaws-ordiances",
      },
    ],
  },
  {
    id: 7,
    text: "Contact Information",
    url: "/contact",
    child: null,
  },
];
export const reviews: Review[] = [
  {
    image: Rebecca,
    name: "Noheem Ayomikun",
    rating: 4.5,
    feedback:
      "The product not only met but exceeded my expectations. I'll definitely be a returning customer!",
  },
  {
    image: Ramatu,
    name: "Victoria Tosin",
    rating: 4.5,
    feedback:
      "Outstanding laptop performance and exceptional service  highly recommend!",
  },

  {
    image: Ramatu,
    name: "Kabir Olakunle",
    rating: 4.5,
    feedback:
      "The attention to detail and the quality of the product exceeded my expectations. Highly recommended!",
  },
];

export const ProgramCards: ProgramCardProps[] = [
  {
    id: 1,
    image: SustainableGrowthImage,
    link_url: "/program-areas/sustainable-growth",
  },
  {
    id: 2,
    image: HealthImage,
    link_url: "/program-areas/health",
  },
  {
    id: 3,
    image: EducationImage,
    link_url: "/program-areas/education",
  },
  {
    id: 4,
    image: GenderEqualityImage,
    link_url: "/program-areas/gender-equality",
  },
  {
    id: 5,
    image: ClimateImage,
    link_url: "/program-areas/climate",
  },
  {
    id: 6,
    image: ClimateImage,
    link_url: "/program-areas/climate",
  },
];

export const New: News[] = [
  {
    id: 1,
    date: 10,
    month: "October",
    desc: "....Governor of Lagos State.....",
    title: "Healthcare Facility Improvements",
    image: NewsImage1,
    url: "https://sendsierraleone.com/documents/2022NEWSLETTER.pdf",
  },
  {
    id: 2,
    date: 10,
    month: "October",
    desc: ".....Governor of Lagos State.....",
    title: "Infrastructure Upgrades",
    image: NewsImage2,
    url: "https://sendsierraleone.com/documents/Nyapuischoolbrochure.pdf",
  },
  {
    id: 3,
    date: 10,
    month: "October",
    desc: "....Governor of Lagos State.....",
    title: "Second Quarter Newsletter 2021. RESILIENCE THROUGH EMPOWERMENT",
    image: NewsImage3,
    url: "https://sendsierraleone.com/documents/Resiliance%20through%20Empowerment%20(Online).pdf",
  },
  {
    id: 4,
    date: 10,
    month: "October",
    desc: "....Governor of Lagos State.....",
    title: "Second Quarter Newsletter 2020. SURVIVING THROUGH COVID-19",
    image: NewsImage4,
    url: "https://sendsierraleone.com/documents/newsletter%202nd%20qta%20(update).pdf",
  },
  {
    id: 5,
    date: 10,
    month: "October",
    desc: "....Governor of Lagos State.....",
    title: "First Quarter Newsletter 2020, MAKING A CHANGE IN DIFFICULT TIMES.",
    image: NewsImage5,
    url: "https://sendsierraleone.com/documents/SEND%20Sierra%20Leone%201st%20Newsletter%202020.pdf",
  },
  {
    id: 6,
    date: 10,
    month: "October",
    desc: "....Governor of Lagos State.....",
    title:
      "April 2020 Newsletter, Debunking Things Believed to be True about the Corona Virus.",
    image: NewsImage6,
    url: "https://sendsierraleone.com/documents/myths.pdf",
  },
  {
    id: 7,
    date: 10,
    month: "October",
    desc: "Governor of Lagos State, Mr. Babajide Sanwo-Olu, flanked by Deputy Governor of Ogun State, Engr. (Mrs) Noimot Salako-Oyedele (right) and the Vice Chancellor,",
    title: "April 2020 Newsletter, Sensitization Manual on COVID-19 Pandemic",
    image: NewsImage7,
    url: "https://sendsierraleone.com/documents/corona.pdf",
  },
  {
    id: 8,
    date: 10,
    month: "October",
    desc: "Governor of Lagos State, Mr. Babajide Sanwo-Olu, flanked by Deputy Governor of Ogun State, Engr. (Mrs) Noimot Salako-Oyedele (right) and the Vice Chancellor,",
    title:
      "April 2020 Newsletter, NURTURING CHILDREN DURING THE COVID-19 PANDEMIC",
    image: NewsImage8,
    url: "https://sendsierraleone.com/documents/Nyapuischoolbrochure.pdf",
  },
  {
    id: 9,
    date: 10,
    month: "October",
    desc: "Governor of Lagos State, Mr. Babajide Sanwo-Olu, flanked by Deputy Governor of Ogun State, Engr. (Mrs) Noimot Salako-Oyedele (right) and the Vice Chancellor,",
    title:
      "March 2020 Newsletter, Statement by HIS EXCELLENCY, DR. JULIUS MAADA BIO",
    image: NewsImage9,
    url: "https://sendsierraleone.com/documents/Statement%20by%20His%20Excellency,%20Dr%20Julius%20Maada%20Bio,%20President%20of%20the%20Republic%20of%20Sierra%20Leone%20at%20the%20Second%20Press%20Conference%20on%20COVID-19.%20State%20House,%20Freetown%20-%2031%20March%202020.pdf",
  },
  {
    id: 10,
    date: 10,
    month: "October",
    desc: "Governor of Lagos State, Mr. Babajide Sanwo-Olu, flanked by Deputy Governor of Ogun State, Engr. (Mrs) Noimot Salako-Oyedele (right) and the Vice Chancellor,",
    title:
      "September 2018 Newsletter, Overcoming Social & Cultural Barriers to Political & Economic Empowerment!",
    image: NewsImage10,
    url: "https://sendsierraleone.com/documents/SEND%20Women%20Empowerment%20Newsletter%202018-2.pdf",
  },
  {
    id: 11,
    date: 10,
    month: "October",
    desc: "Governor of Lagos State, Mr. Babajide Sanwo-Olu, flanked by Deputy Governor of Ogun State, Engr. (Mrs) Noimot Salako-Oyedele (right) and the Vice Chancellor,",
    title: "2019 Newsletters, Strengthening SEND and safeguarding staff",
    image: NewsImage11,
    url: "https://sendsierraleone.com/documents/news%20letter%202019.pdf",
  },
  {
    id: 12,
    date: 10,
    month: "October",
    desc: "Governor of Lagos State, Mr. Babajide Sanwo-Olu, flanked by Deputy Governor of Ogun State, Engr. (Mrs) Noimot Salako-Oyedele (right) and the Vice Chancellor,",
    title: "Mid-year Newsletter 2024",
    image: NewsImage12,
    url: "https://sendsierraleone.com/documents/Mid-Year%20Newsletter%2024.pdf",
  },
];
export const FeaturedDevelopments: FeaturedsDevelopment[] = [
  {
    id: 1,
    title: "NEWSLETTER 2022-IMPACTING TODAY FOR A BETTER TOMORROW",
    image: NewsImage6,
    url: "https://sendsierraleone.com/documents/2022NEWSLETTER.pdf",
  },
  {
    id: 2,
    title: "Nyapui Senior Secondary School of Excellence Brochure",
    image: NewsImage6,
    url: "https://sendsierraleone.com/documents/Nyapuischoolbrochure.pdf",
  },
  {
    id: 3,
    title: "Second Quarter Newsletter 2021. RESILIENCE THROUGH EMPOWERMENT",
    image: NewsImage6,
    url: "https://sendsierraleone.com/documents/Resiliance%20through%20Empowerment%20(Online).pdf",
  },
  {
    id: 4,
    title: "Second Quarter Newsletter 2020. SURVIVING THROUGH COVID-19",
    image: NewsImage6,
    url: "https://sendsierraleone.com/documents/newsletter%202nd%20qta%20(update).pdf",
  },
  {
    id: 5,
    title: "First Quarter Newsletter 2020, MAKING A CHANGE IN DIFFICULT TIMES.",
    image: NewsImage6,
    url: "https://sendsierraleone.com/documents/SEND%20Sierra%20Leone%201st%20Newsletter%202020.pdf",
  },
  {
    id: 6,
    title:
      "April 2020 Newsletter, Debunking Things Believed to be True about the Corona Virus.",
    image: NewsImage6,
    url: "https://sendsierraleone.com/documents/myths.pdf",
  },
  {
    id: 7,
    title: "April 2020 Newsletter, Sensitization Manual on COVID-19 Pandemic",
    image: NewsImage7,
    url: "https://sendsierraleone.com/documents/corona.pdf",
  },
  {
    id: 8,
    title:
      "April 2020 Newsletter, NURTURING CHILDREN DURING THE COVID-19 PANDEMIC",
    image: NewsImage8,
    url: "https://sendsierraleone.com/documents/Nyapuischoolbrochure.pdf",
  },
  {
    id: 9,
    title:
      "March 2020 Newsletter, Statement by HIS EXCELLENCY, DR. JULIUS MAADA BIO",
    image: NewsImage9,
    url: "https://sendsierraleone.com/documents/Statement%20by%20His%20Excellency,%20Dr%20Julius%20Maada%20Bio,%20President%20of%20the%20Republic%20of%20Sierra%20Leone%20at%20the%20Second%20Press%20Conference%20on%20COVID-19.%20State%20House,%20Freetown%20-%2031%20March%202020.pdf",
  },
  {
    id: 10,
    title:
      "September 2018 Newsletter, Overcoming Social & Cultural Barriers to Political & Economic Empowerment!",
    image: NewsImage10,
    url: "https://sendsierraleone.com/documents/SEND%20Women%20Empowerment%20Newsletter%202018-2.pdf",
  },
  {
    id: 11,
    title: "2019 Newsletters, Strengthening SEND and safeguarding staff",
    image: NewsImage11,
    url: "https://sendsierraleone.com/documents/news%20letter%202019.pdf",
  },
  {
    id: 12,
    title: "Mid-year Newsletter 2024",
    image: NewsImage12,
    url: "https://sendsierraleone.com/documents/Mid-Year%20Newsletter%2024.pdf",
  },
];

export const FeaturedType: FeaturedTypes[] = [
  {
    id: 1,
    title: "All",
    url: "#",
  },
  {
    id: 2,
    title: "Aviation",
    url: "#",
  },
  {
    id: 3,
    title: "Education",
    url: "#",
  },
  {
    id: 4,
    title: "Health",
    url: "#",
  },
  {
    id: 5,
    title: "Empowerment",
    url: "#",
  },
  {
    id: 6,
    title: "Road",
    url: "#",
  },
  {
    id: 7,
    title: "Security",
    url: "#",
  },
];

export const SupportedPrograms: SupportedProgram[] = [
  {
    id: 1,
    image: SustainableGrowthImage,
    title: "Supported Program",
  },
  {
    id: 2,
    image: HealthImage,
    title: "Supported Program",
  },
  {
    id: 3,
    image: SustainableGrowthImage,
    title: "Supported Program",
  },
  {
    id: 4,
    image: GenderEqualityImage,
    title: "Supported Program",
  },
  {
    id: 5,
    image: ClimateImage,
    title: "Supported Program",
  },
  {
    id: 6,
    image: ClimateImage,
    title: "Supported Program",
  },
];

export const YouthDevelopments: YouthDevelopment[] = [
  {
    id: 1,
    title: "youth development",
    image: NewsImage6,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia alias, earum maxime suscipit atque dicta? Quod id quisquam ex, quaerat, sit non praesentium voluptatem nobis quam similique, soluta distinctio magnam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia alias, earum maxime suscipit atque dicta? Quod id quisquam ex, quaerat, sit non praesentium voluptatem nobis quam similique, soluta distinctio magnam.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia alias, earum maxime suscipit atque dicta? Quod id quisquam ex, quaerat, sit non praesentium voluptatem nobis quam similique, soluta distinctio magnam.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia alias, earum maxime suscipit atque dicta? Quod id quisquam ex, quaerat, sit non praesentium voluptatem nobis quam similique, soluta distinctio magnam.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia alias, earum maxime suscipit atque dicta? Quod id quisquam ex, quaerat, sit non praesentium voluptatem nobis quam similique, soluta distinctio magnam.",
    url: "#",
  },
  {
    id: 2,
    title: "youth development",
    image: NewsImage6,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia alias, earum maxime suscipit atque dicta? Quod id quisquam ex, quaerat, sit non praesentium voluptatem nobis quam similique, soluta distinctio magnam.",
    url: "#",
  },
  {
    id: 3,
    title: "youth development",
    image: NewsImage6,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia alias, earum maxime suscipit atque dicta? Quod id quisquam ex, quaerat, sit non praesentium voluptatem nobis quam similique, soluta distinctio magnam.",
    url: "#",
  },
  {
    id: 4,
    title: "youth development",
    image: NewsImage6,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia alias, earum maxime suscipit atque dicta? Quod id quisquam ex, quaerat, sit non praesentium voluptatem nobis quam similique, soluta distinctio magnam.",
    url: "#",
  },
  {
    id: 5,
    title: "youth development",
    image: NewsImage6,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia alias, earum maxime suscipit atque dicta? Quod id quisquam ex, quaerat, sit non praesentium voluptatem nobis quam similique, soluta distinctio magnam.",
    url: "#",
  },
  {
    id: 6,
    title: "youth development",
    image: NewsImage6,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia alias, earum maxime suscipit atque dicta? Quod id quisquam ex, quaerat, sit non praesentium voluptatem nobis quam similique, soluta distinctio magnam.",
    url: "#",
  },
];

export const Education: EducationalPolicy[] = [
  {
    id: 1,
    title: "Educational Policies",
    image: CareLogo,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia alias, earum maxime suscipit atque dicta? Quod id quisquam ex, quaerat, sit non praesentium voluptatem nobis quam similique, soluta distinctio magnam.",
    url: "#",
  },
  {
    id: 2,
    title: "Educational Policies",
    image: CareLogo,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia alias, earum maxime suscipit atque dicta? Quod id quisquam ex, quaerat, sit non praesentium voluptatem nobis quam similique, soluta distinctio magnam.",
    url: "#",
  },
  {
    id: 3,
    title: "Educational Policies",
    image: CareLogo,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia alias, earum maxime suscipit atque dicta? Quod id quisquam ex, quaerat, sit non praesentium voluptatem nobis quam similique, soluta distinctio magnam.",
    url: "#",
  },
  {
    id: 4,
    title: "Educational Policies",
    image: CareLogo,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia alias, earum maxime suscipit atque dicta? Quod id quisquam ex, quaerat, sit non praesentium voluptatem nobis quam similique, soluta distinctio magnam.",
    url: "#",
  },
];

export const Agricultural: AgriculturalResource[] = [
  {
    id: 1,
    image: NewsImage6,
    url: "#",
    title: "Acess to Agricultural Input",
    description: "Acess to Seed, fertilizers,tools, and machinery",
  },
  {
    id: 2,
    image: NewsImage6,
    url: "#",
    title: "Acess to Agricultural Input",
    description: "Acess to Seed, fertilizers,tools, and machinery",
  },
  {
    id: 3,
    image: NewsImage6,
    url: "#",
    title: "Acess to Agricultural Input",
    description: "Acess to Seed, fertilizers,tools, and machinery",
  },
  {
    id: 4,
    image: NewsImage6,
    url: "#",
    title: "Acess to Agricultural Input",
    description: "Acess to Seed, fertilizers,tools, and machinery",
  },
];

export const PolicyCard: CouncilPolicy[] = [
  {
    id: 1,
    image: SustainableGrowthImage,
  },
  {
    id: 2,
    image: HealthImage,
  },
  {
    id: 3,
    image: SustainableGrowthImage,
  },
  {
    id: 4,
    image: GenderEqualityImage,
  },
  {
    id: 5,
    image: ClimateImage,
  },
  {
    id: 6,
    image: ClimateImage,
  },
];

export const LawCards: LawCard[] = [
  {
    id: 1,
    title: "Rule 1",
    description:
      " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi ad quasi aspernatur quo dignissimos laudantium obcaecati velit accusamus eius, quam commodi odio? Provident deleniti ea mollitia numquam voluptates soluta dolores!",
    image: SustainableGrowthImage,
  },
  {
    id: 2,
    title: "Rule 2",
    description:
      " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi ad quasi aspernatur quo dignissimos laudantium obcaecati velit accusamus eius, quam commodi odio? Provident deleniti ea mollitia numquam voluptates soluta dolores!",
    image: HealthImage,
  },
  {
    id: 3,
    title: "Rule 3",
    description:
      " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi ad quasi aspernatur quo dignissimos laudantium obcaecati velit accusamus eius, quam commodi odio? Provident deleniti ea mollitia numquam voluptates soluta dolores!",
    image: SustainableGrowthImage,
  },
  {
    id: 4,
    title: "Rule 4",
    description:
      " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi ad quasi aspernatur quo dignissimos laudantium obcaecati velit accusamus eius, quam commodi odio? Provident deleniti ea mollitia numquam voluptates soluta dolores!",
    image: GenderEqualityImage,
  },
  {
    id: 5,
    title: "Rule 5",
    description:
      " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi ad quasi aspernatur quo dignissimos laudantium obcaecati velit accusamus eius, quam commodi odio? Provident deleniti ea mollitia numquam voluptates soluta dolores!",
    image: ClimateImage,
  },
  {
    id: 6,
    title: "Rule 6",
    description:
      " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi ad quasi aspernatur quo dignissimos laudantium obcaecati velit accusamus eius, quam commodi odio? Provident deleniti ea mollitia numquam voluptates soluta dolores!",
    image: ClimateImage,
  },
];
export const Laws: ByLaw[] = [
  {
    id: 1,
    image: NewsImage6,
    title: "Laws",
    description:
      " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi ad quasi aspernatur quo dignissimos laudantium obcaecati velit accusamus eius, quam commodi odio? Provident deleniti ea mollitia numquam voluptates soluta dolores!",
  },
  {
    id: 2,
    image: NewsImage6,
    title: "Laws",
    description:
      " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi ad quasi aspernatur quo dignissimos laudantium obcaecati velit accusamus eius, quam commodi odio? Provident deleniti ea mollitia numquam voluptates soluta dolores!",
  },
  {
    id: 3,
    image: NewsImage6,
    title: "Laws",
    description:
      " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi ad quasi aspernatur quo dignissimos laudantium obcaecati velit accusamus eius, quam commodi odio? Provident deleniti ea mollitia numquam voluptates soluta dolores!",
  },
  {
    id: 4,
    image: NewsImage6,
    title: "Laws",
    description:
      " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi ad quasi aspernatur quo dignissimos laudantium obcaecati velit accusamus eius, quam commodi odio? Provident deleniti ea mollitia numquam voluptates soluta dolores!",
  },
];

export const BudgetProjects: BudgetProject[] = [
  {
    id: 1,
    title: "Road Infrastructural Development",
    text: "Constructed and rehabilitate roads,bridges and culverts.",
    link_url: "/program-areas/climate/1",
    status: "completed",
  },
  {
    id: 2,
    title: "Education",
    text: "The establishment of a District Education Commission.",
    link_url: "/program-areas/climate/2",
    status: "completed",
  },
  {
    id: 3,
    title: "Food Security",
    text: "Sierra Leone's sustainable breadbasket through smart agriculture and innovative marketing.",
    link_url: "/program-areas/climate/3",
    status: "completed",
  },
  {
    id: 4,
    title: " Health & Welfare",
    text: "The existence of a healthcare division that has a great number of well equipped health facilities;a pool of highly trained an experienced healthcare workers across the district.",
    link_url: "/program-areas/climate/4",
    status: "completed",
  },
  {
    id: 5,
    title: "Water & Sanitation",
    text: "Ease of access to safe, sufficient, and affordable water for drinking, washing, sanitation, food preparation and personal hygiene in every home in the District.",
    link_url: "/program-areas/climate/4",
    status: "completed",
  },
  {
    id: 6,
    title: "Youth & Sports",
    text: "More than 20,000 thousand youth in sustainable employment and also possess competitive skills. Enhanced games and sporting activities. Having great proportion of youth competing internationally for diverse medals.",
    link_url: "/program-areas/climate/1",
    status: "completed",
  },
  {
    id: 7,
    title: "Social Welfare",
    text: "No. of people living with disability receiving livelihood supported.",
    link_url: "/program-areas/climate/2",
    status: "completed",
  },
  {
    id: 8,
    title: "Rural Energy",
    text: "Expanded supply of energy to a great no of new communities within our district.",
    link_url: "/program-areas/climate/3",
    status: "completed",
  },
  {
    id: 9,
    title: "Environment & Climate Change",
    text: " Having a strong partnership with key stakeholders on tackling greenhouse gas emission, effective afforestation, and the implementation of contemporary climate change adaption strategies in full gear.",
    link_url: "/program-areas/climate/4",
    status: "completed",
  },
  {
    id: 10,
    title: "Gender & Children",
    text: "Improved percentage of women and girls in elected and selected positions in the District. Reduced gende",
    link_url: "/program-areas/climate/4",
    status: "completed",
  },
  {
    id: 11,
    title: " Fire Services",
    text: "Having a fully operational District Disaster Management Council.",
    link_url: "/program-areas/climate/4",
    status: "completed",
  },
  {
    id: 12,
    title: "Governance Process Improvement",
    text: "Improved leadership response to local issues.",
    link_url: "/program-areas/climate/4",
    status: "completed",
  },
];
export const ExpenditureProjects: ExpenditureProject[] = [
  {
    id: 1,
    title: "Road Infrastructural Development",
    text: "Constructed and rehabilitate roads,bridges and culverts.",
    link_url: "/program-areas/climate/1",
    status: "completed",
  },
  {
    id: 2,
    title: "Education",
    text: "The establishment of a District Education Commission.",
    link_url: "/program-areas/climate/2",
    status: "completed",
  },
  {
    id: 3,
    title: "Food Security",
    text: "Sierra Leone's sustainable breadbasket through smart agriculture and innovative marketing.",
    link_url: "/program-areas/climate/3",
    status: "completed",
  },
  {
    id: 4,
    title: " Health & Welfare",
    text: "The existence of a healthcare division that has a great number of well equipped health facilities;a pool of highly trained an experienced healthcare workers across the district.",
    link_url: "/program-areas/climate/4",
    status: "completed",
  },
  {
    id: 5,
    title: "Water & Sanitation",
    text: "Ease of access to safe, sufficient, and affordable water for drinking, washing, sanitation, food preparation and personal hygiene in every home in the District.",
    link_url: "/program-areas/climate/4",
    status: "completed",
  },
  {
    id: 6,
    title: "Youth & Sports",
    text: "More than 20,000 thousand youth in sustainable employment and also possess competitive skills. Enhanced games and sporting activities. Having great proportion of youth competing internationally for diverse medals.",
    link_url: "/program-areas/climate/1",
    status: "completed",
  },
  {
    id: 7,
    title: "Social Welfare",
    text: "No. of people living with disability receiving livelihood supported.",
    link_url: "/program-areas/climate/2",
    status: "completed",
  },
  {
    id: 8,
    title: "Rural Energy",
    text: "Expanded supply of energy to a great no of new communities within our district.",
    link_url: "/program-areas/climate/3",
    status: "completed",
  },
  {
    id: 9,
    title: "Environment & Climate Change",
    text: " Having a strong partnership with key stakeholders on tackling greenhouse gas emission, effective afforestation, and the implementation of contemporary climate change adaption strategies in full gear.",
    link_url: "/program-areas/climate/4",
    status: "completed",
  },
  {
    id: 10,
    title: "Gender & Children",
    text: "Improved percentage of women and girls in elected and selected positions in the District. Reduced gende",
    link_url: "/program-areas/climate/4",
    status: "completed",
  },
  {
    id: 11,
    title: " Fire Services",
    text: "Having a fully operational District Disaster Management Council.",
    link_url: "/program-areas/climate/4",
    status: "completed",
  },
  {
    id: 12,
    title: "Governance Process Improvement",
    text: "Improved leadership response to local issues.",
    link_url: "/program-areas/climate/4",
    status: "completed",
  },
];

export const ProjectFundings: ProjectFunding[] = [
  {
    id: 1,
    title: "Road Infrastructural Development",
    text: "2,261,750,000 ",
    link_url: "/program-areas/climate/1",
    status: "completed",
  },
  {
    id: 2,
    title: "Education",
    text: "17,237,460,000 ",
    link_url: "/program-areas/climate/2",
    status: "completed",
  },
  {
    id: 3,
    title: "Food Security",
    text: "472,312,050",
    link_url: "/program-areas/climate/3",
    status: "completed",
  },
  {
    id: 4,
    title: " Health & Welfare",
    text: "210,377,402 ",
    link_url: "/program-areas/climate/4",
    status: "completed",
  },
  {
    id: 5,
    title: "Water & Sanitation",
    text: "39,820,555 ",
    link_url: "/program-areas/climate/4",
    status: "completed",
  },
  {
    id: 6,
    title: "Youth & Sports",
    text: "337,847,400 ",
    link_url: "/program-areas/climate/1",
    status: "completed",
  },
  {
    id: 7,
    title: "Social Welfare",
    text: "49,767,403",
    link_url: "/program-areas/climate/2",
    status: "completed",
  },
  {
    id: 8,
    title: "Rural Energy",
    text: "1,620,000,000 ",
    link_url: "/program-areas/climate/3",
    status: "completed",
  },
  {
    id: 9,
    title: "Environment & Climate Change",
    text: "38,951,000",
    link_url: "/program-areas/climate/4",
    status: "completed",
  },
  {
    id: 10,
    title: "Gender & Children",
    text: "1,435,000 ",
    link_url: "/program-areas/climate/4",
    status: "completed",
  },
  {
    id: 11,
    title: " Fire Services",
    text: "8,460,000 ",
    link_url: "/program-areas/climate/4",
    status: "completed",
  },
  {
    id: 12,
    title: "Governance Process Improvement",
    text: "437,526,000 ",
    link_url: "/program-areas/climate/4",
    status: "completed",
  },
];

export const DepartmentContacts: DepartmentalContact[] = [
  {
    id: 1,
    department: "Health Department",
    phone: "555-555-555",
    email: "info@konowebsite",
  },
  {
    id: 2,
    department: "Educational Department",
    phone: "555-555-555",
    email: "info@konowebsite",
  },
  {
    id: 3,
    department: "Finance Department",
    phone: "555-555-555",
    email: "info@konowebsite",
  },
];

export const aboutus: ServicesProps[] = [
  {
    img: HistoryImage,
    id: 1,
    title: "History of Kono",
    url: "history",
    content:
      "Discover the rich heritage of Kono District, from its cultural roots to its evolution as a key economic and social hub in Sierra Leone.",
  },

  {
    id: 2,
    img: Structure,
    title: "Council Structure",
    url: "council-structure",
    content:
      "Explore the structure of Kono District Council, from its leadership to its operational teams, driving strategic initiatives and community development across the district.",
  },

  {
    id: 3,
    img: VisionMission,
    title: "Vision and Mission",
    url: "vision&mission",
    content:
      "Discover Kono District Council's vision for a prosperous future and its mission to empower communities through sustainable development and innovative initiatives.",
  },

  {
    id: 4,
    img: Official,
    title: "Officials and Chiefdoms",
    url: "officials",
    content:
      "Learn about the officials and traditional leaders of Kono District, including council representatives and the paramount chiefs who guide and support the district's governance and development.",
  },
];
export const councilsevices: ServicesProps[] = [
  {
    img: Health,
    id: 1,
    title: "Healthcare",
    url: "healthcare",
    content:
      "Discover healthcare services in Kono District, including local facilities, public health initiatives, and council-supported programs aimed at improving community wellbeing.",
  },

  {
    id: 2,
    img: Learn,
    title: "Education",
    url: "education",
    content:
      "Learn about education in Kono District, including schools, youth development programs, and council-supported initiatives to enhance learning opportunities and promote academic growth.",
  },

  {
    id: 3,
    img: Agricultiure,
    title: "Agriculture and Livelihood",
    url: "agriculture-livelihood",
    content:
      "Explore agriculture and livelihood programs in Kono District, focusing on sustainable farming, community empowerment, and council-supported initiatives to boost economic resilience.",
  },

  {
    id: 4,
    img: Infrastructure2,
    title: "Infrastructure",
    url: "infrastructure",
    content:
      "Discover infrastructure development in Kono District, including council-led projects to improve roads, utilities, public buildings, and community facilities for sustainable growth.",
  },
  {
    id: 5,
    img: EnvironmentalService,
    title: "Environmental Services",
    url: "environmental-services",
    content:
      "Learn about environmental services in Kono District, focusing on conservation efforts, waste management, and council-supported initiatives aimed at preserving the district’s natural resources and promoting sustainable practices.",
  },
  {
    id: 6,
    img: Welfare,
    title: "Social Welfare",
    url: "social-welfare",
    content:
      "Explore social welfare initiatives in Kono District, focusing on improving community well-being through support programs for vulnerable populations, youth empowerment, healthcare access, and council-led projects aimed at fostering equity and social development.",
  },
];

export const developmentProject: ServicesProps[] = [
  {
    img: OngoingProject,
    id: 1,
    title: "Ongoing Projects",
    url: "ongoing-project",
    content:
      "Discover the ongoing projects in Kono District, focusing on current council-led initiatives that aim to improve infrastructure, education, healthcare, and economic development for the betterment of the community.",
  },

  {
    id: 2,
    img: CompleteProject,
    title: "Completed Projects",
    url: "completed-project",
    content:
      "Explore the completed projects in Kono District, highlighting the successful council-led initiatives that have enhanced infrastructure, public services, and community development, contributing to the district's growth and progress",
  },

  {
    id: 3,
    img: Upcoming,
    title: "Upcoming Projects",
    url: "upcoming-project",
    content:
      "Learn about the upcoming projects in Kono District, focusing on future council-led initiatives aimed at driving further development in infrastructure, education, healthcare, and community services.",
  },
];
export const reportFinancials: ServicesProps[] = [
  {
    img: Budget,
    id: 1,
    title: "Annual Budget",
    url: "annual-budget",
    content:
      "Explore Kono District Council's annual budget, detailing the allocation of funds for key development areas, including infrastructure, education, healthcare, and community services to support the district's growth and sustainability.",
  },

  {
    id: 2,
    img: Report,
    title: "Report and Update",
    url: "projects-report",
    content:
      "View project reports and updates from Kono District Council, offering detailed insights into the progress, outcomes, and future steps of ongoing and completed initiatives across various sectors.",
  },

  {
    id: 3,
    img: Funding,
    title: "Project Funding",
    url: "project-funding",
    content:
      "Learn about the funding for projects in Kono District, including sources of financial support, investments in development initiatives, and how the council allocates resources to drive community growth and infrastructure improvement.",
  },

  {
    id: 4,
    img: Expenditure,
    title: "Public Expenditure Report",
    url: "public-expenditure",
    content:
      "Access the project expenditure report for Kono District, providing detailed information on how funds are allocated and spent on various development initiatives, ensuring transparency and accountability in council-led projects.",
  },
];
export const governance: ServicesProps[] = [
  {
    img: Policy,
    id: 1,
    title: "Council Policies",
    url: "council-policies",
    content:
      "Learn about the policies of Kono District Council, detailing the guidelines and strategies that shape the council's approach to governance, community development, public services, and sustainable growth.",
  },

  {
    id: 2,
    img: ByLawOrdiance,
    title: "bylaws-ordiances",
    url: "Bylaws and Ordiances",
    content:
      "Explore the bylaws and ordinances of Kono District Council, which provide the legal framework for governing the district, regulating public conduct, and ensuring the orderly development and management of community resources and services.",
  },
];

export const chiefdomsList: ChiefdomProps[] = [
  {
    id: 1,
    title: "Fiama Chiefdom",
    name: "Fiama",
    image: "",
    content: `Fiama Chiefdom is a great place with lots of supernatural tales of black magic, sorcery and witchcraft in the District. The chiefdom traces its history from a warrior who was amongst the first settlers known as Aiah Kontandey M’briwa. According to sources, Aiah Kontandey M’briwa arrived with Kaimachiende M’ba who later reestablished in another territory that we now call Gbense Chiefdom. Sahr Kontandey M’briwa, a son of Aiah, eventually became the Paramount Chief when the British were formalizing chieftaincy as he was the first contact and he eventually broke off from Gbense to lead his own territory in 1913. 
The current Paramount Chief is called Sahr Yongai Kontaday Mbriwa; he was elected on the 16th January, 2024. The current speaker is called S. A. G. Fomba. 
The local government area of Fiama Chiefdom stretches more than 281 km² off of the East of Koidu City. Its capital, Njagbwema it’s about 81.9km (51 miles) which is about 2hr 17min by car or motor bike or 17hr 23min on foot from Koidu City. Njagbwema is the chiefdoms current chiefdom headquarters and the main urban centre; the chiefdom has - sections, - towns and several smaller communities in the chiefdom.
With more than 13,000 people, Fiama is amongst the densely populated chiefdoms in Kono District. Njagbwema being the chiefdom’s administrative, commercial and retail centre has about - Public Health Units (PHUs), - secondary and - primary schools. At the moment, the chiefdom does not have any cottage industry neither are there any major industrial activity, but it is largely dependent upon rural agriculture and retail trade.   
Moreover, with a land area of 47.77 km², there is no record of how much GDP the chiefdom contributes to the District. 
`,
    summary: `Population: 13,415[2021] Land Area: 281.5 km²; Population Density: 47.77/ km²; Annual Population Change: 2.3% [2015-2021].
`,
  },

  {
    id: 2,
    name: "Gbane-kandor",
    title: "Gbane-Kandor Chiefdom",
    image: "",
    content: `The Chiefdom of Gbane-Kandor stretches from the East of Koidu City around the north-east concourse of Soa Chiefdom to the Western basin of Mafindor Chiefdom. It boasts productive farmlands and picturesque scenery, and describes itself (“Kandor”) as the top of the two Gbanes in the district. 
The chiefdom traces its origin to a warrior named Mamina, who came to settle in the territory during the 19th century. According to popular tales, Mamina is said to have been born in a place called Fanda, but took the region, in a great battle from other residents, causing most of the residents to flee to Guinea. 
Mamina was succeeded by Kamachi M’bawa, who was recognized as the first Paramount Chief by the Birtish colonial rulers. The chiefdom only has one ruling house. The current Paramount Chief is called Sahr Edward M'bawa; he was elected on the 16th January, 2024. The speaker is called Kwigba K. Sansie.
The chiefdom capital is called Koardu. "Koar" means “big rice” while "du" means “town”. The place was named that way because it produces abundant rice crops. Koardu is the current chiefdom headquarters and the largest urban area in the chiefdom. Koardu is about 86.5 km (54 mile) away from Koidu City by car, i.e. 2hr 2min or 12hr 33min on foot. 
With a population of about 9,488 people, the chiefdom is made up of - sections, - towns and a couple of smaller communities. At the moment, the chiefdom has – PHUs, - secondary, - primary and – pre-primary schools. There are literally no industrial activities going on at the moment. 
With a land area of 103.5 km² there is no record of how much GDP the chiefdom contributes to the District. The main employment categories are very largely rural agriculture and retail trade.
`,
    summary: `Population: 9,488 [2021]; Land Area: 103.5 km²; Population Density: 91.67/km² [2021]
Annual Population Change: -3.7% [2015-2021]
`,
  },
  {
    id: 3,
    name: "Gbane",
    title: "Gbane Chiefdom",
    image: "",
    content: `With a population of about 28,043, Gbane is one of the densely populated chiefdoms in Kono District. The chiefdom lie South of Koidu City and borders with Guinea on the South-West. Gbane traces its origin to two key Kono warriors who demonstrated tremendous bravery and gallantry during the 19th century. However, there is no story of any migration from anywhere, but the Konos, part of the Mane language group, are thought to have been part of the Mane migration from present day Guinea during the 15th to 16th century. 
According to history, it was Ngobu Kakpata who first settled at Tombodu Mainfe (present day Mongor section). His deputy was Fenfa, who stayed at Kondendu. The first chief of the chiefdom was Ngobu Nyandmoqui, son of Kakpata, who became the first to be recognized by the British Colonial system. 
According to sources, Sahr Nyandamoqui III, the paramount chief during the war, fled the chiefdom for the duration of the war. Nyandamoqui means “fine human leopard”. The chiefdom only has one ruling house. The current Paramount Chief is called Aiah Bindi Feinfa Gongor; he was elected on the 16th January, 2024. The speaker is called Allieu Konkuwa (Ag).

The local government area of Gbane stretches about 363.3 km², which is about twice the size of its counterpart Gbane-Kandor, and it sits on the South-East of Koidu City. Its capital, Gandorhun sits 144km (90 miles) away from Koidu City. The chiefdom is made up of - sections, - towns and smaller communities. At the moment, the chiefdom has – PHUs, - secondary, - primary and – pre-primary schools. There are literally no industrial activities going on at the moment. 
With land area of about 363.3 km² and such a huge population, there is basically no record of how much is produced and the chiefdoms contribution to the GDP of the District. However, the main employment categories are still very largely rural agriculture and retail trade.
`,
    summary: `Population: 28,043 [2021]; Land Area: 363.3 km²; Population Density: 77.19/km² [2021];
 Annual Population Change: 2.3% [2015 → 2021]

`,
  },
  {
    id: 4,
    name: "Gbense",
    title: "Gbense Chiefdom",
    image: "",
    content: `Gbense chiefdom is one of two chiefdoms which surround Koidu City. Gbense sits on the North of Koidu. A great portion of the chiefdom is made up on metropolis. The chiefdom is renowned for having some of the largest deposits of diamonds in the District and the country as a whole.  
The chiefdom however, traces its origin to a great warrior called Kaimachiende M’ba. In our local parlance, Kaimachiende means “fearsome man”. Tales have it that during the 19th the chief in Gbense was also in charge of Fiama Chiefdom. Fiama lies adjacent to Gbense. 
During the 1900s, Kaimachiende M’ba was arrested by the British for the hut tax rebellion, allowing Tao Kabba to take over. After Tao Kabba was arrested again for financial fraud, the people of Fiama declared independence from Gbense in 1913, led by Aiah Kontandey M’briwa, who was believed to be a brother of Kaimachiende.  
There are basically four ruling houses in the chiefdom. The Korgbende’s which traces their lineage from Kaimachiende M’ba; the Njaakui Bona’s which traces their lineage from Njaakui Bona, a warrior who fought with Kaimachiende M’ba. He was elected in 1913 after the arrest of Tao Kabba; the Thorlie’s which traces their origin from Kamoh Thorlie who was elected in 1922 after Njaakui Bona. His family is not related to any others, but they retain close ties with the other families at Yardu.
Finally, the Tao Kabba family another great ruling house traces their origin from Tao Kabba. Kabba was a caretaker under Kaimachiende M’ba, and replaced him after Kaimachiende’s arrest. He was later deposed in 1913 for financial fraud.
The current Paramount Chief is called Komba Sangor Korgbende Kaimachiende; he was elected on the 16th January, 2024. The current speaker is called Aiah M. Kamanda. He inherited his Speaker from his elder brother PC Sahr Korgbende Kaimachiende. 
The local government area of Gbense stretches about 207.1 km² cutting through Koidu City. Yardu which means Lion Town, (Yar” (Lion) while “Du” (town)) is officially the headquarters of the chiefdom, but the Paramount Chief resides in Koidu City, taking advantage of urbanization. The chiefdom has - sections, - towns and smaller communities. There are – PHUs, - secondary, - primary and – pre-primary schools. 
With a population of about 21,146 and a land area of 207.1 km² there is literally no record of how much is produced and the chiefdoms GDP contribution to the District.
There are literally no industrial activities going on at the moment. The chiefdom currently receives revenues from small-scale artisanal diamond mining, retail trade and subsistence farming.

`,
    summary: `Population:  21,146 [2021]; Land Area: 207.1 km²; Population Density: 102.1/km² [2021;
Annual Population Change: 4.9%.
`,
  },
  {
    id: 5,
    name: "Gorama-kono",
    title: "Gorama-Kono Chiefdom",
    image: "",
    content: `Gorama-Kono Chiefdom stretches from the North of Lower Bambara chiefdom, in the Kenema District to the South-East of Nimiyama Chiefdom and the South of Nimikoro Chiefdom. As the name imply, the chiefdom is one of the places on the District that is revered for its thick forests, strategically positioning it for ecotourism, wildlife breeding and research as well as enviable furniture production for both national and international markets. 
The Chiefdom traces its origin to a group of Kono warriors who conquered the territory during the 19th century. The warriors were led by a brave commander called Konobundoh. His entourage includes Dugbawa, Manyeh, Sogboh, and Kanda. Konobundoh was the eldest and became the leader. The current Paramount Chief Sahr Cyrus Ngebuva Konobundoh II is the oldest paramount chief in Kono District and one of the oldest alive in the country. He was elected in 1984 after the long reign of Forewa. His speaker
Forewa who succeeded Konobundoh I is said to be one of his witch doctors and a closest aides. P.C. Forewa hailed from the Mandingo tribe and migrated to Kono District from a small village called Kakor in the neighbouring Guinea. At the unfortunate death of Paramount Chief Konobundoh in 1920, Forewa became a regent chief, due to the lack of an ageable successor and ruled for 63 years in a role.
The local government area of Gorama-Kono stretches about 319.8km² from lower Bambara chiefdom bothering Nimikoro and Tankoro Chiefdoms the South. The chiefdom headquarters is Bunabu, but was moved to Kangama shortly after the death of Konobundoh I. Gorama-Kono has - sections, - towns and smaller communities. There are – PHUs, - secondary, - primary and – pre-primary schools There is no record of any industrial activity going on at the moment, neither is there any data on the chiefdoms GDP contribution to the district. With a population of about 13.6 thousand and a land area of 319.8 km²; there is no industrial activities going on at the moment. The main source of livelihood has been artisanal mining, subsistence farming and retail trade.

`,
    summary: `Population: 13,603; Land Area: 319.8 km²; Population Density: 42.54/ km²; Annual Population Change: -4.8%
`,
  },
  {
    id: 6,
    name: "Kamaa",
    title: "Kamaa Chiefdom",
    image: "",
    content: `Presently spelled Kamara, due to the mispronunciation of the white man, the original word for the name of the chiefdom is Kamaa. Kamaa, in our Kono parlance simply means “go away from us.” The chiefdom traces its origin to a warrior named Hindowa Ngandi who was asked by his commanders to command in the territory. 
The first chief to be recognized by the British was Sumana Tieh, a son of Hindowa. At the death of PC Tieh, Ngekia his house traces the lineage of Paramount Chief Ngekia I, who was crowned in 1932.
During the civil war, it was S.G.M. Fania fled in 1992 and died in the United Kingdom in 1999. Tieh This house traces the lineage of Sumana Tieh the first chief to be recognized by the British. Their headquarters is at Tombodu. He is also thought to have descended from prominent warriors in the chiefdom. Their headquarters is also at Tombodu. 

`,
  },
  {
    id: 7,
    name: "Lei",
    title: "Lei Chiefdom",
    image: "",
    content: `Lei chiefdom strategically stretches from the greater-eastern basin of Kono District to the Western borders of the Republic of Guinea. This Chiefdom traces its origin to a Kissy warrior called Kogbanda, who migrated from present day Guinea. The story is that in the midst of other chiefs in the area, it was Kogbanda who had the courage to face the British when they arrived and was therefore, the first to be recognized as Paramount Chief. His house, the Mani family, has ruled ever since. His predecessor, Aiah Alpha Mani, fled the chiefdom in 1992 during the war before dying of natural causes in 2001. 
The current Paramount Chief is called   Fengai Mani; he was elected on the 16th January, 2024. The current speaker is called Joseph Mbowa(Ag). 
Lei Chiefdom is the second largest chiefdom by land area and the fifth most populated chiefdom in the District. The local government area stretches about 667.1km² bothering the Republic of Guinea on the East; Toli Chiefdom on the North; Soa and Fiama Chiefdoms on the South; Gbane and Gbense Chiefdoms on East; Gbane-Kandor and Mafindor Chiefdoms on the far South. The capital of the chiefdom is called Siama. 
The chiefdom is divided in to - sections, - towns and smaller communities. There are – PHUs, - secondary, - primary and – pre-primary schools There is no record of any industrial activity going on at the moment, neither is there any data on the chiefdoms GDP contribution to the district. With a population of about 28,939 and a land area of 667.1km²; there is no industrial activities going on at the moment. The main source of livelihood has been subsistence farming, cash crop growing and retail trade.
`,
    summary: `Population: 28,939; Land Area: 667.1km² Population Density: 43.38/ km² Annual Population Change: 1.2%
`,
  },
  {
    id: 8,
    name: "Mafindor",
    title: "Mafindor Chiefdom",
    image: "",
    content: `Mafindor chiefdom borders Guinea along the river Maleh. It traces its history to a warrior named Suluku Handupor, a Kono who led the chiefdom throughout the nineteenth century, and was about 88 years old when he was recognized by the British in 1891 and became the first Paramount Chief. In a famous battle, which likely occurred in the 1880s, he deterred the Sofa from the north led by Mori Turay. After the death of P.C. Sahr Lamin Musa in 1948, this chiefdom was briefly administrated by the Paramount Chief of Gbane Kandor Chiefdom. It became independent again under the leadership of P.C. Kekura Lyod Musa in 1959. PC Musa was succeeded by another warrior Paramount Chief called Abu M’bawa Kongorba, who was elected in 1986. P.C. Kongorba played a great leadership role in the early part of the Sierra Leone civil war. He fled to neighbouring Guinea during the war between 1997 and 2001. 
The current Paramount Chief is called Fengai Mani; he was elected on the 16th January, 2024. The current speaker is called Joseph Mbowa(Ag).
 The Chiefdom is one two smallest territories by land area in the District. Like Toli and Lei Chiefdoms, it is seated right on the borders of the Republic of Guinea. The local government area stretches about 81.06km² bothering Gbane-Kandor Chiefdom on the West and Lei on the North. The capital of the chiefdom is called Kamiendor. 
The chiefdom is divided in to - sections, - towns and smaller communities. There are – PHUs, - secondary, - primary and – pre-primary schools There is no record of any industrial activity going on at the moment, neither is there any data on the chiefdoms GDP contribution to the district. With a population of about 10,314 and a land area of 81.06km²; there is no industrial activities going on at the moment. The main source of livelihood has been subsistence farming, cash crop growing and retail trade.

`,
    summary: `Population: 10,314 [2021]; Land Area: 81.06km²; Population Density: 127.2/km²; Annual Population Change: -4.6%
`,
  },
  {
    id: 9,
    name: "Nimikor",
    title: "Nimikor Chiefdom",
    image: "",
    content: `Nimikoro Chiefdom is a strategic chiefdom in Kono District, renowned for hosting some of the largest mining conglomerates in the country. Also, the chiefdom is the place where the first diamond was discovered in 1930 in a town called Marmu; after a couple of years of exploration. Being the headquarters of a mining project funded by the Sierra Leone Selection Trust (SLST) (a subsidiary of Selection Trust (ST) of England), Nimikoro is one of the chiefdoms which has contributed greatly and still continues to the GDP of Sierra Leone.
This chiefdom however, traces its history to a Kono warrior from a nearby Mende area named Komba Foamansa Matturi. When Sierra Leone was declared a Protectorate in 1896, Komba Foamansa Matturi was the first Paramount Chief in Kono District that was crowned by the British.
 It was Foamansa Matturi I who led his fellows in fighting abilities and a diplomacy that helped bring stability to Kono District. Kono District continually became the target of invasions from both the Mendes and other tribe as well as by Samori Toure's Mandinka warriors from French Guinea (now Guinea).
P.C. Matturi's military success in defeating Samori Toure's warriors greatly enhanced his reputation both among his subjects and the Freetown-based Colony Government. 
During his rule, Foamansa Matturi initiated several development projects in his chiefdom, and the British authorities commended him for embarking on a road construction project linking the town of Jaiama to the other main towns in the Kono District. 
With peace and stability in the region, those who had fled returned and Matturi urged his people to re-build the town. This move towards reconstruction was abruptly interrupted when Samori Toure's Mandinka warriors attacked Kono in 1893 and occupied the villages of Tecuyama and Levuma. Matturi immediately informed Nyagua who, in turn, reported to the British Governor to Sierra Leone who was based in Freetown that his region had been invaded. However, by the time the British sent in their troops to repel the invaders, Matturi with the assistance of Nyagua had already succeeded in driving the Mandinka warriors from Kono.
He was put in charge of all the fighting forces, and he carried out his task effectively, returning with spoils of victory for Nyagua. Nyagua rewarded Matturi by giving him all of Southern Kono and by promising to protect the region from enemy attacks.
For years, the region of Kono was unstable because of frequent attacks by its neighbours. Many of the people living in Jaiama were forced to flee in the wake of such raids, and hide in caves in the Nimini hills before migrating secretly northwards towards Kuranko country.
Jaiama then was one of the regions controlled by the great Mende ruler, Nyagua. When Ndawa, a professional warrior, attacked the territories of Nyagua's father in the Upper Mende region, Nyagua called for assistance from the Kono people. Matturi, the leader of the Kono responded swiftly by mobilizing his Kono warriors on behalf of Nyagua.
Komba Foamansa Matturi was born in about 1855 in Jaiama, the capital of the chiefdom. His father was a prominent village elder in Jaiama and his mother was a trader. As a young boy, Komba quickly rose as the most dominant warrior of Jaiama village. Foamansa Matturi died at an old age in 1936.
His descendants, who have formed two families, have alternated rule over the chiefdom. The current chief, Aiah Denton Bona Foamansa III, of the Bona family, was elected in 2006. The Bona’s originated from Dodobona, who was the first son of Komba Foamansa Matturi.
The local government area of Nimikoro stretches about 569.2 km² from Nimiyama Chiefdom in the West, Sandor and Kamaa Chiefdoms on the North, Gbense on the North-East, Tankoro Chiefdom on the East and Gorama-Kono on the South. 
The chiefdom is divided in to - sections, - towns and smaller communities. There are – PHUs, - secondary, - primary and – pre-primary schools There is no record of any industrial activity going on at the moment, neither is there any data on the chiefdoms GDP contribution to the district. With a population of about 80,475 and a land area of 569.2km²; there is no industrial activities going on at the moment. There are several foreign gold and diamond mining companies operating in the chiefdom, which makes her one of the riches in Kono District. The main source of livelihood has been jobs from mining companies, subsistence farming, cash crop growing and retail trade.

`,
    summary: `Population: 80,475 [2021]; Land Area: 569.2km²; Population Density: 141.4/km²; Annual Population Change: 4.7%
`,
  },
  {
    id: 10,
    name: "Nimiyama",
    title: "Nimiyama Chiefdom",
    image: "",
    content: `Nimiyama Chiefdom is the gateway to Kono District coming from Tonkolili District. Famous for the great Sewafe Bridge and the Bikongor falls, Nimiyama has played pivotal roles in the liberation of Kono and the consolidation of power the District. Seating 26 miles away from Koidu City, the chiefdom has five sections: banfinfeh, ngaiyafie, njagbakahun, peyiefeh, and taima forest.
The Chiefdom traces its origin to two Kono warriors named Chika and Sogboh Torto, who were recognized as leaders by the British in the late 19th century. The current Paramount Chief is George Bockarie Torto, and was elected in 2009. 
The local government area of Nimiyama stretches about 363.4 km² from Tonkolili District; bother with Nimikor Chiefdom in the East and Sandor Chiefdom on the North. 
The chiefdom is divided in to 5 sections, - towns and smaller communities. There are – PHUs, - secondary, - primary and – pre-primary schools There is no record of any industrial activity going on at the moment, neither is there any data on the chiefdoms GDP contribution to the district. With a population of about 42,657 and a land area of 363.4 km²; there are no industrial activities on going in the chiefdom at the moment. There are a couple foreign gold and diamond mining companies operating in the chiefdom. The main source of livelihood has been jobs from mining companies, subsistence farming, cash crop growing and retail trade.

`,
    summary: `Population: 42,657 [2021]; Land Area: 363.4 km²; Population Density: 117.4/km²; Annual Population Change: 7.1%
`,
  },
  {
    id: 11,
    name: "Sandor",
    title: "Sandor Chiefdom",
    image: "",
    content: `Sandor is the largest chiefdom in Kono District both by land area and population. The chiefdom borders with Koinadugu District on the North-East, and five other chiefdom in Kono on the South-East basin. 
This chiefdom traces its lineage from a warrior named Fasulukuwa. Tales hold it that Fasulukuwa must have migrated from Mali to settle in the area. He established himself in the area after successfully defending against the Sofa invasion of the 1880s, and was recognized as the first Paramount Chief in 1896 by the British. A chiefdom report from 1899 says that Suluku, at his headquarters in Kayima, was the most powerful chiefdom of the era in Kono district, who once divided the region with Nyagua, another powerful chief at the time. 
The current Paramount chief is called Sheku Ahemd Tejan Fasuluku III; a prominent farmer who was elected in 2005. The Chief during the war, Kainbondo Sunduwa Fasuluku fled. It is suspected that he was viewed as illegitimate, and found it difficult to return after the war. During the war, the chiefdom was a site of the prominent Donso hunter groups, which organized to defend the chiefdom against the RUF. 
The local government area of Sandor is about 1,473 km² from Koinadugu District; stretching through five other chiefdom. 
The chiefdom is divided in to - sections, - towns and smaller communities. There are – PHUs, - secondary, - primary and – pre-primary schools There is no record of any industrial activity going on at the moment, neither is there any data on the chiefdoms GDP contribution to the district. With a population of about 94,515 and a land area of 1,473 km²; there are no records of industrial activities on going in the chiefdom at the moment. However, there are a couple foreign gold and diamond mining companies operating in the chiefdom. The main source of livelihood has been jobs from mining companies, subsistence farming, cash crop growing and retail trade.
`,
    summary: `Population: 94,515 [2021]; Land Area: 1,473 km²; Population Density: 64.16/km²; Annual Population Change: 0.84%
`,
  },
  {
    id: 12,
    name: "Soa",
    title: "Soa Chiefdom",
    image: "",
    content: `Soa is a great place with a high potential for commercial agriculture, water bottling factory, eco-tourism, mining and many more. Land types range from enviable scrubs to exotic rain forests and beautiful streams. There many ancient ranges of hills, believed to be filled with precious minerals, which could be used for hiking and camping. 
The chiefdom has a wonderful history that is traceable to a warrior named Gbendewa, who attained prominence defending the area from other groups. The current Paramount Chief is called Tamba Emmanuel Tokeh Foyoh. He was elected in 2009. 
The local government area of Soa is about 528.8 km² stretching from Lei Chiefdom on the North; Fiama and Gbane Chiefdoms on the West; and Gbane-Kandor Chiefdom on the East. The chiefdom capital is called Kainkordu. 
The chiefdom is divided in to - sections, - towns and smaller communities. There are – PHUs, - secondary, - primary and – pre-primary schools There is no record of any industrial activity going on at the moment, neither is there any data on the chiefdoms GDP contribution to the district. With a population of about 41,214 and a land area of 528.8 km²; there are no records of industrial activities on going in the chiefdom at the moment. However, there are a couple foreign gold mining companies operating in the chiefdom. The main source of livelihood has been jobs from mining companies, subsistence farming, cash crop growing and retail trade.

`,
    summary: `Population: 41,214 [2021]; Land Area: 528.8 km²; Population Density: 77.94/km²; Annual Population Change: 0.82%
`,
  },
  {
    id: 13,
    name: "Tankoro",
    title: "Tankoro Chiefdom",
    image: "",
    content: `Tankoro chiefdom is one of two chiefdoms which surround Koidu City. Unlike Gbense, Tankoro sits on the South of Koidu. The chiefdom is renowned for hosting one of the largest mining conglomerates arguably in Africa.   
The chiefdom traces its lineage to a group of Kono warriors who are said to have come from the south and driven the Mandingos from the land in the late 19th century. The chiefdom is undoubtedly quite rich, as it is the host of the Koidu Limited Kimberlite Project. The current Paramount Chief is called Paul Gabba Saquee. He was elected in 2006. 
According to sources, his predecessor, P.C. Joseph Saquee, fled between 1998 and 2002 to escape heavy fighting in the area. 
The local government area of Tankoro is about 174.2 km² stretching from Nimikor Chiefdom on the West; Fiama and Gbane Chiefdoms on the East; and Gorama-Kono Chiefdom on the South. 
The chiefdom is divided in to - sections, - towns and smaller communities. There are – PHUs, - secondary, - primary and – pre-primary schools There is no record of any industrial activity going on at the moment, neither is there any data on the chiefdoms GDP contribution to the district. With a population of about 17,268 and a land area of 174.2 km²; there are no records of industrial activities on going in the chiefdom at the moment. However, there are a couple foreign mining companies operating in the chiefdom. The main source of livelihood has been jobs from mining companies, subsistence farming, cash crop growing and retail trade.

`,
    summary: `Population: 17,268 [2021]; Land Area:  174.2 km²; Population Density: 99.13/km²; Annual Population Change: 13%
`,
  },

  {
    id: 14,
    name: "Toli",
    title: "Toli Chiefdom",
    image: "",
    content: `Sitting on the North of the District Toli Chiefdom is the smallest chiefdom in Kono district as well as population. The Chiefdom borders with Koinadugu District on the North and the Republic of Guinea on East. The people of Toli chiefdom traces their origin to a fierce warrior called Suluku who migrated from neighbouring Guinea. It is believed that Soluku settled first in Kuateneh in present day Sandor chiefdom, but later moved to Kondewakor, where Soluku’s brother Landa established himself as leader. 
Descendants of Suluku have ruled the chiefdom ever since. This chiefdom was at the end of the 19th century considered a part of Neya chiefdom, but broke off on its own at the time of Suluku. It is unclear what exact relationship Suluku had with the leaders of Neya at that time. There are basically two ruling houses: the Suluku’s and the Nya Songoh’s. 
The Suluku’s traces their lineage from Landa, a brother of Suluku. On the other hand, the Nya Songoh house traces their lineage from their great grandfather Nya Songoh, who lived at the time of Soluku in the late 19th century. Nevertheless, there are some controversies over their legitimacy to the Paramount chieftaincy.
The local government area of Toli is about 106.4 km² stretching from Koinadugu District to the north of Lei Chiefdom.  Its capital is called Kondewakor and it is the largest commercial spot in the chiefdom.
The chiefdom is divided in to - sections, - towns and smaller communities. There are – PHUs, - secondary, - primary and – pre-primary schools There is no record of any industrial activity going on at the moment, neither is there any data on the chiefdoms GDP contribution to the district. With a population of about 4,098 and a land area of 106.4 km²; there are no records of industrial activities on going in the chiefdom at the moment. However, the main source of livelihood has been subsistence farming, cash crop growing and retail trade.

`,
    summary: `Population: 4,098  [2021]; Land Area: 106.4 km²; Population Density: 38.52/km²; Annual Population Change:  -3.4%
`,
  },
  {
    id: 15,
    name: "Sahr Francis Gbondo",
    title: "Regent Paramount Chief of Lei Chiefdom",
    image: "",
    content: `Regent Paramount Chief Sahr Francis Gbondo serves as the acting traditional leader of Lei Chiefdom in Kono District, Sierra Leone. Following the passing of the previous paramount chief, he was appointed to oversee the chiefdom's affairs until a new paramount chief is elected. In this capacity, he has been instrumental in maintaining customary governance and ensuring continuity in leadership.
Chief Gbondo's leadership is characterized by a deep commitment to fostering peace, unity, and development within his chiefdom and beyond. He has been instrumental in initiatives aimed at enhancing local infrastructure, promoting education, and improving the livelihoods of his people.
Under his stewardship, Lei Chiefdom has navigated the transitional period with a focus on preserving cultural heritage and promoting community development. His role as regent paramount chief underscores the vital function of traditional leadership in Sierra Leone's governance framework, bridging the gap between customary practices and modern administrative structures.
`,
    summary: "",
  },
  {
    id: 16,
    name: "Tamba Emmanuel Torche Foryoh IV",
    title: "Paramount Chief of Soa Chiefdom",
    image: "",
    content: `Paramount Chief Tamba Emmanuel Torche Foryoh IV is a distinguished traditional leader in Sierra Leone, serving as the Paramount Chief of Soa Chiefdom in Kono District. He also held the esteemed position of Chairman of the Council of Paramount Chiefs for Kono District, a role that places him at the forefront of customary governance and community development in the district.
Chief Foryoh's leadership is characterized by a deep commitment to fostering peace, unity, and development within his chiefdom and beyond. He has been instrumental in initiatives aimed at enhancing local infrastructure, promoting education, and improving the livelihoods of his people. Notably, he played a pivotal role in the establishment of a community radio station in Soa Chiefdom, a project supported by Fambul Tok through the Human Security project. This initiative has provided a platform for local voices, facilitating communication and information dissemination within the community.
Under Chief Foryoh's stewardship, Soa Chiefdom has witnessed significant strides in development and social cohesion. His leadership continues to inspire and guide the people of Soa, ensuring that tradition and progress go hand in hand in the pursuit of a prosperous future.
`,
    summary: "",
  },
  {
    id: 17,
    name: "Alie Musa",
    title: "Paramount Chief of Mofindor Chiefdom",
    image: "",
    content: `Hon. Paramount Chief Alie Musa is the traditional leader of Mofindor Chiefdom, Kono District, where he has served with distinction as custodian of the land, traditions, and cultural heritage of his people. A respected statesman and community mobilizer, he is widely recognized for his role in promoting peace, unity, and grassroots development.
PC Musa has been instrumental in strengthening local governance, mediating conflicts, and advancing opportunities for youth and women in his chiefdom. His leadership balances the preservation of cultural values with the pursuit of modern development priorities, making him a pillar of stability and progress in both Mofindor Chiefdom and the wider Kono District.
`,
    summary: "",
  },
  {
    id: 18,
    name: "Abu Duramani Soloko",
    title: "Paramount Chief of Toli Chiefdom",
    image: "",
    content: `Paramount Chief Abu Duramani Soloko has served as the traditional leader of Toli Chiefdom since 2004. His leadership is characterized by a commitment to community development, cultural preservation, and ethical governance. As the deputy Chairman of the Council of Paramount Chiefs in Kono District, Chief Soloko plays a pivotal role in district-wide initiatives and policy discussions. His leadership continues to inspire progress and unity within his chiefdom and the broader Kono District.
`,
    summary: "",
  },
  {
    id: 19,
    name: "Edward Saa Mbawa",
    title: "Paramount Chief of Gbane-Kandor Chiefdom",
    image: "",
    content: `Edward Saa Mbawa is the esteemed Paramount Chief of Gbane-Kandor Chiefdom, a position he has held since his ascension in 2005. As a scion of the Mbawa ruling house, Chief Mbawa embodies a lineage renowned for its historical leadership, commitment to social cohesion, and preservation of cultural heritage in Kono District. His tenure represents a synthesis of traditional authority and progressive governance aimed at fostering sustainable development and inclusive community growth.
`,
    summary: "",
  },
  {
    id: 20,
    name: "George Bockarie Torto III",
    title: "Paramount Chief of Nimiyama Chiefdom",
    image: "",
    content: `Paramount Chief George Bockarie Torto III is the custodian of tradition and head of governance in Nimiyama Chiefdom, one of the largest and most mineral-rich chiefdoms of Kono District. As Paramount Chief, he presides over land administration, settlement of disputes, and the installation and supervision of section, town, and village chiefs. His office provides a bridge between the customary authorities of Nimiyama and the policies of government, civil society, and investors working in the district.
Chief Torto is also recognised in community life beyond chieftaincy: he has been associated with the Diamond Stars Football Club, serving as chairman and strengthening its role as a symbol of unity and pride for Kono youth. By supporting sports and youth development, he has sought to complement his administrative duties with initiatives that nurture talent and social cohesion.
Like many contemporary chiefs, his stewardship has been shaped by the pressures of managing land and mineral rights, balancing stakeholder interests, and maintaining harmony in a politically diverse environment. Public reports in recent years have raised questions about neutrality and community by-laws in the run-up to elections; these underscore the complex expectations facing paramount chiefs in Sierra Leone — to act as both impartial guardians of custom and active agents of progress.
Through a blend of traditional authority, civic engagement, and willingness to interact with modern governance, Paramount Chief George Bockarie Torto III continues to play an influential role in the affairs of Nimiyama Chiefdom and in the wider conversation on how Sierra Leone’s chieftaincy institutions can foster inclusive development and peace.
`,
    summary: "",
  },
  {
    id: 21,
    name: "Sangor Korgbende Kaimachende IV",
    title: "Paramount Chief of Gbense Chiefdom",
    image: "",
    content: `Paramount Chief Sangor Korgbende Kaimachende IV is the newly elected traditional leader of Gbense Chiefdom, located in Kono District in the Eastern Province of Sierra Leone. He was elected on January 16, 2024, securing a decisive victory with 76.1% of the vote, amounting to 982 valid votes cast in his favour.
Chief Kaimanchende’s election marks a significant milestone for Gbense Chiefdom, which had been without a paramount chief since the passing of Honourable P.C. Sahr Fengai K. Kaimachende III in January 2022. The election process had been delayed beyond the legally stipulated timeframe, but with the appointment of a Regent Chief, the chiefdom has now restored its traditional leadership.
As the paramount chief, Chief Kaimachende holds the responsibility of overseeing customary governance, land administration, and the resolution of disputes within the chiefdom. His leadership is expected to foster unity, promote development, and uphold the cultural heritage of Gbense Chiefdom.
The formal recognition and coronation of Chief Kaimachende are anticipated to take place in the near future, during which he will receive the staff of office, symbolizing his authority and commitment to serving the people of Gbense Chiefdom.
`,
    summary: "",
  },
  {
    id: 22,
    name: "Sahr Charles Quee",
    title: "Regent Paramount Chief of Kamara Chiefdom",
    image: "",
    content: `Regent Paramount Chief Sahr Charles Quee serves as the acting traditional leader of Kamara Chiefdom in Kono District, Sierra Leone. Following the passing of the previous paramount chief, he was appointed to oversee the chiefdom's affairs until a new paramount chief is elected. In this capacity, he has been instrumental in maintaining customary governance and ensuring continuity in leadership.
Chief Quee's leadership has been marked by a commitment to transparency and accountability. He welcomed a visit from the Anti-Corruption Commission (ACC), where he expressed gratitude for the commission's efforts and emphasized the importance of upholding integrity in managing public funds within the chiefdom.
Under his stewardship, Kamara Chiefdom has navigated the transitional period with a focus on preserving cultural heritage and promoting community development. His role as regent paramount chief underscores the vital function of traditional leadership in Sierra Leone's governance framework, bridging the gap between customary practices and modern administrative structures.
`,
    summary: "",
  },
  {
    id: 23,
    name: "Alhaji Sahr Cyrus Konobundoh II",
    title: "Paramount Chief of Gorama-Kono Chiefdom",
    image: "",
    content: `Paramount Chief Alhaji Sahr Cyrus Konobundoh is a revered traditional leader, statesman, and custodian of culture who has dedicated decades of service to the people of Gorama-Kono Chiefdom in Kono District, Eastern Sierra Leone. As the oldest Paramount Chief in Kono District (and arguably the entire country) he stands as a living embodiment of history, wisdom, and continuity in chieftaincy governance.
Installed many decades ago, PC Konobundoh has played a central role in shaping the social, political, and economic development of his chiefdom Kono District and the entire country as a whole. His leadership has been marked by resilience through the post-colonial era, Sierra Leone’s turbulent civil war period, and the current drive toward peacebuilding, community development, and democratic governance.
A practicing Muslim and respected elder, PC Alhaji Sahr Cyrus Konobundoh embodies integrity, patience, and deep wisdom. He is known for promoting peaceful coexistence among diverse ethnic and religious groups within Gorama-Kono and beyond. He has been pivotal in the installation of many of his new colleagues. His reign has been instrumental in preserving traditional values while adapting to the modern challenges of local governance, youth empowerment, and rural development.
As one of the longest-serving Paramount Chiefs in Sierra Leone, his voice carries moral authority in both traditional councils and national forums. His wealth of knowledge on customary law, land tenure, conflict resolution, and community mobilization makes him a highly respected figure among traditional leaders, government authorities, and international development partners.
Despite his age, PC Konobundoh continues to provide guidance to younger chiefs, community leaders, and the youth, emphasizing the importance of unity, hard work, and service to the people. His enduring leadership remains a source of pride not only to Gorama-Kono Chiefdom but to the entire Kono District and Sierra Leone as a whole.
`,
    summary: "",
  },
  {
    id: 24,
    name: "Chief Paul N’gabba Saquee V",
    title: "Hon. Paramount Chief of Tankoro Chiefdom",
    image: "/chiefs/ngabba.jpg",
    content: `Honourable Paramount Chief Paul N’gabba Saquee V is the esteemed traditional leader of Tankoro Chiefdom in Kono District, Eastern Province of Sierra Leone. Elected in 2006, he has been a prominent figure in both local governance and national politics. Serving as a Member of Parliament for Kono District, the P.C. holds significant influence in shaping policies that affect his community. His leadership is characterized by a commitment to cultural preservation, community development, and advocacy for the rights and welfare of his people.`,
    summary: "",
  },
  {
    id: 25,
    name: "Aiah Bindi Fainfa Ngongou II",
    title: "Paramount Chief of Gbane Chiefdom",
    image: "/chiefs/bindi.jpg",
    content: `Paramount Chief Aiah Bindi Fainfa Ngongou II is the traditional leader of Gbane Chiefdom, one of the chiefdoms in Kono District. He was elected to this role in 2010, continuing a legacy of local governance rooted in the Gbane warrior tradition.
Gbane Chiefdom traces its origins to two 19th-century Kono warriors: Ngombu Kakpata, who settled in the area known today as Tombodu Mainfe, and his deputy, Fainfa, who resided in Kondendu. The lineage of Fainfa gave rise to the house of Ngongou, among others, and Aiah Bindi Fainfa Ngongou comes from this ruling family line.
During his tenure, PC Aiah Bindi Fainfa Ngongou has carried the responsibilities typical of Paramount Chieftaincy in Sierra Leone: customary law adjudication, land administration, overseeing sub-chiefs (town, village, section heads), and mediating between the state, private interests (such as mining or development), and the local population. While specific development projects under his leadership are not widely documented in publicly available sources, his role is significant in maintaining local social order, preserving traditions, and ensuring local governance continues in the post-conflict recovery period in Kono.
He is also noted in local administrative listings: in the Kono District Chiefdoms directory, Chief Ngongou is listed as the Paramount Chief of Gbane Chiefdom, with a Chiefdom Speaker named Sahr Allieu Konguwah. 
Currently, P.C. Ngougou is the Secretary of the Kono Council of Paramount Chiefs as well as Secretary for the Council of Paramount Chiefs, Eastern region.
As a leader of the Ngongou ruling house, his legitimacy draws on both historical lineage (as descendant of the Fainfa-Ngougou ruling house) and the formal electoral tradition for paramount chiefs in Sierra Leone. His leadership reflects both continuity with local history and the challenges of modernizing governance while honouring customary authority.
`,
    summary: "",
  },
  {
    id: 26,
    name: "Sheku Ahmed Tejan Fasuluku III",
    title: "Hon. Paramount Chief Sandor Chiefdom",
    image: "/chiefs/ahmed.jpg",
    content: `Honourable Paramount Chief Sheku Ahmed Tejan Fasuluku III is a distinguished traditional ruler, environmentalist, and national leader whose service to Sierra Leone spans more than two decades. Since 2005, he has been Paramount Chief of Sandor Chiefdom in Kono District, a position through which he has provided stewardship in local governance, cultural preservation, and community development. His leadership extends beyond his chiefdom, as he was elected in 2017 as the National Chairman of the National Council of Paramount Chiefs, thereby becoming the foremost voice of traditional authorities across the country.
Chief Fasuluku’s academic foundation is equally impressive. He earned a Master of Science degree in Forestry (1996–1998) and a Pre-M.Sc. Certificate (1994–1995) from the Sokoine University of Agriculture in Tanzania, following a Bachelor of Science in Agriculture from Njala University College, Sierra Leone (1985–1989). This strong academic background laid the groundwork for a professional career dedicated to environmental stewardship, resource governance, and rural development.
Before assuming chieftaincy, he served as Regional Forestry Officer for the Eastern Region and Coordinator of the Gola Rainforest Conservation Programme between 2000 and 2005. In these roles, he spearheaded forest conservation, community development, and conservation education initiatives with support from international partners. His contributions to academia included part-time lecturing at Njala University and Eastern Polytechnic, where he trained future generations in wildlife conservation and forestry management.
At the national level, Paramount Chief Fasuluku has served in multiple strategic governance and advisory capacities. He is currently a Board Member of the Minerals Advisory Board (since 2024), the National Lands Commission (since 2022), and the Independent Commission for Peace and National Cohesion (since 2021). Between 2012 and 2017, he represented the Paramount Chiefs of Kono District in Parliament and chaired the Council of Paramount Chiefs for the Eastern Region, overseeing the collective leadership of 44 Paramount Chiefs. His earlier service includes chairing the Kono District Council of Paramount Chiefs and the Sandor Chiefdom Committee, as well as contributing to the World Bank-funded Life After Diamond Project, which supported mining-affected communities in Kono.
Chief Fasuluku is widely recognized for bridging traditional authority with modern governance, advancing peace and reconciliation, and promoting sustainable management of Sierra Leone’s natural resources. His leadership has championed education, youth empowerment, and the transformation of post-mining communities, making him a respected custodian of culture and a strategic national leader committed to peace, stability, and development.
`,
    summary: "",
  },
  {
    id: 27,
    name: "Sahr Youngai Kontanday Mbriwa II",
    title: "Hon. Paramount Chief of Fiama Chiefdom",
    image: "",
    content: `Hon. Paramount Chief Sahr Youngai Kontanday Mbriwa II is a respected traditional ruler, educator, peacebuilder, and statesman with extensive experience in governance, education, and post-war recovery in Sierra Leone.
He has served as Paramount Chief of Fiama Chiefdom, Kono District, since December 2002, and from 2018 to 2023, represented the Paramount Chiefs of Kono District in the Parliament of Sierra Leone. His leadership has been marked by a commitment to peace consolidation, community development, and the preservation of cultural heritage.
Before ascending to the chieftaincy, PC Mbriwa II built a distinguished career in education and development. He taught French and Geography for a decade at Jaiama Secondary and Islamic Secondary Schools (1983–1993), later transitioning to humanitarian and peacebuilding work. He held key positions with Children Associated with the War (CAW), UNICEF-supported reintegration programmes, and World Vision, where he focused on youth, gender, and civil society strengthening. Between 2000 and 2002, he worked with the American Embassy/USAID/MSI on peace education, youth reintegration, nation-building, and DDR programmes, playing a pivotal role in Sierra Leone’s post-conflict recovery.
PC Mbriwa II holds a Bachelor of Arts and Diploma in Education from Fourah Bay College, University of Sierra Leone, and has benefitted from advanced training in France (Université Paul Valéry, Montpellier, and Université des Lettres, Grenoble), Togo, Lomé, and the USA, including the International Visitors’ Leadership Programme (2006) on State and Local Government.
With a career spanning education, peacebuilding, governance, and traditional leadership, PC Mbriwa II is widely regarded as a bridge-builder and advocate for inclusive development, youth empowerment, and national cohesion.
`,
    summary: "",
  },
  {
    id: 28,
    name: "Aiah Denton Bona Foamansa III",
    title: "Paramount Chief of Nimikor Chiefdom",
    image: "",
    content: `P.C. Aiah Denton Bona Foamansa III serves as the Paramount Chief of Nimikor Chiefdom in Kono District. He represents the Bona family lineage and has been the chief since his election in 2006, a position that places him at the centre of traditional governance, land stewardship and local development in the chiefdom.
As Paramount Chief, Bona Foamansa III has been an active interlocutor between mining companies, government agencies and local communities. Under his leadership the chiefdom has received surface rents from mining operators and he has publicly advocated for corporate social responsibility investments (including market and infrastructure projects) as part of agreements with mining firms.
He has participated in formal government-industry events focused on mineral processing and local economic development, including hosting or engaging with national officials at ceremonies related to gold processing and mining-sector initiatives. These engagements reflect his role in negotiating benefits and safeguards for community members affected by extractive activity.
P.C. Bona Foamansa III is also prominent in community development discussions and initiatives documented by civil-society and development partners working in Nimikor, who have described him as a key local landowner and traditional leader involved in planning for sustainable community projects.
Like many traditional leaders who sit at the interface of politics, business and customary authority, his tenure has not been free of controversy. Recent media reports allege instances of political interference and unrest tied to local party processes in the chiefdom; such reports underscore the complex, sometimes contested nature of contemporary chiefly authority in Kono. Allegations have been reported and are a matter of public record; yet the Paramount Chief stands vindicated.
`,
    summary: "",
  },
  {
    id: 29,
    name: "Augustine Sahr Sheku",
    title: "KONO District Council Chairman",
    image: "",
    content: `Augustine Sahr Sheku,  an accomplished Public Sector Management Consultant hails from the Soa Chiefdom in the Kono District of Eastern Sierra Leone.
After his primary education in Kono, he secured his Ordinary and Advanced Level  School Certificates at the Kenema Government and Bo Government Secondary Schools  respectively. This took him to Fourah Bay College, University of Sierra Leone where he graduated with a bachelor's degree in liberal arts in 1983. He also holds a diploma in public heath communications from Jon Hopskins university in Bultomore, USA and a Master's degree in Public Sector Management from the Ghana Institute of Management abd Public Administration.
After brief stay in the teaching profession, he joined the Administrative Cadre of the  Republic of Sierra Leone Civil Service in 1986 initialy as Higher Executive Officer and later as Assistant Secretary in 1989.
He then rose through the ranks,  serving in various goverment offices and ministries incuding the then Establishment Secretary's Office, Office of the Presedent, Works, Health & Sanitation, Energy & Water Resources, Agriculture& Food Seculrity ect.
He was promoted as Permanent Secrtary in 2006 and also served in several government ministries before retiring gracefully in 2022 as Senior Permanent Secretary in the Ministry of Trade & Industry.. He also served as Execuruve Secretary of the Justice Cowan Constitutional Review Comittee.
Following his exist from the civil service, he transitioned from a professional bureaucrat to a politician and his track record of accomplishments together with his predigrer captivated vast majority of the people of Kono who overwhelminly voted him as the Chairman of the Kono District Council with 62% of the valid votes cast in the hotly contested 2023 general and district coucil elections held in Sierra Leone.
Mr Sheku's vision is to nake Kono the centre of excellence for  technology and innovation in Sierra Leone wirh prosperity for all and he is combining experience and creativity to accomplish this.`,
    summary: "",
  },
//   {
//     id: 29,
//     name: "",
//     title: "",
//     content: `
// `,
//     summary: "",
//   }
];

// Project Categories

export const ProjectCategory: ProjectCategoryType[] = [
  {
    id: 1,
    title: "Aviation",
  },
  {
    id: 2,
    title: "Education",
  },
  {
    id: 3,
    title: "Health",
  },
  {
    id: 4,
    title: "Empowerment",
  },
  {
    id: 5,
    title: "Road",
  },
  {
    id: 6,
    title: "Security",
  },
];

export const ProjectStatus: ProjectStatusType[] = [
  {
    id: 1,
    title: "ongoing",
  },
  {
    id: 2,
    title: "completed",
  },
  {
    id: 3,
    title: "upcoming",
  },
];
