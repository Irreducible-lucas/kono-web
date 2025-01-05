import { CorporateImage, gallery } from "@/src/assets";
import styles from "@/src/styles";
import { NewsType, ProjectType } from "@/src/types";
import EditProject from "./EditProject";
import React from "react";
import DeleteItemButton from "./DeleteItemButton";
import { deleteNews, deleteProject } from "@/src/api";
import EditNews from "./EditNews";

const NewsPreview = ({
  news,
  setSelectedNews,
}: {
  news: NewsType;
  setSelectedNews: React.Dispatch<React.SetStateAction<null | NewsType>>;
}) => {
  return (
    <div className="bg-white w-full h-60 lg:h-full p-4 font-nunito">
      {news ? (
        <div className="w-full grid gap-8">
          <h3 className="font-bold text-xl">News</h3>
          <div className="w-full">
            <h5 className="text-sm font-light text-gray-400 mb-2">Title</h5>
            <p>{news.title}</p>
          </div>
          <div className="w-full">
            <h5 className="text-sm font-light text-gray-400 mb-2">
              Description
            </h5>
            <p>{news.description}</p>
          </div>
          <div className="w-full">
            <h5 className="text-sm font-light text-gray-400 mb-2">
              Cover Image
            </h5>
            {news.image ? (
              <img
                src={news.image}
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
            <h5 className="text-sm font-light text-gray-400 mb-2">Report</h5>
            <a
              className="text-blue-400 underline"
              target="blank"
              href={news.report}
            >
              {news.report.substring(0, 25)}...
            </a>
          </div>
          <div className="flex gap-4">
            {/* <button className="px-4 py-2 text-sm border border-blue-700 rounded-lg text-blue-700">
              Delete
            </button> */}
            <DeleteItemButton
              itemId={news.id}
              handleSelectedItem={setSelectedNews}
              itemType="News"
              navigateTo="/dashboard/news"
              deleteItem={deleteNews}
            />
            <EditNews item={news} setSelectedItem={setSelectedNews} />
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center w-full h-[300px]">
          <img src={gallery} className="w-16 h-16 mb-5 rounded-md" />
          <p
            className={`${styles.paragraph} text-xs  text-center text-[#849299]`}
          >
            Select a report to get more information
          </p>
        </div>
      )}
    </div>
  );
};

export default NewsPreview;
