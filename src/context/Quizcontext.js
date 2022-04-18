import { createContext, useContext, useReducer, useState } from "react";
import { scoreReducer } from "../reducer/scoreReducer";

const Quizcontext=createContext()
const useQuiz=()=>useContext(Quizcontext)
const QuizProvider=({children})=>{
  const[quiz,setQuiz]=useState()
  const initialState={totalScore:0}
  const[state,answerDispatch]=useReducer(scoreReducer,initialState)
    return <Quizcontext.Provider value={{quiz,setQuiz,state,answerDispatch}}>{children}</Quizcontext.Provider>
}

export {useQuiz,QuizProvider}