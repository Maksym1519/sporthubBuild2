import React from "react";
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import Video from "../components/molecules/Video";
import VideoUser from "../components/molecules/VideoUser";
import fonts from "../fonts.scss";
import store from "../App/store";
import Ava from '../images/ava24-1.svg'

export default {
  title: "Components/MyVideo",
  component: Video,
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

const Template = (args) => <Video {...args} />;
const Template2 = (args) => <VideoUser {...args} />;

export const MyVideo = Template.bind({});
MyVideo.args = {
    margin: "50%",
    videoUrl: "https://res.cloudinary.com/duk3bewdr/video/upload/v1700725915/video3_1be0897e6e.mp4",
    index: 0,
    update: ["01.01.2013"]
};

export const MyVideoUser = Template2.bind({});
MyVideoUser.args = {
    margin: "50%",
    videoUrl: "https://res.cloudinary.com/duk3bewdr/video/upload/v1700752839/video4_5da6b35538.mp4",
    index: 0,
    update: ["01.01.2013"],
    avatar: Ava,
    fileName: "box"
};

