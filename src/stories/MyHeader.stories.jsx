import React from "react";
import {Header} from "../components/organisms/HeaderCreator"
import fonts from '../fonts.scss';


export default {
    title: "Components/MyHeader",
    component: Header,
    };
  
  const Template = args => <Header {...args}/>
  
  
  export const HeaderLogged = Template.bind({})
  HeaderLogged.args = {
    margin: "0 auto"
    }
  