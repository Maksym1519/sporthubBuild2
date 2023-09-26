import React from "react";
import { ReactDOM } from "react-dom";
import { lazy, Suspense } from "react";
import loadable from "@loadable/component";
import { BrowserRouter, Routes, Route, Link, Switch } from "react-router-dom";
import store from "./App/store";
import "./fonts.scss";
import "./style.scss";
const MainLazy = React.lazy(() => import("./components/pages/Main/Main"));
const SignInLazy = React.lazy(() => import("./components/pages/SignIn/SignIn"));
const SignUpLazy = React.lazy(() => import("./components/pages/SignUp/SignUp"));
const ForgotPasswordLazy = React.lazy(() =>
  import("./components/pages/ForgotPassword/ForgotPassword")
);
const CheckInboxLazy = React.lazy(() =>
  import("./components/pages/CheckInbox/CheckInbox")
);
const RestorePasswordLazy = React.lazy(() =>
  import("./components/pages/RestorePassword/RestorePassword")
);
const SubscribeUserLazy = React.lazy(() =>
  import("./components/pages/Subscribe/Subscribe")
);
const UserVideoPlayerLazy = React.lazy(() =>
  import("./components/pages/UserVideoPlayer/UserVideoPlayer")
);
const SignInCreatorLazy = React.lazy(() =>
  import("./components/pages/SignInCreator/SignInCreator")
);

//---------------------------------------------------------
import { updateScreenWidth } from "./features/headerSlice";
import TestStrapi from "./components/pages/Test/Test";
window.addEventListener("resize", () => {
  const newScreenWidth = window.innerWidth;
  store.dispatch(updateScreenWidth(newScreenWidth));
});

//---------------------------------------------------------
const Navigation = () => {
  return (
    <>
      <nav class='navLinks__wrapper'>
        <div class='navLink'><Link to="/">Home</Link></div>
        <div class='navLink'><Link to="/SignIn">SignIn</Link></div>
        <div class='navLink'><Link to="/SignUp">SignUp</Link></div>
        <div class='navLink'><Link to="/SignInCreator">SignUpCreator</Link></div>
        <div class='navLink'><Link to="/ForgotPassword">ForgotPassword</Link></div>
        <div class='navLink'><Link to="/CheckInbox">CheckInbox</Link></div>
        <div class='navLink'><Link to="/RestorePassword">RestorePassword</Link></div>
        <div class='navLink'><Link to="/Test">Test</Link></div>
        <div class='navLink'><Link to="/Subscribe">Subscribe</Link></div>
        <div class='navLink'><Link to="/UserVideoPlayer">UserVideoPlayer</Link></div>
        <div class='navLink'><Link to="/ProfileCreator">ProfileCreator</Link></div>
        <div class='navLink'><Link to="/ProfileCreatorFilled">ProfileCreatorFilled</Link></div>
        <div class='navLink'><Link to="/VideoCreator">VideoCreator</Link></div>
        <div class='navLink'><Link to="/SignInCreator">SignInCreator</Link></div>
      </nav>
       </>
  );
};
export default Navigation;
