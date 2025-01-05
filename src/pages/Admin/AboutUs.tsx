import { fetchAboutInfo, fetchOfficials } from "@/src/api";
import { AboutUsTabs, NavHeader } from "@/src/components/Admin";
import { useLoaderData } from "react-router-dom";

export async function loader() {
  const aboutInfo = await fetchAboutInfo();
  const officials = await fetchOfficials();
  return { aboutInfo, officials };
}

const AboutUs = () => {
  const { aboutInfo, officials }: any = useLoaderData();

  return (
    <div className="w-full bg-[#FAFAFA] h-full grid grid-rows-[240px_1fr] lg:grid-rows-[100px_1fr]">
      <div className="p-3 lg:px-8 lg:py-4 bg-white mb-5">
        <NavHeader title="About Us" />
      </div>

      <div className=" p-3 lg:px-8 lg:py-4 overflow-y-scroll bg-white">
        <AboutUsTabs aboutInfo={aboutInfo} officials={officials} />
      </div>
    </div>
  );
};

export default AboutUs;
