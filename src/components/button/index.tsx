import {
  Pressable,
  type PressableProps,
  StyleSheet,
  type ViewStyle,
  type StyleProp,
  View,
  type GestureResponderEvent,
} from 'react-native'
import { type ReactNode, useCallback } from 'react'
import { theme } from '../../theme'
import { useSpring, animated } from '@react-spring/native'
import { useSound } from '../../hooks/use-sound'

type Props = Omit<PressableProps, 'children'> & {
  style?: StyleProp<ViewStyle>
  children: ReactNode
}
export const Button = ({ children, style = {}, ...props }: Props) => {
  const sound = useSound()
  const [spring, api] = useSpring(() => ({
    from: { y: 0 },
  }))

  const onPressIn = useCallback((e: GestureResponderEvent) => {
    sound.button.replayAsync()
    api.start({ from: { y: 0 }, to: { y: 8 } })

    if (props.onPressIn) {
      props.onPressIn(e)
    }
  }, [])

  const onPressOut = useCallback(() => {
    api.start({ y: 0 })
  }, [])

  return (
    <Pressable
      {...props}
      style={style}
      onPressIn={onPressIn}
      onPressOut={onPressOut}
    >
      <View style={styles.shadow} />
      <animated.View
        style={[styles.container, { transform: [{ translateY: spring.y }] }]}
      >
        <View>{children}</View>
      </animated.View>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.color.dark,
    borderRadius: 16,
    borderWidth: 3,
    borderColor: theme.color.darker,
    paddingHorizontal: 16,
    paddingVertical: 8,
    alignSelf: 'center',
    width: '100%',
  },
  shadow: {
    alignSelf: 'center',
    width: '100%',
    height: '100%',
    position: 'absolute',
    borderRadius: 16,
    backgroundColor: theme.color.darker,
    transform: [{ translateY: 8 }],
  },
})
