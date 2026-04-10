const app = React.createElement("main",null,
    React.createElement('section',null,
        React.createElement('div',{className:"card"},"card",
            React.createElement('div',{className:"img-container"},"img-cont", 
                React.createElement('img',null)
            ),
            React.createElement('div',null,"this is div"),
        )
    )
) 

const root = ReactDOM.createRoot(document.querySelector(".root"))

root.render(app)