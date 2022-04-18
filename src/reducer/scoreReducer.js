
export const scoreReducer=(state,action)=>{
    const answer= action.payload.answer +"_correct"
    const correct_answers = action.payload.quizQuestion.correct_answers
    console.log(state)
   switch(action.type){
       case "SCORE": 
          if( correct_answers[answer]){
              return {...state,totalScore:state.totalScore+1}
          }
         break;
         default:
             return 0
   }
   
}