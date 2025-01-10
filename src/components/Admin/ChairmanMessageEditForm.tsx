import { image } from "@/src/assets";
import { ChangeEvent, FormEvent, useRef, useState } from "react";
import { toast } from "react-toastify";
import { AxiosError, AxiosResponse } from "axios";
import axios from "@/src/axios";
import { HomeDataType } from "@/src/types";
import styles from "../../styles";
import { useQuery } from "@tanstack/react-query";
import { fetchHomeData, updateHome } from "@/src/api";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const ChairmanMessageEditForm = () => {
  const queryClient = useQueryClient();
  const [isSaving, setIsSaving] = useState(false);
  const { data } = useQuery({
    queryKey: ["home"],
    queryFn: fetchHomeData,
  });

  const [formData, setFormData] = useState<HomeDataType>({
    title: data?.[1].title,
    message: data?.[1].message,
    image: data?.[1].image,
  });
  const [Image, setImage] = useState<string | null>(data?.[1].image);

  const handleInputChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormData((prevState: any) => ({ ...prevState, [name]: value }));
  };

  const ImageInputRef = useRef<HTMLInputElement>(null);
  const handleImageInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { files } = event.target;
    const file: any = files?.[0];
    const maxSize = 5 * 1024 * 1024;

    if (file && file.size > maxSize) {
      toast.warning("File size exceeds 5mb");
      return;
    } else {
      setImage(URL.createObjectURL(file));
      setFormData((prevState: HomeDataType) => ({
        ...prevState,
        image: file || null,
      }));
    }
  };
  const handleImageSelector = () => {
    ImageInputRef.current?.click();
  };

  const mutation = useMutation(
    (upadatedData) => updateHome(data?.[1].id, upadatedData),
    {
      onSuccess: () => {
        toast.success("Data updated successfully!!!");
        setIsSaving(false);
        queryClient.invalidateQueries(["home"]);
      },
      onError: () => {
        toast.error("Error occurred while updating data");
        setIsSaving(false);
      },
    }
  );

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const submitData = new FormData();
    submitData.append("title", formData.title);
    submitData.append("message", formData.message);
    if (formData.image instanceof File) {
      submitData.append("image", formData.image);
    }

    setIsSaving(true);
    mutation.mutate(submitData);
  };
  return (
    <form onSubmit={handleSubmit} className="flex flex-1 flex-col">
      <div className="bg-white p-5 rounded-md md:col-span-1">
        <h6 className={`${styles.heading5}`}>Chairman's Message</h6>
        <div className="w-full h-64 bg-[#F4F7FC] my-5 rounded-md">
          <input
            type="file"
            name="image"
            id="image"
            accept="image/jpeg, image/png"
            ref={ImageInputRef}
            onChange={handleImageInputChange}
            className="hidden"
          />
          {Image ? (
            <div className="relative w-full h-full">
              <img
                src={Image}
                alt="Partner logo"
                className="h-full w-full object-contain"
              />
              <div className="absolute group hover:bg-black/30 w-full h-full top-0 left-0 grid place-items-center">
                <button
                  type="button"
                  className="bg-blue-700 hidden group-hover:block  text-white py-2 px-4 text-sm rounded-lg"
                  onClick={handleImageSelector}
                >
                  Change Image
                </button>
              </div>
            </div>
          ) : (
            <div
              onClick={handleImageSelector}
              className="cursor-pointer w-full h-full rounded-md border-[1px] bg-[#F4F7FC] border-[#D8DDE4] flex items-center justify-center flex-col"
            >
              <img src={image} className="w-6 h-6" alt="Upload icon" />
              <p className={`${styles.paragraph4} text-[#849299] mt-1`}>
                Click to upload image
              </p>
            </div>
          )}
        </div>
        <div className="flex flex-col">
          <label
            htmlFor="title"
            className={`${styles.paragraph4} text-[#30354E]`}
          >
            Title
          </label>
          <input
            id="title"
            type="text"
            name="title"
            className="my-3 p-2 border-[1px] border-[#D8DDE4] rounded-2xl outline-none"
            placeholder="Enter Title"
            onChange={handleInputChange}
            required
            value={formData.title}
          />
        </div>

        <div className="flex flex-col">
          <label
            htmlFor="message"
            className={`${styles.paragraph4} text-[#30354E]`}
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            onChange={handleInputChange}
            required
            className="my-3 border-[1px] rounded-lg p-4 mt-4 h-[300px] text-sm"
            placeholder="Enter message"
            value={formData.message}
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-[#1B43C6] w-full p-3 rounded-lg mt-8 text-white "
        >
          {isSaving ? "Saving..." : "Save Changes"}
        </button>
      </div>
    </form>
  );
};

export default ChairmanMessageEditForm;
