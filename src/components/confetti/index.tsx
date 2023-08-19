import LottieView from 'lottie-react-native'
import { forwardRef, type ForwardedRef } from 'react'
import { View, StyleSheet } from 'react-native'

export const Confetti = forwardRef((_, ref: ForwardedRef<LottieView>) => {
  return (
    <View pointerEvents="none" style={styles.animationContainer}>
      <LottieView
        loop={false}
        style={styles.animation}
        ref={ref}
        source={require('../../assets/animations/confetti.json')}
      />
    </View>
  )
})

const styles = StyleSheet.create({
  animation: {
    width: '100%',
    transform: [{ scale: 1.5 }],
  },
  animationContainer: {
    flex: 1,
    position: 'absolute',
    height: '100%',
    top: 0,
    left: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
