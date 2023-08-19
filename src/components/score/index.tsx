import { useEffect } from 'react'
import { useSpring, animated } from '@react-spring/native'
import { Text } from '../text'

type Props = {
  children: number
}
export const Score = ({ children }: Props) => {
  const [spring, api] = useSpring(() => ({
    from: { scale: 0.8 },
    to: { scale: 1 },
  }))

  useEffect(() => {
    api.start({ reset: true })
  }, [children])

  return (
    <animated.View style={{ transform: [{ scale: spring.scale }] }}>
      <Text color="darker" size="larger">
        {children}
      </Text>
    </animated.View>
  )
}
