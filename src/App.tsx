import { useContext } from 'react';
import { useEffect } from 'react';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import { QuizContext } from './context/quiz';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import Welcome from './components/Welcome';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import Question from './components/Question';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import GameOver from './components/GameOver';


import './App.css'

function App() {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
  const [quizState, dispatch] = useContext(QuizContext);

  useEffect(() => {
    //Embaralhar pergunta
    dispatch({type: "REORDER_QUESTIONS"});
  }, []);

  return (
    <div className='App'>
      <h1>Quizz de programação</h1>
      {quizState.gameStage === "Start" && <Welcome />}
      {quizState.gameStage === "Playing" && <Question />}
      {quizState.gameStage === "End" && <GameOver />}
    </div>
  )
}

export default App
