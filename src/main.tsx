import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import {QuizProvider} from "./context/quiz"

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QuizProvider>
      <App />
    </QuizProvider>
  </React.StrictMode>,
)
