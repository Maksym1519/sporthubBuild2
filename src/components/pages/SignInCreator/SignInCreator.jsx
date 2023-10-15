import sc from "./signInCreator.module.scss";
import SignUpForm from "../../organisms/SignUpForm";
import SignInForm from "../../organisms/SignInForm";
import ForgotPasswordForm from "../../organisms/ForgotPasswordForm";
import CheckInboxForm from "../../organisms/CheckInboxForm";
import RestorePasswordForm from "../../organisms/RestorePasswordForm";
//redux------------------------------------------------------------------
import { useDispatch, useSelector } from "react-redux";
import {
  showSignInForm,
  showSignUpForm,
  showForgotPasswordForm,
  showCheckInboxForm,
  showRestorePasswordForm,
} from "../../../features/signInSlice";
//slider------------------------------------------------------------------
import { Swiper, SwiperSlide } from "swiper/react";
import { register } from "swiper/element/bundle";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import "swiper/scss/scrollbar";
import "swiper/scss/effect-fade";
import "swiper/scss/effect-cards";
import "swiper/css/effect-creative";
import "swiper/swiper-bundle.css";
register();
//images-------------------------------------------------
import Img1 from "../../../images/leftSlider1img.webp";
import Img2 from "../../../images/leftSlider2img.webp";
import Img3 from "../../../images/leftSliderimg3.webp";
import Img4 from "../../../images/leftSliderImg4.webp";
import ImgRight1 from "../../../images/rightSliderImg1.webp";
import ImgRight2 from "../../../images/rightSliderImg2.webp";
import ImgRight3 from "../../../images/rightSliderImg3.webp";
import Logo from "../../../images/logo-short.webp";
import Blur1 from "../../../images/blur-signIn.svg";
import Blur2 from "../../../images/signIn-blur2.svg";

const SignUpCreator = () => {
  const initialSlide = 0.7;
  //redux-forms--------------------------------------------------------------------
  const dispatch = useDispatch();
  const currentComponent = useSelector(
    (state) => state.signIn.currentComponent
  );
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

  return (
    <div className={sc.signUpCreator__wrapper}>
      <div className={sc.signUpCreator__container}>
        <div className={sc.signUpCreator__leftSlider}>
          <Swiper
            slidesPerView={2.5}
            speed={500}
            loop={true}
            direction={"vertical"}
            initialSlide={1}
            className={sc.leftSlider}
          >
            <SwiperSlide className={sc.swiperSlide + " " + sc.firstSlide}>
              <img src={Img1} alt="img" />
            </SwiperSlide>
            <SwiperSlide className={sc.swiperSlide}>
              <img src={Img2} alt="img" />
            </SwiperSlide>
            <SwiperSlide className={sc.swiperSlide}>
              <img src={Img3} alt="img" />
            </SwiperSlide>
            <SwiperSlide className={sc.swiperSlide}>
              <img src={Img4} alt="img" />
            </SwiperSlide>
            <SwiperSlide className={sc.swiperSlide}>
              <img src={Img1} alt="img" />
            </SwiperSlide>
            <SwiperSlide className={sc.swiperSlide}>
              <img src={Img2} alt="img" />
            </SwiperSlide>
          </Swiper>
        </div>
        <div className={sc.signUpCreator__rightSlider}>
          <Swiper
            slidesPerView={2.5}
            speed={500}
            loop={true}
            direction={"vertical"}
            initialSlide={initialSlide}
            className={sc.rightSlider}
          >
            <SwiperSlide className={sc.swiperSlide + " " + sc.firstSlide}>
              <img src={ImgRight1} alt="img" />
            </SwiperSlide>
            <SwiperSlide className={sc.swiperSlide}>
              <img src={ImgRight2} alt="img" />
            </SwiperSlide>
            <SwiperSlide className={sc.swiperSlide}>
              <img src={ImgRight3} alt="img" />
            </SwiperSlide>
            <SwiperSlide className={sc.swiperSlide}>
              <img src={ImgRight1} alt="img" />
            </SwiperSlide>
            <SwiperSlide className={sc.swiperSlide}>
              <img src={ImgRight2} alt="img" />
            </SwiperSlide>
            <SwiperSlide className={sc.swiperSlide}>
              <img src={ImgRight3} alt="img" />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <div className={sc.signInForm__wrapper}>
        {currentComponent === 'signIn' && <SignInForm img={Logo} click={handleSignUpClick} forgotPassword={handleForgotPasswordClick} link="/" height='800px'/>}
        {currentComponent === 'signUp' && <SignUpForm img={Logo} click={handleSignInClick} url="http://localhost:1337/api/clients"/>}
        {currentComponent === 'forgotPassword' && <ForgotPasswordForm click={handlecheckInboxClick} img={Logo} height='100%' display='none'/>}
        {currentComponent === 'checkInbox' && <CheckInboxForm img={Logo} height='100%' display='none'/>}
        {currentComponent === 'restorePassword' && <RestorePasswordForm img={Logo} height='100%' display='none'/>} 
      </div>
      <img src={Blur1} alt="blur1" className={`${sc.blur} ${sc.blur1}`} />
      <img src={Blur2} alt="blur2" className={`${sc.blur} ${sc.blur2}`} />
    </div>
  );
};
export default SignUpCreator;
