import { search } from "@/src/assets";
import { NavHeader, PoliciesTab } from "@/src/components/Admin";
import AddPolicy from "@/src/components/Admin/AddPolicy";
import styles from "@/src/styles";
import { useState } from "react";

const Policies = () => {
  const [searchText, setSearchText] = useState("");
  return (
    <div className="w-full bg-[#FAFAFA] h-full grid grid-rows-[240px_1fr] lg:grid-rows-[180px_1fr]">
      <div className="p-3 lg:px-8 lg:py-4 bg-white">
        <NavHeader title="Goverance and Policies" />
        <div className="flex gap-8 py-6">
          <div className="flex items-center border-[1px] py-3 px-5 bg-[#D8DDE4] justify-between rounded-xl w-1/2">
            <input
              type="text"
              placeholder="Search policies"
              onChange={(e) => setSearchText(e.target.value)}
              className={`${styles.paragraph4} text-[#849299] bg-transparent outline-0 flex-1`}
            />
            <img src={search} className="w-5 h-5" />
          </div>
          <AddPolicy />
        </div>
      </div>
      <PoliciesTab searchText={searchText} />
    </div>
  );
};

export default Policies;
