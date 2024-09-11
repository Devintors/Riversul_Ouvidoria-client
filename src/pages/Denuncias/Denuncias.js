import "./style.css";

export default function Denuncias() {
  return (
    <div className="Corpo_Site">
      <div className="form-container">
        <form>
          <div className="form-group">
            <label htmlFor="name">Nome:</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Digite seu nome"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Local:</label>
            <div className="form-group-flex">
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Endereço"
              />
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Bairro"
              />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="message">Mensagem:</label>
            <textarea
              id="message"
              name="message"
              placeholder="Descreva o fato, relato ou detalhes sobre a sua manifestação ou pedido"
            ></textarea>
          </div>

          <div className="container">
            <div className="image-drop-zone" id="image-drop-zone">
              <p>Clique ou arraste nessa área para anexar</p>
              <input type="file" id="image-upload" accept="image/*" />
            </div>
            <div className="icon-clip">
              <i className="fa fa-paperclip"></i>
            </div>
          </div>

          <button type="button" className="btn">
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
}
