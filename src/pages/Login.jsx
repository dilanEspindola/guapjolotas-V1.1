import { useState } from "react";
import { Link } from "react-router-dom";
import { Form, ContainerForm, Buttons } from "../styles/form";
import { User } from "../context/UserContext";

import "../styles/form.css";
import "../index.css";

export function Login() {
  const [userLogin, setUserLogin] = useState({
    usuario: "",
    password: "",
  });
  const { login } = User();

  const handleChange = ({ target: { name, value } }) => {
    setUserLogin({ ...userLogin, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    login(userLogin.usuario, userLogin.password);
  };

  return (
    <div>
      <ContainerForm>
        <Form action="" onSubmit={handleSubmit}>
          <h1>Inicia Sesión</h1>
          <input
            type="text"
            name="usuario"
            placeholder="nombre de usuario"
            onChange={handleChange}
            className="input-form login"
          />
          <input
            type="password"
            name="password"
            placeholder="contraseña"
            onChange={handleChange}
            className="input-form login"
          />
          <Buttons>
            <button>Iniciar Sesión</button>
            <Link to="/register" className="link-to-login">
              Registrate
            </Link>
          </Buttons>
        </Form>
      </ContainerForm>
    </div>
  );
}
