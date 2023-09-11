import s from './forgotPasswordForm.module.scss';
import axios from "axios";
import { useState } from "react";
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
import Eye from '../../images/eye.svg';

const ForgotPasswordForm = (props) => {
  
     
    return (
        <div className={s.signInForm__wrapper}>
           <form className={s.forgotPassword__form} >
           <h3 className={s.title}>
            <Text36500 text="Forgot your password?" />
          </h3>
          <div className={s.text}><Text14400 text='Enter your email address and well send you instructions on how to reset your password' textAlign='center' maxWidth='90%' color='rgba(255, 255, 255, 0.5)'/></div>
            <div className={s.inputs__wrapper}>
             <div className={s.input__wrapper}>
                <span className={s.label}>
                  <Text14400 text="Email" color="rgba(153, 153, 153, 1)" />
                </span>
                <input
                  type="text"
                  className={s.input}
                  placeholder={'Your Email'}
                  name="email"
                  />
              </div>
             <button className={s.button__wrapper}  onClick={props.click}>
                <Button18044
                  text={<Text16600 text="Send Email" color="#fff" />}
                  bg="rgba(173, 121, 85, 1)"
                  borderRadius="8px"
                />
              </button>
           </div>
          </form>
          <div className={s.terms}>
            By proceeding, you agree to our{" "}
            <span className={s.underline}>Terms of Use</span> and{" "}
            <span className={s.underline}>Privacy Policy</span>
          </div>
          
        </div>
    )
}

export default ForgotPasswordForm;