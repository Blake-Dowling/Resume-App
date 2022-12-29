import React from "react"
import ReactDOM from "react-dom"
import "./style.css"
import Heading from "./components/Heading.js"
import Education from "./components/Education.js"

function App(){
    return(
        <div className="page">
            <Heading/> 
            <Education/>

        </div>
    )
}

ReactDOM.render(<App/>, document.getElementById("root"))