import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "../../index.css";
import PolicyCard from "./PolicyCard";
import { useEffect, useState } from "react";
import { PolicyType } from "@/src/types";
import PolicyPreview from "./PolicyPreview";
import { useQuery } from "@tanstack/react-query";
import { fetchPolicies } from "@/src/api";
import { Spinner } from "@/src/assets";

const PoliciesTab = ({ searchText }: any) => {
  const { data, isLoading }: any = useQuery({
    queryKey: ["policies"],
    queryFn: fetchPolicies,
  });

  const [selectedPolicy, setSelectedPolicy] = useState<any>(null);
  const [filteredPolicies, setFilteredPolicies] = useState([]);

  useEffect(() => {
    const filtered = data?.filter((policy: PolicyType) =>
      policy?.title.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredPolicies(filtered);
  }, [searchText, data]);

  if (isLoading) {
    return (
      <div className="flex flex-col justify-center items-center h-full bg-white">
        <img src={Spinner} className="h-8 w-8" alt="" />
        <p>Loading data...</p>
      </div>
    );
  }

  return (
    <div className="p-3 grid grid-cols-[1fr_300px] gap-8 lg:px-8 lg:py-4 overflow-y-scroll">
      <Tabs className={"bg-white"}>
        <TabList className="custom-tab-list">
          <Tab className="custom-tab" selectedClassName="active">
            Council Policies
          </Tab>
          {/* <Tab className="custom-tab" selectedClassName="active">
            Bylaws and Ordiance
          </Tab> */}
        </TabList>
        <TabPanel className="mt-5" id="custom-tab-panel">
          <div className="grid bg-white p-4">
            {filteredPolicies?.length > 0 ? (
              <div className="grid gap-3 grid-cols-3 bg-white ">
                {filteredPolicies?.map((policy: PolicyType) => (
                  <div
                    className="cursor-pointer"
                    onClick={() => setSelectedPolicy(policy)}
                    key={policy.id}
                  >
                    <PolicyCard data={policy} />
                  </div>
                ))}
              </div>
            ) : (
              <div className="bg-gray-200 grid place-items-center p-8">
                <p className="font-bold mb-3">No Council Policy found</p>
                <p>
                  Click on <span className="font-bold">add policy button</span>{" "}
                  above to create a council policy
                </p>
              </div>
            )}
          </div>
        </TabPanel>

        {/* <TabPanel className="mt-5" id="custom-tab-panel">
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
        </TabPanel> */}
      </Tabs>
      <div className="w-full">
        <PolicyPreview
          policy={selectedPolicy}
          setSelectedPolicy={setSelectedPolicy}
        />
      </div>
    </div>
  );
};

export default PoliciesTab;
