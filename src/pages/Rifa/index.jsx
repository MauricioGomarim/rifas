import { Header } from "../../components/Header";
import { Container } from "./style";
import { Data } from "../../components/Data";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import sorteio1 from "../../assets/sorteio1.jpeg";
import { useState } from "react";

export function Rifa() {
  const [quant, setQuant] = useState(1);

  function handleQuant(quant) {
    setQuant((prevQuant) => prevQuant + quant);
  }

  function handleRemoveQuant(quantRifa) {

    if (quant > 1) {
      setQuant((prevQuant) => prevQuant - 1);
    }
  }

  return (
    <Container>
      <Header />
      <div className="line"></div>
      <div className="line2"></div>
      <div className="container-home">
        <div className="card-banner">
          <div className="title">
            <p>
              <span>⚡ Prêmios:</span> Escolha sua sorte
            </p>
          </div>
          <img src={sorteio1} />
          <div className="desc">
            <h1>AÇÃO DOS CONVERSÍVEIS</h1>
            <p>Porsche , Audi TT , Audi A3 e 9 Honda Sahara.</p>
            <span className="animate-button">Adquira já!</span>
          </div>

          <Data title="18/04" />
        </div>

        <div className="title">
          <p>
            Por apenas <span>R$ 0.70</span>
          </p>
        </div>
        <div className="social">
          <div className="info-sorteio">
            <p>
              Sorteio <span>Após finalizar as cotas</span>
            </p>
          </div>
          <div className="social">
            <div className="facebook">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-facebook"
                viewBox="0 0 16 16"
              >
                <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
              </svg>
            </div>

            <div className="telegram">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-telegram"
                viewBox="0 0 16 16"
              >
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.287 5.906q-1.168.486-4.666 2.01-.567.225-.595.442c-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294q.39.01.868-.32 3.269-2.206 3.374-2.23c.05-.012.12-.026.166.016s.042.12.037.141c-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8 8 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629q.14.092.27.187c.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.4 1.4 0 0 0-.013-.315.34.34 0 0 0-.114-.217.53.53 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09" />
              </svg>
            </div>

            <div className="twitter">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-twitter"
                viewBox="0 0 16 16"
              >
                <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334q.002-.211-.006-.422A6.7 6.7 0 0 0 16 3.542a6.7 6.7 0 0 1-1.889.518 3.3 3.3 0 0 0 1.447-1.817 6.5 6.5 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.32 9.32 0 0 1-6.767-3.429 3.29 3.29 0 0 0 1.018 4.382A3.3 3.3 0 0 1 .64 6.575v.045a3.29 3.29 0 0 0 2.632 3.218 3.2 3.2 0 0 1-.865.115 3 3 0 0 1-.614-.057 3.28 3.28 0 0 0 3.067 2.277A6.6 6.6 0 0 1 .78 13.58a6 6 0 0 1-.78-.045A9.34 9.34 0 0 0 5.026 15" />
              </svg>
            </div>

            <div className="whatsapp">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-whatsapp"
                viewBox="0 0 16 16"
              >
                <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
              </svg>
            </div>
          </div>
        </div>

        <div className="promocao-numeros">
          <h1>
            📣 Promoção <span>Compre mais barato!</span>
          </h1>
          <div className="numeros">
            <button>25 por R$ 15,75</button>
            <button>50 por R$ 31,50</button>
            <button>100 por R$ 63,00</button>
            <button>500 por R$ 315,00</button>
          </div>
        </div>

        <div className="promocao-numeros">
          <h1>
            ⚡ Cotas <span>Escolha sua sorte</span>
          </h1>
          <div id="numeros" className="button">
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-cart-fill"
                viewBox="0 0 16 16"
              >
                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
              </svg>
              Ver meus números
            </a>
          </div>
          <div className="numeros-select">
            <h3>Selecione a quantidade de números</h3>

            <div className="rifas-quant">
              <div
                className="card-quant popular"
                onClick={(e) => handleQuant(5)}
              >
                <span>+5</span>
                <p>Selecionar</p>
              </div>

              <div
                className="card-quant popular"
                onClick={(e) => handleQuant(10)}
              >
                <span>+10</span>
                <p>Selecionar</p>
              </div>

              <div className="card-quant" onClick={(e) => handleQuant(25)}>
                <span>+25</span>
                <p>Selecionar</p>
              </div>
              <div className="card-quant" onClick={(e) => handleQuant(50)}>
                <span>+50</span>
                <p>Selecionar</p>
              </div>
              <div className="card-quant" onClick={(e) => handleQuant(100)}>
                <span>+100</span>
                <p>Selecionar</p>
              </div>
              <div className="card-quant" onClick={(e) => handleQuant(250)}>
                <span>+250</span>
                <p>Selecionar</p>
              </div>
            </div>

            <div className="quant">
              <div className="menos" onClick={(e) => handleRemoveQuant(1)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-dash-circle"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                  <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8" />
                </svg>
              </div>
              <input className="valueRifa" readOnly value={quant} />
              <div className="mais" onClick={(e) => handleQuant(1)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-plus-circle"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                  <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
                </svg>
              </div>
            </div>

            <div className="button-participar">
              <a href="#">
                <IoMdCheckmarkCircleOutline /> Participar do sorteio
                <span>R$ {(quant * 0.70).toFixed(2)}</span>
              </a>
             
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
