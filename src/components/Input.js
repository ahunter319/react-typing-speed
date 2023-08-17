import React, {useState} from "react";

function Input(props){
    let [enteredWord, setEnteredWord] = useState("");
    let [isCorrect, setIsCorrect] = useState(true);

    function checkInput(event) {
        let isCorrectLetter = true;
        const word = event.target.value.trim();
        setEnteredWord(word);
        const currentWord = props.prompt[props.cursor];

        for(let i = 0; i < word.length; i++){
          console.log("compare: " + word[i] + " to: " + currentWord[i]);
          if(word[i] !== currentWord[i]){
            isCorrectLetter = false;
          }
        };
        setIsCorrect(isCorrectLetter);
      }

    function submit(event){
        let key = event.keyCode || event.which;
        if (key === 13 || key === 32) {
            props.submit(enteredWord);
            setEnteredWord(() => "");
        }
    }

return <div className="d-flex justify-content-center align-items-center p-4">
    <input 
        className="shadow"
        name="typingInput" 
        onKeyUp={submit} 
        onChange={checkInput} 
        type="text" 
        placeholder={props.prompt[props.cursor]} 
        value={enteredWord} 
        style={{color: isCorrect ? "#099cba" : "#d30856"}} 
        autoFocus 
        disabled={props.gameOn}>
    </input>
</div>
}

export default Input;