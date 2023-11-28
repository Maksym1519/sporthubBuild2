import React from "react";
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import Input from '../components/atoms/InputForStory'
import fonts from "../fonts.scss";
import store from "../App/store";

export default {
  title: "Components/MyInput",
  component: Input,
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

const Template = (args) => <Input {...args} />;

export const MyInput = Template.bind({});
MyInput.args = {
    text: "Your email",
    margin: "50%"
};

