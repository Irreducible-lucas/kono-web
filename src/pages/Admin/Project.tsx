import { fetchProjects } from "@/src/api";
import { search, Spinner } from "@/src/assets";
import {
  AddProject,
  NavHeader,
  ProjectCard,
  ProjectPreview,
} from "@/src/components/Admin";
import styles from "@/src/styles";
import { ProjectType } from "@/src/types";
import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";

const Project = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["projects"],
    queryFn: fetchProjects,
  });

  const [searchText, setSearchText] = useState("");
  const [selectedItem, setSelectedItem] = useState<any>(null);
  const [filteredProjects, setFilteredProjects] = useState([]);

  useEffect(() => {
    const filtered = data?.filter((project: ProjectType) =>
      project?.title.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredProjects(filtered);
  }, [searchText, data]);

  if (isLoading) {
    return (
      <div className="flex flex-col justify-center items-center h-full bg-white">
        <img src={Spinner} className="h-8 w-8" alt="" />
        <p>Loading data...</p>
      </div>
    );
  }

  if (isError) {
    return <div>Sorry, error occured while fetching data</div>;
  }
  return (
    <div className="w-full bg-[#FAFAFA] h-full grid grid-rows-[240px_1fr] lg:grid-rows-[180px_1fr]">
      <div className="p-3 lg:px-8 lg:py-4 bg-white">
        <NavHeader title="Project" />
        <div className="flex gap-8 py-6">
          <div className="flex items-center border-[1px] py-3 px-5 bg-[#D8DDE4] justify-between rounded-xl w-1/2">
            <input
              type="text"
              placeholder="Search project"
              onChange={(e) => setSearchText(e.target.value)}
              className={`${styles.paragraph4} text-[#849299] bg-transparent outline-0 flex-1`}
            />
            <img src={search} className="w-5 h-5" />
          </div>
          <AddProject />
        </div>
      </div>

      {/* Projects Section */}
      <div className="lg:py-4 overflow-y-scroll">
        <div className="grid lg:grid-cols-4 gap-4">
          <div className="lg:col-span-3 bg-white">
            {filteredProjects?.length > 0 ? (
              <div className="grid grid-cols-2 gap-5 p-5">
                {filteredProjects?.map((project: any) => (
                  <div
                    className="cursor-pointer"
                    onClick={() => setSelectedItem(project)}
                    key={project.id}
                  >
                    <ProjectCard data={project} />
                  </div>
                ))}
              </div>
            ) : (
              <div className="bg-white h-[300px] w-full grid place-items-center">
                <p className="text-center text-blue-700">No projects found</p>
              </div>
            )}
          </div>
          <ProjectPreview
            project={selectedItem}
            setSelectedProject={setSelectedItem}
          />
        </div>
      </div>
    </div>
  );
};

export default Project;
