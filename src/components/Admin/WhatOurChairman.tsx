import { image } from "@/src/assets";
import styles from "@/src/styles";
import { Label } from "@/components/label";

const WhatOurChairman = () => {
  return (
    <div className="bg-white p-5 rounded-md md:col-span-1">
      <h6 className={`${styles.heading5} mb-8`}>Chairman Speech</h6>

      <form action="" className="flex flex-1 flex-col">
        <Label htmlFor="homepage">Add Photo</Label>
        <div className="w-full h-60 rounded-md border-[1px] bg-[#F4F7FC] border-[#D8DDE4] flex items-center justify-center flex-col mt-3">
          <img src={image} className="w-6 h-6" />
          <p className={`${styles.paragraph4} text-[#849299] mt-1`}>
            Drag Chairman picture Here
          </p>
        </div>
        <label className={`${styles.paragraph4} text-[#30354E] mt-5 `}>
          What Our Chairman Say:
        </label>
        <input
          type="text"
          placeholder="The role of Kono District Council is to support our communities to grow, develop and take advantage of the significant benefits our district has to offer including its vast natural resources, fertile land for commercial agriculture, natural landscape for tourism and hospitality and a promising economy."
          className="border-[1px] rounded-lg p-2 mt-1"
        />

        <button className="bg-[#1B43C6] p-4 rounded-lg mt-20 text-white ">
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default WhatOurChairman;
