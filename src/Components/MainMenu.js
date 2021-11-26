import React, { useContext } from 'react';
import { QuizContext } from '../Helpers/Contexts';
import"../App.css";
export default function MainMenu() {
  const {gamestate,SetgameState}= useContext(QuizContext);
    return 
    (
    <div className ="Menu">
        <button> 
            onClick={() =>{
                SetgameState("quiz");
            }}
            
            Start Quiz
        </button>
        
        
         </div>
    );
    
}
