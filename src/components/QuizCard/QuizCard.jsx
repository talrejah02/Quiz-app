import React from 'react'
import { useQuiz } from '../../context/Quizcontext'
import "./QuizCard.css"

function QuizCard({quizQuestion}) {
  const{answerDispatch}=useQuiz()
  console.log(quizQuestion)
  return (
    <div className='quiz-card flex-col justify-center align-center'>
        <div className=""><span className='quiz-header'>{quizQuestion.question}</span></div>
        <div className='quiz-content flex-row justify-evenly '>
            <div className='content-items flex-row justify-center' onClick={()=>answerDispatch({type:"SCORE",payload:{answer:"answer_a",quizQuestion}})} >{quizQuestion.answers.answer_a}</div>
            <div className='content-items flex-row justify-center' onClick={()=>answerDispatch({type:"SCORE",payload:{answer:"answer_b",quizQuestion}})}>{quizQuestion.answers.answer_b}</div>
            <div className='content-items flex-row justify-center'onClick={()=>answerDispatch({type:"SCORE",payload:{answer:"answer_c",quizQuestion}})}>{quizQuestion.answers.answer_c}</div>
            <div className='content-items flex-row justify-center'onClick={()=>answerDispatch({type:"SCORE",payload:{answer:"answer_d",quizQuestion}})}>{quizQuestion.answers.answer_d}</div>
        </div>
    </div>
  )
}

export default QuizCard