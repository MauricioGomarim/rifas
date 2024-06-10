import { useContext, useState, useEffect } from "react";
import { createContext } from "react";

export const AuthContext = createContext({});

function InfosProvider({ children }) {
  const [data, setData] = useState({});
  const [dadosQrCode, setDadosQrCode] = useState({});




  async function setDadosPix(nome, email, celular, cpf, valor, dataHora, codigo, quantRifas, idTransation) {
    setData({nome, email, celular, cpf, valor, dataHora, codigo, quantRifas, idTransation})

    localStorage.setItem("@order", JSON.stringify({nome, email, celular, cpf, valor, dataHora, codigo, quantRifas, idTransation}));
  }

  async function setDadosPixQrCode(dadosQrCode) {
    setDadosQrCode(dadosQrCode)
  }

  useEffect(() => {
  }, []);

  return (
    <AuthContext.Provider value={{ setDadosPix, data, setDadosPixQrCode, dadosQrCode, setData }}>
      {children}
    </AuthContext.Provider>
  );
}

function useData() {
  const context = useContext(AuthContext);
  
  return context;
}

export { InfosProvider, useData };