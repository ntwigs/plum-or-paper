import { useEffect } from 'react'
import { Text } from '../text'
import { useHighscore } from '../../hooks/use-highscore'

type Props = {
  score: number
}
export const Highscore = ({ score }: Props) => {
  const { highscore, storeHighscore } = useHighscore()

  useEffect(() => {
    storeHighscore({ score })
  }, [])

  return <Text align="right">{highscore}</Text>
}
