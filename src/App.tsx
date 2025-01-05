import PageRoutes from "./PagesRoutes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ToastContainer } from "react-toastify";
import "react-toastify/ReactToastify.css";

export const queryClient = new QueryClient();
const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ToastContainer />
      <PageRoutes />
    </QueryClientProvider>
  );
};

export default App;
