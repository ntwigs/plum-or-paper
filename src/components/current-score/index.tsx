import { memo } from 'react'
import { Text } from '../text'

type Props = {
  score: number
  isVisible: boolean
}
export const CurrentScore = memo(
  ({ score }: Props) => <Text align="left">{score}</Text>,
  (previous) => previous.isVisible
)
