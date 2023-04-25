import { useCallback, useMemo, useState } from 'react'
import { questions } from '../../questions'

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

  const nextQuestion = useCallback(() => {
    const question = getQuestion()
    setQuestion(question)
    const answer = getAnswer()
    setAnswer(answer)
  }, [])

  const { phonetic, spelling } = useMemo(
    () => question[answer],
    [question, answer]
  )
  return {
    nextQuestion,
    phonetic,
    spelling,
    language: question.language,
    answer
  }
}
