import "./style.css";

export default function Sobre_O_Projeto() {
  return (
    <div className="Corpo_Site">
      <div class="container_sobre">
        <div class="blue-div"></div>
        <div class="title">Título do Projeto</div>
      </div>

      <hr
        style={{
          border: "1px solid #828282",
          marginTop: "20px",
          width: "100%",
        }}
      />

      <div class="text-content">
        <p>
          Este é um parágrafo de exemplo para descrever o projeto. Ele é escrito
          para se ajustar à largura da tela, garantindo uma leitura confortável,
          independente do dispositivo. O design responsivo garante que as
          informações sejam apresentadas de maneira clara, com alinhamento
          justificado e espaçamento adequado. Isso proporciona uma experiência
          de usuário agradável, permitindo que o conteúdo flua naturalmente ao
          longo da página. Assim, o texto se adapta conforme a largura da tela,
          sem comprometer a qualidade visual ou a legibilidade. Este é um
          parágrafo de exemplo para descrever o projeto. Ele é escrito para se
          ajustar à largura da tela, garantindo uma leitura confortável,
          independente do dispositivo. O design responsivo garante que as
          informações sejam apresentadas de maneira clara, com alinhamento
          justificado e espaçamento adequado. Isso proporciona uma experiência
          de usuário agradável, permitindo que o conteúdo flua naturalmente ao
          longo da página. Assim, o texto se adapta conforme a largura da tela,
          sem comprometer a qualidade visual ou a legibilidade.
        </p>
      </div>
    </div>
  );
}
