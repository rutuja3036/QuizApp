import logo from './logo.svg';
import './App.css';
import React,{useState,QuizContext} from "react";
import MainMenu from './Components/MainMenu';
import Quiz from './Components/Quiz';
import EndScreen from './Components/EndScreen';
import { QuizContext } from './Helpers/Contexts';
function App() {
  const [gameState, setgameState] = useState("menu");

  return (
    <div className="App">
      <h1>Quiz App</h1>
      <QuizContext.Provider value ={{ gameState,setgameState}}>
     {gameState==="Menu" && <MainMenu/>} 
     {gameState==="quiz" && <Quiz/>} 
     {gameState==="endScreen" && <EndScreen/>} 
     </QuizContext.Provider>
    </div>
  );
}

export default App;
