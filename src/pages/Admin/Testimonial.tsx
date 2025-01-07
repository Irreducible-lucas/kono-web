import { fetchTestimonials } from "@/src/api";
import { search } from "@/src/assets";
import {
  NavHeader,
  TestimonialCard,
  TestimonialPreview,
  AddTestimonials,
} from "@/src/components/Admin";
import styles from "@/src/styles";
import { TestimonialType } from "@/src/types";
import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

export async function loader() {
  const testimonials = await fetchTestimonials();
  return { testimonials };
}

const Testimonial = () => {
  const { testimonials }: any = useLoaderData();
  const [searchText, setSearchText] = useState("");
  const [selectedItem, setSelectedItem] = useState<any>(null);
  const [filteredTestimonials, setFilteredTestimonials] = useState([]);

  useEffect(() => {
    const filtered = testimonials?.filter((testimonial: TestimonialType) =>
      testimonial.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredTestimonials(filtered);
  }, [searchText, testimonials]);
  return (
    <div className="w-full bg-[#FAFAFA] h-full grid grid-rows-[240px_1fr] lg:grid-rows-[180px_1fr]">
      <div className="p-3 lg:px-8 lg:py-4 bg-white">
        <NavHeader title="Testimonials" />
        <div className="flex gap-8 py-6">
          <div className="flex items-center border-[1px] py-3 px-5 bg-[#D8DDE4] justify-between rounded-xl w-1/2">
            <input
              type="text"
              placeholder="Search testimonials"
              onChange={(e) => setSearchText(e.target.value)}
              className={`${styles.paragraph4} text-[#849299] bg-transparent outline-0 flex-1`}
            />
            <img src={search} className="w-5 h-5" />
          </div>
          <AddTestimonials />
        </div>
      </div>

      {/* Projects Section */}
      <div className="p-3 lg:px-8 lg:py-4 overflow-y-scroll">
        <div className="grid lg:grid-cols-4 gap-3">
          <div className="lg:col-span-3">
            {filteredTestimonials?.length > 0 ? (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-5 bg-white p-5">
                {filteredTestimonials?.map((testimonials: any) => (
                  <div
                    className="cursor-pointer"
                    onClick={() => setSelectedItem(testimonials)}
                    key={testimonials.id}
                  >
                    <TestimonialCard data={testimonials} />
                  </div>
                ))}
              </div>
            ) : (
              <div className="bg-white h-[300px] w-full grid place-items-center">
                <p className="text-center text-blue-700">
                  No Testimonials found
                </p>
              </div>
            )}
          </div>
          <TestimonialPreview
            testimonial={selectedItem}
            setSelectedTestimonial={setSelectedItem}
          />
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
