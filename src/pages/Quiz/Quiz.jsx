import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import QuizCard from '../../components/QuizCard/QuizCard'
import { useQuiz } from '../../context/Quizcontext'
import "./Quiz.css"
function Quiz() {
  const navigate = useNavigate()
  const[questionCounter,setCounter]=useState(0)
  const[displayState,setDisplay]=useState(true)

  const {quiz}=useQuiz()
  const nextClick=async()=>{
    if(questionCounter === 4){
      setCounter(0)
      navigate("/dashboard")
    }
    const res = await setCounter((questionCounter)=>questionCounter+1)
    setDisplay(true)
  }
  return (
    <div className='page-container '>
       <div className='page-header flex-col flex-start'>
        <p className='quiz-header header-text'>Quiz</p>
       </div>
       <div className='underline'></div>
       <div className='quiz-container flex-row justify-center align-center '>
         {displayState&&<QuizCard quizQuestion={quiz[questionCounter]} />
         }
       <button className="btn btn-primary quiz-btn" onClick={()=>nextClick()}>NEXT</button>
       </div>
    </div>
  )
}

export default Quiz