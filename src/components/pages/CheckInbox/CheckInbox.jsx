import s from "./checkInbox.module.scss";
import InputForm from "../../organisms/InputForm";
import { Text36500 } from "../../atoms/Text";
import { Text14400 } from "../../atoms/Text";
import { Text16600 } from "../../atoms/Text";
import { Text32500 } from "../../atoms/Text";
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
import Logo from "../../../images/mobile-logo.svg";

//redux-----------------------------------------------------
import { useAppDispatch, useAppSelector } from "../../../App/hooks";
import {
  increment,
  incrementByAmount,
} from "../../../features/counter/counterSlice";
import { updateScreenWidth } from "../../../features/headerSlice";

const CheckInbox = () => {
  //redux---------------------------------------------------------
  const screenWidth = useAppSelector((state) => state.screenWidth.screenWidth);
  const isMobile = screenWidth <= 1024;
  //---------------------------------------------------------
  return (
    <div className={s.signIn__wrapper}>
      {isMobile ? <img src={Logo} className={s.logo} /> : " "}
      <div className={s.signIn__container}>
        {isMobile ? (
          <div></div>
        ) : (
          <div className={s.images__wrapper}>
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
          </div>
        )}
        <div className={s.signInForm__wrapper}>
          <InputForm
            title={
              isMobile ? (
                <Text32500 text="Please check your inbox" />
              ) : (
                <Text36500 text="Please check your inbox" />
              )
            }
            description={
                <Text14400
                  text={[
                    'Check your email ',
                    <span key="email" className={s.bold}>
                      name@gmail.com
                    </span>,
                    ' for instructions on how to reset your password. If it doesn’t appear within a few minutes, check your spam folder.',
                  ]}
                  color="rgba(153, 153, 153, 1)"
                  textAlign="center"
                  maxWidth="90%"
                  marginBottom="40px"
                />
              }
            marginBottom="16px"
            label={<Text14400 text="Email" color="rgba(153, 153, 153, 1)" />}
            placeholder="Your Email"
            reminder={true}
            button={false}
            buttonText={<Text16600 text="Send Email" />}
            reminderText1={"Didn't receive the email?"}
            reminderText2={"Go to Support"}
          />
        </div>
      </div>
      <img src={Blur} alt="blur" className={s.blur} />
      <img src={Blur2} alt="blur" className={s.blur2} />
    </div>
  );
};

export default CheckInbox;
