import { StrictMode } from "react";
import ReactDOM from "react-dom";

import App from "./App";
import Estado from "../Estado";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <App />
    <hr />
    <Estado />
  </StrictMode>,
  rootElement
);
