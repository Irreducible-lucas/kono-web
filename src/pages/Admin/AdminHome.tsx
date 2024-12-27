import {
  home,
  image,
  notif,
  plus,
  ProfilePic,
  Lillian,
  Alice,
} from "@/src/assets";
import { Label } from "@/components/label";
import styles from "../../styles";
import { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { Overview } from "@/src/components";
import { WhatOurChairman } from "@/src/components/Admin";
import { Key } from "lucide-react";

const AdminHome = () => {
  const [title, setTitle] = useState("OFFICIAL KONO");
  const [desc, setDesc] = useState(
    "Working Together for a Stronger, Brighter Future for Kono"
  );
  const [heroImage, setHeroImage] = useState(Lillian);

  const [chairTitle, setChairTitle] = useState("MESSAGE FROM THE CHAIRMAN");
  const [chairMessage, setChairMessage] = useState(
    "The role of Kono District Council is to support our communities to grow, develop and take advantage of the significant benefits our district has to offer including its vast natural resources, fertile land for commercial agriculture, natural landscape for tourism and hospitality and a promising economy.\nBy working in partnership with the central Government, our paramount chiefs, businesses and communities, the Council aims to coordinate and support endeavours that build an integrated district economy, fostering growth, and transform our communities into vibrant places to live, work, grow and prosper."
  );
  const [chairImage, setChairImage] = useState(Alice);

  return (
    <div className="w-full bg-[#FAFAFA] h-full grid grid-rows-[70px_1fr]">
      <div className="bg-white px-6 h-full flex flex-col justify-center">
        <div>
          <h1
            className={`${styles.heading3} leading-normal font-semibold tracking-wide font-nunito`}
          >
            Homepage
          </h1>
        </div>
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
                      <span className="text-gradient">{title}</span>
                      <br className="sm:block" /> District Council
                    </h1>
                    <p
                      className={` text-secondaryGray font-thin mt-5 ${styles.paragraph}`}
                    >
                      {desc}
                    </p>
                  </div>
                  <img
                    src={Lillian}
                    alt="billing"
                    className="w-[300px] h-[300px] rounded-full relative z-[5]"
                  />
                </div>
              </div>
              <div className="bg-white p-5 rounded-md md:col-span-1">
                <h6 className={`${styles.heading5}`}>Detail Homepage</h6>
                <div className="w-full h-64 bg-[#F4F7FC] my-5 rounded-md">
                  <img
                    src={heroImage}
                    alt=""
                    className="h-full w-full object-contain"
                  />
                </div>
                <form action="" className="flex flex-1 flex-col">
                  <label className={`${styles.paragraph4} text-[#30354E]`}>
                    Title 1
                  </label>
                  <div
                    id="text-area"
                    className="my-3 p-2 border-[1px] border-[#D8DDE4] rounded-2xl outline-none"
                    contentEditable="true"
                  >
                    <p className={`${styles.paragraph4} text-base`}>
                      OFFICIAL KONO District Council
                    </p>
                  </div>

                  <label
                    htmlFor=""
                    className={`${styles.paragraph4} text-[#30354E]`}
                  >
                    Title 2
                  </label>
                  <div
                    id="text-area"
                    className="my-3 p-2 border-[1px] border-[#D8DDE4] rounded-2xl outline-none"
                    contentEditable="true"
                  >
                    <p className={`${styles.paragraph4} text-base`}>
                      Working Together for a Stronger, Brighter Future for Kono
                    </p>
                  </div>
                  <button className="bg-[#1B43C6] p-4 rounded-lg mt-8 text-white ">
                    Save Changes
                  </button>
                </form>
              </div>
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid lg:grid-cols-[1fr_330px] gap-4">
              <div className="bg-white p-4 grid grid-cols-2 gap-4">
                <img
                  src={chairImage}
                  alt=""
                  className="rounded-lg h-[300px] object-cover object-top"
                />
                <div>
                  <h1 className="font-bold font-manrope text-lg mb-6">
                    {chairTitle}
                  </h1>
                  <div className="font-thin">
                    {chairMessage.split("\n").map((paragraph, index) => (
                      <p key={index} className="mb-4">
                        {paragraph}
                        <br />
                      </p>
                    ))}
                  </div>
                </div>
              </div>
              <div className="bg-white p-5 rounded-md md:col-span-1">
                <h6 className={`${styles.heading5} mb-8`}>
                  Chairman's Message
                </h6>
                <form action="" className="flex flex-1 flex-col">
                  <Label htmlFor="homepage">Add Photo</Label>
                  <div className="w-full h-60 rounded-md border-[1px] bg-[#F4F7FC] border-[#D8DDE4] flex items-center justify-center flex-col mt-3">
                    <img
                      src={chairImage}
                      className="w-full h-full object-contain"
                    />
                    {/* <p className={`${styles.paragraph4} text-[#849299] mt-1`}>
                      Drag Chairman picture Here
                    </p> */}
                  </div>
                  <label
                    className={`${styles.paragraph4} text-[#30354E] mt-5 `}
                  >
                    What Our Chairman Say:
                  </label>
                  <textarea
                    placeholder="enter here"
                    className="border-[1px] rounded-lg p-4 mt-4 h-[300px] text-sm"
                    value={chairMessage}
                  ></textarea>

                  <button className="bg-[#1B43C6] p-4 rounded-lg mt-8 text-white ">
                    Save Changes
                  </button>
                </form>
              </div>
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default AdminHome;
