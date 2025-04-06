'use client';
import { createContext, useContext, useState } from 'react';

type AuthContextType = {
  user: null | { name: string };
  login: () => void;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType>(null!);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<null | { name: string }>(null);

  const login = () => setUser({ name: 'Treinador' });
  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);