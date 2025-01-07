import { Lillian, Alice } from "@/src/assets";
import styles from "../../styles";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { fetchChairmanMessage, fetchHeroData } from "@/src/api";
import { useLoaderData } from "react-router-dom";
import { HomeDataType } from "@/src/types";
import { useState } from "react";
import {
  ChairmanMessageEditForm,
  HeroEditForm,
  NavHeader,
} from "@/src/components/Admin";

export async function loader() {
  const heroData = await fetchHeroData();
  const chairmanMessage = await fetchChairmanMessage();

  return { heroData, chairmanMessage };
}

const AdminHome = () => {
  const { heroData, chairmanMessage }: any = useLoaderData();
  console.log("Hero Data:", heroData);
  const [heroFormData, setHeroFormData] = useState<HomeDataType>(heroData);
  const [heroImage, setHeroImage] = useState<string | null>(heroData?.image);

  const [chairmanFormData, setChairmanFormData] =
    useState<HomeDataType>(chairmanMessage);
  const [chairmanImage, setChairmanImage] = useState<string | null>(
    chairmanMessage?.image
  );

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
                      <span className="text-gradient">
                        {heroFormData.title}
                      </span>
                    </h1>
                    <p
                      className={` text-secondaryGray font-thin mt-5 ${styles.paragraph}`}
                    >
                      {heroFormData.message}
                    </p>
                  </div>
                  {heroImage ? (
                    <img
                      src={heroImage}
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
              <HeroEditForm
                heroFormData={heroFormData}
                heroImage={heroImage}
                setHeroFormData={setHeroFormData}
                setHeroImage={setHeroImage}
              />
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid lg:grid-cols-[1fr_330px] gap-4">
              <div className="bg-white p-4 grid grid-cols-2 gap-4">
                {chairmanImage ? (
                  <img
                    src={chairmanImage}
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
                    {chairmanFormData.title}
                  </h1>
                  <div className="font-thin">
                    {chairmanFormData.message
                      .split("\n")
                      .map((paragraph, index) => (
                        <p key={index} className="mb-4">
                          {paragraph}
                          <br />
                        </p>
                      ))}
                  </div>
                </div>
              </div>
              <ChairmanMessageEditForm
                formData={chairmanFormData}
                Image={chairmanImage}
                setFormData={setChairmanFormData}
                setImage={setChairmanImage}
              />
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default AdminHome;
