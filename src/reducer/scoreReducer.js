
export const scoreReducer=(state,action)=>{
    const answer= action.payload.answer +"_correct"
    const correct_answers = action.payload.quizQuestion.correct_answers
    switch(action.type){
        case "SCORE": 
        console.log(state)
       if (correct_answers[answer] === "true") {
              return {...state,totalScore:state.totalScore+1}
          }
         return state;
         default:
             return 0
   }
   
}