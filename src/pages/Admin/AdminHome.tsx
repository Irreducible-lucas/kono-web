import { Lillian, Alice, Spinner } from "@/src/assets";
import styles from "../../styles";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { fetchHomeData } from "@/src/api";
import {
  ChairmanMessageEditForm,
  HeroEditForm,
  NavHeader,
} from "@/src/components/Admin";
import { useQuery } from "@tanstack/react-query";

const AdminHome = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["home"],
    queryFn: fetchHomeData,
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
    return <div>Sorry error occured while fetching data</div>;
  }

  return (
    <div className="w-full bg-[#FAFAFA] h-full grid grid-rows-[70px_1fr]">
      <div className="bg-white px-6 h-full flex flex-col justify-center">
        <NavHeader title="Home" />
      </div>
      <div className="p-3 lg:px-8 lg:py-4 overflow-y-scroll">
        <Tabs>
          <TabList className="custom-tab-list">
            <Tab className="custom-tab" selectedClassName="active">
              Hero Section
            </Tab>
            <Tab className="custom-tab" selectedClassName="active">
              Chairman Section
            </Tab>
          </TabList>
          <TabPanel>
            <div className="grid lg:grid-cols-[1fr_330px] gap-4">
              <div className="bg-white p-4">
                <div className="flex flex-col lg:flex-row items-center gap-4 my-4">
                  <div>
                    <h1 className="font-poppins font-semibold text-center md:text-left text-[32px] md:text-[48px] text-secondaryBlack md:leading-[80.8px] leading-[55px] w-full">
                      <span className="text-gradient">{data?.[0].title}</span>
                    </h1>
                    <p
                      className={` text-secondaryGray font-thin mt-5 ${styles.paragraph}`}
                    >
                      {data?.[0].message}
                    </p>
                  </div>
                  {data?.[0].image ? (
                    <img
                      src={data?.[0].image}
                      alt="Hero Image"
                      className="w-[300px] h-[300px] rounded-full relative z-[5]"
                    />
                  ) : (
                    <img
                      src={Lillian}
                      alt="Hero Image"
                      className="w-[300px] h-[300px] rounded-full relative z-[5]"
                    />
                  )}
                </div>
              </div>
              <HeroEditForm />
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid lg:grid-cols-[1fr_330px] gap-4">
              <div className="bg-white p-4 grid grid-cols-2 gap-4">
                {data?.[1].image ? (
                  <img
                    src={data?.[1].image}
                    alt="Chairman's Image"
                    className="rounded-lg h-[300px] object-cover object-top"
                  />
                ) : (
                  <img
                    src={Alice}
                    alt="Chairman's Image"
                    className="rounded-lg h-[300px] object-cover object-top"
                  />
                )}
                <div>
                  <h1 className="font-bold font-manrope text-lg mb-6">
                    {data?.[1].title}
                  </h1>
                  <div className="font-thin h-[300px] overflow-y-auto">
                    {data?.[1].message
                      .split("\n")
                      .map((paragraph: any, index: any) => (
                        <p key={index} className="mb-4">
                          {paragraph}
                          <br />
                        </p>
                      ))}
                  </div>
                </div>
              </div>
              <ChairmanMessageEditForm />
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default AdminHome;
