import styles from "@/src/styles";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "../../index.css";
import Button from "./Button";
import { AboutUsType } from "@/src/types";
import { ChangeEvent, FormEvent, useRef, useState } from "react";
import { toast } from "react-toastify";
import { image } from "@/src/assets";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateAbout } from "@/src/api";

const AboutUsTabs = ({ aboutInfo }: any) => {
  const queryClient = useQueryClient();
  const [historyFormData, setHistoryFormData] = useState<AboutUsType>(
    aboutInfo[0]
  );
  const [structureFormData, setStructureFormData] = useState<AboutUsType>(
    aboutInfo[1]
  );
  const [visionFormData, setVisionFormData] = useState<AboutUsType>(
    aboutInfo[2]
  );
  const [missionFormData, setMissionFormData] = useState<AboutUsType>(
    aboutInfo[3]
  );
  const [isSaving, setIsSaving] = useState(false);

  //   History Tab Data
  const [historyImage, setHistoryImage] = useState<any>(aboutInfo?.[0].image);

  const handleHistoryInputChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setHistoryFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const historyImageInputRef = useRef<HTMLInputElement>(null);
  const handleHistoryImageInputChange = (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    const { files } = event.target;
    const file: any = files?.[0];
    const maxSize = 5 * 1024 * 1024;

    if (file && file.size > maxSize) {
      toast.warning("File size exceeds 5mb");
      return;
    } else {
      setHistoryImage(URL.createObjectURL(file));
      setHistoryFormData((prevState: AboutUsType) => ({
        ...prevState,
        image: file || null,
      }));
    }
  };
  const handleHistoryImageSelector = () => {
    historyImageInputRef.current?.click();
  };

  const historyMutation = useMutation(
    (upadatedData) => updateAbout(aboutInfo[0].id, upadatedData),
    {
      onSuccess: () => {
        toast.success("History updated successfully!!!");
        setIsSaving(false);
        queryClient.invalidateQueries(["about"]);
      },
      onError: () => {
        toast.error("Error occurred while updating history");
        setIsSaving(false);
      },
    }
  );

  const handleHistoryFormSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const submitData = new FormData();
    submitData.append("title", historyFormData.title);
    submitData.append("description", historyFormData.description);
    if (historyFormData.image instanceof File) {
      submitData.append("image", historyFormData.image);
    }
    setIsSaving(true);
    historyMutation.mutate(submitData);
  };

  //   Council Structure Tab Data
  const [structureImage, setStructureImage] = useState<any>(
    aboutInfo?.[1].image
  );
  const structureImageInputRef = useRef<HTMLInputElement>(null);

  const handleStructureInputChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setStructureFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleStructureImageInputChange = (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    const { files } = event.target;
    const file: any = files?.[0];
    const maxSize = 5 * 1024 * 1024;

    if (file && file.size > maxSize) {
      toast.warning("File size exceeds 5mb");
      return;
    } else {
      setStructureImage(URL.createObjectURL(file));
      setStructureFormData((prevState: AboutUsType) => ({
        ...prevState,
        image: file || null,
      }));
    }
  };
  const handleStructureImageSelector = () => {
    structureImageInputRef.current?.click();
  };

  const structureMutation = useMutation(
    (upadatedData) => updateAbout(aboutInfo[1].id, upadatedData),
    {
      onSuccess: () => {
        toast.success("Council Structure updated successfully!!!");
        setIsSaving(false);
        queryClient.invalidateQueries(["about"]);
      },
      onError: () => {
        toast.error("Error occurred while updating council structure");
        setIsSaving(false);
      },
    }
  );

  const handleStructureFormSubmit = async (
    event: FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    const submitData = new FormData();
    submitData.append("title", structureFormData.title);
    submitData.append("description", structureFormData.description);
    if (structureFormData.image instanceof File) {
      submitData.append("image", structureFormData.image);
    }

    setIsSaving(true);
    structureMutation.mutate(submitData);
  };

  //   Vision Tab Data
  const handleVisionInputChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setVisionFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const visionMutation = useMutation(
    (upadatedData) => updateAbout(aboutInfo[2].id, upadatedData),
    {
      onSuccess: () => {
        toast.success("Vision updated successfully!!!");
        setIsSaving(false);
        queryClient.invalidateQueries(["about"]);
      },
      onError: () => {
        toast.error("Error occurred while updating vision");
        setIsSaving(false);
      },
    }
  );

  const handleVisionFormSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const submitData = new FormData();
    submitData.append("title", visionFormData.title);
    submitData.append("description", visionFormData.description);
    if (visionFormData.image instanceof File) {
      submitData.append("image", visionFormData.image);
    }

    setIsSaving(true);
    visionMutation.mutate(submitData);
  };

  //   Mission Tab Data
  const handleMissionInputChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setMissionFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const missionMutation = useMutation(
    (upadatedData) => updateAbout(aboutInfo[3].id, upadatedData),
    {
      onSuccess: () => {
        toast.success("Mission updated successfully!!!");
        setIsSaving(false);
        queryClient.invalidateQueries(["about"]);
      },
      onError: () => {
        toast.error("Error occurred while updating mission");
        setIsSaving(false);
      },
    }
  );

  const handleMissionFormSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // console.log("Form Data:", missionFormData);

    const submitData = new FormData();
    submitData.append("title", missionFormData.title);
    submitData.append("description", missionFormData.description);
    if (missionFormData.image instanceof File) {
      submitData.append("image", missionFormData.image);
    }

    setIsSaving(true);
    missionMutation.mutate(submitData);
  };

  return (
    <div className="px-6">
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
          {/* <Tab className="custom-tab" selectedClassName="active">
            Officials and Chiefdoms
          </Tab> */}
        </TabList>
        <TabPanel className="mt-10" id="custom-tab-panel">
          <form onSubmit={handleHistoryFormSubmit}>
            <div className="grid grid-cols-[1fr_350px] gap-8">
              <div className="flex flex-col gap-4">
                <div className="flex flex-col">
                  <label
                    htmlFor="title"
                    className={`${styles.paragraph3} text-[#30354E]`}
                  >
                    Title
                  </label>
                  <input
                    id="title"
                    type="text"
                    name="title"
                    className="mt-2 p-2 border-[1px] border-[#D8DDE4] rounded-lg outline-none"
                    placeholder="Enter Title"
                    onChange={handleHistoryInputChange}
                    required
                    value={historyFormData.title}
                  />
                </div>
                <div className="flex flex-col">
                  <label
                    htmlFor="description"
                    className={`${styles.paragraph3} text-[#30354E]`}
                  >
                    Description
                  </label>
                  <textarea
                    id="text-area"
                    name="description"
                    className={`${styles.paragraph4} w-full h-[250px] max-h-[250px] p-5 border-[1px] mt-2 rounded-xl outline-none `}
                    value={historyFormData.description}
                    onChange={handleHistoryInputChange}
                    required
                  ></textarea>
                </div>
              </div>
              <div className="w-full h-[350px] bg-[#F4F7FC] my-5 rounded-md">
                <input
                  type="file"
                  name="image"
                  id="image"
                  accept="image/jpeg, image/png"
                  ref={historyImageInputRef}
                  onChange={handleHistoryImageInputChange}
                  className="hidden"
                />
                {historyImage ? (
                  <div className="relative w-full h-full">
                    <img
                      src={historyImage}
                      alt="Map of Kono District"
                      className="h-full w-full object-contain"
                    />
                    <div className="absolute group hover:bg-black/30 w-full h-full top-0 left-0 grid place-items-center">
                      <button
                        type="button"
                        className="bg-blue-700 hidden group-hover:block  text-white py-2 px-4 text-sm rounded-lg"
                        onClick={handleHistoryImageSelector}
                      >
                        Change Image
                      </button>
                    </div>
                  </div>
                ) : (
                  <div
                    onClick={handleHistoryImageSelector}
                    className="cursor-pointer w-full h-full rounded-md border-[1px] bg-[#F4F7FC] border-[#D8DDE4] flex items-center justify-center flex-col"
                  >
                    <img src={image} className="w-6 h-6" alt="Upload icon" />
                    <p className={`${styles.paragraph4} text-[#849299] mt-1`}>
                      Click to upload image
                    </p>
                  </div>
                )}
              </div>
            </div>
            <Button
              name={isSaving ? "Saving Data..." : "Save Changes"}
              py={4}
              px={8}
            />
          </form>
        </TabPanel>
        <TabPanel>
          <form onSubmit={handleStructureFormSubmit}>
            <div className="grid grid-cols-[1fr_350px] gap-8">
              <div className="flex flex-col gap-4">
                <div className="flex flex-col">
                  <label
                    htmlFor="title"
                    className={`${styles.paragraph3} text-[#30354E]`}
                  >
                    Title
                  </label>
                  <input
                    id="title"
                    type="text"
                    name="title"
                    className="mt-2 p-2 border-[1px] border-[#D8DDE4] rounded-lg outline-none"
                    placeholder="Enter Title"
                    onChange={handleStructureInputChange}
                    required
                    value={structureFormData.title}
                  />
                </div>
                <div className="flex flex-col">
                  <label
                    htmlFor="description"
                    className={`${styles.paragraph3} text-[#30354E]`}
                  >
                    Description
                  </label>
                  <textarea
                    id="text-area"
                    name="description"
                    className={`${styles.paragraph4} w-full h-[250px] max-h-[250px] p-5 border-[1px] mt-2 rounded-xl outline-none `}
                    value={structureFormData.description}
                    onChange={handleStructureInputChange}
                    required
                  ></textarea>
                </div>
              </div>
              <div className="w-full h-[350px] bg-[#F4F7FC] my-5 rounded-md">
                <input
                  type="file"
                  name="image"
                  id="image"
                  accept="image/jpeg, image/png"
                  ref={structureImageInputRef}
                  onChange={handleStructureImageInputChange}
                  className="hidden"
                />
                {structureImage ? (
                  <div className="relative w-full h-full">
                    <img
                      src={structureImage}
                      alt="Map of Kono District"
                      className="h-full w-full object-contain"
                    />
                    <div className="absolute group hover:bg-black/30 w-full h-full top-0 left-0 grid place-items-center">
                      <button
                        type="button"
                        className="bg-blue-700 hidden group-hover:block  text-white py-2 px-4 text-sm rounded-lg"
                        onClick={handleStructureImageSelector}
                      >
                        Change Image
                      </button>
                    </div>
                  </div>
                ) : (
                  <div
                    onClick={handleStructureImageSelector}
                    className="cursor-pointer w-full h-full rounded-md border-[1px] bg-[#F4F7FC] border-[#D8DDE4] flex items-center justify-center flex-col"
                  >
                    <img src={image} className="w-6 h-6" alt="Upload icon" />
                    <p className={`${styles.paragraph4} text-[#849299] mt-1`}>
                      Click to upload image
                    </p>
                  </div>
                )}
              </div>
            </div>
            <Button
              name={isSaving ? "Saving Data..." : "Save Changes"}
              py={4}
              px={8}
            />
          </form>
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-2 gap-8">
            <form onSubmit={handleVisionFormSubmit}>
              <div className="flex flex-col gap-4">
                <h2 className="text-2xl font-bold text-blue-700">Our Vision</h2>
                <div className="flex flex-col">
                  <label
                    htmlFor="title"
                    className={`${styles.paragraph3} text-[#30354E]`}
                  >
                    Title
                  </label>
                  <textarea
                    id="text-area"
                    name="title"
                    className={`${styles.paragraph4} w-full h-[100px] max-h-[100px] p-5 border-[1px] mt-2 rounded-xl outline-none `}
                    value={visionFormData.title}
                    onChange={handleVisionInputChange}
                    required
                  ></textarea>
                </div>
                <div className="flex flex-col">
                  <label
                    htmlFor="description"
                    className={`${styles.paragraph3} text-[#30354E]`}
                  >
                    Description
                  </label>
                  <textarea
                    id="text-area"
                    name="description"
                    className={`${styles.paragraph4} w-full h-[200px] max-h-[200px] p-5 border-[1px] mt-2 rounded-xl outline-none `}
                    value={visionFormData.description}
                    onChange={handleVisionInputChange}
                    required
                  ></textarea>
                </div>
              </div>
              <Button name="Save Changes" py={4} px={8} />
            </form>

            <form onSubmit={handleMissionFormSubmit}>
              <div className="flex flex-col gap-4">
                <h2 className="text-2xl font-bold text-blue-700">
                  Our Mission
                </h2>
                <div className="flex flex-col">
                  <label
                    htmlFor="title"
                    className={`${styles.paragraph3} text-[#30354E]`}
                  >
                    Title
                  </label>
                  <textarea
                    id="text-area"
                    name="title"
                    className={`${styles.paragraph4} w-full h-[100px] max-h-[100px] p-5 border-[1px] mt-2 rounded-xl outline-none `}
                    value={missionFormData.title}
                    onChange={handleMissionInputChange}
                    required
                  ></textarea>
                </div>
                <div className="flex flex-col">
                  <label
                    htmlFor="description"
                    className={`${styles.paragraph3} text-[#30354E]`}
                  >
                    Description
                  </label>
                  <textarea
                    id="text-area"
                    name="description"
                    className={`${styles.paragraph4} w-full h-[200px] max-h-[200px] p-5 border-[1px] mt-2 rounded-xl outline-none `}
                    value={missionFormData.description}
                    onChange={handleMissionInputChange}
                    required
                  ></textarea>
                </div>
              </div>
              <Button name="Save Changes" py={4} px={8} />
            </form>
          </div>
        </TabPanel>
        {/* <TabPanel>
          <form onSubmit={handleSubmit}>
            <label htmlFor="principle">Principles</label>
            <textarea
              id="principle"
              name="principle"
              className={`${styles.paragraph4} w-full h-[200px] max-h-[200px] p-5 border-[1px] mt-5 rounded-xl outline-none `}
              //   value={formData.principle}
              onChange={handleInputChange}
            ></textarea>
            <Button name="Save Changes" py={2} px={3} />
          </form> 
        </TabPanel> */}
      </Tabs>
    </div>
  );
};

export default AboutUsTabs;
