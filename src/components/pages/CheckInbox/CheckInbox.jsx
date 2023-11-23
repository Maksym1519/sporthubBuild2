import s from "./checkInbox.module.scss";
//components--------------------------------------------------------------
import InputForm from "../../organisms/InputForm";
import { Text36500 } from "../../atoms/Text";
import { Text14400 } from "../../atoms/Text";
import { Text16600 } from "../../atoms/Text";
import { Text32500 } from "../../atoms/Text";
import { SignImages } from "../../../Data";
import { Icones } from "../../../Data";
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
      {isMobile ? <img src={Icones.logoCenter} className={s.logo} /> : " "}
      <div className={s.signIn__container}>
        {isMobile ? (
          <div></div>
        ) : (
          <div className={s.images__wrapper}>
            <div className={s.item + " " + s.firstItem}>
              <img src={SignImages.img1} alt="img" className={s.img1} />
              <img src={SignImages.img2} alt="img" className={s.img2} />
            </div>
            <div className={s.item + " " + s.secondItem}>
              <img src={SignImages.img3} alt="img" className={s.img3} />
              <img src={SignImages.img4} alt="img" className={s.img4} />
            </div>
            <div className={s.item + " " + s.thirdItem}>
              <img src={SignImages.img5} alt="img" className={s.img5} />
              <img src={SignImages.img6} alt="img" className={s.img6} />
            </div>
            <div className={s.item + " " + s.forthItem}>
              <img src={SignImages.img7} alt="img" className={s.img7} />
              <img src={SignImages.img8} alt="img" className={s.img8} />
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
      <img src={SignImages.blur1} alt="blur" className={s.blur} />
      <img src={SignImages.blur2} alt="blur" className={s.blur2} />
    </div>
  );
};

export default CheckInbox;
