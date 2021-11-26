import React, { useContext, useState ,} from 'react'
import { Questions } from '../Helpers/QuestionBank';
import {QuizContext} from "../Helpers/QuestionBank";
 
 function Quiz() {
    const { score,setScore,setgameStart} =useContext(QuizContext);
   const [currQuestion,setCurrQuestion] = useState (0);
   const [optionChosen,,setOptionChosen] = useState ("");
   const nextQuestion = () =>{
if (Questions[currQuestion].answer == optionChosen) {
setScore(score +1);
}
alert(score);
setCurrQuestion(currQuestion +1 );
   };
   const finishQuiz = () => {
    if (Questions[currQuestion].answer == optionChosen) {
        setScore(score +1);
    }
    setGameState("endScreen");
   };
    return (
    <div className="Quiz">
       
<h1>{Questions[currQuestion].prompt}</h1>
        <div className = "Options">
            
            <button on Click={() => setOptionChosen("A")}>
                {Questions[currQuestion].optionA}{""}
            </button>
            
            <button on Click={() => setOptionChosen("B")}>
                {Questions[currQuestion].optionA}{""}
            </button>
            
            <button on Click={() => setOptionChosen("C")}>
                {Questions[currQuestion].optionA}{""}
            </button>
            
            <button on Click={() => setOptionChosen("D")}>
                {Questions[currQuestion].optionA}{""}
            </button>
</div>
{ currQuestion == Questions.length -1 ?(
<button onClick ={}>Finish Quiz</button>
) :(




    <button onClick = {nextQuestion}> Next Question</button>
)} 
    </div>   
    );
}
export default Quiz;