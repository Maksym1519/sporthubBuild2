import s from "./forgotPasswordForm.module.scss";
import axios from "axios";
//import emailjs from 'emailjs-com';
import emailjs from "@emailjs/browser";
//import { Email } from "emailjs-sdk";
import { useState, useRef, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../App/hooks";
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

const ForgotPasswordForm = (props) => {
  const styled = {
    height: props.height,
  };
  const displayed = {
    display: props.display,
  };
  //isMobile-----------------------------------------------------------
  const screenWidth = useAppSelector((state) => state.screenWidth.screenWidth);
  const isMobile = screenWidth <= 1024;
  //generate-password-----------------------------------------------------------
  const generateRandomPassword = () => {
    const length = 8;
    const charset =
      "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let password = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      password += charset[randomIndex];
    }
    return password;
  };
  //------------------------------------------------------------------------
  const [newPasswordToSever, setNewPasswordToServer] = useState(null);
  console.log(newPasswordToSever)
  useEffect(() => {
    const newPassword = generateRandomPassword();
    setNewPasswordToServer(newPassword);
  },[])
  
  //--------------------------------------------------------------------------------------------------
  const [email, setEmail] = useState(null);
  console.log(email)
  const sendEmail = async (e) => {
    e.preventDefault();
    const newEmail = e.target.elements.user_email.value;
    setEmail(newEmail)
    const templateParams = {
      to: newEmail,
      to_email: email,
      from_name: "Maksym",
      to_name: "Jhon",
      message: `Ваш новый пароль: ${newPasswordToSever}`,
    };

    try {
      await emailjs.send(
        "service_npekptm",
        "template_kyh2hsb",
        templateParams,
        "MC7BRzxDCdfYOwX2U"
      );
      console.log("Email отправлен");
      // После успешной отправки email вызываем props.click
      //props.click();
    } catch (error) {
      console.error("Ошибка при отправке письма:", error.text);
    }
   // handleChangePassword()
  };
  //change-password-on-server-----------------------------------------------------------------
   async function handleChangePassword() {
    try {
      if (newPasswordToSever && passwordClients) {
        if (passwordClients.length > 0) {
          const requestData = {
            data: {
              password: newPasswordToSever,
            },
          };
          const clientId = passwordClients[0].id; // Assuming the first element in the array has an 'id' property
  
          const updatePasswordOnServer = async () => {
            try {
              const response = await axios.put(
                `http://localhost:1337/api/clients/${clientId}`,
                requestData
              );
              console.log('Change password response:', response.data);
            } catch (error) {
              console.error("change password failed", error);
            }
          };
  
          updatePasswordOnServer();
        } else {
          console.error('No clients found or invalid passwordClients array');
        }
      } else {
        console.error('No clients found or invalid passwordClients array');
      }
    } catch (error) {
      console.error("change password failed", error);
    }
  }
  const [passwordClients, setPasswordClients] = useState([]);
  async function getClients() {
    try {
      const clients = await axios.get("http://localhost:1337/api/clients?populate=*");
      const dataResponse = clients.data.data;
      console.log("Data from server:", dataResponse);
  
      const filteredClients = dataResponse.filter((item) => item.attributes.email === email);
      setPasswordClients(filteredClients);
      console.log("Filtered clients:", filteredClients);
    } catch (error) {
      console.error("get clients failed", error);
    }
  }
 
  useEffect(() => {
    getClients();
  }, [email]);
  useEffect(() => {
    handleChangePassword()
  },[email,passwordClients,newPasswordToSever])
 
  
  
  return (
    <div className={s.signInForm__wrapper} style={styled}>
      {props.img ? <img src={props.img} className={s.logo} /> : " "}
      <form className={s.forgotPassword__form} onSubmit={sendEmail} >
        {isMobile ? (
          <h3 className={s.title}>
            <Text32500 text="Forgot your password?" textAlign="center" />
          </h3>
        ) : (
          <h3 className={s.title}>
            <Text36500 text="Forgot your password?" />
          </h3>
        )}
        <div className={s.text}>
          <Text14400
            text="Enter your email address and well send you instructions on how to reset your password"
            textAlign="center"
            maxWidth="100%"
            color="rgba(255, 255, 255, 0.5)"
          />
        </div>
        <div className={s.inputs__wrapper}>
          <div className={s.input__wrapper}>
            <span className={s.label}>
              <Text14400 text="Email" color="rgba(153, 153, 153, 1)" />
            </span>
            <input
              type="email"
              className={s.input}
              placeholder={"Your Email"}
              name="user_email"
               />
          </div>
           <input type="submit" value="Send" className={s.sendEmail} />
        </div>
      </form>
      <div className={s.terms} style={displayed}>
        By proceeding, you agree to our{" "}
        <span className={s.underline}>Terms of Use</span> and{" "}
        <span className={s.underline}>Privacy Policy</span>
      </div>
    </div>
  );
};

export default ForgotPasswordForm;
