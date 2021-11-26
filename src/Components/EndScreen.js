
import React, {useContext, useState} from "react";
import"../App.css";
import { Questions } from "../Helpers/QuestionBank";
 function EndScreen() {
    const {score ,setScore},setgameState= useContext(QuizContext);
   const RestartQuiz = () =>{
       setScore(0)
       setgameState("Menu");
   }
    return (
        <div className="EndScreen">
            {""}
            <h1>Quiz Finished</h1>
            <h3>
                {""}
                {score} /{Questions.length} {""}
            </h3>
        <button onClick= {RestartQuiz}>Restart Quiz</button>
        </div>
    )
}
