import { animated } from '@react-spring/native'
import { View, StyleSheet, Image, type PressableProps } from 'react-native'
import { Button } from '../button'
import { useSineAnimation } from '../../hooks/use-sine-animation'

export const PlayButton = (props: Omit<PressableProps, 'style'>) => {
  const { y } = useSineAnimation()

  return (
    <animated.View
      style={{
        transform: [{ translateY: y }],
      }}
    >
      <Button {...props}>
        <View style={styles.button}>
          <Image source={require('../../assets/icons/play.png')} />
        </View>
      </Button>
    </animated.View>
  )
}

const styles = StyleSheet.create({
  button: {
    width: 88,
    height: 56,
    alignItems: 'center',
    justifyContent: 'center',
  },
})
