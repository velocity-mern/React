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

//JSX(code) => React.createElement => Object => HTML Element



const TitleComponent = () => {
  return <h1 id="title">MERN STACK DEVELOPMENT</h1>;
};



// ReactElemenet
const H2Tag = (
  <div>
    <TitleComponent />
    <h1 id="title">Hello, Welcome to React Js with JSX</h1>
  </div>
);

console.log("h2Tag", H2Tag);

//component
// 1. functional based component => using function => new way of creating compnent
// 2. class based component => class => older way of creating compnent

//functional based component => it just function which return jsx


const HeadingComponent = function () {
  return (
    <div>
      
      <TitleComponent /> 
      <TitleComponent> </TitleComponent>  
      {TitleComponent()}

      { H2Tag }
      { console.log("hey there, I am from console") }
      <h1 id="title">We are here to learn Mern Stack Development</h1>
    </div>
  );
};

const rootElement = document.getElementById("root");

const root = ReactDOM.createRoot(rootElement);
root.render(<HeadingComponent />);
