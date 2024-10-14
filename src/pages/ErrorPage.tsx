import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div>
        <h1>404</h1>
        <h3>Ooops!!</h3>
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
