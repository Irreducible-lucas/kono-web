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

const AddCouncilService = () => {
  return (
    <Dialog>
      <DialogTrigger className="flex items-center bg-[#1B43C6] py-3 px-7 gap-5 rounded-md">
        <img src={plus} className="w-6 h-6" />
        <p className="text-xs font-semibold font-nunito text-white">
          Add Council Services
        </p>
      </DialogTrigger>

      <DialogContent className="overflow-y-auto w-full h-full ">
        <DialogHeader>
          <DialogTitle className="text-center font-nunito text-lg font-semibold">
            Add Council Services
          </DialogTitle>
          <DialogDescription className="text-center">
            All fields are required unless otherwise indicated.
          </DialogDescription>
        </DialogHeader>

        <div className="grid gap-4 my-2">
          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="job">Title</Label>
            <Input
              type="text"
              id="title"
              placeholder="enter council service heading"
            />
          </div>
          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="role">Description</Label>
            <Input type="text" id="title" placeholder="enter description" />
          </div>
          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="role">Commitment Title</Label>
            <Input
              type="text"
              id="title"
              placeholder="enter commitment title"
            />
          </div>

          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="description">Commitment Details</Label>
            <textarea
              name="message"
              placeholder="enter rich details of the commitment"
              required
              rows={10}
              cols={50}
              className={`${styles.paragraph4} p-4  border-[1px] mt-1 rounded-xl  outline-none  `}
            ></textarea>
          </div>
          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="payment">Council Service Type</Label>
            <select
              className={`${styles.paragraph4} border py-3 px-2 rounded-md text-[#849299]`}
            >
              <option>Select Council Service Type</option>
              <option>Healthcare</option>
              <option>Education</option>
              <option>Agriculture and Livelihood</option>
              <option>Infrastructure</option>
              <option>Environmental Services</option>
              <option>Social Welfare</option>
            </select>
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

export default AddCouncilService;
