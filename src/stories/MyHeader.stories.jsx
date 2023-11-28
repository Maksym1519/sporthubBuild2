import React from "react";
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import Header from "../components/organisms/HeaderCreator";
import fonts from "../fonts.scss";
import Plus from "../images/Plus.svg";
import store from "../App/store";
import ava from "../images/ava24-2.svg";

export default {
  title: "Components/MyHeader",
  component: Header,
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

const Template = (args) => <Header {...args} />;

export const HeaderUnLogged = Template.bind({});
HeaderUnLogged.args = {};
export const HeaderLogged = Template.bind({});
HeaderLogged.args = {
  userData: ava,
};
