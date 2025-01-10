import { fetchAboutInfo, fetchOfficials } from "@/src/api";
import { Spinner } from "@/src/assets";
import { AboutUsTabs, NavHeader } from "@/src/components/Admin";
import { useQuery } from "@tanstack/react-query";

const AboutUs = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["about"],
    queryFn: fetchAboutInfo,
  });

  if (isLoading) {
    return (
      <div className="flex flex-col justify-center items-center h-full bg-white">
        <img src={Spinner} className="h-8 w-8" alt="" />
        <p>Loading data...</p>
      </div>
    );
  }

  if (isError) {
    return <div>Sorry, error occured while fetching data</div>;
  }

  return (
    <div className="w-full bg-[#FAFAFA] h-full grid grid-rows-[240px_1fr] lg:grid-rows-[100px_1fr]">
      <div className="p-3 lg:px-8 lg:py-4 bg-white mb-5">
        <NavHeader title="About Us" />
      </div>

      <div className=" p-3 lg:px-8 lg:py-4 overflow-y-scroll bg-white">
        <AboutUsTabs aboutInfo={data} />
      </div>
    </div>
  );
};

export default AboutUs;
