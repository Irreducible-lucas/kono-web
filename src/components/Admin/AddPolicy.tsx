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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/select";
import { image, plus } from "@/src/assets";
import { Label } from "@/components/label";
import { Input } from "@/components/input";
import { Button } from "@/components/ui/button";
import styles from "@/src/styles";
import { FormEvent, useRef, useState, ChangeEvent } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "../../axios/index";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { PolicyType } from "@/src/types";

const createPolicy = async (formData: FormData) => {
  const response = await axios.post("/policy", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return response.data;
};

const AddPolicy = () => {
  const queryClient = useQueryClient();
  const [open, setIsOpen] = useState(false);
  const [imagePreview, setImagePreview] = useState<any>(null);
  const navigate = useNavigate();

  const imageInputRef = useRef<HTMLInputElement>(null);
  const [formData, setFormData] = useState<PolicyType>({
    title: "",
    description: "",
    image: null,
    document: null,
    document_type: "",
  });

  const mutation = useMutation({
    mutationFn: createPolicy,
    onSuccess: () => {
      toast.success("Policy created successfully!!!");
      queryClient.invalidateQueries({ queryKey: ["policies"] });
      setIsOpen(false);
      navigate("/dashboard/policies");
    },
    onError: (error) => {
      toast.error("Error occurred while creating policy");
      console.error("Error:", error);
    },
  });

  const handleFormClose = () => {
    if (mutation.isLoading) {
      toast.warning("Please wait, data saving to the database.");
      return;
    }
    setIsOpen(!open);
    setImagePreview(null);
    setFormData({
      title: "",
      description: "",
      image: null,
      document: null,
      document_type: "",
    });
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value, files } = event.target;
    const file = files?.[0];
    const maxSize = 20 * 1024 * 1024;

    if (file && file.size > maxSize) {
      toast.warning("File size exceeds 20mb");
      setFormData((prevState) => ({
        ...prevState,
        [name]: name === "document" ? null : value,
      }));
      return;
    }
    setFormData((prevState) => ({
      ...prevState,
      [name]: name === "document" ? file || null : value,
    }));
  };

  const handleSelect = (value: string) => {
    if (value) {
      setFormData((prevState) => ({ ...prevState, document_type: value }));
    }
  };

  const handleImageInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { files } = event.target;
    const file = files?.[0];
    const maxSize = 5 * 1024 * 1024;

    if (file && file.size > maxSize) {
      toast.warning("File size exceeds 50mb");
      return;
    }
    setImagePreview(file);
    setFormData((prevState) => ({ ...prevState, image: file || null }));
  };

  const handleFileSelector = () => {
    imageInputRef.current?.click();
  };

  const handleTextAreaChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const submitData = new FormData();

    if (!formData.document) {
      toast.warning("Please upload document");
      return;
    }

    if (!formData.document_type) {
      toast.warning("Please select document type");
      return;
    }

    if (!formData.image) {
      toast.warning("Please upload image");
      return;
    }

    submitData.append("document", formData.document);
    submitData.append("title", formData.title);
    submitData.append("description", formData.description);
    submitData.append("document_type", formData.document_type);
    submitData.append("image", formData.image);

    mutation.mutate(submitData);
  };

  return (
    <Dialog open={open} onOpenChange={handleFormClose}>
      <DialogTrigger className="flex items-center bg-[#1B43C6] py-3 px-7 gap-5 rounded-md">
        <img src={plus} className="w-6 h-6" />
        <p className="text-xs font-semibold font-nunito text-white">
          Add Policy
        </p>
      </DialogTrigger>

      <DialogContent className="overflow-y-auto w-full h-4/5">
        <DialogHeader>
          <DialogTitle className="text-center font-nunito text-lg font-semibold">
            Add Policy
          </DialogTitle>
          <DialogDescription className="text-center">
            All fields are required unless otherwise indicated.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit}>
          <div className="grid gap-8 my-2">
            <div>
              <Label htmlFor="document_type">Policy type</Label>
              <Select onValueChange={handleSelect}>
                <SelectTrigger id="document_type" className="w-full">
                  <SelectValue placeholder="Select document type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="policy">Council Policy</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="report">Title</Label>
              <Input
                type="text"
                id="title"
                placeholder="Enter Title"
                name="title"
                onChange={handleInputChange}
              />
            </div>

            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="description">Description</Label>
              <textarea
                id="description"
                name="description"
                onChange={handleTextAreaChange}
                placeholder="Enter project description"
                required
                rows={5}
                cols={50}
                className={`${styles.paragraph4} p-4  border-[1px] mt-1 rounded-xl  outline-none  `}
              ></textarea>
            </div>

            <div className="grid w-full items-center gap-1.5">
              <Label>image</Label>
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
                    src={URL.createObjectURL(imagePreview)}
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
                Max File Size: 20 MB (jpg, png)
              </p>
            </div>

            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="document">Document</Label>
              <Input
                id="document"
                name="document"
                type="file"
                accept="application/pdf"
                onChange={handleInputChange}
              />
              <p className={`${styles.paragraph4} text-xs text-[#1B43C6]`}>
                Max File Size: 20 MB (pdf)
              </p>
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
              className="bg-blue-700 hover:bg-blue-600 text-white w-full mb-2"
            >
              {mutation.isLoading ? "Saving please wait..." : "Save"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AddPolicy;

// import {
//   Dialog,
//   DialogContent,
//   DialogDescription,
//   DialogHeader,
//   DialogTitle,
//   DialogTrigger,
//   DialogFooter,
//   DialogClose,
// } from "@/components/dialog";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/select";
// import { image, plus } from "@/src/assets";
// import { Label } from "@/components/label";
// import { Input } from "@/components/input";
// import { Button } from "@/components/ui/button";
// import styles from "@/src/styles";
// import { FormEvent, useRef, useState, ChangeEvent } from "react";
// import { AxiosResponse, AxiosError } from "axios";
// import axios from "../../axios/index";
// import { useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";
// import { PolicyType } from "@/src/types";

// const AddPolicy = () => {
//   const [open, setIsOpen] = useState(false);
//   const [saving, setIsSaving] = useState(false);
//   const [imagePreview, setImagePreview] = useState<any>(null);

//   const imageInputRef = useRef<HTMLInputElement>(null);
//   const [formData, setFormData] = useState<PolicyType>({
//     title: "",
//     description: "",
//     image: null,
//     document: null,
//     document_type: "",
//   });

//   const navigate = useNavigate();

//   const handleFormClose = () => {
//     if (saving) {
//       toast.warning("Please wait, data saving to the database.");
//       return;
//     }
//     setIsOpen(!open);
//     setImagePreview(null);
//     setFormData({
//       title: "",
//       description: "",
//       image: null,
//       document: null,
//       document_type: "",
//     });
//   };

//   const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
//     const { name, value, files } = event.target;
//     const file = files?.[0];
//     const maxSize = 20 * 1024 * 1024;

//     if (file && file.size > maxSize) {
//       toast.warning("File size exceeds 20mb");
//       setFormData((prevState) => ({
//         ...prevState,
//         [name]: name === "document" ? null : value,
//       }));
//       return;
//     } else {
//       setFormData((prevState) => ({
//         ...prevState,
//         [name]: name === "document" ? file || null : value,
//       }));
//     }
//   };

//   const handleSelect = (value: string) => {
//     if (value) {
//       setFormData((prevState) => ({ ...prevState, document_type: value }));
//     }
//   };

//   const handleImageInputChange = (event: ChangeEvent<HTMLInputElement>) => {
//     const { files } = event.target;
//     const file = files?.[0];
//     const maxSize = 5 * 1024 * 1024;

//     if (file && file.size > maxSize) {
//       toast.warning("File size exceeds 50mb");
//       return;
//     } else {
//       setImagePreview(file);
//       setFormData((prevState) => ({ ...prevState, image: file || null }));
//     }
//   };

//   const handleFileSelector = () => {
//     imageInputRef.current?.click();
//   };

//   const handleTextAreaChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
//     const { name, value } = event.target;
//     setFormData((prevState) => ({ ...prevState, [name]: value }));
//   };

//   const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
//     event.preventDefault();

//     // Get the authentication token
//     // const user = auth.currentUser;
//     // const idToken = await user?.getIdToken();

//     // if (!user || !idToken) {
//     //   toast.error("You must be logged in to perform this action");
//     //   return;
//     // }

//     const submitData = new FormData();
//     if (formData.document) {
//       submitData.append("document", formData.document);
//     } else {
//       toast.warning("Please upload document");
//       return;
//     }

//     submitData.append("title", formData.title);
//     submitData.append("description", formData.description);

//     if (formData.document) {
//       submitData.append("document_type", formData.document_type);
//     } else {
//       toast.warning("Please select document type");
//       return;
//     }

//     if (formData.image) {
//       submitData.append("image", formData.image);
//     } else {
//       toast.warning("Please upload image");
//       return;
//     }

//     // Submit Data to the Server
//     try {
//       setIsSaving(true);
//       const response: AxiosResponse = await axios.post("/policy", submitData, {
//         headers: {
//           "Content-Type": "multipart/form-data",
//           // Authorization: `Bearer ${idToken}`,
//         },
//       });
//       if (response.data) {
//         toast.success("Policy created successfully!!!");
//         setIsSaving(false);
//         setIsOpen(false);
//         navigate("/dashboard/policies");
//       }
//     } catch (error) {
//       toast.error("error occurred while creating policy");
//       setIsSaving(false);
//       console.error("Error:", error as AxiosError);
//     }
//   };
//   return (
//     <Dialog open={open} onOpenChange={handleFormClose}>
//       <DialogTrigger className="flex items-center bg-[#1B43C6] py-3 px-7 gap-5 rounded-md">
//         <img src={plus} className="w-6 h-6" />
//         <p className="text-xs font-semibold font-nunito text-white">
//           Add Policy
//         </p>
//       </DialogTrigger>

//       <DialogContent className="overflow-y-auto w-full h-4/5">
//         <DialogHeader>
//           <DialogTitle className="text-center font-nunito text-lg font-semibold">
//             Add Policy
//           </DialogTitle>
//           <DialogDescription className="text-center">
//             All fields are required unless otherwise indicated.
//           </DialogDescription>
//         </DialogHeader>

//         <form onSubmit={handleSubmit}>
//           <div className="grid gap-8 my-2">
//             <div>
//               <Label htmlFor="document_type">Policy type</Label>
//               <Select onValueChange={handleSelect}>
//                 <SelectTrigger id="document_type" className="w-full">
//                   <SelectValue placeholder="Select document type" />
//                 </SelectTrigger>
//                 <SelectContent>
//                   <SelectItem value="policy">Council Policy</SelectItem>
//                   {/* <SelectItem value="annual">Annual Reports</SelectItem> */}
//                 </SelectContent>
//               </Select>
//             </div>

//             <div className="grid w-full items-center gap-1.5">
//               <Label htmlFor="report">Title</Label>
//               <Input
//                 type="text"
//                 id="title"
//                 placeholder="Enter Title"
//                 name="title"
//                 onChange={handleInputChange}
//               />
//             </div>

//             <div className="grid w-full items-center gap-1.5">
//               <Label htmlFor="description">Description</Label>
//               <textarea
//                 id="description"
//                 name="description"
//                 onChange={handleTextAreaChange}
//                 placeholder="Enter project description"
//                 required
//                 rows={5}
//                 cols={50}
//                 className={`${styles.paragraph4} p-4  border-[1px] mt-1 rounded-xl  outline-none  `}
//               ></textarea>
//             </div>

//             <div className="grid w-full items-center gap-1.5">
//               <Label>image</Label>
//               <input
//                 type="file"
//                 name="image"
//                 accept="image/jpeg, image/png"
//                 ref={imageInputRef}
//                 onChange={handleImageInputChange}
//                 className="hidden"
//               />
//               {imagePreview ? (
//                 <div className="flex items-center gap-4">
//                   <img
//                     src={URL.createObjectURL(imagePreview)}
//                     className="h-40 w-40 object-cover object-center"
//                   />
//                   <button
//                     type="button"
//                     className="bg-blue-700 text-white py-2 px-4 text-sm rounded-lg"
//                     onClick={handleFileSelector}
//                   >
//                     Change Image
//                   </button>
//                 </div>
//               ) : (
//                 <div
//                   onClick={handleFileSelector}
//                   className="cursor-pointer w-full h-40 rounded-md border-[1px] bg-[#F4F7FC] border-[#D8DDE4] flex items-center justify-center flex-col"
//                 >
//                   <img src={image} className="w-6 h-6" />
//                   <p className={`${styles.paragraph4} text-[#849299] mt-1`}>
//                     Click to upload image
//                   </p>
//                 </div>
//               )}
//               <p className={`${styles.paragraph4} text-xs text-[#1B43C6]`}>
//                 Max File Size: 20 MB (jpg, png)
//               </p>
//             </div>

//             <div className="grid w-full max-w-sm items-center gap-1.5">
//               <Label htmlFor="document">Document</Label>
//               <Input
//                 id="document"
//                 name="document"
//                 type="file"
//                 accept="application/pdf"
//                 onChange={handleInputChange}
//               />
//               <p className={`${styles.paragraph4} text-xs text-[#1B43C6]`}>
//                 Max File Size: 20 MB (pdf)
//               </p>
//             </div>
//           </div>

//           <DialogFooter className="sm:justify-start mt-8">
//             <DialogClose asChild>
//               <Button
//                 type="button"
//                 variant="outline"
//                 className="border-blue-700 text-blue-700"
//               >
//                 Cancel
//               </Button>
//             </DialogClose>
//             <Button
//               type="submit"
//               disabled={saving}
//               className="bg-blue-700 hover:bg-blue-600 text-white w-full mb-2 "
//             >
//               {saving ? "Saving please wait..." : "Save"}
//             </Button>
//           </DialogFooter>
//         </form>
//       </DialogContent>
//     </Dialog>
//   );
// };

// export default AddPolicy;
