import React from "react";
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import CategorySlider from '../components/pages/Main/CategorySliderForStory';
import VideoSlider from "../components/organisms/VideoSlider";
import Ava from '../images/ava24-4.svg';
import fonts from "../fonts.scss";
import store from "../App/store";

export default {
  title: "Components/MyCategorySlider",
  component: CategorySlider,
  decorators: [
    (Story) => (
      <Provider store={store}>
        <MemoryRouter>
          <Story />
        </MemoryRouter>
      </Provider>
    ),
  ],
};

const Template = (args) => <CategorySlider {...args} />;
const Template2 = (args) => <VideoSlider {...args} />;

export const MyCategorySlider = Template.bind({});
MyCategorySlider.args = {
  width: "100vw"
};
export const MyVideoSlider = Template2.bind({});
MyVideoSlider.args = {
    videoUrl: ["https://res.cloudinary.com/duk3bewdr/video/upload/v1700752839/video4_5da6b35538.mp4"],
    update: ["01.01.2013","01.01.2013","01.01.2013","01.01.2013","01.01.2013","01.01.2013","01.01.2013","01.01.2013"],
    avatars: [Ava,Ava,Ava,Ava,Ava,Ava,Ava,Ava],
    fileNames: ["sport","box","football","bickes","sport","box","football","bickes"],
    usersName: ["Maksym","Marina","Jhon","Igor","Maksym","Marina","Jhon","Igor"],
    link: ["https://res.cloudinary.com/duk3bewdr/video/upload/v1700752839/video4_5da6b35538.mp4","https://res.cloudinary.com/duk3bewdr/video/upload/v1700752963/video5_63b835c0c7.mp4","https://res.cloudinary.com/duk3bewdr/video/upload/v1700753199/video1_a6f43d4018.mp4","https://res.cloudinary.com/duk3bewdr/video/upload/v1700753391/video2_8f98a84f65.mp4","https://res.cloudinary.com/duk3bewdr/video/upload/v1700752839/video4_5da6b35538.mp4","https://res.cloudinary.com/duk3bewdr/video/upload/v1700752963/video5_63b835c0c7.mp4","https://res.cloudinary.com/duk3bewdr/video/upload/v1700753199/video1_a6f43d4018.mp4","https://res.cloudinary.com/duk3bewdr/video/upload/v1700753391/video2_8f98a84f65.mp4"],
    propsTime: ["01.01.2013","01.01.2013","01.01.2013","01.01.2013","01.01.2013","01.01.2013","01.01.2013","01.01.2013"]
};

