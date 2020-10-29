import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import EventEmitter from "./ee";
import { Loader } from "./generic/Loader";
export const emitter = new EventEmitter();
if (document.readyState === "loading") {
  Loading();
  document.addEventListener("DOMContentLoaded", startup);
} else {
  startup();
}

function startup() {
  ReactDOM.render(
    <React.StrictMode>
      <App pathArr={window.location.pathname.split("/").slice(1)} />
    </React.StrictMode>,
    document.getElementById("root")
  );
}
function Loading() {
  ReactDOM.render(
    <React.StrictMode>
      <Loader />
    </React.StrictMode>,
    document.getElementById("root")
  );
}
