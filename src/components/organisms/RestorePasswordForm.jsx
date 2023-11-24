import s from "./restorePassword.module.scss";
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
import Eye from "../../images/eye.svg";
import { Icones } from "../../Data";
const RestorePasswordForm = (props) => {
  const styled = {
    height: props.height
  }
  const displayed = {
    display: props.display
  }
  return (
    <div className={s.signInForm__wrapper} style={styled}>
      {props.img ? (<img src={props.img} className={s.logo}/>) : " "}
      <form className={s.forgotPassword__form}>
        <h3 className={s.title}>
          <Text36500 text="Restore password" />
        </h3>
        <div className={s.inputs__wrapper}>
          <div className={s.input__wrapper}>
            <span className={s.label}>
              <Text14400 text="New Password" color="rgba(153, 153, 153, 1)" />
            </span>
            <input
              type="text"
              className={s.input}
              placeholder={"New Password"}
              name="email"
            />
          </div>
          <div className={s.input__wrapper}>
            <span className={s.label}>
              <Text14400
                text="Confirm Password"
                color="rgba(153, 153, 153, 1)"
              />
            </span>
            <input
              type="text"
              className={s.input}
              placeholder={"Confirm Password"}
              name="email"
            />
          </div>
          <Link className={s.link} onClick={props.click}>
            <button className={s.button__wrapper} type="submit">
              <Button18044
                text={<Text16600 text="Save" color="#fff" />}
                bg="rgba(173, 121, 85, 1)"
                borderRadius="8px"
              />
            </button>
          </Link>
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

export default RestorePasswordForm;
