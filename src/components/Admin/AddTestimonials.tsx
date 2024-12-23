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
import { image, plus, star } from "@/src/assets";
import { Label } from "@/components/label";
import { Input } from "@/components/input";
import { Button } from "@/components/button";
import styles from "@/src/styles";

const AddTestimonial = () => {
  return (
    <Dialog>
      <DialogTrigger className="flex items-center bg-[#1B43C6] py-3 px-7 gap-5 rounded-md">
        <img src={plus} className="w-6 h-6" />
        <p className="text-xs font-semibold font-nunito text-white">
          Add Testimonial
        </p>
      </DialogTrigger>

      <DialogContent className="overflow-y-auto w-full h-full ">
        <DialogHeader>
          <DialogTitle className="text-center font-nunito text-lg font-semibold">
            Add Testimonial
          </DialogTitle>
          <DialogDescription className="text-center">
            All fields are required unless otherwise indicated.
          </DialogDescription>
        </DialogHeader>

        <div className="grid gap-4 my-2">
          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="job">Name</Label>
            <Input type="text" id="title" placeholder="enter job title" />
          </div>
          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="role">Role</Label>
            <Input type="text" id="title" placeholder="enter location" />
          </div>
          <div className="grid w-full items-center gap-1.5 my-2">
            <Label htmlFor="rating">Rating</Label>
            <div className="flex gap-1 my-5">
              <img src={star} className="w-6 h-6" />
              <img src={star} className="w-6 h-6" />
              <img src={star} className="w-6 h-6" />
              <img src={star} className="w-6 h-6" />
              <img src={star} className="w-6 h-6" />
            </div>
          </div>
          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="description">Job Description</Label>
            <textarea
              name="message"
              placeholder="enter job description"
              required
              rows={10}
              cols={50}
              className={`${styles.paragraph4} p-4  border-[1px] mt-1 rounded-xl  outline-none  `}
            ></textarea>
          </div>

          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="cover">Photo</Label>

            <div className="w-full h-40 rounded-md border-[1px] bg-[#F4F7FC] border-[#D8DDE4] flex items-center justify-center flex-col">
              <img src={image} className="w-6 h-6" />
              <p className={`${styles.paragraph4} text-[#849299] mt-1`}>
                Drag Photo Here
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
            type="button"
            className="bg-secondary hover:bg-blue-600 text-white w-full mb-2 "
          >
            Save
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default AddTestimonial;
