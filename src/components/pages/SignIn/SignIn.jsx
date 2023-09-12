import s from "./signIn.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { showSignInForm, showSignUpForm, showForgotPasswordForm,showCheckInboxForm,showRestorePasswordForm } from '../../../features/signInSlice';
import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import SignInFunction from "../../functions/signInFunction";
import SignInForm from "../../organisms/SignInForm";
import SignUpForm from "../../organisms/SignUpForm";
import ForgotPasswordForm from "../../organisms/ForgotPasswordForm";
import CheckInboxForm from "../../organisms/CheckInboxForm";
import RestorePasswordForm from "../../organisms/RestorePasswordForm";
import Img1 from "../../../images/signIn1.webp";
import Img2 from "../../../images/signIn2.webp";
import Img3 from "../../../images/signIn3.webp";
import Img4 from "../../../images/signIn4.webp";
import Img5 from "../../../images/signIn5.webp";
import Img6 from "../../../images/signIn6.webp";
import Img7 from "../../../images/signIn7.webp";
import Img8 from "../../../images/signIn8.webp";
import Blur from "../../../images/blur-signIn.svg";
import Blur2 from "../../../images/signIn-blur2.svg";
import Logo from '../../../images/mobile-logo.svg';




//redux-----------------------------------------------------
import {useAppDispatch, useAppSelector} from '../../../App/hooks';
import { increment, incrementByAmount } from '../../../features/counter/counterSlice';
import { updateScreenWidth } from '../../../features/headerSlice';

const SignIn = () => {
    //redux---------------------------------------------------------
  const screenWidth = useAppSelector((state) => state.screenWidth.screenWidth);
  const isMobile = screenWidth <= 1024;
 //redux-forms--------------------------------------------------------------------
  const dispatch = useDispatch();
  const currentComponent = useSelector((state) => state.signIn.currentComponent);
console.log(currentComponent)
  
  const handleSignInClick = () => {
    dispatch(showSignInForm());
  };

  const handleSignUpClick = () => {
    dispatch(showSignUpForm());
  };
  const handleForgotPasswordClick = () => {
    dispatch(showForgotPasswordForm());
  };
  const handlecheckInboxClick = () => {
    dispatch(showCheckInboxForm());

    // Перейти на 'restorePassword' через 5 секунд
    setTimeout(() => {
      dispatch(showRestorePasswordForm());
    }, 5000);
  };

//setTimeOut-------------------------------------------------------

   return (
    <div className={s.signIn__wrapper}>
      {isMobile ? (<img src={Logo} className={s.logo}/>) : (' ')}
      <div className={s.signIn__container}>
        {isMobile ? (<div></div>) :
        (<div className={s.images__wrapper}>
          <div className={s.item + " " + s.firstItem}>
            <img src={Img1} alt="img" className={s.img1} />
            <img src={Img2} alt="img" className={s.img2} />
          </div>
          <div className={s.item + " " + s.secondItem}>
            <img src={Img3} alt="img" className={s.img3} />
            <img src={Img4} alt="img" className={s.img4} />
          </div>
          <div className={s.item + " " + s.thirdItem}>
            <img src={Img5} alt="img" className={s.img5} />
            <img src={Img6} alt="img" className={s.img6} />
          </div>
          <div className={s.item + " " + s.forthItem}>
            <img src={Img7} alt="img" className={s.img7} />
            <img src={Img8} alt="img" className={s.img8} />
          </div>
        </div>)
        }
       {/* //forms--------------------------------------------------------------------------- */}
         {currentComponent === 'signUp' && <SignUpForm click={handleSignInClick} />}
         {currentComponent === 'signIn' && <SignInForm click={handleSignUpClick} forgotPassword={handleForgotPasswordClick}/>}
         {currentComponent === 'forgotPassword' && <ForgotPasswordForm click={handlecheckInboxClick}/>}
         {currentComponent === 'checkInbox' && <CheckInboxForm />}
         {currentComponent === 'restorePassword' && <RestorePasswordForm />} 
         
       {/* //-------------------------------------------------------------------------------- */}
      </div>
      <img src={Blur} alt="blur" className={s.blur} />
      <img src={Blur2} alt="blur" className={s.blur2} />
    </div>
  );
};

export default SignIn;
