import { createContext } from "react";

import questions from '../data/questions'
import { useReducer } from "react";

const STAGES = ["Start", "Playing", "End"];

const initialState = {
    gameStage: STAGES[0],
    questions,
    currentQuestion: 0,
    score: 0,
    answerSelected: false,
    
}

const quizReducer = (state, action) =>{
    //console.log(state, action)

    switch(action.type){
        case "CHANGE_STATE":
            return {
                ...state,
                gameStage: STAGES[1],
            }

        case "REORDER_QUESTIONS":
            // eslint-disable-next-line no-case-declarations
            const reorderedQuestions = questions.sort(() => {
                return Math.random() - 0.5;
            });
            return {
                ...state,
                questions: reorderedQuestions,
            };

        case "CHANGE_QUESTION":
            // eslint-disable-next-line no-case-declarations
            const nextQuestion = state.currentQuestion + 1;
            // eslint-disable-next-line no-case-declarations
            let endGame = false

            if(!questions[nextQuestion ]){
                endGame = true;
            }

            return{
                ...state,
                currentQuestion : nextQuestion,
                gameStage: endGame ? STAGES[2] : state.gameStage,
                answerSelected: false,
            };

        case "CHECK_ANSWER":
            if(state.answerSelected) return state; //Para não ficar somando pontos infinitos
            // eslint-disable-next-line no-case-declarations
            const answer = action.payload.answer;
            // eslint-disable-next-line no-case-declarations
            const option = action.payload.option;
            // eslint-disable-next-line no-case-declarations
            let correctAnswer = 0;

            if(answer === option) correctAnswer = 1;
            return {
                ...state,
                score: state.score + correctAnswer,
                answerSelected: option,
            }
        
        case "NEW_GAME":
            return initialState;

        default:
            return state;
    }
}

export const QuizContext = createContext()

export const QuizProvider = ({children}) => {
    const value = useReducer(quizReducer, initialState); 

    return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>
}