import styles from "@/src/styles";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "../../index.css";
import TabButton from "../TabButton";
import { image } from "@/src/assets";

const TabLists = () => {
  return (
    <div>
      <Tabs>
        <TabList className="custom-tab-list">
          <Tab className="custom-tab" selectedClassName="active">
            History
          </Tab>
          <Tab className="custom-tab" selectedClassName="active">
            Council Structure
          </Tab>
          <Tab className="custom-tab" selectedClassName="active">
            Vision and Mission
          </Tab>
          <Tab className="custom-tab" selectedClassName="active">
            Officials and Chiefdoms
          </Tab>
        </TabList>
        <TabPanel className="mt-10" id="custom-tab-panel">
          <label className={`${styles.paragraph4} text-sm mb-1`}>Title</label>
          <div
            id="text-area"
            className={`${styles.paragraph4} rounded-xl py-2 px-3 border-[1px] outline-0 border-[#D8DDE4]  mb-5 text-slate-400 `}
            contentEditable="true"
          >
            Our District
          </div>{" "}
          <label className={`${styles.paragraph4} text-sm mt-5 `}>
            History
          </label>
          <div
            id="text-area"
            className={`${styles.paragraph4} p-5 border-[1px] mt-1  text-slate-400 rounded-xl outline-none `}
            contentEditable="true"
          >
            Founded between the Fifteenth and Sixteenth centuries by
            Mali-Guinean descendants, Kono District is one of three districts in
            the Eastern region of Sierra Leone; sitting 360 kilometers away from
            the nation’s Capital, Freetown. Our District is renowned for its
            huge deposits of precious natural resources and cash crops such as:
            diamonds, gold, iron ore, clay, limestone, granite, hardwood, cocoa,
            coffee, rice, etc. However, our District became a self-administered
            territory in 1927, when the colonial administrative headquarter was
            moved to Sefadu. Before that, the district was administered from
            Panguma.
          </div>
          <TabButton name="Save Changes" py={2} px={3} />
        </TabPanel>
        <TabPanel className="mt-10 grid" id="custom-tab-panel">
          <label className={`${styles.paragraph4} text-sm mb-1`}>Title</label>
          <input
            type="text"
            placeholder="Our Structure"
            className="border-[1px] rounded-lg p-2 mt-1 bg-transparent outline-0 "
          />{" "}
          <label className={`${styles.paragraph4} text-sm  mt-5`}>
            Description
          </label>
          <input
            type="text"
            placeholder="The KDC Chairperson is the political head of the Council, assisted by a Deputy Chairperson, plus 24 Councilors and an employee of 14 core staff headed by the Chief Administrator."
            className="border-[1px] rounded-lg p-2 mt-1 bg-transparent outline-0 "
          />
          <label className={`${styles.paragraph4} text-sm  mt-5`}>Image</label>
          <div className="w-full h-60 rounded-md border-[1px] bg-[#F4F7FC] border-[#D8DDE4] flex items-center justify-center flex-col mt-1">
            <img src={image} className="w-6 h-6" />
            <p className={`${styles.paragraph4} text-[#849299] mt-1`}>
              Drag Our Structure picture Here
            </p>
          </div>
          <TabButton name="Save Changes" py={2} px={3} />
        </TabPanel>
        <TabPanel>
          <form action="" className="grid">
            <label className={`${styles.paragraph4} text-sm mb-1`}>
              Vision
            </label>
            <input
              type="text"
              placeholder="The Kono District Council envisions a future where the district becomes a model of development, prosperity, and harmony. By focusing on economic growth through industrialization, agricultural innovation, and the expansion of services, we aim to elevate the standard of living for all residents."
              className="border-[1px] rounded-lg p-2 mt-1 bg-transparent outline-0 "
            />
            <label className={`${styles.paragraph4} text-sm mt-3`}>
              Mission
            </label>
            <input
              type="text"
              placeholder="We will work collectively as one District bringing together our supportive traditional leaders, our conclave of councilors, our dynamic support staff and every stakeholder to provide exceptional standard of living for our people. The KDC Chairperson is the political head of the Council, assisted by a Deputy Chairperson, plus 24 Councilors and an employee of 14 core staff headed by the Chief Administrator."
              className="border-[1px] rounded-lg p-2 mt-1 bg-transparent outline-0 "
            />
            <label className={`${styles.paragraph4} text-sm mt-3`}>
              Core Value
            </label>
            <div
              id="text-area"
              className={`${styles.paragraph4} p-5 border-[1px] mt-1 rounded-xl outline-none `}
              contentEditable="true"
            >
              <p className="mb-3 text-slate-400">
                Underpinning all our decisions and actions are our core values:
              </p>
              <ul className="list-disc ms-8 text-slate-400">
                <li>Participation</li>
                <li>Transparency</li>
                <li>Professionalism</li>
                <li>Integrity</li>
                <li>Accountability</li>
                <li>Innovation</li>
              </ul>
            </div>
            <TabButton name="Save Changes" py={2} px={3} />
          </form>
        </TabPanel>
        <TabPanel className="grid" id="custom-tab-panel">
          <label className={`${styles.paragraph4} text-sm mb-1`}>Title</label>
          <input
            type="text"
            placeholder="Fiama Chiefdom"
            className="border-[1px] rounded-lg p-2 mt-1 bg-transparent outline-0 "
          />{" "}
          <label className={`${styles.paragraph4} text-sm  mt-5`}>
            Description
          </label>
          <input
            type="text"
            placeholder="Fiama Chiefdom is a great place with lots of supernatural tales of black magic, sorcery and witchcraft in the District. The chiefdom traces its history from a warrior who was amongst the first settlers known as Aiah Kontandey M’briwa. "
            className="border-[1px] rounded-lg p-2 mt-1 bg-transparent outline-0 "
          />
          <label className={`${styles.paragraph4} text-sm  mt-5`}>
            Key Summary
          </label>
          <input
            type="text"
            placeholder="Key Summary: Population: 13,415[2021] Land Area: 281.5 km²; Population Density: 47.77/ km²; Annual Population Change: 2.3% [2015-2021]."
            className="border-[1px] rounded-lg p-2 mt-1 bg-transparent outline-0 "
          />
          <TabButton name="Save Changes" py={2} px={3} />
        </TabPanel>{" "}
          
      </Tabs>
    </div>
  );
};

export default TabLists;
