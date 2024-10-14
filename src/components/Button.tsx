import { Link } from "react-router-dom";
import styles from "../styles";

const Button = ({ text, url }: { text: string; url: string }) => {
  return (
    <Link
      to={url}
      className={`${styles.flexCenter} gap-2 bg-secondary py-3 px-6 justify-self-start`}
    >
      <span className="text-white">{text}</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="size-6 text-white"
      >
        <path
          d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </Link>
  );
};

export default Button;
