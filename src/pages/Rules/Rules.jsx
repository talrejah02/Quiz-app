import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import "./Rules.css"


function Rules() {
  const location = useLocation()
  return (
    <div className='page-container'>
        <div className='page-header flex-col justify-center align-center'>
        <p className='header-text'>Rules</p>
        </div>
        <div className='rules-list flex-col justify-center align-center'>
             <ol >
                 <li>This quiz consists of 5 multiple-choice questions.</li>
                 <li>Time alotted for the quiz : 20 minutes.</li>
                 <li>Points will be awarded : 2 points for each right answer.</li>
                 <li>Each multiple choice question has only one correct answer.</li>
                 <li>To start, click the Start Quiz button. When finished, click the Submit</li>
             </ol>
        <NavLink className="cart-btn rules-btn" to={ `/Quiz?categoryName=${location.search.split("=")[1]}`}>
          NEXT
        </NavLink>
        </div>
    </div>
  )
}

export default Rules