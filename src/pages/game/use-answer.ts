import { useMemo } from 'react'

export const useAnswer = ({ answer, onCorrect, onWrong }) => {
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
