import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import CustomProviderComp from "./Components/Context-API-2/CustomProvider";

ReactDOM.render(
  <CustomProviderComp>
    <App />
  </CustomProviderComp>,
  document.getElementById("root")
);
