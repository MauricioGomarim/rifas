import { Header } from "../../components/Header";
import { OrderText } from "../../components/OrderText";
import { Container } from "./style";
import { useData } from "../../hook/infos";
import {
  IoCheckmarkCircleOutline,
  IoCheckmarkDoneSharp,
} from "react-icons/io5";
import { Button } from "../../components/Button";

import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { PiWarningCircle } from "react-icons/pi";

export function Order() {
  const { data } = useData();

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
                <input type="text" />
                <button>Copiar</button>
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
              disabled
              title="Já fiz o pagamento"
              icon={<IoCheckmarkDoneSharp />}
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
          <h1><PiWarningCircle />Detalhes da sua compra</h1>

          <div className="infos-detalhes">
            <p><strong>Comprador:</strong> Mauricio Gomarim</p>
            <p><strong>CPF:</strong> 394.***.***-80</p>
            <p><strong>Telefone:</strong> 551709***</p>
            <p><strong>Data/horário:</strong> 28/05/2024, 23:49</p>
            <p><strong>Total:</strong> R$ 14</p>
            <p><strong>Cotas:</strong> As cotas são liberadas após o pagamento</p>
          </div>
          </div>
          
        </div>
      </div>
    </Container>
  );
}
