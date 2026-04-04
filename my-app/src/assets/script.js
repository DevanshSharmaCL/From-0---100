import React from "react";
import ReactDOM from "react-dom/client";


let h1 = React.createElement("h1",null,"this is bs")

let container = document.querySelector('#root')

let root = ReactDOM.createRoot(container)

root.render(h1)