import PageRoutes from "./PagesRoutes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ToastContainer } from "react-toastify";
import "react-toastify/ReactToastify.css";
import { AuthContext } from "./context/AuthContext";
import { auth } from "../firebase";
import { useEffect, useState } from "react";
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

export const queryClient = new QueryClient();
const App = () => {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState<any>(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []);

  const login = (email: string, password: string) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logout = () => {
    return signOut(auth);
  };

  const value = {
    user,
    isAuthenticated: !!user,
    login,
    logout,
    loading,
    setLoading,
  };
  return (
    <QueryClientProvider client={queryClient}>
      <AuthContext.Provider value={value}>
        <ToastContainer />
        <PageRoutes />
      </AuthContext.Provider>
    </QueryClientProvider>
  );
};

export default App;
