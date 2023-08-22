import React from "react";
import ReactDOM from "react-dom/client";
import RoutingComponent from "./routing-component";

import "./global.css";
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RoutingComponent />
  </React.StrictMode>
);
