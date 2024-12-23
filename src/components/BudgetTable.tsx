import styles, { layout } from "../styles";

type BudgetData = {
  sector: string;
  programmeCost: number;
  gosl: number;
  igr: number;
  devPartners: number;
};

const budgetData: BudgetData[] = [
  {
    sector: "Roads",
    programmeCost: 2261750000,
    gosl: 1130875000,
    igr: 226175000,
    devPartners: 904700000,
  },
  {
    sector: "Education",
    programmeCost: 17237460000,
    gosl: 8618730000,
    igr: 1723746000,
    devPartners: 6894984000,
  },
  {
    sector: "Agriculture",
    programmeCost: 472312050,
    gosl: 236156025,
    igr: 47231205,
    devPartners: 188924820,
  },
  {
    sector: "Health",
    programmeCost: 160610000,
    gosl: 80305000,
    igr: 16061000,
    devPartners: 64244000,
  },
  {
    sector: "Water And Sanitations",
    programmeCost: 39820555,
    gosl: 19910278,
    igr: 3982056,
    devPartners: 15928222,
  },
  {
    sector: "Youth",
    programmeCost: 336412400,
    gosl: 168206200,
    igr: 33641240,
    devPartners: 134564960,
  },
  {
    sector: "Social Welfare",
    programmeCost: 49767403,
    gosl: 24883701,
    igr: 4976740,
    devPartners: 19906961,
  },
  {
    sector: "Rural Energy",
    programmeCost: 1620000000,
    gosl: 810000000,
    igr: 162000000,
    devPartners: 648000000,
  },
  {
    sector: "Environment & Climate Change",
    programmeCost: 38951000,
    gosl: 19475500,
    igr: 3895100,
    devPartners: 15850400,
  },
  {
    sector: "Sport",
    programmeCost: 1435000,
    gosl: 717500,
    igr: 143500,
    devPartners: 574000,
  },
  {
    sector: "Gender & Children’s Affairs",
    programmeCost: 4546000,
    gosl: 3455000,
    igr: 691000,
    devPartners: 400000,
  },
  {
    sector: "Fire Services",
    programmeCost: 8460000,
    gosl: 4230000,
    igr: 846000,
    devPartners: 3384000,
  },
  {
    sector: "Governance Process Improvement",
    programmeCost: 437526000,
    gosl: 20070000,
    igr: 4014000,
    devPartners: 16056000,
  },
];

const BudgetTable: React.FC = () => {
  return (
    <div
      className={`${layout.section} p-4 bg-[url("/src/assets/report-on-projects-art.png")] bg-no-repeat bg-white bg-cover `}
    >
      <h1
        className={`${styles.heading1} mb-3 text-center text-blue-700 tracking-wide`}
      >
        Summary of Our Sector Financial Plan
      </h1>
      <p
        className={`${styles.paragraph} mb-5 text-lg text-gray-600 text-center leading-relaxed max-w-2xl mx-auto`}
      >
        The tables set out our agreed cumulative summary of sector budget for
        2025-28. All figures are in the new Leones.
      </p>

      <table className="min-w-full table-auto border-collapse border border-gray-300">
        <thead className="bg-gray-200 sticky top-0">
          <tr>
            <th className="border border-gray-300 px-4 py-2 text-left">
              Sectors
            </th>
            <th className="border border-gray-300 px-4 py-2 text-center">
              Programme Cost (NLe)
            </th>
            <th className="hidden sm:table-cell border border-gray-300 px-4 py-2 text-right">
              GoSL (NLe)
            </th>
            <th className="hidden sm:table-cell border border-gray-300 px-4 py-2 text-right">
              IGR (NLe)
            </th>
            <th className="hidden sm:table-cell border border-gray-300 px-4 py-2 text-right">
              Dev. Partners (NLe)
            </th>
          </tr>
        </thead>
        <tbody>
          {budgetData.map((row, index) => (
            <tr
              key={index}
              className={index % 2 === 0 ? "bg-gray-100" : "bg-white"}
            >
              <td className="border border-gray-300 px-4 py-2">{row.sector}</td>
              <td className="border border-gray-300 px-4 py-2 text-right">
                {row.programmeCost.toLocaleString()}
              </td>
              <td className="hidden sm:table-cell border border-gray-300 px-4 py-2 text-right">
                {row.gosl.toLocaleString()}
              </td>
              <td className="hidden sm:table-cell border border-gray-300 px-4 py-2 text-right">
                {row.igr.toLocaleString()}
              </td>
              <td className="hidden sm:table-cell border border-gray-300 px-4 py-2 text-right">
                {row.devPartners.toLocaleString()}
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr className="bg-blue-100 font-bold">
            <td className="border border-gray-300 px-4 py-2">
              Grand Sector Totals
            </td>
            <td className="border border-gray-300 px-4 py-2 text-right">
              {budgetData
                .reduce((acc, row) => acc + row.programmeCost, 0)
                .toLocaleString()}
            </td>
            <td className="hidden sm:table-cell border border-gray-300 px-4 py-2 text-right">
              {budgetData
                .reduce((acc, row) => acc + row.gosl, 0)
                .toLocaleString()}
            </td>
            <td className="hidden sm:table-cell border border-gray-300 px-4 py-2 text-right">
              {budgetData
                .reduce((acc, row) => acc + row.igr, 0)
                .toLocaleString()}
            </td>
            <td className="hidden sm:table-cell border border-gray-300 px-4 py-2 text-right">
              {budgetData
                .reduce((acc, row) => acc + row.devPartners, 0)
                .toLocaleString()}
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default BudgetTable;
