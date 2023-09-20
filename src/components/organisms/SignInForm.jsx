import s from "./signInForm.module.scss";
import axios from "axios";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../App/hooks";
import { Link, useHistory } from "react-router-dom";
import InputForm from "../../components/organisms/InputForm";
//import SignInFunction from "../../functions/signInFunction";
import { Button18044 } from "../atoms/Buttons";
import { Text36500 } from "../atoms/Text";
import { Text14400 } from "../atoms/Text";
import { Text14500 } from "../atoms/Text";
import { Text16400 } from "../atoms/Text";
import { Text16600 } from "../atoms/Text";
import { Text16500 } from "../atoms/Text";
import { Text32500 } from "../atoms/Text";
import Eye from "../../images/eye.svg";

const SignInForm = (props) => {
  const styled = {
    height: props.height
  }
  //signin---------------------------------------------------------
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState(null);
  const [users, setUsers] = useState([]); // Список пользователей из базы данных

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Отправить запрос на сервер для получения списка всех пользователей
      const response = await axios.get("http://localhost:1337/api/signups");

      // Получить данные о пользователях из ответа
      const usersData = response.data.data; // Обратите внимание, что мы берем usersData.data

      // Проверить введенные данные с данными всех пользователей
      const user = usersData.find(
        (u) =>
          u.attributes.email === formData.email &&
          u.attributes.password === formData.password
      );

      if (user) {
        // Пароль совпадает, пользователь вошел успешно
        window.location.href = "/"; // Замените на ваш путь к главной странице
      } else {
        setError("Неверная электронная почта или пароль");
      }
    } catch (error) {
      setError("Произошла ошибка при входе");
    }
    console.log(formData);
  };
  //isMobile-----------------------------------------------------------
  const screenWidth = useAppSelector((state) => state.screenWidth.screenWidth);
  const isMobile = screenWidth <= 1024;

  return (
    <div className={s.signInForm__wrapper} style={styled}>
      {props.img ? (<img src={props.img} className={s.logo}/>) : " " }
      {isMobile ? (
        <h3 className={s.title}>
          <Text32500 text="Sign in" />
        </h3>
      ) : (
        <h3 className={s.title}>
          <Text36500 text="Sign in" />
        </h3>
      )}
      {error && <p>{error}</p>}
      <form className={s.signIn__form} onSubmit={handleSubmit}> 
        <div className={s.inputs__wrapper}>
          <div className={s.input__wrapper}>
            <span className={s.label}>
              <Text14400 text="Email" color="rgba(153, 153, 153, 1)" />
            </span>
            <input
              type="text"
              className={s.input}
              placeholder={"Your Email"}
              name="email"
              onChange={handleChange}
            />
          </div>
          <div className={s.input__wrapper}>
            <div className={s.forgotPassword__wrapper}>
              <span className={s.label}>
                <Text14400 text="Password" color="rgba(153, 153, 153, 1)" />
              </span>
              <span
                className={s.forgotPassword__link}
                onClick={props.forgotPassword}
              >
                <Text14500
                  text="Forgot password?"
                  color="rgba(173, 121, 85, 1)"
                />
              </span>
            </div>
            <input
              type="text"
              className={s.input}
              placeholder={"Your password"}
              name="password"
              onChange={handleChange}
            />
            <img src={Eye} alt="eye" className={s.eye} />
          </div>

        </div>
        
        <button className={s.button__wrapper} type="submit">
            <Button18044
              text={<Text16600 text="Sign in" color="#fff" />}
              bg="rgba(173, 121, 85, 1)"
              borderRadius="8px"
            />
          </button>

          <div className={s.reminder}>
            <span className={s.text}>
              <Text16400
                text={"Don’t have an account?"}
                color="rgba(153, 153, 153, 1)"
              />
            </span>
            <span className={s.link} onClick={props.click}>
              <Text16500
                text={"Sign up"}
                color="rgba(173, 121, 85, 1)"
                underline={true}
              />
            </span>
          </div>
      </form>
      <div className={s.terms}>
        By proceeding, you agree to our{" "}
        <span className={s.underline}>Terms of Use</span> and{" "}
        <span className={s.underline}>Privacy Policy</span>
      </div>
    </div>
  );
};

export default SignInForm;
