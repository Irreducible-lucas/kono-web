import { CorporateImage, gallery } from "@/src/assets";
import styles from "@/src/styles";
import { TestimonialType } from "@/src/types";
import React from "react";
import { deleteTestimonial } from "@/src/api";
import EditTestimonial from "./EditTestimonial";
import { FiStar } from "react-icons/fi";
import DeleteItemButton2 from "./DeleteItemButton2";

const TestimonialPreview = ({
  testimonial,
  setSelectedTestimonial,
}: {
  testimonial: TestimonialType;
  setSelectedTestimonial: React.Dispatch<
    React.SetStateAction<null | TestimonialType>
  >;
}) => {
  return (
    <div className="bg-white w-full h-60 lg:h-full p-4 font-nunito">
      {testimonial ? (
        <div className="w-full grid gap-8">
          <h3 className="font-bold text-xl">Testimonial</h3>
          <div className="w-full">
            <h5 className="text-sm font-light text-gray-400 mb-2">Name</h5>
            <p>{testimonial.name}</p>
          </div>
          <div className="w-full">
            <h5 className="text-sm font-light text-gray-400 mb-2">Feedback</h5>
            <p>{testimonial.text}</p>
          </div>
          <div className="w-full">
            <h5 className="text-sm font-light text-gray-400 mb-2">
              Cover Image
            </h5>
            {testimonial.image ? (
              <img
                src={testimonial.image}
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
            <h5 className="text-sm font-light text-gray-400 mb-2">Rating</h5>
            <div className="flex gap-2">
              <FiStar
                size={25}
                strokeWidth={0}
                fill={"gold"}
                className="star"
              />
              <p className="font-bold">({testimonial?.rating})</p>
            </div>
          </div>
          <div className="flex gap-4">
            <DeleteItemButton2
              queryKey="testimonials"
              itemId={testimonial.id}
              handleSelectedItem={setSelectedTestimonial}
              itemType="testimonial"
              navigateTo="/dashboard/testimonial"
              deleteItem={deleteTestimonial}
            />
            <EditTestimonial
              item={testimonial}
              setSelectedItem={setSelectedTestimonial}
            />
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

export default TestimonialPreview;
