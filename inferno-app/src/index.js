import * as serviceWorker from "./serviceWorker";

import ReactDOM from "inferno-compat";
import Framework7 from "framework7/framework7.esm.bundle.js";
import Framework7React from "framework7-react";
import "./index.css";

import App from "cerebral";
import AppComponent from "./App";
import Devtools from "cerebral/devtools";
import { Container } from "@cerebral/inferno";

import main from "./main";

const app = App(main, {
  devtools: Devtools({ host: "localhost:7777" })
});

Framework7.use(Framework7React);

ReactDOM.render(
  <Container app={app}>
    <AppComponent />
  </Container>,
  document.getElementById("root")
);


// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register();
