import React from "react";
import { useQuiz } from "../../context/Quizcontext";
import "./dashboard.css";

function Dashboard() {
  const { quiz,state } = useQuiz();
  
  return (
    <div className="page-container ">
      <div className="page-header flex-col flex-start">
        <p className="quiz-header header-text">DASHBOARD</p>
      </div>
      <div className="underline"></div>
      <div className="dashboard-display flex-row justify-evenly align-center">
        <div className="display-question flex-col ">
          {quiz.map((item) => {
              
            return (
              <div className="question-container">
                <p className="question">{item.question}</p>
                <p className="answer">Answer:
                  {item.answers[item.correct_answer]}
                </p>
              </div>
            );
          })}
        </div>
        <p className="score">score:{state.totalScore}</p>
        <div></div>
      </div>
    </div>
  );
}

export default Dashboard;
