import React from 'react'
import "./QuizCard.css"

function QuizCard() {
  return (
    <div className='quiz-card flex-col justify-center align-center'>
        <div className=""><span className='quiz-header'>How to delete a directory in Linux?</span></div>
        <div className='quiz-content flex-row justify-evenly '>
            <div className='content-items flex-row justify-center'>delete</div>
            <div className='content-items flex-row justify-center'>delete</div>
            <div className='content-items flex-row justify-center'>delete</div>
            <div className='content-items flex-row justify-center'>delete</div>
        </div>
    </div>
  )
}

export default QuizCard