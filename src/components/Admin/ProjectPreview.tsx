import { CorporateImage, gallery } from "@/src/assets";
import styles from "@/src/styles";
import { ProjectType } from "@/src/types";
import EditProject from "./EditProject";
import React from "react";
import { deleteProject } from "@/src/api";
import DeleteItemButton2 from "./DeleteItemButton2";

const ProjectPreview = ({
  project,
  setSelectedProject,
}: {
  project: ProjectType;
  setSelectedProject: React.Dispatch<React.SetStateAction<null | ProjectType>>;
}) => {
  return (
    <div className="bg-white w-full h-60 lg:h-full p-4 font-nunito">
      {project ? (
        <div className="w-full grid gap-8">
          <h3 className="font-bold text-xl">Project</h3>
          <div className="w-full">
            <h5 className="text-sm font-light text-gray-400 mb-2">Category</h5>
            <p>{project.category}</p>
          </div>
          <div className="w-full">
            <h5 className="text-sm font-light text-gray-400 mb-2">Title</h5>
            <p>{project.title}</p>
          </div>
          <div className="w-full">
            <h5 className="text-sm font-light text-gray-400 mb-2">
              Cover Image
            </h5>
            {project.image ? (
              <img
                src={project.image}
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
              Completion Rate
            </h5>
            <p>{project?.completion_rate}% complete</p>
          </div>

          <div className="w-full">
            <h5 className="text-sm font-light text-gray-400 mb-2">Budget</h5>
            <p>{project?.budget}</p>
          </div>

          <div className="w-full">
            <h5 className="text-sm font-light text-gray-400 mb-2">
              description
            </h5>
            <p>{project?.description}</p>
          </div>

          <div className="w-full">
            <h5 className="text-sm font-light text-gray-400 mb-2">
              Project Status
            </h5>
            <p>{project?.status}</p>
          </div>

          <div className="w-full">
            <h5 className="text-sm font-light text-gray-400 mb-2">
              Starting Date
            </h5>
            <p>{project?.starting_date ? project?.starting_date : "-"}</p>
          </div>

          <div className="w-full">
            <h5 className="text-sm font-light text-gray-400 mb-2">
              Date Completed
            </h5>
            <p>{project?.date_completed ? project?.date_completed : "-"}</p>
          </div>

          <div className="w-full">
            <h5 className="text-sm font-light text-gray-400 mb-2">Report</h5>
            <a
              className="text-blue-400 underline"
              target="blank"
              href={project?.report}
            >
              {project.report.substring(0, 25)}...
            </a>
          </div>
          <div className="flex gap-4">
            {/* <button className="px-4 py-2 text-sm border border-blue-700 rounded-lg text-blue-700">
              Delete
            </button> */}
            <DeleteItemButton2
              queryKey="projects"
              itemId={project.id}
              handleSelectedItem={setSelectedProject}
              itemType="Project"
              navigateTo="/dashboard/project"
              deleteItem={deleteProject}
            />
            <EditProject item={project} setSelectedItem={setSelectedProject} />
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

export default ProjectPreview;
