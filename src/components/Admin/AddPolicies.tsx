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
import { image, plus } from "@/src/assets";
import { Label } from "@/components/label";
import { Input } from "@/components/input";
import { Button } from "@/components/button";
import styles from "@/src/styles";
import { FormEvent, useRef, useState, ChangeEvent } from "react";
import { AxiosResponse, AxiosError } from "axios";
import axios from "../../axios/index";

interface FormData {
  name: string;
  logo: File | null;
}

const AddPolicies = () => {
  const [open, setIsOpen] = useState(false);
  const [saving, setIsSaving] = useState(false);

  const fileInputRef = useRef<HTMLInputElement>(null);

  const [formData, setFormData] = useState<FormData>({
    name: "",
    logo: null,
  });

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value, files } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: name === "logo" ? files?.[0] || null : value,
    }));
  };

  const handleFileSelector = () => {
    fileInputRef.current?.click();
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const submitData = new FormData();
    submitData.append("name", formData.name);
    if (formData.logo) {
      submitData.append("logo", formData.logo);
    }

    // Submit Data to the Server
    try {
      setIsSaving(true);
      const response: AxiosResponse = await axios.post(
        "/partners",
        submitData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      if (response.data) {
        setIsSaving(false);
        setIsOpen(false);
      }
    } catch (error) {
      console.error("Error:", error as AxiosError);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setIsOpen}>
      <DialogTrigger className="flex items-center bg-[#1B43C6] py-3 px-7 gap-5 rounded-md">
        <img src={plus} className="w-6 h-6" />
        <p className="text-xs font-semibold font-nunito text-white">
          Add ByLaws
        </p>
      </DialogTrigger>

      <DialogContent className="overflow-y-auto w-full h-4/5">
        <form onSubmit={handleSubmit}>
          <DialogHeader>
            <DialogTitle className="text-center font-nunito text-lg font-semibold">
              Add ByLaws
            </DialogTitle>
            <DialogDescription className="text-center">
              All fields are required unless otherwise indicated.
            </DialogDescription>
          </DialogHeader>

          <div className="grid gap-4 my-2">
            <div className="grid w-full items-center gap-1.5 ">
              <Label htmlFor="title">Name</Label>
              <Input
                type="text"
                onChange={handleInputChange}
                id="title"
                placeholder="Bylaw name"
                name="name"
              />
              <Label htmlFor="title" className="mt-3">
                Description
              </Label>
              <Input
                type="text"
                onChange={handleInputChange}
                id="title"
                placeholder="Bylaw description"
                name="description"
              />
            </div>
            <input
              type="file"
              name="logo"
              ref={fileInputRef}
              onChange={handleInputChange}
              className="hidden"
            />
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="cover">Logo</Label>
              <div
                onClick={handleFileSelector}
                className="cursor-pointer w-full h-40 rounded-md border-[1px] bg-[#F4F7FC] border-[#D8DDE4] flex items-center justify-center flex-col"
              >
                <img src={image} className="w-6 h-6" />
                <p className={`${styles.paragraph4} text-[#849299] mt-1`}>
                  Upload partner logo
                </p>
              </div>
              <p className={`${styles.paragraph4} text-xs text-[#1B43C6]`}>
                Max File Size: 5 MB (jpg, pdf, png)
              </p>
            </div>
          </div>

          <DialogFooter className="sm:justify-start ">
            <DialogClose asChild>
              <Button
                type="button"
                variant="outline"
                className="border-secondary text-secondary"
              >
                Cancel
              </Button>
            </DialogClose>
            <Button
              type="submit"
              className="bg-secondary hover:bg-blue-600 text-white w-full mb-2 "
            >
              {saving ? "Saving please wait..." : "Save"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AddPolicies;
