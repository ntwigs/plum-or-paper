import { Image, type ImageSourcePropType, StyleSheet } from 'react-native'
import { animated, useSpring } from '@react-spring/native'

type Props = {
  type?: 'gameover' | 'start'
}

const imageSourceMap: Record<Props['type'], ImageSourcePropType> = {
  gameover: require('../../assets/icons/game-over.png'),
  start: require('../../assets/icons/plum-or-paper.png'),
}

export const AnimatedHeader = ({ type = 'start' }: Props) => {
  const imageSource = imageSourceMap[type]

  const spring = useSpring({
    from: { scale: 0.5, opacity: 0, y: 100 },
    to: { scale: 1.2, opacity: 1, y: 0 },
  })

  return (
    <animated.View
      pointerEvents="none"
      style={[
        styles.container,
        {
          opacity: spring.opacity,
          transform: [{ scale: spring.scale }, { translateY: spring.y }],
        },
      ]}
    >
      <Image style={styles.image} resizeMode="contain" source={imageSource} />
    </animated.View>
  )
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    width: '100%',
    zIndex: 2,
    alignSelf: 'center',
    bottom: 0,
  },
  image: {
    width: '100%',
  },
})
