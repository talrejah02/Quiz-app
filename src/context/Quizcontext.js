import { createContext, useContext, useEffect, useReducer, useState } from "react";
import { scoreReducer } from "../reducer/scoreReducer";
import axios from "axios"
import { useLocation } from "react-router-dom";

const Quizcontext=createContext()
const useQuiz = () => useContext(Quizcontext)
const QuizProvider = ({ children }) => {
  const location = useLocation()
  console.log(location.search.split("=")[1])
  const [quiz, setQuiz] = useState([])
  const Quiz_key=process.env.REACT_APP_QUIZ_KEY
  useEffect(() => {
    if (quiz.length <= 0) {
      (async () => {
        const response = await axios.get(`https://quizapi.io/api/v1/questions?apiKey=${Quiz_key}&category=${location.search.split("=")[1]}&difficulty=Easy&limit=5`)
        setQuiz(response.data)
      })();  
    }
  },[quiz])
  const initialState={totalScore:0}
  const[state,answerDispatch]=useReducer(scoreReducer,initialState)
    return <Quizcontext.Provider value={{quiz,setQuiz,state,answerDispatch}}>{children}</Quizcontext.Provider>
}

export {useQuiz,QuizProvider}