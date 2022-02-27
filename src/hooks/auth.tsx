import React, { createContext, ReactNode, useContext } from 'react';

interface AuthProviderProps {
  children: ReactNode;
}

interface User {
  userName: string;
  email?: string;
}

interface AuthContextData {
  user: User;
}

const AuthContext = createContext({} as AuthContextData);

function AuthProvider({ children }: AuthProviderProps) {
  return (
    <AuthContext.Provider value={{ user: { userName: 'Wesley' } }}>
      {children}
    </AuthContext.Provider>
  )
}

function useAuth() {
  const context = useContext(AuthContext);

  return context
}

export { AuthProvider, useAuth }