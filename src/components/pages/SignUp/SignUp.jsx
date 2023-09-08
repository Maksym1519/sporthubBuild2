import s from "./signUp.module.scss";
import { useState } from "react";
import axios from "axios";
import InputForm from "../../organisms/InputForm";
import { Text36500 } from "../../atoms/Text";
import { Text14400 } from "../../atoms/Text";
import { Text16600 } from "../../atoms/Text";
import { Text32500 } from "../../atoms/Text";
import { Text16400 } from "../../atoms/Text";
import { Text16500 } from "../../atoms/Text";
import ColumnTemplate from "../../molecules/ColumnTemplate";
import Input from "../../atoms/Input";
import { Button18044 } from "../../atoms/Buttons";
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
import Eye from '../../../images/eye.svg'

//redux-----------------------------------------------------
import {useAppDispatch, useAppSelector} from '../../../App/hooks';
import { increment, incrementByAmount } from '../../../features/counter/counterSlice';
import { updateScreenWidth } from '../../../features/headerSlice';

const SignUp = () => {
//redux---------------------------------------------------------
  const screenWidth = useAppSelector((state) => state.screenWidth.screenWidth);
  const isMobile = screenWidth <= 1024;
  //strapi-----------------------------------------------------------
  const [formData, setFormData] = useState({
    firstname: null,
    lastname: null,
    email: null,
    password: null,
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
 
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const requestData = {
        data: {
          firstname: formData.firstname,
          lastname: formData.lastname,
          email: formData.email,
          password: formData.password,
        },
      };
  
      const response = await axios.post("http://localhost:1337/api/signups", requestData, {
        headers: {
          "Content-Type": "application/json",
        },
      });
  
      if (response.status === 200) {
        console.log("Registration successful");
      } else {
        console.error("Registration failed");
      }
    } catch (error) {
      console.error("Error registering user:", error);
    }
  };
        
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
        <div className={s.signInForm__wrapper}>
        <h3 className={s.title}><Text36500 text='Sign up'/></h3>
        <form onSubmit={handleSubmit} className={s.signUp__form}>
        <div className={s.inputs__wrapper}>
        <div className={s.input__wrapper}>
          <span className={s.label}><Text14400 text='First Name' color='rgba(153, 153, 153, 1)'/></span>
          <input type="text" className={s.input} placeholder="Your First Name" name="firstname" value={formData.firstname}
          onChange={handleChange}/>
        </div>
        <div className={s.input__wrapper}>
          <span className={s.label}><Text14400 text='Last Name' color='rgba(153, 153, 153, 1)'/></span>
          <input type="text" className={s.input} placeholder="Your Last Name" name="lastname" value={formData.lastname}
          onChange={handleChange}/>
        </div>
        <div className={s.input__wrapper}>
          <span className={s.label}><Text14400 text='Email' color='rgba(153, 153, 153, 1)'/></span>
          <input type="text" className={s.input} placeholder="Your Email" name="email" value={formData.email}
          onChange={handleChange}/>
        </div>
        <div className={s.input__wrapper}>
          <span className={s.label}><Text14400 text='Password' color='rgba(153, 153, 153, 1)'/></span>
          <input type="text" className={s.input} placeholder="Your password" name="password" value={formData.password}
          onChange={handleChange}/>
          <img src={Eye} alt="eye" className={s.eye}/>
        </div>
        <button className={s.button__wrapper} type="submit"><Button18044 text={<Text16600 text='Sign up' color='#fff'/>} bg='rgba(173, 121, 85, 1)' borderRadius='8px'/></button>
        <div className={s.reminder}>
            <span className={s.text}><Text16400 text={'Already have an account?'} color='rgba(153, 153, 153, 1)'/></span>
            <span className={s.link}><Text16500 text={'Sign in'} color='rgba(173, 121, 85, 1)' underline={true}/></span>
        </div>
        </div>
        </form>
        <div className={s.terms}>By proceeding, you agree to our <span className={s.underline}>Terms of Use</span> and <span className={s.underline}>Privacy Policy</span></div>
        </div>
      </div>
      <img src={Blur} alt="blur" className={s.blur} />
      <img src={Blur2} alt="blur" className={s.blur2} />
    </div>
  );
};

export default SignUp;
