const PolicyCard = ({ data }: any) => {
  return (
    <div className="w-full lg:mb-10 bg-gray-50 h-[400px]">
      <div className=" bg-[#F4F7FC] flex items-center rounded-md w-full">
        <img
          src={data?.image}
          className="w-full h-[250px] object-cover object-center"
        />
      </div>
      <div className="py-2 px-3">
        {data?.title && (
          <h3 className="font-manrope text-base text-black font-bold mb-2">
            {data.title}
          </h3>
        )}
        {data?.description && (
          <p className="font-manrope text-sm text-black">
            {data?.description.substring(0, 100)}
            {data?.description.length > 100 ? "..." : ""}
          </p>
        )}
      </div>
    </div>
  );
};

export default PolicyCard;
