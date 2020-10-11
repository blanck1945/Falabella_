import * as React from "react";
import { useForm } from "react-hook-form";
import { FaUserAlt, FaFacebookF } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";

import "./Login_Modal.scss";
import { Link } from "react-router-dom";

interface LoginModalProps {
  openLogin: boolean;
  setOpenLogin: React.Dispatch<React.SetStateAction<boolean>>;
}

const Login_Modal = ({ openLogin, setOpenLogin }: LoginModalProps) => {
  const { register, watch, errors, handleSubmit } = useForm({
    mode: "onBlur",
    reValidateMode: "onBlur",
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const submit = (values: any) => console.log(values);

  const watchForm = watch();

  return (
    <div className="login_modal">
      <div className="login_header">
        <div className="login_init">
          <FaUserAlt className="login_icon" />
          <h3 className="login_text">Inicia Sesión</h3>
          <h3 className="login_x" onClick={() => setOpenLogin(!openLogin)}>
            X
          </h3>
        </div>
        <form className="login_user" onSubmit={handleSubmit(submit)}>
          <div className="input_div">
            <input
              type="text"
              placeholder="Ingresa tu e-mail"
              name="email"
              className="user_inp"
              ref={register({ required: true })}
            />
            {errors.email ? (
              <span className="error_text">Email is required </span>
            ) : (
              <span className="error_text"></span>
            )}
          </div>
          <div className="input_div">
            <input
              type="text"
              placeholder="Ingresa tu contraseña"
              name="password"
              className="user_inp"
              ref={register({ required: true, minLength: 5 })}
            />
            {errors.password?.type === "required" && (
              <span className="error_text">Password is required</span>
            )}
            {errors.password?.type === "minLength" && (
              <span className="error_text">Password require 5 caracters</span>
            )}
            {!errors.password && <span className="error_text"></span>}
          </div>
          <h3 className="login_forget">¿olvidate tu contraseña?</h3>
          {watchForm.email === "" ||
          watchForm.password === "" ||
          errors.email ||
          errors.password ? (
            <button className="submit_btn disabled" disabled={true}>
              iniciar sesion
            </button>
          ) : (
            <button className="submit_btn">iniciar sesion</button>
          )}
          <div>
            <h3>o</h3>
          </div>
          <button className="facebook_btn">
            <FaFacebookSquare className="fb_icon" />
            ingresá con facebook
          </button>
          <h3 className="login_forget login_no_line">
            ¿No tenes cuenta?{" "}
            <Link
              to="register_user"
              onClick={() => setOpenLogin(!openLogin)}
              href="https://secure.falabella.com.ar/falabella-ar/myaccount/register.jsp"
              className="register"
            >
              Registrate
            </Link>
          </h3>
        </form>
      </div>
    </div>
  );
};

export default Login_Modal;
