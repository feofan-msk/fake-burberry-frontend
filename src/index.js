import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import registerServiceWorker from "./registerServiceWorker";
import App from "./App";
import "normalize.css";
import "flexboxgrid2";
import { IntlProvider, addLocaleData } from "react-intl";
import ruLocaleData from "react-intl/locale-data/ru";

addLocaleData(ruLocaleData);

ReactDOM.render(
  <IntlProvider locale="ru">
    <App />
  </IntlProvider>,
  document.getElementById("root")
);
registerServiceWorker();
