import { motion } from "framer-motion";

// Define the props type (if using TypeScript)
type ButtonProps = {
  styles?: string;
  text: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  onClick?: () => void;
  isLink?: boolean;
  location?: string;
};

const Button = ({
  styles = "",
  text,
  type = "button",
  disabled = false,
  onClick = () => {},
  isLink = false,
  location = "",
}: ButtonProps) => {
  return (
    <motion.button
      onClick={() => {
        onClick();
      }}
      disabled={disabled}
      type={type}
      className={`py-3 px-5 md:py-4 md:px-6 font-poppins font-medium text-[14px] 
      outline-none bg-red-500 text-white rounded-3xl ${styles}`}
      whileHover={{
        scale: 1.1,
        boxShadow: "0px 0px 8px rgb(255,255,255)",
      }}
    >
      {isLink ? <a href={`${location}`}>{text}</a> : text}
    </motion.button>
  );
};

export default Button;
