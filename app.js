import React from "react";
import ReactDOM from "react-dom/client";

// ReactElemenet => Object => HTML Element
const h1Tag = React.createElement(
  "h1",
  { id: "title" },
  "Hello, Welcome to React Js"
);

console.log("h1Tag", h1Tag);

// JSX // traspiling the code by PARCEL => Babel

//JSX(code) => React.createElement => Object =>HTML Element

// ReactElemenet
const h2Tag = (
  <div>
    <h1 id="title">Hello, Welcome to React Js with JSX</h1>
  </div>
);

console.log("h2Tag", h2Tag);

//component
// 1. functional based component => using function => new way of creating compnent
// 2. class based component => class => older way of creating compnent

//functional based component => it just function which return jsx

const HeadingComponent = () => {
  return (
    <h1 id="title">
      Hello, Welcome to React Js with JSX in Functional component
    </h1>
  );
};

const HeadingComponent2 = () => (
  <div>
    <h1 id="title"> this is only for testing purpose</h1>
  </div>
);

const rootElement = document.getElementById("root");

const root = ReactDOM.createRoot(rootElement);
root.render(<HeadingComponent2 />);
