import { motion } from "framer-motion";

interface ImageButtonProps {
  image: string;
  onClick: () => void;
}

const ImageButton: React.FC<ImageButtonProps> = ({ image, onClick }) => (
  <motion.img
    onClick={() => {
      onClick();
    }}
    whileHover={{
      scale: 1.2,
      boxShadow: "0px 0px 8px rgb(255,255,255)",
    }}
    src={image}
    className="object-contain"
    alt=""
  />
);

export default ImageButton;
