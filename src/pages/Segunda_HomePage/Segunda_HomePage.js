import { useNavigate } from "react-router-dom";

import "./style.css";

import Escudo_Identificador from "../../img/escudo-identificador.png";
import Escudo_Anonimo from "../../img/escudo-anonimo.png";

export default function Segunda_HomePage() {
  const Navegar = useNavigate();
  return (
    <div className="Corpo_Site">
      <div className="container-escolha">
        <div className="titulo">
          <h2>Novo pedido ou manifestação</h2>
          <p>
            <span>Tipo:</span> Selecione pedido de acesso a informação ou tipo
            de manifestação
          </p>
        </div>
        <div className="geral-card">
          <div className="card">
            <img
              aria-hidden="true"
              alt="Elogio"
              src="https://openui.fly.dev/openui/24x24.svg?text=👍"
            />
            <span className="card-primary">Elogio</span>
          </div>
          <div className="card">
            <img
              aria-hidden="true"
              alt="Sugestão"
              src="https://openui.fly.dev/openui/24x24.svg?text=💬"
            />
            <span className="card-secondary">Sugestão</span>
          </div>
          <div className="card">
            <img
              aria-hidden="true"
              alt="Reclamação"
              src="https://openui.fly.dev/openui/24x24.svg?text=⚠️"
            />
            <span className="card-destructive">Reclamação</span>
          </div>
          <div className="card">
            <img
              aria-hidden="true"
              alt="Denuncia"
              src="https://openui.fly.dev/openui/24x24.svg?text=📢"
            />
            <span className="card-accent">Denuncia</span>
          </div>
          <div className="card">
            <img
              aria-hidden="true"
              alt="Solicitação"
              src="https://openui.fly.dev/openui/24x24.svg?text=🗣️"
            />
            <span className="card-muted">Solicitação</span>
          </div>
        </div>
      </div>
      <div className="identificar">
        <h1>Gostaria de se identificar?</h1>
        <div className="img-identifar">
          <div className="img-escudos">
            <img
              src={Escudo_Identificador}
              alt=""
              onClick={() => {
                Navegar("/Denuncias");
              }}
            />
            <img
              src={Escudo_Anonimo}
              alt=""
              onClick={() => {
                Navegar("/Denuncias");
              }}
            />
          </div>
          <p>
            Lembre-se: a escolha entre denunúncia anonima ou identificada é
            totalmente sua. Sua segurança e privacidade são nossas prioridades
          </p>
        </div>
      </div>
    </div>
  );
}
