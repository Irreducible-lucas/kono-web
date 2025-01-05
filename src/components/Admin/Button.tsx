import { Button3 } from "../../types";

const Button = ({ white, name, py, px }: Button3) => {
  return (
    <div>
      <button
        type="submit"
        className={`rounded-lg mt-3 text-sm py-${py} px-${px}    ${
          white
            ? "border-2 border-[#1B43C6] text-[#1B43C6]"
            : "bg-[#1B43C6] text-white "
        }`}
      >
        {name}
      </button>
    </div>
  );
};

export default Button;
