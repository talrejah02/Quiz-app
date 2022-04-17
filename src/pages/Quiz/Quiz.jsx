import React from 'react'
import QuizCard from '../../components/QuizCard/QuizCard'
import "./Quiz.css"
function Quiz() {
  return (
    <div className='page-container '>
       <div className='page-header flex-col flex-start'>
        <p className='quiz-header header-text'>Quiz</p>
       </div>
       <div className='underline'></div>
       <div className='quiz-container flex-row justify-center align-center '>
       <QuizCard/>
       <button class="btn btn-primary quiz-btn">NEXT</button>
       </div>
    </div>
  )
}

export default Quiz