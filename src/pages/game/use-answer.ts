import { useMemo } from 'react'
import { type Answer } from '../../types/answer'

type UseAnswer = {
  answer: Answer
  onCorrect: () => void
  onWrong: () => void
}

export const useAnswer = ({ answer, onCorrect, onWrong }: UseAnswer) => {
  const selectAnswer = (choice: typeof answer) => () => {
    answer === choice ? onCorrect() : onWrong()
  }

  const selectPlum = useMemo(() => selectAnswer('plum'), [answer])
  const selectPaper = useMemo(() => selectAnswer('paper'), [answer])

  return {
    selectPlum,
    selectPaper,
  }
}
