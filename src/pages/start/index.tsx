import { View, StyleSheet, Image } from 'react-native'
import { Background } from '../../components/background'
import { Button } from '../../components/button'
import { Text } from '../../components/text'

const PlayButton = () => {
  return (
    <Button>
      <View style={styles.play}>
        <Image source={require('../../assets/icons/play.png')} />
      </View>
    </Button>
  )
}

export const Start = () => {
  return (
    <Background>
      <View style={styles.container}>
        <Text color="darker">Plum or Paper</Text>
        <PlayButton />
      </View>
    </Background>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  play: {
    width: 88,
    height: 56,
    alignItems: 'center',
    justifyContent: 'center'
  }
})
