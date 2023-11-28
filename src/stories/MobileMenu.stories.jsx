import React from "react";
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import MobileMenu from '../components/molecules/MobileMenu';
import fonts from "../fonts.scss";
import store from "../App/store";

export default {
  title: "Components/MyMobileMenu",
  component: MobileMenu,
  decorators: [
    (Story) => (
      <Provider store={store}>
        <MemoryRouter>
          <Story />
        </MemoryRouter>
      </Provider>
    ),
  ],
  parameters: {
    viewport: {
      defaultViewport: "mobile", 
    },
  },
};

const Template = (args) => <MobileMenu {...args} />;

export const MobileMenuUnlogged = Template.bind({});
MobileMenuUnlogged.args = {
   
};
