import { UserCredential } from "firebase/auth";
import { createContext } from "react";

export interface User {
  user: any;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<UserCredential>;
  logout: () => void;
  loading: boolean;
  setLoading: (loading: boolean) => void;
}

export const AuthContext: any = createContext<User | undefined>(undefined);
