import { useState } from 'react'

export const useScore = () => {
  const [score, setScore] = useState(0)

  const increaseScore = () => {
    setScore((score) => score + 1)
  }

  const resetScore = () => {
    setScore(0)
  }

  return {
    score,
    increaseScore,
    resetScore,
  }
}
