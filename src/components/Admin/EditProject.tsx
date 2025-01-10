import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  DialogClose,
} from "@/components/dialog";
import { image } from "@/src/assets";
import { Label } from "@/components/label";
import { Input } from "@/components/input";
import { Button } from "@/components/button";
import styles from "@/src/styles";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/select";
import { FormEvent, useRef, useState, ChangeEvent, useEffect } from "react";
import { toast } from "react-toastify";
import {
  ProjectCategoryType,
  ProjectStatusType,
  ProjectType,
} from "../../types";
import { ProjectCategory, ProjectStatus } from "@/src/constants";
import { format } from "date-fns";
import { Slider } from "@/components/ui/slider";
import DatePicker from "../DatePicker";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateProject } from "@/src/api";

const EditProject = ({
  item,
  setSelectedItem,
}: {
  item: ProjectType;
  setSelectedItem: any;
}) => {
  const queryClient = useQueryClient();
  const [open, setIsOpen] = useState(false);
  const [imagePreview, setImagePreview] = useState<any>(null);
  const [changeReport, setChangeReport] = useState<Boolean>(false);
  const [startingDate, setStartingDate] = useState<Date>();
  const [dateCompleted, setDateCompleted] = useState<Date>();
  const [completionRate, setCompletionRate] = useState<any>(0);

  const imageInputRef = useRef<HTMLInputElement>(null);
  const [formData, setFormData] = useState<ProjectType>({
    title: item.title,
    image: item.image,
    report: item.report,
    category: item.category,
    description: item.description,
    completion_rate: item.completion_rate,
    budget: item.budget,
    starting_date: item.starting_date,
    date_completed: item.date_completed,
    status: item.status,
  });

  useEffect(() => {
    if (item.image) {
      setImagePreview(item.image);
    }
  }, [item]);

  useEffect(() => {
    if (startingDate) {
      setFormData((prevState) => ({
        ...prevState,
        starting_date: format(startingDate, "PPP"),
      }));
    }

    if (dateCompleted) {
      setFormData((prevState) => ({
        ...prevState,
        date_completed: format(dateCompleted, "PPP"),
      }));
    }

    setFormData((prevState) => ({
      ...prevState,
      completion_rate: completionRate[0],
    }));
  }, [startingDate, dateCompleted, completionRate]);

  const handleFormClose = () => {
    if (mutation.isLoading) {
      toast.warning("Please wait, updating project.");
      return;
    }
    setIsOpen(!open);
    setImagePreview(item.image);
    setFormData({
      title: item.title,
      image: item.image,
      report: item.report,
      category: item.category,
      description: item.description,
      completion_rate: item.completion_rate,
      budget: item.budget,
      starting_date: item.starting_date,
      date_completed: item.date_completed,
      status: item.status,
    });
    setStartingDate(undefined);
    setDateCompleted(undefined);
    setCompletionRate(0);
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value, files } = event.target;
    const file = files?.[0];
    const maxSize = 20 * 1024 * 1024;

    if (file && file.size > maxSize) {
      toast.warning("File size exceeds 20mb");
      setFormData((prevState) => ({
        ...prevState,
        [name]: name === "report" ? null : value,
      }));
      return;
    } else {
      setFormData((prevState) => ({
        ...prevState,
        [name]: name === "report" ? file || null : value,
      }));
    }
  };

  const handleTextAreaChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSelect = (value: string) => {
    if (value) {
      setFormData((prevState) => ({ ...prevState, category: value }));
    }
  };

  const handleStatusSelect = (value: string) => {
    if (value) {
      setFormData((prevState) => ({ ...prevState, status: value }));
    }
  };

  const handleImageInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { files } = event.target;
    const file: any = files?.[0];
    const maxSize = 5 * 1024 * 1024;

    if (file && file.size > maxSize) {
      toast.warning("File size exceeds 5mb");
      return;
    } else {
      setImagePreview(URL.createObjectURL(file));
      setFormData((prevState) => ({ ...prevState, image: file || null }));
    }
  };

  const handleFileSelector = () => {
    imageInputRef.current?.click();
  };

  const mutation = useMutation(
    (upadatedData) => updateProject(item.id, upadatedData),
    {
      onSuccess: () => {
        toast.success("Project updated successfully!!!");
        setIsOpen(false);
        setSelectedItem(null);
        queryClient.invalidateQueries(["projects"]);
      },
      onError: () => {
        toast.error("error occurred while updating project");
      },
    }
  );

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Get the authentication token
    // const user = auth.currentUser;
    // const idToken = await user?.getIdToken();

    // if (!user || !idToken) {
    //   toast.error("You must be logged in to perform this action");
    //   return;
    // }

    const submitData = new FormData();
    if (formData.report) {
      submitData.append("report", formData.report);
    } else {
      toast.warning("Please upload report");
      return;
    }

    submitData.append("title", formData.title);

    if (formData.category) {
      submitData.append("category", formData.category);
    } else {
      toast.warning("Please select category");
      return;
    }

    if (formData.image) {
      submitData.append("image", formData.image);
    } else {
      toast.warning("Please upload image");
      return;
    }

    if (!formData.status) {
      toast.warning("Please select project status");
      return;
    }

    if (!formData.budget) {
      toast.warning("Please enter the project budget");
      return;
    }

    if (!formData.completion_rate) {
      submitData.append("completion_rate", "0");
    } else {
      submitData.append("completion_rate", formData.completion_rate);
    }

    submitData.append("description", formData.description);
    submitData.append("budget", formData.budget);
    submitData.append("starting_date", formData.starting_date);
    submitData.append("date_completed", formData.date_completed);
    submitData.append("status", formData.status);

    // Submit Data to the Server
    mutation.mutate(submitData);
  };
  return (
    <Dialog open={open} onOpenChange={handleFormClose}>
      <DialogTrigger className="flex items-center bg-[#1B43C6] py-3 px-7 gap-5 rounded-md">
        <p className="text-xs font-semibold font-nunito text-white">
          Edit Project
        </p>
      </DialogTrigger>

      <DialogContent className="overflow-y-auto w-full h-4/5">
        <DialogHeader>
          <DialogTitle className="text-center font-nunito text-lg font-semibold">
            Edit Project
          </DialogTitle>
          <DialogDescription className="text-center">
            All fields are required unless otherwise indicated.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit}>
          <div className="grid gap-8 my-2">
            <div>
              <Label htmlFor="category">Project Category</Label>
              <Select onValueChange={handleSelect} value={formData.category}>
                <SelectTrigger id="category" className="w-full">
                  <SelectValue placeholder="Select Project Category" />
                </SelectTrigger>
                <SelectContent>
                  {ProjectCategory.map((project: ProjectCategoryType) => (
                    <SelectItem key={project.id} value={project.title}>
                      {project.title}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="grid w-full items-center gap-2">
              <Label htmlFor="title">Title</Label>
              <Input
                type="text"
                id="title"
                placeholder="Enter title"
                name="title"
                onChange={handleInputChange}
                value={formData.title}
              />
            </div>

            <div className="grid w-full items-center gap-2">
              <Label htmlFor="description">Description</Label>
              <textarea
                id="description"
                name="description"
                onChange={handleTextAreaChange}
                placeholder="Enter project description"
                value={formData.description}
                required
                rows={5}
                cols={50}
                className={`${styles.paragraph4} p-4  border-[1px] mt-1 rounded-xl  outline-none  `}
              ></textarea>
            </div>

            <div className="grid w-full items-center gap-2">
              <Label>Image</Label>
              <input
                type="file"
                name="image"
                accept="image/jpeg, image/png"
                ref={imageInputRef}
                onChange={handleImageInputChange}
                className="hidden"
              />
              {imagePreview ? (
                <div className="flex items-center gap-4">
                  <img
                    src={imagePreview}
                    className="h-40 w-40 object-cover object-center"
                  />
                  <button
                    type="button"
                    className="bg-blue-700 text-white py-2 px-4 text-sm rounded-lg"
                    onClick={handleFileSelector}
                  >
                    Change Image
                  </button>
                </div>
              ) : (
                <div
                  onClick={handleFileSelector}
                  className="cursor-pointer w-full h-40 rounded-md border-[1px] bg-[#F4F7FC] border-[#D8DDE4] flex items-center justify-center flex-col"
                >
                  <img src={image} className="w-6 h-6" />
                  <p className={`${styles.paragraph4} text-[#849299] mt-1`}>
                    Click to upload image
                  </p>
                </div>
              )}
              <p className={`${styles.paragraph4} text-xs text-[#1B43C6]`}>
                Max File Size: 5 MB (jpg, png)
              </p>
            </div>

            <div className="grid w-full max-w-sm items-center gap-2">
              <Label htmlFor="document">Report</Label>
              {formData.report && !changeReport ? (
                <div className="flex items-center gap-8">
                  <p className="text-xs">document uploaded</p>
                  <p
                    onClick={() => setChangeReport(true)}
                    className="text-blue-600 font-light text-sm bg-gray-200 p-2"
                  >
                    Change report
                  </p>
                </div>
              ) : (
                <div>
                  <Input
                    id="document"
                    name="report"
                    type="file"
                    accept="application/pdf"
                    onChange={handleInputChange}
                  />
                  <p className={`${styles.paragraph4} text-xs text-[#1B43C6]`}>
                    Max File Size: 20 MB (pdf)
                  </p>
                </div>
              )}
            </div>

            <div className="grid w-full items-center gap-2">
              <Label>Completion Rate</Label>
              <div className="flex gap-4 py-2 items-center">
                <Slider
                  value={[completionRate]}
                  onValueChange={(val) => setCompletionRate(val)}
                  max={100}
                  step={1}
                />
                <div className="font-bold text-xl font-manrope text-blue-700">
                  {completionRate}%
                </div>
              </div>
            </div>

            <div className="grid w-full items-center gap-2">
              <Label htmlFor="budget">Budget</Label>
              <Input
                type="text"
                id="budget"
                placeholder="Enter amount"
                name="budget"
                value={formData.budget}
                onChange={handleInputChange}
              />
            </div>
            <div className="grid w-full items-center gap-2">
              <Label htmlFor="starting_date">Starting Date</Label>
              {formData?.starting_date ? (
                <Input
                  type="text"
                  id="starting_date"
                  placeholder="Enter project starting date"
                  name="starting_date"
                  value={formData?.starting_date}
                  onChange={handleInputChange}
                />
              ) : (
                <DatePicker date={startingDate} setDate={setStartingDate} />
              )}
            </div>

            <div className="grid w-full items-center gap-2">
              <Label htmlFor="date_completed">Date Completed</Label>
              {formData?.date_completed ? (
                <Input
                  type="text"
                  id="date_completed"
                  placeholder="Enter project completion date"
                  name="date_completed"
                  value={formData?.date_completed}
                  onChange={handleInputChange}
                />
              ) : (
                <DatePicker date={dateCompleted} setDate={setDateCompleted} />
              )}
            </div>

            <div>
              <Label htmlFor="status">Status</Label>
              <Select
                name="status"
                onValueChange={handleStatusSelect}
                value={formData?.status}
              >
                <SelectTrigger id="status" className="w-full">
                  <SelectValue placeholder="Select Project Status" />
                </SelectTrigger>
                <SelectContent>
                  {ProjectStatus.map((status: ProjectStatusType) => (
                    <SelectItem key={status.id} value={status.title}>
                      {status.title}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <DialogFooter className="sm:justify-start mt-8">
            <DialogClose asChild>
              <Button
                type="button"
                variant="outline"
                className="border-blue-700 text-blue-700"
              >
                Cancel
              </Button>
            </DialogClose>
            <Button
              type="submit"
              disabled={mutation.isLoading}
              className="bg-blue-800 hover:bg-blue-600 text-white w-full mb-2 "
            >
              {mutation.isLoading ? "Saving please wait..." : "Save"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default EditProject;
