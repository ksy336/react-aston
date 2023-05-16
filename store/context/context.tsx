import { useEffect, useState } from 'react';

type ContextProps = {
  children: React.ReactNode;
}
const context = React.useContext(undefined);


const ContextProvider = ({children}: ContextProps) => {
  const [login, setLogin] = useState(""); // буду сохранять в LS + Context
  const [password, setPassword] = useState("");
  useEffect(() => {
    const loginData = JSON.parse(localStorage.getItem("login") as string);
    if (loginData) setLogin(loginData);
  }, []);
  useEffect(() => {
    JSON.stringify(localStorage.setItem("login", login));
  }, [login])
  useEffect(() => {
    const passwordData = JSON.parse(localStorage.getItem("password") as string);
    if (passwordData) setPassword(passwordData);
  }, []);
  useEffect(() => {
    JSON.stringify(localStorage.setItem("password", password));
  }, [password])
  return (
    <ContextProvider value={{login, password}}>
      {children}
    </ContextProvider>
  );
};

export {context, ContextProvider};