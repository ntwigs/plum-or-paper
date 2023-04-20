import { useState } from 'react'
import { questions } from '../questions'

const getQuestion = () => {
  return questions[Math.floor(Math.random() * questions.length)]
}

const getAnswer = () => {
  return Math.floor(Math.random() * 2) > 0 ? 'plum' : 'paper'
}

export const useQuestion = () => {
  const initialQuestion = getQuestion()
  const [question, setQuestion] = useState(initialQuestion)
  const initialAnswer = getAnswer()
  const [answer, setAnswer] = useState<typeof initialAnswer>(initialAnswer)

  const nextQuestion = () => {
    const question = getQuestion()
    setQuestion(question)
    const answer = getAnswer()
    setAnswer(answer)
  }

  return {
    question,
    answer,
    nextQuestion,
  }
}
