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
import { PolicyType } from "../../types";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updatePolicy } from "@/src/api";

const EditPolicy = ({
  item,
  setSelectedItem,
}: {
  item: PolicyType;
  setSelectedItem: any;
}) => {
  const queryClient = useQueryClient();
  const [open, setIsOpen] = useState(false);
  const [saving, setIsSaving] = useState(false);
  const [imagePreview, setImagePreview] = useState<any>(null);
  const [changeReport, setChangeReport] = useState<Boolean>(false);

  const imageInputRef = useRef<HTMLInputElement>(null);
  const [formData, setFormData] = useState<PolicyType>({
    title: item.title,
    description: item.description,
    image: item.image,
    document: item.document,
    document_type: item.document_type,
  });

  useEffect(() => {
    if (item.image) {
      setImagePreview(item.image);
    }
  }, [item]);

  const handleFormClose = () => {
    if (saving) {
      toast.warning("Please wait, updating policy.");
      return;
    }
    setIsOpen(!open);
    setImagePreview(item.image);
    setFormData({
      title: item.title,
      description: item.description,
      image: item.image,
      document: item.document,
      document_type: item.document_type,
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
    } else {
      setFormData((prevState) => ({
        ...prevState,
        [name]: name === "document" ? file || null : value,
      }));
    }
  };

  const handleTextAreaChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSelect = (value: string) => {
    if (value) {
      setFormData((prevState) => ({ ...prevState, document_type: value }));
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
    (upadatedData) => updatePolicy(item.id, upadatedData),
    {
      onSuccess: () => {
        toast.success("Policy updated successfully!!!");
        setIsSaving(false);
        setIsOpen(false);
        setSelectedItem(null);
        queryClient.invalidateQueries(["policies"]);
      },
      onError: () => {
        toast.error("error occurred while updating policy");
        setIsSaving(false);
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
    if (formData.document) {
      submitData.append("document", formData.document);
    } else {
      toast.warning("Please upload document");
      return;
    }

    if (formData.document_type) {
      submitData.append("document_type", formData.document_type);
    } else {
      toast.warning("Please select document type");
      return;
    }

    if (formData.image) {
      submitData.append("image", formData.image);
    } else {
      toast.warning("Please upload image");
      return;
    }

    submitData.append("title", formData.title);
    submitData.append("description", formData.description);

    // Submit Data to the Server
    setIsSaving(true);
    mutation.mutate(submitData);
  };
  return (
    <Dialog open={open} onOpenChange={handleFormClose}>
      <DialogTrigger className="flex items-center bg-[#1B43C6] py-3 px-7 gap-5 rounded-md">
        <p className="text-xs font-semibold font-nunito text-white">
          Edit Policy
        </p>
      </DialogTrigger>

      <DialogContent className="overflow-y-auto w-full h-4/5">
        <DialogHeader>
          <DialogTitle className="text-center font-nunito text-lg font-semibold">
            Edit Policy
          </DialogTitle>
          <DialogDescription className="text-center">
            All fields are required unless otherwise indicated.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit}>
          <div className="grid gap-8 my-2">
            <div>
              <Label htmlFor="document_type">Document Type</Label>
              <Select
                onValueChange={handleSelect}
                value={formData.document_type}
              >
                <SelectTrigger id="document_type" className="w-full">
                  <SelectValue placeholder="Select Document type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value={formData.document_type}>
                    {formData.document_type}
                  </SelectItem>
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
                placeholder="description"
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
              <Label htmlFor="document">Document</Label>
              {formData.document && !changeReport ? (
                <div className="flex items-center gap-8">
                  <p className="text-xs">document uploaded</p>
                  <p
                    onClick={() => setChangeReport(true)}
                    className="text-blue-600 font-light text-sm bg-gray-200 p-2"
                  >
                    Change document
                  </p>
                </div>
              ) : (
                <div>
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
              )}
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
              disabled={saving}
              className="bg-blue-800 hover:bg-blue-600 text-white w-full mb-2 "
            >
              {saving ? "Saving please wait..." : "Save"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default EditPolicy;
