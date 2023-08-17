import React from "react";

function Prompt(props){
    
    return <div className="container-fluid p-4 shadow rounded">
            <span className="typed">{props.typed.join(" ")}</span> 
            <span style={{color: "color: #0dcaf0"}}> {props.prompt[props.cursor]}</span> 
            <span className="to-type"> {props.toType.join(" ")}</span>        
    </div>
}

export default Prompt;

