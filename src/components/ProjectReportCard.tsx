interface RoadInfrastructureReportProps {
  activities: string[];
  outputs: string[];
  resources: {
    amount: string;
    currency: string;
  };
  timeFrame: string;
  kpis: string[];
  responsible: string[];
}

const ProjectReportCard: React.FC<RoadInfrastructureReportProps> = ({
  activities,
  outputs,
  resources,
  timeFrame,
  kpis,
  responsible,
}) => {
  return (
    <div className="max-w-4xl mx-auto p-8 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-2xl shadow-xl">
      <div className="flex items-center space-x-4 mb-8">
        <div className="w-12 h-12 rounded-full bg-gradient-to-r from-green-400 to-blue-500 flex justify-center items-center">
          <span className="text-white text-xl font-bold">🚧</span>
        </div>
        <h1 className="text-3xl font-extrabold text-white">
          Strategic Priority 1: Road Infrastructural Development
        </h1>
      </div>

      <div className="space-y-8">
        {/* Key Activities Section */}
        <section>
          <h2 className="text-2xl font-semibold text-white">Key Activities</h2>
          <ul className="list-inside list-disc text-white opacity-80">
            {activities.map((activity, index) => (
              <li key={index} className="ml-4 text-lg">
                {activity}
              </li>
            ))}
          </ul>
        </section>

        {/* Outputs Section */}
        <section>
          <h2 className="text-2xl font-semibold text-white">Outputs</h2>
          <ul className="list-inside list-disc text-white opacity-80">
            {outputs.map((output, index) => (
              <li key={index} className="ml-4 text-lg">
                {output}
              </li>
            ))}
          </ul>
        </section>

        {/* Resources Section */}
        <section className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-semibold text-gray-800">Resources</h2>
          <p className="text-gray-700 mt-2">
            <span className="font-semibold text-gray-900">Input/Resource:</span>{" "}
            {resources.amount} {resources.currency}
          </p>
          <p className="text-gray-700 mt-2">
            <span className="font-semibold text-gray-900">Time Frame:</span>{" "}
            {timeFrame}
          </p>
        </section>

        {/* KPIs Section */}
        <section className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-semibold text-gray-800">
            Key Performance Indicators (KPIs)
          </h2>
          <ul className="list-inside list-disc text-gray-700 opacity-80">
            {kpis.map((kpi, index) => (
              <li key={index} className="ml-4 text-lg">
                {kpi}
              </li>
            ))}
          </ul>
        </section>

        {/* Responsible Parties Section */}
        <section className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-semibold text-gray-800">
            Responsible Parties
          </h2>
          <p className="text-gray-700">{responsible.join(" / ")}</p>
        </section>
      </div>
    </div>
  );
};

export default ProjectReportCard;
