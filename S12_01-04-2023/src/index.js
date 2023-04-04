import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import CustomProviderComp from "./Components/Context-API-2/CustomProvider";

ReactDOM.render(
  <BrowserRouter>
    <CustomProviderComp>
      <App />
    </CustomProviderComp>
  </BrowserRouter>,
  document.getElementById("root")
);
