import { View, StyleSheet } from 'react-native'
import { Background } from '../../components/background'
import { Text } from '../../components/text'
import { PlayButton } from '../../components/play-button'
import { Confetti } from '../../components/confetti'
import AnimatedLottieView from 'lottie-react-native'
import { useRef } from 'react'
import { useNavigation } from '@react-navigation/native'
import { NavigationProps } from '../../components/navigation'

export const Start = () => {
  const navigation = useNavigation<NavigationProps>()
  const confettiRef = useRef<AnimatedLottieView>(null)

  const onPress = () => {
    confettiRef.current.play()
    navigation.navigate('Game')
  }

  return (
    <>
      <Background>
        <View style={styles.container}>
          <Text color="darker" size="large">
            Plum or Paper
          </Text>
          <PlayButton onPressIn={onPress} />
        </View>
      </Background>
      <Confetti ref={confettiRef} />
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
})
