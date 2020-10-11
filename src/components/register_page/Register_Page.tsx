import * as React from "react";
import { useForm } from "react-hook-form";
import { getCountries } from "../../Redux_Store/axios/fetch_countries";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { TiTick } from "react-icons/ti";
import {
  User_Model,
  User,
} from "../../Redux_Store/data_interfaces/data_interfaces";
import { day_arr, month_arr } from "../../utils/birthday_data";

import "./Register_Page.scss";
import { useDispatch } from "react-redux";
import { postUserToExpress } from "../../Redux_Store/axios/axios_user";
import { checkPass } from "../../utils/validation_func";
import Loading_Page from "../../layouts/Loading_Page/Loading_Page";
import { useHistory } from "react-router-dom";
import { max_len } from "./register_max_variables";

const Register_Page = () => {
  const { register, errors, handleSubmit, getValues, reset } = useForm({
    mode: "onBlur",
    reValidateMode: "onBlur",
    defaultValues: User_Model,
  });
  const submit = (values: any) => postUser(values);
  const [countries, setCountries] = React.useState<any>(undefined);
  const [day, setDay] = React.useState<any>("Dia");
  const [month, setMonth] = React.useState<string>("Mes");

  //Page Variables
  const [error, setError] = React.useState<boolean>(false);
  const [loading, setLoading] = React.useState<boolean>(false);

  const history = useHistory();
  const dispatch = useDispatch();

  React.useEffect(() => {
    window.scrollTo(0, 0);
    const fetchData = async () => {
      setCountries(await getCountries());
    };
    fetchData();
  }, []);

  const postUser = (user: any) => {
    window.scrollTo(0, 0);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
    setTimeout(() => {
      history.push("/succesfull_page");
    }, 3000);
    const user_birth = user.day + "-" + user.user_month + "-" + user.user_year;
    const user_gen = user.user_gender[0];
    const pass_validate = checkPass(
      user.user_password,
      user.user_confirm_password
    );
    if (!pass_validate) {
      return setError(true);
    }
    const user_data: User = {
      first_name: user.first_name,
      last_name: user.last_name,
      user_name: user.user_name,
      user_email: user.user_email,
      user_password: user.user_password,
      user_country: user.user_country,
      user_id_num: user.user_id_num,
      user_gender: user_gen,
      user_birthday: user_birth,
      user_cel: user.user_cel,
      user_avatar: null,
      user_falabella_news: user.falabella_news,
      user_terms_conditions: user.terms_conditions,
    };

    dispatch(postUserToExpress(user_data));
    reset();
    setDay("Día");
    setMonth("Mes");
  };
  const form_value = getValues();
  return (
    <div className="register_page">
      {loading ? <Loading_Page label={"Gracias por usar Falabella"} /> : null}
      <div className="form_header">
        <div className="header_up">
          <h2 className="up_text">Formulario de registro</h2>
        </div>
        <div className="header_down">
          <h3 className="down_text">complete tus datos personales</h3>
          <h3 className="down_text">*Campos obligatorios</h3>
        </div>
      </div>
      <form className="register_form" onSubmit={handleSubmit(submit)}>
        <div className="form_div">
          <label className="form_label">Nombre*</label>
          <input
            type="text"
            ref={register({ required: true, maxLength: 30 })}
            className="form_inp"
            maxLength={max_len.max_first_name}
            name="first_name"
          />
          {errors.first_name && <AiOutlineCloseCircle className="error_col" />}
          {form_value.first_name !== undefined &&
          form_value.first_name !== "" &&
          !errors.first_name ? (
            <TiTick className="green_col" />
          ) : null}
        </div>
        {errors.first_name && (
          <span className="error_text">Debes completar el campo Nombre</span>
        )}
        <div className="form_div">
          <label className="form_label">Apellido*</label>
          <input
            type="text"
            ref={register({ required: true, maxLength: 30 })}
            maxLength={max_len.max_first_name}
            className="form_inp"
            name="last_name"
          />
        </div>
        <div className="form_div">
          <label className="form_label">Username*</label>
          <input
            type="text"
            ref={register({ required: true, maxLength: 40 })}
            className="form_inp"
            maxLength={max_len.max_user_name}
            name="user_name"
          />
        </div>
        <div className="form_div">
          <label className="form_label">Email*</label>
          <input
            type="email"
            ref={register({ required: true, maxLength: 55 })}
            className="form_inp"
            maxLength={max_len.max_user_email}
            name="user_email"
            placeholder="ejemplo@falabella.com.ar"
          />
        </div>
        <div className="form_div">
          <label className="form_label">Clave*</label>
          <input
            type="password"
            ref={register({ required: true, maxLength: 25 })}
            className="form_inp"
            maxLength={max_len.max_user_password}
            name="user_password"
          />
        </div>
        <div className="form_div">
          <label className="form_label">Confirmar clave*</label>
          <input
            type="password"
            ref={register({ required: true, maxLength: 25 })}
            className="form_inp"
            maxLength={max_len.max_user_password}
            name="user_confirm_password"
          />
        </div>
        <div className="form_div">
          <label className="form_label">Pais de residencia</label>
          <select
            name="user_country"
            ref={register}
            defaultValue={"Argentina"}
            className="form_inp"
          >
            {countries !== undefined
              ? countries.map((el: string) => <option key={el}>{el}</option>)
              : []}
          </select>
        </div>
        <div className="form_div">
          <label className="form_label">N de documento*</label>
          <input
            type="text"
            ref={register({ required: true, maxLength: 8 })}
            className="form_inp"
            maxLength={max_len.max_id}
            name="user_id_num"
          />
        </div>
        <div className="gender_div">
          <label className="form_label">Género</label>
          <div className="gender_inner_div">
            <input
              type="checkbox"
              ref={register}
              name="user_gender"
              value="Hombre"
              className="form_check"
            />
            <label className="form_label">Hombre</label>
          </div>
          <div className="gender_inner_div">
            <input
              type="checkbox"
              ref={register}
              name="user_gender"
              value="Mujer"
              className="form_check"
            />
            <label className="form_label">Mujer</label>
          </div>
        </div>
        <div className="birth_div">
          <label className="form_label">Fecha de nacimiento*</label>
          <select
            name="day"
            ref={register}
            value={day}
            className="birth_select"
            onChange={(e) => setDay(e.target.value)}
          >
            {day_arr.map((el: any, index: number) => {
              if (month === "Febrero") {
                return index < 29 ? <option key={el}>{el}</option> : null;
              } else if (
                month === "Abril" ||
                month === "Junio" ||
                month === "Septiembre" ||
                month === "Noviembre"
              ) {
                return index < 31 ? <option key={el}>{el}</option> : null;
              } else {
                return <option key={el}>{el}</option>;
              }
            })}
          </select>
          <select
            value={month}
            onChange={(e) => setMonth(e.target.value)}
            name="user_month"
            className="birth_select"
            ref={register}
          >
            {month_arr.map((el: string) => (
              <option key={el}>{el}</option>
            ))}
          </select>
          <select
            value="year"
            name="user_year"
            className="birth_select"
            ref={register}
          >
            <option value="2020">2020</option>
          </select>
        </div>
        <div className="form_div">
          <label className="form_label">Celular*</label>
          <input
            type="text"
            ref={register({ required: true, maxLength: 12 })}
            maxLength={max_len.max_cel}
            className="form_inp"
            name="user_cel"
          />
        </div>
        <div className="form_footer_text">
          <div className="form_footer_check">
            <input
              type="checkbox"
              ref={register}
              name="falabella_news"
              className="footer_check"
            />
            <h3 className="check_text">
              Quiero recibir vía e-mail ofertas y novedades de Falabella.com
            </h3>
          </div>
          <div className="form_footer_check">
            <input
              type="checkbox"
              ref={register}
              name="terms_conditions"
              className="footer_check"
            />
            <h3 className="check_text">
              Al registarte estás aceptando los
              <span className="main_link"> terminos y condiciones</span>
            </h3>
          </div>
        </div>
        <button className="falabella_btn">Guardar</button>
      </form>
    </div>
  );
};

export default Register_Page;
