import { memo } from 'react'
import { Text } from '../text'

type ScoreProps = {
  score: number
  isVisible: boolean
}
export const CurrentScore = memo(
  ({ score }: ScoreProps) => <Text align="left">{score}</Text>,
  (previous) => previous.isVisible
)
