import { StyleSheet, Dimensions } from 'react-native'
import { animated, useSpring } from '@react-spring/native'
import { theme } from '../../theme'

const size = Dimensions.get('screen')

export const OverlayFadeIn = () => {
  const spring = useSpring({
    from: { opacity: 1 },
    to: { opacity: 0 },
  })

  return (
    <animated.View pointerEvents="none" style={[styles.container, spring]} />
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.color.light,
    position: 'absolute',
    width: size.width,
    height: size.height,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
