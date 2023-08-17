import React from "react";

function ScoreBoard(props){

    let displayTime = props.countDown >= 10 ? "00:" + props.countDown : "00:0" + props.countDown; 
    return <div className="container-fluid justify-content-center align-items-center p-4">
        <h1>{props.countDown > 0 ? displayTime : "Score: " + props.score + " wpm"}</h1> 
    </div>
    
}

export default ScoreBoard;
