import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "../../index.css";
import PhotoCard from "../PhotoCard";
import { SelectGallery } from ".";
import PoliciesCard from "../PoliciesCard";
import { IrishAidLogo } from "@/src/assets";

const PoliciesTab = () => {
  return (
    <div className="p-3 lg:px-3 lg:py-4 overflow-y-scroll ">
      <Tabs>
        <TabList className="custom-tab-list">
          <Tab className="custom-tab" selectedClassName="active">
            Council Policies
          </Tab>
          <Tab className="custom-tab" selectedClassName="active">
            Bylaws and Ordiance
          </Tab>
        </TabList>
        <TabPanel className="mt-5" id="custom-tab-panel">
          <div className="p-3 lg:px-8 lg:py-4 overflow-y-auto">
            <div className="grid md:grid-cols-2 p-5 lg:grid-cols-5 gap-5 bg-white ">
              <PoliciesCard partnerLogo={IrishAidLogo} />
              <PoliciesCard partnerLogo={IrishAidLogo} />
              <PoliciesCard partnerLogo={IrishAidLogo} />
              <PoliciesCard partnerLogo={IrishAidLogo} />
              <PoliciesCard partnerLogo={IrishAidLogo} />
            </div>
          </div>{" "}
        </TabPanel>

        <TabPanel className="mt-5" id="custom-tab-panel">
          <div className="grid lg:grid-cols-4 gap-3 ">
            <div className="lg:col-span-3 ">
              <div className="grid grid-cols-2 p-5 gap-3 lg:grid-cols-4  bg-white ">
                <PhotoCard
                  title="Waste Management Ordinance 2024"
                  subtitle="All residents and businesses within the district shall...."
                />
                <PhotoCard
                  title="Waste Management Ordinance 2024"
                  subtitle="All residents and businesses within the district shall...."
                />

                <PhotoCard
                  title="Waste Management Ordinance 2024"
                  subtitle="All residents and businesses within the district shall...."
                />
                <PhotoCard
                  title="Waste Management Ordinance 2024"
                  subtitle="All residents and businesses within the district shall...."
                />
              </div>
            </div>
            <SelectGallery />
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default PoliciesTab;
