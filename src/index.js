//Create a react app from scratch.
//It should display 2 paragraph HTML elements.
//The paragraphs should say:
//Created by YOURNAME.
//Copyright CURRENTYEAR.
//E.g.
//Created by Angela Yu.
//Copyright 2019.
import React from "react";
import ReactDOM from "react-dom";

const fName = "Roman";
const lName = "Lisyuk";
const num = Math.floor(Math.random() * 10);
let cYear = new Date().getFullYear();

ReactDOM.render(
  <div>
    <h1>What's up with you?</h1>
    <p>
      Created by {`${fName} ${lName}`} &copy; {cYear}
    </p>
    <p></p>
  </div>,
  document.getElementById("root")
);
