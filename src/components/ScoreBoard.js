import React from "react";

function ScoreBoard(props){

    return <div className="container-fluid justify-content-center align-items-center p-4">
        <h1>{props.countDown > 10 ? "00:" + props.countDown : "00:0" + props.countDown}</h1> 
        <h1>{"Score: " + props.score + " wpm"}</h1>
    </div>
    
}

export default ScoreBoard;
