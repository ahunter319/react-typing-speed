import React, {useState} from "react";
import {generate} from "random-words";
import ScoreBoard from "./components/ScoreBoard";
import Prompt from "./components/Prompt";
import Input from "./components/Input";
import SideBar from "./components/SideBar";
import "./styles.css";


const NUMBER_OF_WORDS = 200;
const SECONDS = 60;

function App() {
  let [words, setWords] = useState(generateWords());
  let [currentWordIndex, setCurrentWordIndex] = useState(0);
  let [typedWords, setTypedWords] = useState([]);
  let [toTypeWords, setToTypeWords] = useState(words.slice(currentWordIndex + 1, words.length));
  let [score, setScore] = useState(0);
  let [countDown, setCountDown] = useState(SECONDS);
  let [isGameOver, setIsGameOver] = useState(false);
  let [hasNotPlayed, setHasNotPlayed] = useState(true);
  let [isDarkMode, setIsDarkMode] = useState(true);

  function generateWords() {
    return new Array(NUMBER_OF_WORDS).fill(null).map(() => generate());
  }

  function start(){
    setHasNotPlayed(false);
    let interval = setInterval(()=> {
      setCountDown((prevCountDown) => {
        if(prevCountDown === 0){
          clearInterval(interval);
          setIsGameOver(true);
        } else {
          return prevCountDown - 1
        }
      })
    }, 1000)
  }

  function resetGame(){
    window.location.reload();
  }

  function changeTheme() {
    setIsDarkMode((prevMode) => !prevMode);
  }

  function updateTyped(){
    setTypedWords(words.slice(0, currentWordIndex + 1));
  };

  function updateToType(){
    setToTypeWords(words.slice(currentWordIndex + 2, words.lenth));
  };

  function updateCurrentWordIndex(){
    setCurrentWordIndex((prevCurrentWordIndex) => prevCurrentWordIndex + 1);
  }

  function submitInput(checkWord){
    if(checkWord.trim() === words[currentWordIndex]){
        setScore((prevScore) => prevScore + 1);
      }
      updateCurrentWordIndex();
      updateTyped();
      updateToType();
    }

  return (
    <div className={isDarkMode ? "app container-fluid": "app light container-fluid"} onKeyDown={()=> {
      if(hasNotPlayed){start()}}}>
      <div className="row row-cols-lg-2 row-cols-xs-1 w-100 m-0">
        <div className="col-lg-2 p-0">
          <SideBar resetGame={resetGame} setMode={changeTheme} mode={isDarkMode}/>
        </div>
        <div className="col-lg-10">
          <ScoreBoard countDown={countDown} score={score} startedFlag={hasNotPlayed} resetGame={resetGame}/>
          <Prompt prompt={words} cursor={currentWordIndex} typed={typedWords} toType={toTypeWords}/>
          <Input prompt={words} cursor={currentWordIndex} submit={submitInput} gameOn={isGameOver} />
        </div>
      </div>
      
      
    </div>
  );
}

export default App;
