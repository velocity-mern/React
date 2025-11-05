import React from "react";
import ReactDOM from "react-dom/client";

const h1Tag = React.createElement(
  "h1",
  { id: "title" },
  "Hello, Welcome to React Js"
);

const h2Tag = React.createElement("h2", {}, "Lets Learn React");

const headingDiv = React.createElement("div", { id: "heading" }, [
  h1Tag,
  h2Tag,
]);

console.log(headingDiv);

const rootElement = document.getElementById("root");

const root = ReactDOM.createRoot(rootElement);
root.render(headingDiv);
