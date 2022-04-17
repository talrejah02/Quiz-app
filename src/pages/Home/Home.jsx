import React from 'react'
import CategoryCards from '../../components/QuizCategory/CategoryCards'
import "./home.css"
function Home() {
  return (
    <div className='page-container flex-col  align-center'>
      <div className='page-header flex-col justify-center align-center'>
        <p className='header-text'>QUIZ APP</p>
        <div className='underline'></div>
        </div>
      <div className='category-container flex-col  align-center'>
        <div className='category-header'><p className='category-header-text header-text'> Featured Categories </p></div>
        <div className='flex-row gap-col-1'>
         <CategoryCards/>
         <CategoryCards/>
        </div>
      </div>
    </div>
  )
}

export default Home