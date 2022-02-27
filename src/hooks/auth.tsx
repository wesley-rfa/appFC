import React, { createContext, ReactNode, useContext, useState } from "react";
import { Alert } from 'react-native';
import { api } from '../services/api';

interface AuthProviderProps {
  children: ReactNode;
}

interface User {
  id: number;
  userName: string;
}

interface AuthContextData {
  user: User;
  signIn(userName: string, password: string): Promise<void>;
}

const AuthContext = createContext({} as AuthContextData);

function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User>({} as User)

  async function signIn(userName: string, password: string) {
    api.post('', {
      name: userName,
      password: password,
    })
      .then(function (response) {
        if (!response.data) {
          Alert.alert('Nome de usuário ou senha inválidos.')
        } else {
          setUser({
            id: parseInt(response.data.id),
            userName: response.data.nome,
          })
        }
      })
      .catch(function (error) {
        console.log(error)
        Alert.alert('Erro ao tentar fazer login. Por favor, tente novamente.')
      });
  }

  return (
    <AuthContext.Provider value={{ user, signIn }}>
      {children}
    </AuthContext.Provider>
  )
}

function useAuth() {
  const context = useContext(AuthContext);

  return context;
}

export { AuthProvider, useAuth }