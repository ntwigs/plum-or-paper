import {
  View,
  StyleSheet,
  Image,
  Dimensions,
  GestureResponderEvent,
} from 'react-native'
import { useRef } from 'react'
import { Modal } from '../modal'
import { Text } from '../text'
import { Button } from '../button'
import { Highscore } from '../highscore'
import { Background } from '../background'
import {
  useSpring,
  animated,
  useChain,
  useSpringRef,
  useTransition,
} from '@react-spring/native'
import { theme } from '../../theme'

const size = Dimensions.get('screen')

const Startup = () => {
  const loadRef = useSpringRef()
  const spring = useSpring({
    ref: loadRef,
    from: {
      scale: 0,
      translateY: 100,
      opacity: 0,
    },
    to: {
      scale: 1,
      translateY: 0,
      opacity: 1,
    },
  })

  const backgroundSpringRef = useSpringRef()
  const [backgroundSpring] = useSpring(() => ({
    ref: backgroundSpringRef,
    from: { backgroundColor: `${theme.color.light}FF` },
    to: { backgroundColor: `${theme.color.light}00` },
    delay: 2000,
    onStart: () => {
      loadRef.start({ translateY: -160 })
    },
  }))

  useChain([loadRef, backgroundSpringRef])

  return (
    <>
      <Background
        style={{
          pointerEvents: 'none',
          backgroundColor: backgroundSpring.backgroundColor,
          position: 'absolute',
          top: 0,
          left: 0,
          width: size.width,
          height: size.height,
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 1,
          padding: 16,
        }}
      >
        <animated.View
          style={{
            width: '100%',
            opacity: spring.opacity,
            transform: [
              { scale: spring.scale },
              { translateY: spring.translateY },
            ],
          }}
        >
          <Image
            resizeMode="contain"
            source={require('../../assets/icons/plum-or-paper.png')}
            style={{ width: '100%' }}
          />
        </animated.View>
      </Background>
    </>
  )
}

type Props = {
  isVisible: boolean
  onPress: () => void
}
export const StartModal = ({ isVisible, onPress }: Props) => {
  const transition = useTransition(isVisible, {
    from: {
      opacity: 1,
    },
    leave: {
      opacity: 0,
    },
  })

  return (
    <>
      {transition((spring, isVisible) => {
        if (!isVisible) return null

        return (
          <animated.View
            pointerEvents="none"
            style={{
              opacity: spring.opacity,
              position: 'absolute',
              top: 0,
              left: 0,
              width: size.width,
              height: size.height,
              zIndex: 2,
            }}
          >
            <Startup />
          </animated.View>
        )
      })}
      <Modal isVisible={isVisible}>
        <View style={styles.scoreContainer}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              flex: 1,
            }}
          >
            <Text color="darker" align="center">
              BEST
            </Text>
            <Highscore />
          </View>
        </View>
        <Button style={styles.restartButton} onPressIn={() => onPress()}>
          <Text color="darker">START</Text>
        </Button>
      </Modal>
    </>
  )
}

const styles = StyleSheet.create({
  scoreContainer: {
    justifyContent: 'center',
    flexDirection: 'row',
    paddingBottom: 16,
    paddingTop: 8,
  },
  restartButton: {
    position: 'absolute',
    bottom: -32,
    alignSelf: 'center',
  },
})
