import React from "react";
import "./CategoryCards.css";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios"
import { useQuiz } from "../../context/Quizcontext";

function CategoryCards({categoryName}) {
  const Quiz_key=process.env.REACT_APP_QUIZ_KEY
  const navigate = useNavigate()
  const {setQuiz} = useQuiz()
  const clickHandler=async()=>{
    const response = await axios.get(`https://quizapi.io/api/v1/questions?apiKey=${Quiz_key}&category=${categoryName}&difficulty=Easy&limit=5`)
    setQuiz(response.data)
    console.log(response.data)
    navigate(`/Rules?categoryName=${categoryName}`)
  }  
  return (
    <section className="card shadow">
      <img className="card-img" src="Images/cloud.jpg" alt="" />
      <section className="card-description">
        <section className="card-detail">
          <span className="card-title">{categoryName}</span>
        </section>
        <NavLink className="cart-btn" to="" onClick={()=>clickHandler()}>
          Play Now
        </NavLink>
      </section>
    </section>
  );
}

export default CategoryCards;
