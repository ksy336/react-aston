import { createContext, useEffect, useState } from 'react';
import { ContextProps, LoginContextType } from './context-types';

const AuthorizationContext = createContext<LoginContextType | null>(null);

const ContextProvider = ({children}: ContextProps) => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  useEffect(() => {
    const loginData = localStorage.getItem("login") as string;
    if (loginData) setLogin(loginData);
  }, []);
  useEffect(() => {
    JSON.stringify(localStorage.setItem("login", login));
  }, [login])
  useEffect(() => {
    const passwordData = localStorage.getItem("password") as string;
    if (passwordData) setPassword(passwordData);
  }, []);
  useEffect(() => {
    JSON.stringify(localStorage.setItem("password", password));
  }, [password])
  return (
    <AuthorizationContext.Provider value={{login, password, setLogin, setPassword}}>
      {children}
    </AuthorizationContext.Provider>
  );
};

export {AuthorizationContext, ContextProvider};