import React from "react";
import { ReactDOM } from "react-dom";
import { lazy, Suspense } from "react";
import loadable from "@loadable/component";
import { BrowserRouter, Routes, Route, Link, Switch } from "react-router-dom";
import store from "./App/store";
import "./fonts.scss";
import "./style.scss";
const MainLazy = React.lazy(() => import("./components/pages/Main/Main"));
const UserLatestLazy = React.lazy(() => import("./components/pages/UserLatest/UserLatest"));
//---------------------------------------------------------
import { updateScreenWidth } from './features/headerSlice';
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
        <Link to="/UserLatest">UserLatest</Link>
        
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
          path="/UserLatest"
          element={
            <React.Suspense>
              <UserLatestLazy />
            </React.Suspense>
          }
        ></Route>

       
       </Routes>
    </>
  );
};
export default App;
