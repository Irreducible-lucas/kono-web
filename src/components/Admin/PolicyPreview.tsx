import { CorporateImage, gallery } from "@/src/assets";
import styles from "@/src/styles";
import React from "react";
import DeleteItemButton from "./DeleteItemButton";
import { deletePolicy } from "@/src/api";
import EditPolicy from "./EditPolicy";

interface PolicyPropsType {
  id?: number;
  title: string;
  description: string;
  image: any;
  document: any;
  document_type: string;
}

const PolicyPreview = ({
  policy,
  setSelectedPolicy,
}: {
  policy: PolicyPropsType;
  setSelectedPolicy: React.Dispatch<
    React.SetStateAction<null | PolicyPropsType>
  >;
}) => {
  return (
    <div className="bg-white w-full h-60 lg:h-full p-4 font-nunito">
      {policy ? (
        <div className="w-full grid gap-8">
          <h3 className="font-bold text-xl">Policy</h3>
          <div className="w-full">
            <h5 className="text-sm font-light text-gray-400 mb-2">
              Document Type
            </h5>
            <p>{policy.document_type}</p>
          </div>
          <div className="w-full">
            <h5 className="text-sm font-light text-gray-400 mb-2">Title</h5>
            <p>{policy.title}</p>
          </div>
          <div className="w-full">
            <h5 className="text-sm font-light text-gray-400 mb-2">
              Cover Image
            </h5>
            {policy.image ? (
              <img
                src={policy.image}
                alt=""
                className="h-[200px] w-[200px] object-contain object-center"
              />
            ) : (
              <img
                src={CorporateImage}
                alt=""
                className="h-[200px] w-[200px] object-contain object-center"
              />
            )}
          </div>

          <div className="w-full">
            <h5 className="text-sm font-light text-gray-400 mb-2">
              Description
            </h5>
            <p>{policy?.description}</p>
          </div>

          <div className="w-full">
            <h5 className="text-sm font-light text-gray-400 mb-2">Document</h5>
            <a
              className="text-blue-400 underline"
              target="blank"
              href={policy?.document}
            >
              {policy.document.substring(0, 25)}...
            </a>
          </div>
          <div className="flex gap-4">
            {/* <button className="px-4 py-2 text-sm border border-blue-700 rounded-lg text-blue-700">
              Delete
            </button> */}
            <DeleteItemButton
              itemId={policy.id}
              handleSelectedItem={setSelectedPolicy}
              itemType="Policy"
              navigateTo="/dashboard/policies"
              deleteItem={deletePolicy}
            />
            <EditPolicy item={policy} setSelectedItem={setSelectedPolicy} />
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center w-full h-[300px]">
          <img src={gallery} className="w-16 h-16 mb-5 rounded-md" />
          <p
            className={`${styles.paragraph} text-xs  text-center text-[#849299]`}
          >
            Select a Policy to get more information
          </p>
        </div>
      )}
    </div>
  );
};

export default PolicyPreview;
