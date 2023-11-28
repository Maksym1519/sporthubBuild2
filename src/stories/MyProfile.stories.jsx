import React from "react";
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import Profile from '../components/organisms/HeaderProfileStory';
import fonts from "../fonts.scss";
import store from "../App/store";


export default {
  title: "Components/MyProfile",
  component: Profile,
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

const Template = (args) => <Profile {...args} />;

export const ProfileUnlogged = Template.bind({});
ProfileUnlogged.args = {
    margin: "50%"
};
