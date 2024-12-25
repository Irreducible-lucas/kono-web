import { image } from "@/src/assets";
import { Label } from "@/components/label";
import { Input } from "@/components/input";

const Implementation = () => {
  return (
    <div className="bg-gray-50 p-6 rounded-lg shadow-lg">
      <h2 className="text-center font-nunito text-xl font-extrabold text-gray-800 mb-4">
        Implementation Gist
      </h2>
      <p className="text-center text-gray-600 text-sm mb-6">
        All fields are required unless otherwise indicated.
      </p>
      <div className="grid gap-6">
        {/* Title */}
        <div className="grid gap-2">
          <Label
            htmlFor="implementation-title"
            className="text-gray-700 font-medium"
          >
            Title
          </Label>
          <Input
            type="text"
            id="implementation-title"
            placeholder="Enter implementation title"
            className="border border-gray-300 rounded-lg py-2 px-4 text-gray-700 placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        {/* Description */}
        <div className="grid gap-2">
          <Label
            htmlFor="implementation-description"
            className="text-gray-700 font-medium"
          >
            Description
          </Label>
          <Input
            type="text"
            id="implementation-description"
            placeholder="Enter implementation description"
            className="border border-gray-300 rounded-lg py-2 px-4 text-gray-700 placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        {/* Council Service Type */}
        <div className="grid gap-2">
          <Label
            htmlFor="implementation-service-type"
            className="text-gray-700 font-medium"
          >
            Council Service Type
          </Label>
          <select
            id="implementation-service-type"
            className="border border-gray-300 rounded-lg py-2 px-4 text-gray-700 bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
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
        {/* Photo Upload */}
        <div className="grid gap-2">
          <Label
            htmlFor="implementation-photo"
            className="text-gray-700 font-medium"
          >
            Photo
          </Label>
          <div className="w-full h-40 rounded-lg border-2 border-dashed border-gray-300 bg-gray-100 flex items-center justify-center flex-col">
            <img src={image} alt="Upload Icon" className="w-8 h-8 mb-2" />
            <p className="text-gray-600 text-sm">Drag Photo Here </p>
          </div>
          <p className="text-xs text-blue-500 mt-2">
            Max File Size: 5 MB (jpg, pdf, png)
          </p>
        </div>
        <button className="px-2 py-3 w-full bg-blue-700 rounded-2xl text-white hover:bg-blue-300 hover:text-black outline-none">
          Save Changes{" "}
        </button>
      </div>
    </div>
  );
};

export default Implementation;
