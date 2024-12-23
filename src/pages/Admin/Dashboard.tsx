import { Overview } from "@/src/components";
import { ProfilePic, notif } from "../../assets";
import styles from "../../styles";
import { WhatOurChairman } from "@/src/components/Admin";

const Dashboard = () => {
  return (
    <div className="w-full bg-[#FAFAFA] h-full grid grid-rows-[70px_1fr]">
      <div className="p-3 lg:px-8 lg:py-4 bg-white flex items-center justify-between ">
        <div>
          <h1
            className={`${styles.heading3} leading-normal font-semibold tracking-wide font-nunito`}
          >
            Dashboard{" "}
          </h1>
        </div>
        <div className="flex items-center gap-2 lg:gap-3">
          <div className="border-[1px] rounded-full -left-10 flex items-center p-1">
            <img
              src={notif}
              alt="notification icon"
              className="w-[15px] h-[15px] rounded-full"
            />
          </div>
          <div>
            <img
              src={ProfilePic}
              alt="user profile picture"
              className="w-[35px] h-[35px] rounded-full"
            />
          </div>
        </div>
      </div>
      <div className="p-3 lg:px-8 lg:py-4 overflow-y-scroll">
        <div className="grid lg:grid-cols-[1fr_330px] gap-4">
          <Overview />
          <WhatOurChairman />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
