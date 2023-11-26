import React from "react";
import { Button18044 } from "../components/atoms/Buttons";
import fonts from '../fonts.scss';
import Plus from '../images/Plus.svg'

export default {
    title: "Components/MyButton",
    component: Button18044,
    };
  
  const Template = args => <Button18044 {...args}/>
  
  
  export const Button180 = Template.bind({})
  Button180.args = {
    width: "180px",
    text: "Sign in",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    fontFamily: "Uto-600",
    margin: "0 auto"
    }
  export const ButtonBack180 = Template.bind({})
  ButtonBack180.args = {
    width: "180px",
    text: "Back",
    color: "#AD7955",
    border: "1px solid var(--light, #AD7955)",
    borderRadius: "8px",
    fontFamily: "Uto-600",
    margin: "0 auto",
    bg: "#111"
    }
  
  export const ButtonNext180 = Template.bind({})
  ButtonNext180.args = {
    width: "180px",
    text: "Next",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    fontFamily: "Uto-600",
    margin: "0 auto"
    }
  export const ButtonSwitcher = Template.bind({})
  ButtonSwitcher.args = {
    width: "168px",
    text: "Your video",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    fontFamily: "Uto-500",
    margin: "0 auto",
    bg: "#222"
    }
  export const ButtonAddVideo = Template.bind({})
  ButtonAddVideo.args = {
    width: "180px",
    text: "Add new video",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    fontFamily: "Uto-600",
    margin: "0 auto",
    img: Plus,
    columnGap: "10px"
    }
  
  export const ButtonSmall = Template.bind({})
  ButtonSmall.args = {
    width: "106px",
    text: "Save",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    fontFamily: "Uto-600",
    margin: "0 auto",
    }
  
  export const ButtonHeader = Template.bind({})
  ButtonHeader.args = {
    width: "120px",
    text: "Sign In",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    fontFamily: "Uto-600",
    margin: "0 auto",
    }
  export const ButtonSubscribe = Template.bind({})
  ButtonSubscribe.args = {
    width: "343px",
    text: "Subscribe",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    fontFamily: "Uto-600",
    margin: "0 auto",
    }
  export const ButtonUnSubscribe = Template.bind({})
  ButtonUnSubscribe.args = {
    width: "343px",
    text: "Unsubscribe",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    fontFamily: "Uto-600",
    margin: "0 auto",
    bg: "#653012"
    }
  
 
  