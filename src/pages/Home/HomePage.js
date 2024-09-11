import { useNavigate } from "react-router-dom";

import "./style.css";

import Atendente from "../../img/Atendente.png";

export default function HomePage() {
  const Navegar = useNavigate();
  return (
    <div className="Corpo_Site ">
      <div className="inicio-geral">
        <div className="img-titulo">
          <h1>OUVIDORIA</h1>
          <div className="img-ouvidoria">
            <img src={Atendente} alt="" />
          </div>
        </div>

        <div className="texto-ouvidoria">
          <p>
            No nosso site de ouvidoria, você encontrará um espaço dedicado à
            escuta ativa e à resolução de problemas. Nossa missão é garantir que
            sua voz seja ouvida e que suas preocupações sejam tratadas com a
            máxima seriedade e transparência. Aqui está o que você pode esperar
            ao usar nossos serviços:
          </p>
        </div>
      </div>

      <div className="container-escolha">
        <div className="titulo">
          <h2>O QUE VOCÊ QUER FAZER?</h2>
        </div>
        <div className="geral-card">
          <div
            className="card"
            onClick={() => {
              Navegar("/Segunda");
            }}
          >
            <img
              aria-hidden="true"
              alt="Elogio"
              src="https://openui.fly.dev/openui/24x24.svg?text=👍"
            />
            <span className="card-primary">Elogio</span>
          </div>
          <div
            className="card"
            onClick={() => {
              Navegar("/Segunda");
            }}
          >
            <img
              aria-hidden="true"
              alt="Sugestão"
              src="https://openui.fly.dev/openui/24x24.svg?text=💬"
            />
            <span className="card-secondary">Sugestão</span>
          </div>
          <div
            className="card"
            onClick={() => {
              Navegar("/Segunda");
            }}
          >
            <img
              aria-hidden="true"
              alt="Reclamação"
              src="https://openui.fly.dev/openui/24x24.svg?text=⚠️"
            />
            <span className="card-destructive">Reclamação</span>
          </div>
          <div
            className="card"
            onClick={() => {
              Navegar("/Segunda");
            }}
          >
            <img
              aria-hidden="true"
              alt="Denuncia"
              src="https://openui.fly.dev/openui/24x24.svg?text=📢"
            />
            <span className="card-accent">Denuncia</span>
          </div>
          <div
            className="card"
            onClick={() => {
              Navegar("/Segunda");
            }}
          >
            <img
              aria-hidden="true"
              alt="Solicitação"
              src="https://openui.fly.dev/openui/24x24.svg?text=🗣️"
            />
            <span className="card-muted">Solicitação</span>
          </div>
        </div>
      </div>
    </div>
  );
}
