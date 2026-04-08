import React from 'react'
import Box from './box.js'
import Circle from './circle.js'

const Root = ReactDOM.createRoot(document.querySelector("#root"))
// way 1 
// Root.render(
//     React.createElement('div',null,
//         React.createElement(Box),
//         React.createElement(Circle)
//     )
// )

// way 2
const parent = React.createElement('div',null,[Box(),Circle()])

Root.render(parent())