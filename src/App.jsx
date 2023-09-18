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
const ForgotPasswordLazy = React.lazy(() => import("./components/pages/ForgotPassword/ForgotPassword"));
const CheckInboxLazy = React.lazy(() => import("./components/pages/CheckInbox/CheckInbox"));
const RestorePasswordLazy = React.lazy(() => import("./components/pages/RestorePassword/RestorePassword"));
const SubscribeUserLazy = React.lazy(() => import("./components/pages/Subscribe/Subscribe"));
const UserVideoPlayerLazy = React.lazy(() => import("./components/pages/UserVideoPlayer/UserVideoPlayer"));
//---------------------------------------------------------
import { updateScreenWidth } from './features/headerSlice';
import TestStrapi from "./components/pages/Test/Test";
window.addEventListener('resize', () => {
  const newScreenWidth = window.innerWidth;
  store.dispatch(updateScreenWidth(newScreenWidth));
});

//---------------------------------------------------------

const App = () => {
  return (
    <>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/SignIn">SignIn</Link>
        <Link to="/SignUp">SignUp</Link>
        <br></br>
        <Link to="/ForgotPassword">ForgotPassword</Link>
        <Link to="/CheckInbox">CheckInbox</Link>
        <Link to="/RestorePassword">RestorePassword</Link>
        <Link to="/Test">Test</Link>
        <Link to="/Subscribe">Subscribe</Link>
        <Link to="/UserVideoPlayer">UserVideoPlayer</Link>
        
         </nav>
      <Routes>
        <Route
          path="/"
          element={
            <React.Suspense>
              <MainLazy />
            </React.Suspense>
          }
        ></Route>
         <Route
          path="/SignIn"
          element={
            <React.Suspense>
              <SignInLazy />
            </React.Suspense>
          }
        ></Route>
        <Route
          path="/SignUp"
          element={
            <React.Suspense>
              <SignUpLazy />
            </React.Suspense>
          }
        ></Route>
        <Route
          path="/ForgotPassword"
          element={
            <React.Suspense>
              <ForgotPasswordLazy />
            </React.Suspense>
          }
        ></Route>
        <Route
          path="/CheckInbox"
          element={
            <React.Suspense>
              <CheckInboxLazy />
            </React.Suspense>
          }
        ></Route>
        <Route
          path="/RestorePassword"
          element={
            <React.Suspense>
              <RestorePasswordLazy />
            </React.Suspense>
          }
        ></Route>
        <Route
          path="/Test"
          element={
            <React.Suspense>
              <TestStrapi />
            </React.Suspense>
          }
        ></Route>
        <Route
          path="/Subscribe"
          element={
            <React.Suspense>
              <SubscribeUserLazy />
            </React.Suspense>
          }
        ></Route>
        <Route
          path="/UserVideoPlayer"
          element={
            <React.Suspense>
              <UserVideoPlayerLazy />
            </React.Suspense>
          }
        ></Route>

       
       </Routes>
    </>
  );
};
export default App;
