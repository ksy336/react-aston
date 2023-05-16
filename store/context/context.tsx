import { createContext, useEffect, useState } from 'react';

type ContextProps = {
  children: React.ReactNode;
}
type LoginContextType = {
  login: string;
  password: string;
}
const Context = createContext<LoginContextType | null>(null);


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
    <Context.Provider value={{login, password, setLogin, setPassword}}>
      {children}
    </Context.Provider>
  );
};

export {Context, ContextProvider};