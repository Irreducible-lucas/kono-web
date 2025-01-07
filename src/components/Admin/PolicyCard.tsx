const PolicyCard = ({ data }: any) => {
  return (
    <div className="w-full mb-12 lg:mb-10 bg-white">
      <div className=" bg-[#F4F7FC] flex items-center rounded-md w-full h-[70%]">
        <img src={data?.image} className="w-full object-cover object-center" />
      </div>
      <div className="py-2 px-3">
        {data?.title && (
          <h3 className="font-manrope text-lg text-black">{data.title}</h3>
        )}
        {data?.description && (
          <p className="font-manrope text-sm text-black">{data?.description}</p>
        )}
      </div>
    </div>
  );
};

export default PolicyCard;
