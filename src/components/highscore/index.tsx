import { useEffect } from 'react'
import { Text } from '../text'
import { useHighscore } from '../../hooks/use-highscore'

type Props = {
  score?: number
  align?: Parameters<typeof Text>[0]['align']
}
export const Highscore = ({ score, align }: Props) => {
  const { highscore, storeHighscore } = useHighscore()

  useEffect(() => {
    storeHighscore({ score })
  }, [])

  return <Text align={align}>{highscore}</Text>
}
