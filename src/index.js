import React from "react";
import ReactDOM from "react-dom";

const fName = "Roman";
const lName = "Lisyuk";
let cYear = new Date().getFullYear();
const img = "https://picsum.photos/200";

ReactDOM.render(
  <div>
    <h1 className="heading">What's up with you?</h1>
    <p>Created by {`${fName} ${lName}`}</p>
    <p>&copy; {cYear}</p>
    <br />
    <h1></h1>
    <ul>
      <li>one one one one</li>
      <li>two two two two</li>
      <li>three three three</li>
    </ul>
    <div>
      <img scr={`img + "?grayscale"`} />
    </div>
  </div>,
  document.getElementById("root")
);
