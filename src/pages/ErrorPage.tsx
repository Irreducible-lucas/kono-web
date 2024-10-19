import { useNavigate } from "react-router-dom";
import styles from "../styles";

const ErrorPage = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full h-screen items-center flex justify-center">
      <div className="flex flex-col items-center w-full">
        <h1 className={`${styles.heading1}`}>404</h1>
        <h3 className={`${styles.paragraph}`}>Ooops 😥!!</h3>
        <p>The page you are looking for does not exist or is unavailable</p>
        <button
          onClick={() => navigate("/")}
          className="py-2 px-4 bg-[#523cdb] rounded-md text-white mt-2"
        >
          Go to home
        </button>
      </div>
    </div>
  );
};

export default ErrorPage;
