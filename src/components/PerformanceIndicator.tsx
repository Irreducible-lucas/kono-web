interface PIData {
  title: string;
  description: string;
  progress: number;
  color: string;
  image: string;
}

const PerformanceIndicator: React.FC<{
  data: PIData;
  className?: string;
  imageSize?: string;
  progressHeight?: string;
}> = ({
  data,
  className = "",
  imageSize = "w-32 h-32",
  progressHeight = "h-2",
}) => {
  return (
    <div
      className={`p-6 rounded-lg shadow-xl border border-gray-300 flex flex-col h-full relative ${className}`}
    >
      {/* Image */}
      <div className="flex justify-center mb-4">
        <img
          src={data.image}
          alt={data.title}
          className={`${imageSize} object-cover rounded-full`}
        />
      </div>

      {/* Title and Description */}
      <h3 className="text-2xl font-bold text-gray-800 mb-3 text-center lg:h-16">
        {data.title}
      </h3>
      <p className="text-gray-600 mb-3 text-center">{data.description}</p>

      {/* Progress Bar */}
      <div className="w-full rounded-full absolute bottom-0 left-0">
        <div
          className={`rounded-full ${data.color} ${progressHeight}`}
          style={{ width: `${data.progress}%` }}
        />
      </div>
    </div>
  );
};

export default PerformanceIndicator;
