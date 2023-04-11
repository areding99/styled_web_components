import React from "react";
import ReactDOM from "react-dom/client";
import Library from "./Library/Library";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Library />
  </React.StrictMode>
);
