import { Header } from "../../components/Header";
import { Container } from "./style";

import sorteio1 from "../../assets/sorteio1.jpeg"
export function Home() {
  return (
    <Container>
      <Header />
      <div className="line"></div>
      <div className="line2"></div>
      <div className="container-home">

        <div className="card-banner">
            <div className="title"><p><span>⚡ Prêmios:</span> Escolha sua sorte</p></div>
            <img src={sorteio1} />
            <div className="desc">
                <h1>AÇÃO DOS CONVERSÍVEIS</h1>
                <p>Porsche , Audi TT , Audi A3 e 9 Honda Sahara.</p>
                <span className="animate-button">Adquira já!</span>
            </div>
        </div>

        <div className="card">
            <img src={sorteio1} />
            <div className="desc">
                <h1>Macan da onça + jetski 300</h1>
                <p>Participe e Concorra</p>
                <span>Concluido</span>
            </div>
        </div>

        <div className="card">
            <img src={sorteio1} />
            <div className="desc">
                <h1>Macan da onça + jetski 300</h1>
                <p>Participe e Concorra</p>
                <span>Concluido</span>
            </div>
        </div>

        <div className="card">
            <img src={sorteio1} />
            <div className="desc">
                <h1>Macan da onça + jetski 300</h1>
                <p>Participe e Concorra</p>
                <span>Concluido</span>
            </div>
        </div>

        <div className="card">
            <img src={sorteio1} />
            <div className="desc">
                <h1>Macan da onça + jetski 300</h1>
                <p>Participe e Concorra</p>
                <span>Concluido</span>
            </div>
        </div>

        <div className="card">
            <img src={sorteio1} />
            <div className="desc">
                <h1>Macan da onça + jetski 300</h1>
                <p>Participe e Concorra</p>
                <span>Concluido</span>
            </div>
        </div>
      </div>
    </Container>
  );
}
