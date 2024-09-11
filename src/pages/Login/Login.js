import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Axios from "axios";
import Cookies from "js-cookie";

import "./style.css";

export default function Login() {
  const Navegar = useNavigate();

  const [Ja_Existe_Cadastro, setJa_Existe_Cadastro] = useState(false);

  //#region Envio de cadastro
  const [Input_Nome_Do_Usuario_Cadastro, setInput_Nome_Do_Usuario_Cadastro] =
    useState("");
  const [Input_Senha_Do_Usuario_Cadastro, setInput_Senha_Do_Usuario_Cadastro] =
    useState("");

  const Enviar_Dados_De_Cadastro_De_Login_Para_Servidor = () => {
    console.log(Input_Nome_Do_Usuario_Cadastro);
    console.log(Input_Senha_Do_Usuario_Cadastro);

    if (
      Input_Senha_Do_Usuario_Cadastro !== "" &&
      Input_Nome_Do_Usuario_Cadastro !== ""
    ) {
      Axios.post(
        "https://zvfmwc2c-5002.brs.devtunnels.ms/cadastrar-usuario",
        {
          Usuario: Input_Nome_Do_Usuario_Cadastro,
          Senha: Input_Senha_Do_Usuario_Cadastro,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      ).then((Resposta) => {
        if (Resposta.data.resultado == "true") {
          alert("Usuario já existente");
          setInput_Nome_Do_Usuario_Login(Input_Nome_Do_Usuario_Cadastro);
          setInput_Nome_Do_Usuario_Cadastro("");
          setInput_Senha_Do_Usuario_Cadastro("");

          setJa_Existe_Cadastro(true);
        } else {
          console.log(Resposta.data.token);
          setInput_Nome_Do_Usuario_Cadastro("");
          setInput_Senha_Do_Usuario_Cadastro("");
          Cookies.set("token", Resposta.data.token, { expires: 60 });
          Navegar("/");
        }
      });
    } else {
      if (
        Input_Senha_Do_Usuario_Cadastro == "" &&
        Input_Nome_Do_Usuario_Cadastro == ""
      ) {
        alert("Campos não preenchidos");
      } else if (Input_Senha_Do_Usuario_Cadastro == "") {
        alert("Senha não preenchida");
      } else if (Input_Nome_Do_Usuario_Cadastro == "") {
        alert("Nome não preenchido");
      }
    }
  };
  //#endregion

  //#region Puxando login
  const [Input_Nome_Do_Usuario_Login, setInput_Nome_Do_Usuario_Login] =
    useState("");
  const [Input_Senha_Do_Usuario_Login, setInput_Senha_Do_Usuario_Login] =
    useState("");

  const Enviar_Dados_De_Login_Para_Validacao_No_Servidor = () => {
    console.log(Input_Nome_Do_Usuario_Login);
    console.log(Input_Senha_Do_Usuario_Login);

    if (
      Input_Senha_Do_Usuario_Login !== "" &&
      Input_Nome_Do_Usuario_Login !== ""
    ) {
      Axios.post(
        // "https://rvsprice-server.vercel.app/pesquisa-categoria-produto",
        // "http://localhost:5000/pesquisa-categoria-produto",
        "https://zvfmwc2c-5002.brs.devtunnels.ms/validar-login",
        {
          Usuario: Input_Nome_Do_Usuario_Login,
          Senha: Input_Senha_Do_Usuario_Login,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      ).then((Resposta) => {
        if (Resposta.data.erro) {
          console.log(Resposta.data.erro);
          alert("Usuario ou senha incorretos");
        } else {
          Cookies.set("token", Resposta.data.token);
          console.log(Resposta.data.token);
          setInput_Nome_Do_Usuario_Login("");
          setInput_Senha_Do_Usuario_Login("");
          Navegar("/");
        }
      });
    } else {
      if (
        Input_Senha_Do_Usuario_Login == "" &&
        Input_Nome_Do_Usuario_Login == ""
      ) {
        alert("Campos não preenchidos");
      } else if (Input_Senha_Do_Usuario_Login == "") {
        alert("Senha não preenchida");
      } else if (Input_Nome_Do_Usuario_Login == "") {
        alert("Nome não preenchido");
      }
    }
  };
  //#endregion

  return (
    <div className="Corpo_Site">
      <div className="login-geral">
        <div
          className="login-container"
          style={Ja_Existe_Cadastro ? { display: "none" } : {}}
        >
          <h1>Registrar-se</h1>
          <p className="login-text">
            Já tem uma conta?
            <span
              className="toggle-to-login"
              onClick={() => {
                setJa_Existe_Cadastro(true);
              }}
            >
              {" "}
              Faça login
            </span>
          </p>

          <form className="login-form">
            <label for="email">Email</label>
            <input
              value={Input_Nome_Do_Usuario_Cadastro}
              onChange={(e) => {
                setInput_Nome_Do_Usuario_Cadastro(e.target.value);
              }}
              type="email"
              id="email"
              placeholder="Digite seu email"
              required
            />

            <label for="password">Escolha uma senha</label>
            <input
              value={Input_Senha_Do_Usuario_Cadastro}
              onChange={(e) => {
                setInput_Senha_Do_Usuario_Cadastro(e.target.value);
              }}
              type="password"
              id="password"
              placeholder="Digite sua senha"
              required
            />

            <div className="form-actions">
              <button
                type="button"
                className="login-button"
                onClick={() => {
                  Enviar_Dados_De_Cadastro_De_Login_Para_Servidor();
                }}
              >
                Cadastrar
              </button>
            </div>
          </form>
        </div>

        <div
          className="login-container-2"
          style={Ja_Existe_Cadastro ? {} : { display: "none" }}
        >
          <h1>Login</h1>
          <p className="login-text">
            Não tem uma conta?
            <span
              className="toggle-to-register"
              onClick={() => {
                setJa_Existe_Cadastro(false);
              }}
            >
              {" "}
              Registrar-se
            </span>
          </p>

          <form className="login-form">
            <label for="email">Email</label>
            <input
              value={Input_Nome_Do_Usuario_Login}
              onChange={(e) => {
                setInput_Nome_Do_Usuario_Login(e.target.value);
              }}
              type="email"
              id="email"
              placeholder="Digite seu email"
              required
            />

            <label for="password">Senha</label>
            <input
              value={Input_Senha_Do_Usuario_Login}
              onChange={(e) => {
                setInput_Senha_Do_Usuario_Login(e.target.value);
              }}
              type="password"
              id="password"
              placeholder="Digite sua senha"
              required
            />

            <div className="form-actions">
              <button
                type="button"
                className="login-button"
                onClick={() => {
                  Enviar_Dados_De_Login_Para_Validacao_No_Servidor();
                }}
              >
                Entrar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
