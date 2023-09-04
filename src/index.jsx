import React from "react";
import { render } from 'react-dom'
import * as ReactDOM from "react-dom";
import { BrowserRouter, HashRouter } from "react-router-dom";
import App from "./App";
import "./style.scss";
import store from './App/store';
import { legacy_createStore as createStore } from "redux";
import { Provider } from "react-redux";



ReactDOM.render(
   <HashRouter>
  <Provider store={store}>
    <App />
    </Provider>,
   </HashRouter>,
  document.getElementById("root")
);

// import { createRoot } from 'react-dom/client';
// const container: any = document.getElementById('root');
// const root = createRoot(container);
// root.render(<App tab="home" />);
