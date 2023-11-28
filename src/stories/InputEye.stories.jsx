import React from "react";
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import InputEye from '../components/atoms/InputEyeForStory'
import fonts from "../fonts.scss";
import store from "../App/store";

export default {
  title: "Components/MyInputEye",
  component: InputEye,
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

const Template = (args) => <InputEye {...args} />;

export const MyInputEye = Template.bind({});
MyInputEye.args = {
    text: "Your email",
    margin: "50%"
};

