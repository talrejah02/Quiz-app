import React, {useState } from "react";
import { useQuiz } from "../../context/Quizcontext";
import "./QuizCard.css";

function QuizCard({ quizQuestion }) {
  const { answerDispatch } = useQuiz();
  const [answerState,setAnswer]=useState({
    answer_a:false,
    answer_b:false,
    answer_c:false,
    answer_d:false
  })
  const {answer_a,answer_b,answer_c,answer_d}=answerState
  

  
  return (
    <div className="quiz-card flex-col justify-center align-center">
      <div className="">
        <span className="quiz-header">{quizQuestion.question}</span>
      </div>
      <div className="quiz-content flex-row justify-evenly ">
        <div
          className={answer_a?"clicked content-items flex-row justify-center":"content-items flex-row justify-center"}
          onClick={() => {
            answerDispatch({
              type: "SCORE",
              payload: { answer: "answer_a", quizQuestion },
            });
            setAnswer({...answerState,answer_a:true})

          }}
        >
          {quizQuestion.answers.answer_a}
        </div>
        <div
          className={answer_b?"clicked content-items flex-row justify-center":"content-items flex-row justify-center"}
          onClick={() =>{

            answerDispatch({
              type: "SCORE",
              payload: { answer: "answer_b", quizQuestion },
            })
            setAnswer({...answerState,answer_b:true})
          }
          }
        >
          {quizQuestion.answers.answer_b}
        </div>
        <div
          className={answer_c?"clicked content-items flex-row justify-center":"content-items flex-row justify-center"}
          onClick={() =>{

            answerDispatch({
              type: "SCORE",
              payload: { answer: "answer_c", quizQuestion },
            })
            setAnswer({...answerState,answer_c:true})
          }
          }
        >
          {quizQuestion.answers.answer_c}
        </div>
        <div
          className={answer_d?"clicked content-items flex-row justify-center":"content-items flex-row justify-center"}

          onClick={() =>{
            answerDispatch({
              type: "SCORE",
              payload: { answer: "answer_d", quizQuestion },
            })
              setAnswer({...answerState,answer_d:true})
            }
          }
        >
          {quizQuestion.answers.answer_d}
        </div>
      </div>
    </div>
  );
}

export default QuizCard;
