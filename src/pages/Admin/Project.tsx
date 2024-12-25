import { notif, ProfilePic, search, sort } from "@/src/assets";
import { AddProject, ProjectCard, SelectGallery } from "@/src/components/Admin";
import styles from "@/src/styles";

const projectData = [
  {
    title: "Project 1",
    subtitle: "Strengthening Community Led Accountability to ...",
  },
  { title: "Project 2", subtitle: "Another key initiative..." },
  { title: "Project 3", subtitle: "Building resilient communities..." },
];

const Project = () => {
  return (
    <div className="w-full bg-[#FAFAFA] h-full grid grid-rows-[240px_1fr] lg:grid-rows-[180px_1fr]">
      {/* Header Section */}
      <div className="p-3 lg:px-8 lg:py-4 bg-white mb-5">
        <div className="flex items-center justify-between">
          <h1
            className={`${styles.heading3} leading-normal font-semibold tracking-wide`}
          >
            Project
          </h1>
          <div className="flex items-center gap-2 lg:gap-3">
            <div className="border rounded-full flex items-center p-1">
              <img
                src={notif}
                alt="Notification"
                className="w-[15px] h-[15px] rounded-full"
              />
            </div>
            <img
              src={ProfilePic}
              alt="User Profile"
              className="w-[35px] h-[35px] rounded-full"
            />
          </div>
        </div>
        {/* Search and Add Project */}
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-10 mt-10">
          <div className="flex items-center border py-3 px-5 bg-[#D8DDE4] justify-between rounded-xl">
            <input
              type="text"
              placeholder="Search Project"
              className={`${styles.paragraph4} text-[#849299] bg-transparent outline-0 flex-1`}
            />
            <img src={search} alt="Search Icon" className="w-5 h-5" />
          </div>
          <div className="grid grid-cols-2 gap-3 mt-5 lg:mt-0">
            <AddProject />
            <button className="flex items-center gap-2 py-3 px-7 border rounded-xl border-[#D8DDE4]">
              <img src={sort} alt="Sort Icon" className="w-6 h-6" />
              <p className="text-sm font-semibold text-[#849299]">
                Sort By: descending
              </p>
            </button>
          </div>
        </div>
      </div>
      {/* Projects Section */}
      <div className="p-3 lg:px-8 lg:py-4 overflow-y-scroll">
        <div className="grid lg:grid-cols-4 gap-3">
          <div className="lg:col-span-3">
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-5 bg-white p-5">
              {projectData.map((project, index) => (
                <ProjectCard
                  key={index}
                  title={project.title}
                  subtitle={project.subtitle}
                />
              ))}
            </div>
          </div>
          <SelectGallery />
        </div>
      </div>
    </div>
  );
};

export default Project;
