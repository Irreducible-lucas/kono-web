import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "../../index.css";
import PhotoCard from "../PhotoCard";
import { SelectGallery } from ".";
import TabButton from "../TabButton";
import styles from "@/src/styles";

const ReportTab = () => {
  return (
    <div className="p-3 lg:px-8 lg:py-4 overflow-y-scroll ">
      <Tabs>
        <TabList className="custom-tab-list">
          <Tab className="custom-tab" selectedClassName="active">
            Annual Budget
          </Tab>
          <Tab className="custom-tab" selectedClassName="active">
            Project Report
          </Tab>
          <Tab className="custom-tab" selectedClassName="active">
            Project Funding
          </Tab>
          <Tab className="custom-tab" selectedClassName="active">
            Expenditure Report
          </Tab>
        </TabList>
        <TabPanel>
          <form action="" className="grid mt-5">
            <label className={`${styles.paragraph4} text-sm mb-1`}>
              Sectors
            </label>
            <input
              type="text"
              placeholder="Roads"
              className="border-[1px] rounded-lg p-2 mt-1 bg-transparent outline-0 "
            />

            <label className={`${styles.paragraph4} text-sm mt-3`}>
              Programme Cost (NLe)
            </label>
            <input
              type="text"
              placeholder="	2,261,750,000"
              className="border-[1px] rounded-lg p-2 mt-1 bg-transparent outline-0 "
            />
            <label className={`${styles.paragraph4} text-sm mt-3`}>
              GoSL (NLe)
            </label>
            <input
              type="text"
              placeholder="1,130,875,000"
              className="border-[1px] rounded-lg p-2 mt-1 bg-transparent outline-0 "
            />
            <label className={`${styles.paragraph4} text-sm mt-3`}>
              IGR (NLe)
            </label>
            <input
              type="text"
              placeholder="226,175,000"
              className="border-[1px] rounded-lg p-2 mt-1 bg-transparent outline-0 "
            />
            <label className={`${styles.paragraph4} text-sm mt-3`}>
              Dev. Partners (NLe)
            </label>
            <input
              type="text"
              placeholder="904,700,000"
              className="border-[1px] rounded-lg p-2 mt-1 bg-transparent outline-0 "
            />

            <TabButton name="Save Changes" py={2} px={3} />
          </form>
        </TabPanel>
        <TabPanel className="mt-5" id="custom-tab-panel">
          <div className="grid lg:grid-cols-4 gap-3 ">
            <div className="lg:col-span-3 ">
              <div className="grid grid-cols-2 p-5 gap-3 lg:grid-cols-4  bg-white ">
                <PhotoCard
                  title="Report"
                  subtitle="Constructed and rehabilitate roads,bridges and cul ..."
                />
                <PhotoCard
                  title="Report"
                  subtitle="Constructed and rehabilitate roads,bridges and cul ..."
                />
                <PhotoCard
                  title="Report"
                  subtitle="Constructed and rehabilitate roads,bridges and cul ..."
                />
                <PhotoCard
                  title="Report"
                  subtitle="Constructed and rehabilitate roads,bridges and cul ..."
                />
              </div>
            </div>
            <SelectGallery />
          </div>
        </TabPanel>
        <TabPanel className="mt-5" id="custom-tab-panel">
          <div className="grid lg:grid-cols-4 gap-3 ">
            <div className="lg:col-span-3 ">
              <div className="grid grid-cols-2 p-5 gap-3 lg:grid-cols-4  bg-white ">
                <PhotoCard title="Funding" subtitle="2,261,750,000" />
                <PhotoCard title="Funding" subtitle="2,261,750,000" />
                <PhotoCard title="Funding" subtitle="2,261,750,000" />
                <PhotoCard title="Funding" subtitle="2,261,750,000" />
              </div>
            </div>
            <SelectGallery />
          </div>
        </TabPanel>
        <TabPanel className="mt-5" id="custom-tab-panel">
          <div className="grid lg:grid-cols-4 gap-3 ">
            <div className="lg:col-span-3 ">
              <div className="grid grid-cols-2 p-5 gap-3 lg:grid-cols-4  bg-white ">
                <PhotoCard
                  title="Expenditure Report"
                  subtitle="Constructed and rehabilitate roads,bridges and cul"
                />
                <PhotoCard
                  title="Expenditure Report"
                  subtitle="Constructed and rehabilitate roads,bridges and cul"
                />
                <PhotoCard
                  title="Expenditure Report"
                  subtitle="Constructed and rehabilitate roads,bridges and cul"
                />
                <PhotoCard
                  title="Expenditure Report"
                  subtitle="Constructed and rehabilitate roads,bridges and cul"
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

export default ReportTab;
