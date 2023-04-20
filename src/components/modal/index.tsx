import { StyleSheet, View } from 'react-native'
import { theme } from '../../theme'
import type { ReactNode } from 'react'
import { animated, useTransition } from '@react-spring/native'

type Props = {
  children: ReactNode
  isVisible?: boolean
}

export const Modal = ({ isVisible, children }: Props) => {
  const transitions = useTransition(isVisible, {
    from: {
      backgroundColor: `rgba(0, 0, 0, 0)`,
      scale: 0.5,
      opacity: 0,
    },
    enter: {
      backgroundColor: `rgba(0, 0, 0, 0.5)`,
      scale: 1,
      opacity: 1,
    },
    leave: {
      backgroundColor: `rgba(0, 0, 0, 0)`,
      scale: 0.5,
      opacity: 0,
    },
  })

  return transitions((spring, isVisible) => {
    if (!isVisible) {
      return null
    }

    return (
      <animated.View
        style={[styles.backdrop, { backgroundColor: spring.backgroundColor }]}
      >
        <animated.View
          style={[
            styles.container,
            { transform: [{ scale: spring.scale }], opacity: spring.opacity },
          ]}
        >
          {children}
        </animated.View>
      </animated.View>
    )
  })
}

const styles = StyleSheet.create({
  backdrop: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignContent: 'center',
    flex: 1,
  },
  container: {
    width: '85%',
    backgroundColor: theme.color.light,
    borderRadius: 16,
    alignSelf: 'center',
    borderWidth: 3,
    borderColor: theme.color.darker,
    padding: 24,
  },
})
