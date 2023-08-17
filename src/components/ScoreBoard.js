import React from "react";

function ScoreBoard(props){

    return <div className="container-fluid justify-content-center align-items-center p-4">
        <h1>{props.countDown > 0 ? "00:" + props.countDown : "Score: " + props.score + " wpm"}</h1>
    </div>
    
}

export default ScoreBoard;
