
import { Header } from "../../components/Header";
import { OrderText } from "../../components/OrderText";
import { Container } from "./style";
import { useData } from "../../hook/infos";
import { FaCheck } from "react-icons/fa6";
import { api } from "../../services/api";
import {
  IoCheckmarkCircleOutline,
  IoCheckmarkDoneSharp,
} from "react-icons/io5";
import { Button } from "../../components/Button";

import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { PiWarningCircle } from "react-icons/pi";
import { useState, useEffect } from "react";
import axios from 'axios';


export function Order() {
  const { data, setData } = useData(null);
  const [copy, setCopy] = useState();
console.log(data)
  const idTransacao = data.idTransation;

  async function handlePayment() {
    const url = `https://api.mercadopago.com/v1/payments/${idTransacao}`;
    const token = process.env.VITE_ACCESS_TOKEN;

    try {
      const response = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      if(response.data.status == 'approved') {
            alert('aprovado')
            return response.sendStatus(201);
          } else {
            alert('reprovado')
            return response.sendStatus(201);
          }
    } catch (error) {
      setError(error);
    }
  }

  const handleCopy = () => {
    const input = document.querySelector(".input-pix input");
    if (input) {
      input.select();
      document.execCommand("copy");
      navigator.clipboard.writeText(data.codigo).then(() => {
        setCopy(true);
      });
    }
  };

  useEffect(() => {
    const dataStorage = localStorage.getItem("@order");
    if (dataStorage) {
      setData(JSON.parse(dataStorage));
    }
  }, [setData]);

  return (
    <Container>
      <Header />
      <div className="line"></div>
      <div className="line2"></div>
      <div className="container-home">
        <div className="header-order gap-2 flex justify-center align-items-center">
          <div className="icon">
            <IoCheckmarkCircleOutline />
          </div>
          <div className="flex flex-col justify-center">
            <h1>Aguardando Pagamento!</h1>
            <p>Finalize o pagamento</p>
          </div>
        </div>
        <div className="body-order">
          <div className="timer">
            <h1>
              Você tem <span>00:00</span> para pagar
            </h1>
            <div className="process-bar"></div>
          </div>
          <div className="campos">
            <OrderText title="Copie o código PIX abaixo." number="1">
              <div className="input-pix">
                <input type="text" value={data.codigo} readOnly />
                <button onClick={handleCopy}>
                  {copy ? <FaCheck /> : "Copiar"}
                </button>
              </div>
            </OrderText>

            <OrderText
              title="Abra o app do seu banco e escolha a opção PIX, como se fosse fazer uma transferência."
              number="2"
            />
            <OrderText
              title="Selecione a opção PIX cópia e cola, cole a chave copiada e confirme o pagamento."
              number="3"
            />

            <div className="info-cotas-2">
              <i></i>
              <span>
                Este pagamento só pode ser realizado dentro do tempo, após este
                periodo, caso o pagamento não for confirmado os números voltam a
                ficar disponiveis.
              </span>
            </div>
            <Button
              disabled={copy ? false : true}
              title="Já fiz o pagamento"
              icon={<IoCheckmarkDoneSharp />}
              onClick={handlePayment}
            />

            <div className="line-3"></div>

            <div className="qrCode">
              <h1>QR Code</h1>
              <p>
                Acesse o APP do seu banco e escolha a opção pagar com QR Code,
                escaneie o código ao lado e confirme o pagamento.
              </p>
            </div>
          </div>
        </div>

        <div className="info-cotas text-center  ">
          <i>
            <PiWarningCircle />
          </i>
          <span className="">
            Após o pagamento aguarde até 5 minutos para a confirmação, caso já
            tenha efetuado o pagamento, clique no botão{" "}
            <strong>Já fiz o pagamento</strong>
          </span>
        </div>
        <div className="line-3"></div>

        <div className="body-order">
          <div className="detalhes">
            <h1>
              <PiWarningCircle />
              Detalhes da sua compra
            </h1>

            <div className="infos-detalhes">
              <p><strong>ID da transação:</strong> {idTransacao}</p>
              <p>
                <strong>Comprador:</strong> {data.nome}
              </p>
              <p>
                <strong>CPF:</strong> {data.cpf}
              </p>
              <p>
                <strong>Telefone:</strong> {data.celular}
              </p>
              <p>
                <strong>Data/horário:</strong> {data.dataHora}
              </p>
              <p>
                <strong>Total:</strong> R$ {data.valor}
              </p>
              <p>
                <strong>Cotas:</strong> As cotas são liberadas após o pagamento
              </p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
