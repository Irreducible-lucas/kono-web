import { image } from "@/src/assets";
import { useNavigate } from "react-router-dom";
import { ChangeEvent, FormEvent, useRef, useState } from "react";
import { toast } from "react-toastify";
import { AxiosError, AxiosResponse } from "axios";
import axios from "@/src/axios";
import { HomeDataType } from "@/src/types";
import styles from "../../styles";
import { useQuery } from "@tanstack/react-query";
import { fetchHomeData, updateHome } from "@/src/api";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const HeroEditForm = () => {
  const queryClient = useQueryClient();
  const [isSaving, setIsSaving] = useState(false);
  const { data } = useQuery({
    queryKey: ["home"],
    queryFn: fetchHomeData,
  });
  const [heroFormData, setHeroFormData] = useState<HomeDataType>({
    title: data?.[0].title,
    message: data?.[0].message,
    image: data?.[0].image,
  });
  const [heroImage, setHeroImage] = useState<string | null>(data?.[0].image);

  const handleHeroInputChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setHeroFormData((prevState: any) => ({ ...prevState, [name]: value }));
  };

  const heroImageInputRef = useRef<HTMLInputElement>(null);
  const handleHeroImageInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { files } = event.target;
    const file: any = files?.[0];
    const maxSize = 5 * 1024 * 1024;

    if (file && file.size > maxSize) {
      toast.warning("File size exceeds 5mb");
      return;
    } else {
      setHeroImage(URL.createObjectURL(file));
      setHeroFormData((prevState: HomeDataType) => ({
        ...prevState,
        image: file || null,
      }));
    }
  };
  const handleHeroImageSelector = () => {
    heroImageInputRef.current?.click();
  };

  const mutation = useMutation(
    (upadatedData) => updateHome(data?.[0].id, upadatedData),
    {
      onSuccess: () => {
        toast.success("Hero data updated successfully!!!");
        setIsSaving(false);
        queryClient.invalidateQueries(["home"]);
      },
      onError: () => {
        toast.error("Error occurred while updating hero data");
        setIsSaving(false);
      },
    }
  );

  const handleHeroDataSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const submitData = new FormData();
    submitData.append("title", heroFormData.title);
    submitData.append("message", heroFormData.message);
    if (heroFormData.image instanceof File) {
      submitData.append("image", heroFormData.image);
    }
    setIsSaving(true);
    mutation.mutate(submitData);
  };
  return (
    <form onSubmit={handleHeroDataSubmit} className="flex flex-1 flex-col">
      <div className="bg-white p-5 rounded-md md:col-span-1">
        <h6 className={`${styles.heading5}`}>Hero Info</h6>
        <div className="w-full h-64 bg-[#F4F7FC] my-5 rounded-md">
          <input
            type="file"
            name="image"
            id="image"
            accept="image/jpeg, image/png"
            ref={heroImageInputRef}
            onChange={handleHeroImageInputChange}
            className="hidden"
          />
          {heroImage ? (
            <div className="relative w-full h-full">
              <img
                src={heroImage}
                alt="Partner logo"
                className="h-full w-full object-contain"
              />
              <div className="absolute group hover:bg-black/30 w-full h-full top-0 left-0 grid place-items-center">
                <button
                  type="button"
                  className="bg-blue-700 hidden group-hover:block  text-white py-2 px-4 text-sm rounded-lg"
                  onClick={handleHeroImageSelector}
                >
                  Change Image
                </button>
              </div>
            </div>
          ) : (
            <div
              onClick={handleHeroImageSelector}
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
            placeholder="Enter Hero Title"
            onChange={handleHeroInputChange}
            required
            value={heroFormData.title}
          />
        </div>

        <div className="flex flex-col">
          <label
            htmlFor="message"
            className={`${styles.paragraph4} text-[#30354E]`}
          >
            Subtitle
          </label>
          <textarea
            id="message"
            name="message"
            onChange={handleHeroInputChange}
            required
            className="my-3 p-2 border-[1px] border-[#D8DDE4] rounded-2xl outline-none"
            placeholder="Enter Hero subtitle"
            value={heroFormData.message}
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

export default HeroEditForm;
