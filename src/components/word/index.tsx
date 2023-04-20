import { animated } from '@react-spring/native'
import { Text } from '../text'
import { useSineAnimation } from '../../hooks/use-sine-animation'

type WordProps = {
  children: string
}
export const Word = ({ children }: WordProps) => {
  const { y } = useSineAnimation()

  return (
    <animated.View
      style={{
        transform: [{ translateY: y }],
      }}
    >
      <Text color="darker" size="larger">
        {children}
      </Text>
    </animated.View>
  )
}
