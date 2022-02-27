import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { createContext, ReactNode, useContext, useEffect, useState } from "react";
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
  signOut(): Promise<void>;
}

const AuthContext = createContext({} as AuthContextData);

function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User>({} as User)

  const userStorageKey = "@appFC:user";

  async function signIn(userName: string, password: string) {
    api.post('', {
      name: userName,
      password: password,
    })
      .then(function (response) {
        if (!response.data) {
          Alert.alert('Nome de usuário ou senha inválidos.')
        } else {
          const userLogged = {
            id: parseInt(response.data.id),
            userName: response.data.nome,
          }
          setUser(userLogged)
          AsyncStorage.setItem(userStorageKey, JSON.stringify(userLogged))
        }
      })
      .catch(function (error) {
        console.log(error)
        Alert.alert('Erro ao tentar fazer login. Por favor, tente novamente.')
      });
  }

  async function signOut() {
    setUser({} as User);
    AsyncStorage.removeItem(userStorageKey)
  }

  useEffect(() => {
    async function loadUserStorageDate() {
      const userStorage = await AsyncStorage.getItem(userStorageKey);
      if (userStorage) {
        const userLogged = JSON.parse(userStorage) as User;
        setUser(userLogged);
      }
    }
    loadUserStorageDate()
  }, [])

  return (
    <AuthContext.Provider value={{ user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  )
}

function useAuth() {
  const context = useContext(AuthContext);

  return context;
}

export { AuthProvider, useAuth }