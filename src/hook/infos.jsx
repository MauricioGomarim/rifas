import { useContext, useState, useEffect } from "react";
import { createContext } from "react";

export const AuthContext = createContext({});

function InfosProvider({ children }) {
  const [data, setData] = useState({});



  async function setDadosPix(nome, email, celular, cpf) {
    setData({nome, email, celular, cpf})
    console.log(data);
  }

  useEffect(() => {
  }, []);

  return (
    <AuthContext.Provider value={{ setDadosPix, data }}>
      {children}
    </AuthContext.Provider>
  );
}

function useData() {
  const context = useContext(AuthContext);
  
  return context;
}

export { InfosProvider, useData };