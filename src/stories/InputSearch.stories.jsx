import React from "react";
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import InputSearch from '../components/atoms/InputSearchForStory'
import fonts from "../fonts.scss";
import store from "../App/store";

export default {
  title: "Components/MyInputSearch",
  component: InputSearch,
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

const Template = (args) => <InputSearch {...args} />;

export const MyInputSearch = Template.bind({});
MyInputSearch.args = {
   margin: "50%"
};

